import { Request, Response } from 'express';
import User from '../models/User';

export const loginUser = async (req: Request, res: Response): Promise<any> => {
  const { email, password } = req.body;

  try {
    console.log("thowheedahmed@gmail.com", email == "thowheedahmed@gmail.com")
    const user = await User.findOne({ email: email });
    console.log("inside login", user)
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    if (user && password == user.password)
      return res.json({ message: "Login Successful.." });
  } catch (error) {
    return res.status(500).json({ message: 'Server error' });
  }
};
