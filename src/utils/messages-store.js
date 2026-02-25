const fs = require('fs/promises');
const path = require('path');
const crypto = require('crypto');

const dataPath = path.join(process.cwd(), 'data', 'messages.json');

async function ensureStore() {
  try {
    await fs.access(dataPath);
  } catch {
    await fs.mkdir(path.dirname(dataPath), { recursive: true });
    await fs.writeFile(dataPath, '[]', 'utf8');
  }
}

async function addMessage(message) {
  await ensureStore();
  const raw = await fs.readFile(dataPath, 'utf8');
  const messages = JSON.parse(raw);

  messages.push({
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    ...message
  });

  await fs.writeFile(dataPath, JSON.stringify(messages, null, 2), 'utf8');
}

module.exports = { addMessage };
