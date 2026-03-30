const kurals = require('../kurals.json');

export default function handler(req, res) {
  const { number } = req.query;

  // If number provided
  if (number) {
    const kural = kurals.find(k => k.number == number);

    if (!kural) {
      return res.status(404).json({ error: "Kural not found" });
    }

    return res.json(kural);
  }

  // Random kural
  const random = kurals[Math.floor(Math.random() * kurals.length)];
  res.json(random);
}