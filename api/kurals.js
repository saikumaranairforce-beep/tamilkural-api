
const kurals = require('../kurals.json');

export default function handler(req, res) {
  const { number } = req.query;

  // Get by number
  if (number) {
    const kural = kurals.find(k => k.number == number);

    if (!kural) {
      return res.status(404).json({ error: "Kural not found" });
    }

    return res.status(200).json(kural);
  }

  // Random kural
  const random = kurals[Math.floor(Math.random() * kurals.length)];
  return res.status(200).json(random);
}