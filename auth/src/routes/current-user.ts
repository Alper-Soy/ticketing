import express, { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.get('/api/users/currentuser', (req: Request, res: Response) => {
  // if(!req.session || !req.session.jwt) === if(!req.session?.jwt)
  if (!req.session?.jwt) {
    return res.send({ currentuser: null });
  }

  try {
    const payload = jwt.verify(req.session.jwt, process.env.JWT_KEY!);
    res.send({ currentuser: payload });
  } catch (err) {
    res.send({ currentuser: null });
  }
});

export { router as currentUserRouter };
