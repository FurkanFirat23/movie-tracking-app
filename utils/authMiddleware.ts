import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

const authMiddleware = (handler: Function) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const token = req.headers.authorization?.split(' ')[1]; // Authorization header'dan token alınır

    if (!token) {
      return res.status(401).json({ message: 'Yetkisiz istek' });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET as string); // Token doğrulaması
      req.user = decoded; // Kullanıcı bilgilerini request'e ekleyelim
      return handler(req, res); // İstek başarılıysa, devam et
    } catch (error) {
      return res.status(401).json({ message: 'Geçersiz token' });
    }
  };
};

export default authMiddleware;
