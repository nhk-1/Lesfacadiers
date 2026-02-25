const http = require('http');
const fs = require('fs/promises');
const path = require('path');
const { URL } = require('url');
const querystring = require('querystring');
const {
  company,
  hero,
  companySection,
  serviceGroups,
  projects,
  testimonials
} = require('./data/site-content');
const { addMessage } = require('./utils/messages-store');

const PORT = process.env.PORT || 3000;
const publicDir = path.join(process.cwd(), 'public');

function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function renderAddress() {
  return company.addressLines.map(line => `<p>${escapeHtml(line)}</p>`).join('');
}

function pageTemplate({ flash = '', errors = [], formData = {} }) {
  const serviceOptions = serviceGroups
    .flatMap(group => group.items)
    .map(
      item =>
        `<option value="${escapeHtml(item.title)}" ${formData.service === item.title ? 'selected' : ''}>${escapeHtml(item.title)}</option>`
    )
    .join('');


  const serviceGroupsHtml = serviceGroups
    .map(
      group => `
      <section id="${escapeHtml(group.id)}" class="service-group reveal">
        <h3>${escapeHtml(group.title)}</h3>
        <div class="cards-grid ${group.items.length === 2 ? 'two-cols' : ''}">
          ${group.items
            .map(
              item => `<article class="service-card"><h4>${escapeHtml(item.title)}</h4><p>${escapeHtml(item.description)}</p></article>`
            )
            .join('')}
        </div>
      </section>`
    )
    .join('');

  return `<!doctype html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="${escapeHtml(company.tagline)}" />
  <title>${escapeHtml(company.name)} | Façades, Toiture, Isolation</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/css/styles.css" />
</head>
<body>
<header class="header">
  <div class="container nav">
    <div class="logo">LFN</div>
    <nav class="top-nav"><a href="#societe">Société</a><a href="#realisations">Réalisations</a><a href="#contact" class="btn-secondary">Devis gratuit</a></nav>
  </div>
</header>

<main id="accueil">
  <section class="hero">
    <div class="container hero-grid">
      <div class="reveal">
        <span class="eyebrow">Entreprise locale • Oise & Val d’Oise</span>
        <h1>${escapeHtml(hero.title)}</h1>
        <p>${escapeHtml(hero.intro)}</p>
        <div class="hero-actions">
          <a href="#contact" class="btn-primary">${escapeHtml(hero.cta)}</a>
          <a href="#realisations" class="btn-link">Voir nos réalisations</a>
        </div>
      </div>
      <div class="hero-cards reveal delay-1">
        <article class="stat-card"><p class="stat-value">${escapeHtml(company.yearsExperience)}</p><p>ans d’expérience</p></article>
        <article class="stat-card"><p class="stat-value">60/95</p><p>Zones d’intervention</p></article>
        <article class="stat-card"><p class="stat-value">Façades</p><p>Nettoyage, ravalement, rejointoiement</p></article>
        <article class="stat-card"><p class="stat-value">Toiture</p><p>Couverture, zinguerie, isolation</p></article>
      </div>
    </div>
  </section>

  <section class="section compact-links-section">
    <div class="container compact-links reveal">
      <a href="#facades">Façades</a>
      <a href="#toiture">Toiture</a>
      <a href="#isolations">Isolations</a>
      <a href="#avis">Avis clients</a>
    </div>
  </section>

  <section id="societe" class="section container">
    <div class="section-title reveal"><span>Société</span><h2>${escapeHtml(companySection.title)}</h2></div>
    <div class="prose reveal delay-1">${companySection.paragraphs.map(text => `<p>${escapeHtml(text)}</p>`).join('')}</div>
  </section>

  <section class="section section-alt">
    <div class="container">
      <div class="section-title reveal"><span>Prestations</span><h2>Tous les contenus de services du site</h2></div>
      ${serviceGroupsHtml}
    </div>
  </section>

  <section id="realisations" class="section container">
    <div class="section-title reveal"><span>Réalisations</span><h2>Un aperçu de nos chantiers</h2></div>
    <div class="projects-grid">
      ${projects
        .map(
          (project, i) => `<article class="project-card reveal delay-${(i % 3) + 1}"><img src="${escapeHtml(project.image)}" alt="${escapeHtml(
            project.title
          )}" loading="lazy" /><div class="project-content"><small>${escapeHtml(project.category)}</small><h3>${escapeHtml(project.title)}</h3><p>${escapeHtml(
            project.description
          )}</p></div></article>`
        )
        .join('')}
    </div>
  </section>

  <section id="avis" class="section section-alt">
    <div class="container">
      <div class="section-title reveal"><span>Avis</span><h2>Ce qu’ils disent de nous</h2></div>
      <div class="cards-grid two-cols">
        ${testimonials
          .map(
            (item, i) => `<article class="service-card reveal delay-${(i % 2) + 1}"><h4>${escapeHtml(item.author)} • ${escapeHtml(
              item.date
            )}</h4><p>“${escapeHtml(item.quote)}”</p></article>`
          )
          .join('')}
      </div>
      <p class="contact-cta">Voir les avis Google MyBusiness pour plus de retours clients.</p>
    </div>
  </section>

  <section id="contact" class="section container">
    <div class="section-title reveal"><span>Contact</span><h2>Demandez votre devis pour vos travaux à Beauvais</h2></div>

    <div class="contact-layout reveal delay-1">
      <aside class="contact-card">
        <h3>${escapeHtml(company.legalName)}</h3>
        ${renderAddress()}
        <p><strong>Tél :</strong> ${escapeHtml(company.phone)}</p>
        <p><strong>Email :</strong> ${escapeHtml(company.email)}</p>
        <p><strong>Zone d’intervention :</strong> ${escapeHtml(company.zones.join(', '))}</p>
      </aside>

      <div>
        ${flash ? `<div class="alert success">${escapeHtml(flash)}</div>` : ''}
        ${errors.length ? `<div class="alert error"><ul>${errors.map(error => `<li>${escapeHtml(error)}</li>`).join('')}</ul></div>` : ''}

        <form action="/contact" method="post" class="contact-form">
          <div class="input-group"><label for="name">Nom *</label><input id="name" name="name" value="${escapeHtml(formData.name || '')}" required /></div>
          <div class="input-group"><label for="email">Email *</label><input id="email" type="email" name="email" value="${escapeHtml(formData.email || '')}" required /></div>
          <div class="input-group"><label for="phone">Téléphone</label><input id="phone" name="phone" value="${escapeHtml(formData.phone || '')}" /></div>
          <div class="input-group"><label for="service">Service souhaité</label><select id="service" name="service"><option value="">Sélectionnez</option>${serviceOptions}</select></div>
          <div class="input-group full-width"><label for="message">Votre message *</label><textarea id="message" name="message" rows="6" required>${escapeHtml(
            formData.message || ''
          )}</textarea></div>
          <button type="submit" class="btn-primary">Envoyer ma demande</button>
        </form>
      </div>
    </div>
  </section>
</main>

<footer class="footer">
  <div class="container footer-grid">
    <div><h4>${escapeHtml(company.name)}</h4><p>${escapeHtml(company.tagline)}</p></div>
    <div><h5>Liens</h5><a href="#societe">Société</a><a href="#facades">Façades</a><a href="#toiture">Toiture</a><a href="#isolations">Isolations</a><a href="#realisations">Réalisations</a><a href="#avis">Avis</a><a href="#contact">Contact</a></div>
    <div><h5>Informations</h5><a href="https://www.les-facadiers-du-nord.fr/sitemap.php" target="_blank" rel="noreferrer">Plan du site</a><a href="https://www.les-facadiers-du-nord.fr/mentions.php" target="_blank" rel="noreferrer">Mentions légales</a></div>
  </div>
  <p class="copyright">© ${new Date().getFullYear()} ${escapeHtml(company.name)}. Tous droits réservés.</p>
</footer>

<script src="/js/main.js"></script>
</body>
</html>`;
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

async function handler(req, res) {
  const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);

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
}

if (require.main === module) {
  const server = http.createServer((req, res) => {
    handler(req, res).catch(error => {
      console.error(error);
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Une erreur est survenue. Merci de réessayer.');
    });
  });

  server.listen(PORT, () => {
    console.log(`Les Façadiers du Nord app running on http://localhost:${PORT}`);
  });
}

module.exports = { handler };
