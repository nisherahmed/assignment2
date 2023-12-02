import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { UserRoutes } from './modules/user/user.routes';
const app: Application = express();

app.use(express.json());
app.use(cors());

//api/users/create-user

//application routes
app.use('/api/users', UserRoutes);

const getAController = (req: Request, res: Response) => {
  const a = 10;

  res.send({a});
}

app.get('/', getAController);

export default app;
