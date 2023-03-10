import express from 'express';
import mongoose from 'mongoose';
import { router } from './app/router';

mongoose
  .connect('mongodb://localhost:27017')
  .then(() => {
    console.log('Connected to MongoDB');

    const app = express();
    app.use(express.json());
    app.use(router);

    const PORT = 3001;
    app.listen(PORT, () =>
      console.log(`🚀 Server is running on http://localhost:${PORT}`)
    );
  })
  .catch(() => console.error('Error trying to connect to MongoDB'));


