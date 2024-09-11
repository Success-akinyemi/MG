import express from "express";
import { config } from 'dotenv';
config();
import cookieParser from 'cookie-parser';
import cors from 'cors';

// Import routes
import authRoute from './routes/web/auth.routes.js';
import userRoute from './routes/web/user.routes.js';
import airtimeToCashRoute from './routes/web/airtimeToCash.routes.js';
import FundingRoutes from './routes/web/funding.routes.js';

// Docs
import swaggerUI from 'swagger-ui-express';
import YAML from 'yamljs';
const swaggerJSDocs = YAML.load('./api.yaml');

const app = express();

// Swagger documentation
app.use('/api-doc', swaggerUI.serve, swaggerUI.setup(swaggerJSDocs));

// Middlewares
app.use(express.json());
app.use(cookieParser());

// CORS setup to allow requests from any origin
app.use(cors({
    origin: '*',  // Allow requests from any origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));

// Port
const PORT = process.env.PORT || 9000;

// Import DB connection
import './connection/db.js';

// HTTP GET request
app.get('/', (req, res) => {
    res.status(201).json('Home GET Request');
});

// Routes
app.use('/api/web/auth', authRoute);
app.use('/api/web/user', userRoute);
app.use('/api/web/airtimeToCash', airtimeToCashRoute);
app.use('/api/web/funding', FundingRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});
