import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import cartRoutes from './routes/cartRoutes.js';


dotenv.config();

const app = express();

// Middleware
const allowedOrigin = process.env.CLIENT_ORIGIN || '*';
app.use(
  cors({
    origin: allowedOrigin,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
  })
);

// Basic rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: Number(process.env.RATE_LIMIT_MAX || 300),
  standardHeaders: true,
  legacyHeaders: false
});
app.use('/api', limiter);
app.use(express.json());


// Root route
app.get('/', (req, res) => {
  res.send('Hello from MERN backend!');
});

// Healthcheck route
app.get('/healthz', async (req, res) => {
  const mongoState = mongoose.connection.readyState; // 1 connected, 2 connecting, etc.
  const status = {
    status: 'ok',
    uptime: process.uptime(),
    timestamp: Date.now(),
    mongodb: mongoState === 1 ? 'connected' : mongoState === 2 ? 'connecting' : 'disconnected'
  };
  const httpCode = mongoState === 1 ? 200 : 503;
  res.status(httpCode).json(status);
});

// API routes
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/cart', cartRoutes);

// MongoDB connection and server start
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || process.env.MONGODB_URI;

async function startServer() {
  try {
    if (process.env.SKIP_DB_CONNECT === 'true') {
      console.log('Skipping MongoDB connection (SKIP_DB_CONNECT=true)');
    } else {
      await mongoose.connect(MONGO_URI);
      console.log('Connected to MongoDB');
    }
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
}

startServer();

export default app;
