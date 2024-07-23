import express from 'express';
import AuthRoutes from './routes/AuthRoutes.js';

const app = express();

app.use(express.json());

app.use(AuthRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Auth service running on port ${process.env.PORT}`);
});
