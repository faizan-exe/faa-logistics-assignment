import express from 'express';
import shipmentRoutes from './routes/shipmentRoutes.js';

const app = express();
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api', shipmentRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
