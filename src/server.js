const http = require('http');
const fs = require('fs/promises');
const path = require('path');
const { URL } = require('url');
const querystring = require('querystring');
const { company, services, projects, stats } = require('./data/site-content');
const { addMessage } = require('./utils/messages-store');

const PORT = process.env.PORT || 3000;
const publicDir = path.join(process.cwd(), 'public');

function escapeHtml(value = '') {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function pageTemplate({ flash = '', errors = [], formData = {} }) {
  const serviceOptions = services
    .map(
      service =>
        `<option value="${escapeHtml(service.title)}" ${formData.service === service.title ? 'selected' : ''}>${escapeHtml(service.title)}</option>`
    )
    .join('');

  return `<!doctype html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Les Façadiers du Nord, spécialistes du ravalement de façade, isolation thermique et finitions dans le Nord." />
  <title>${escapeHtml(company.name)} | Ravalement & Isolation</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/css/styles.css" />
</head>
<body>
<header class="header">
  <div class="container nav">
    <div class="logo">LFN</div>
    <nav>
      <a href="#services">Services</a>
      <a href="#realisations">Réalisations</a>
      <a href="#contact" class="btn-secondary">Devis gratuit</a>
    </nav>
  </div>
</header>
<main>
<section class="hero"><div class="container hero-grid"><div class="reveal">
  <span class="eyebrow">Entreprise locale • Nord</span>
  <h1>Refaites votre façade avec des experts exigeants.</h1>
  <p>${escapeHtml(company.tagline)}. Des interventions durables, esthétiques et garanties pour votre habitation.</p>
  <div class="hero-actions"><a href="#contact" class="btn-primary">Demander un devis</a><a href="#realisations" class="btn-link">Voir nos réalisations</a></div>
</div>
<div class="hero-cards reveal delay-1">${stats
    .map(stat => `<article class="stat-card"><p class="stat-value">${escapeHtml(stat.value)}</p><p>${escapeHtml(stat.label)}</p></article>`)
    .join('')}</div></div></section>

<section id="services" class="section container"><div class="section-title reveal"><span>Nos services</span><h2>Des prestations complètes pour votre façade</h2></div><div class="cards-grid">${services
    .map(
      (service, i) => `<article class="service-card reveal delay-${(i % 3) + 1}"><p class="icon">${escapeHtml(service.icon)}</p><h3>${escapeHtml(
        service.title
      )}</h3><p>${escapeHtml(service.description)}</p></article>`
    )
    .join('')}</div></section>

<section id="realisations" class="section section-alt"><div class="container"><div class="section-title reveal"><span>Nos réalisations</span><h2>Un aperçu de nos derniers chantiers</h2></div><div class="projects-grid">${projects
    .map(
      (project, i) => `<article class="project-card reveal delay-${(i % 3) + 1}"><img src="${escapeHtml(project.image)}" alt="${escapeHtml(
        project.title
      )}" loading="lazy" /><div class="project-content"><small>${escapeHtml(project.category)}</small><h3>${escapeHtml(project.title)}</h3><p>${escapeHtml(
        project.description
      )}</p></div></article>`
    )
    .join('')}</div></div></section>

<section id="contact" class="section container"><div class="section-title reveal"><span>Contact</span><h2>Parlons de votre projet de rénovation</h2></div>
${flash ? `<div class="alert success">${escapeHtml(flash)}</div>` : ''}
${errors.length ? `<div class="alert error"><ul>${errors.map(error => `<li>${escapeHtml(error)}</li>`).join('')}</ul></div>` : ''}
<form action="/contact" method="post" class="contact-form reveal delay-1">
<div class="input-group"><label for="name">Nom *</label><input id="name" name="name" value="${escapeHtml(formData.name || '')}" required /></div>
<div class="input-group"><label for="email">Email *</label><input id="email" type="email" name="email" value="${escapeHtml(formData.email || '')}" required /></div>
<div class="input-group"><label for="phone">Téléphone</label><input id="phone" name="phone" value="${escapeHtml(formData.phone || '')}" /></div>
<div class="input-group"><label for="service">Service souhaité</label><select id="service" name="service"><option value="">Sélectionnez</option>${serviceOptions}</select></div>
<div class="input-group full-width"><label for="message">Votre message *</label><textarea id="message" name="message" rows="6" required>${escapeHtml(
    formData.message || ''
  )}</textarea></div>
<button type="submit" class="btn-primary">Envoyer ma demande</button>
</form></section>
</main>
<footer class="footer"><div class="container footer-grid"><div><h4>${escapeHtml(company.name)}</h4><p>${escapeHtml(company.tagline)}</p></div><div><h5>Contact</h5><p>Tél. ${escapeHtml(
    company.phone
  )}</p><p>${escapeHtml(company.email)}</p><p>${escapeHtml(company.address)}</p></div><div><h5>Navigation</h5><a href="#services">Services</a><a href="#realisations">Réalisations</a><a href="#contact">Contact</a></div></div><p class="copyright">© ${new Date().getFullYear()} ${escapeHtml(
    company.name
  )}. Tous droits réservés.</p></footer>
<script src="/js/main.js"></script>
</body></html>`;
}

