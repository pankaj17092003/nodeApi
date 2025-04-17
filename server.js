import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes.js';  // Import routes

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());  // Middleware to parse JSON
app.use('/api', userRoutes); // Use user routes for the API

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
