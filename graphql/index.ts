import * as express from 'express';

async function bootstrap() {
  const app = express();
  const port = process.env.PORT || 3000;

  app.get('/', (req, res) => res.send('Hello World!'));

  app.listen(port, () => {
    console.log(`Server is running on localhost:${port}`);
  })
}

bootstrap();

