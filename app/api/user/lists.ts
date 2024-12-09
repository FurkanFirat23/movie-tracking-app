import { NextApiRequest, NextApiResponse } from 'next';
import authMiddleware from '../../../utils/authMiddleware';
import User from '../../../models/User';

const getUserLists = async (req: NextApiRequest, res: NextApiResponse) => {
  const userId = req.user.id; // Token'dan alınan userId
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'Kullanıcı bulunamadı' });
    }
    return res.status(200).json({ lists: user.lists });
  } catch (error) {
    return res.status(500).json({ message: 'Sunucu hatası' });
  }
};

export default authMiddleware(getUserLists); // Token doğrulama ile korunan endpoint