async function serveStatic(reqPath, res) {
  const filePath = path.normalize(path.join(publicDir, reqPath));
  if (!filePath.startsWith(publicDir)) {
    res.writeHead(403);
    return res.end('Forbidden');
  }

  try {
    const file = await fs.readFile(filePath);
    const ext = path.extname(filePath).toLowerCase();
    const contentTypes = {
      '.css': 'text/css; charset=utf-8',
      '.js': 'text/javascript; charset=utf-8',
      '.svg': 'image/svg+xml',
      '.png': 'image/png',
      '.jpg': 'image/jpeg',
      '.jpeg': 'image/jpeg',
      '.webp': 'image/webp'
    };

    res.writeHead(200, { 'Content-Type': contentTypes[ext] || 'application/octet-stream' });
    return res.end(file);
  } catch {
    res.writeHead(404);
    return res.end('Not found');
  }
}

function collectBody(req) {
  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', chunk => {
      data += chunk.toString();
      if (data.length > 1e6) {
        req.socket.destroy();
        reject(new Error('Payload too large'));
      }
    });
    req.on('end', () => resolve(querystring.parse(data)));
    req.on('error', reject);
  });
}

function validateForm(formData) {
  const errors = [];
  if (!formData.name) errors.push('Veuillez indiquer votre nom.');
  if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) errors.push('Veuillez saisir un email valide.');
  if (!formData.message || formData.message.length < 20) errors.push('Votre message doit contenir au moins 20 caractères.');
  return errors;
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  if (req.method === 'GET' && (url.pathname === '/' || url.pathname === '/index.html')) {
    const sent = url.searchParams.get('sent') === '1';
    const html = pageTemplate({ flash: sent ? 'Votre message a bien été envoyé. Nous revenons vers vous rapidement.' : '' });
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    return res.end(html);
  }

  if (req.method === 'POST' && url.pathname === '/contact') {
    try {
      const body = await collectBody(req);
      const formData = {
        name: String(body.name || '').trim(),
        email: String(body.email || '').trim(),
        phone: String(body.phone || '').trim(),
        service: String(body.service || '').trim(),
        message: String(body.message || '').trim()
      };

      const errors = validateForm(formData);
      if (errors.length) {
        const html = pageTemplate({ errors, formData });
        res.writeHead(400, { 'Content-Type': 'text/html; charset=utf-8' });
        return res.end(html);
      }

      await addMessage(formData);
      res.writeHead(302, { Location: '/?sent=1#contact' });
      return res.end();
    } catch (error) {
      console.error(error);
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      return res.end('Une erreur est survenue. Merci de réessayer.');
    }
  }

  if (req.method === 'GET' && url.pathname.startsWith('/')) {
    const reqPath = url.pathname === '/' ? '/index.html' : url.pathname;
    if (reqPath.startsWith('/css/') || reqPath.startsWith('/js/') || reqPath.startsWith('/images/')) {
      return serveStatic(reqPath, res);
    }
  }

  res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
  return res.end('Page introuvable');
});

server.listen(PORT, () => {
  console.log(`Les Façadiers du Nord app running on http://localhost:${PORT}`);
});
