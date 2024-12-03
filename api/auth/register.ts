import bcrypt from "bcryptjs";
import User from "../../models/User";
import connectDB from "../../utils/connectDB";

export default async function handler(req, res) {
  if (req.method === "POST") {
    await connectDB();
    const { username, password, email } = req.body;

    if (!username || !password || !email) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword, email });

    try {
      await newUser.save();
      res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
      res.status(500).json({ error: "User registration failed" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
