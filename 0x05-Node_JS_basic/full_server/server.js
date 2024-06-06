import express from 'express';
import configureRoutes from './routes';

const app = express();
const port = 1245;

configureRoutes(app);

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});

export default app;
module.exports = app;
