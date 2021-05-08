import express from 'express';
import cors from 'cors';
import next from 'next';
import apiRoutes from './routes/apiRoutes';
import bodyParser from 'body-parser';

const dev = process.env.NODE_ENV !== 'production';
const port = dev ? 3031 /* for dev & test */ : 3002 /* for production (must be absolute) */
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(cors())
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use('/api', apiRoutes);

  server.get('*', (req: any, res: any) => {
    return handle(req, res);
  });

  server.listen(port, () => {
    console.log(`Next.js-Express.js server listening at http://localhost:${port}`)
  })
})