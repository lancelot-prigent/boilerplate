import * as express from 'express';

async function bootstrap() {
  const app = express();
  const port = process.env.PORT || 3000;
  const commitRef = process.env.APP_COMMIT_REF || 'N/A';
  const buildDate = process.env.APP_BUILD_DATE || new Date().toISOString();

  app.get('/version', (req, res) => res.json({ commit: commitRef, buildDate }));
  app.get('/', (req, res) => res.send('Hello World!'));

  app.listen(port, () => {
    console.log(`Server is running on localhost:${port}`);
  })
}

bootstrap();

