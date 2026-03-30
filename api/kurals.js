
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'kurals.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  const { number } = req.query;

  if (number) {
    const kural = data.find(k => k.Number == number);
    return res.json(kural || { error: "Not found" });
  }

  const random = data[Math.floor(Math.random() * data.length)];
  res.json(random);
}


