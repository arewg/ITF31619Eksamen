import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import {PORT} from './constants/index.js';
import 'dotenv/config.js';
import errorMiddleware from './middleware/errors.js';
import connectDatabase from './config/db.js';
import article from './routes/article.js';
import user from './routes/user.js';
import auth from './routes/auth.js';
import category from './routes/category.js';

const app = express();

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3000',
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  }))

  app.use(cookieParser());

  
 
  app.use(`${process.env.BASEURL}/`, auth);
  app.use(`${process.env.BASEURL}/fagartikler/category`, category);
  app.use(`${process.env.BASEURL}/fagartikler`, article);
  app.use(`${process.env.BASEURL}/bruker`, user);
  
  //app.use(`${process.env.BASEURL}/XXXXX`, XXXXX);

  app.use(errorMiddleware);

  connectDatabase();

  const server = app.listen(
      PORT,
      console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
  );

  process.on('unhandledRejection', (err) => {
    console.log(`Error: ${err.message}`);
    server.close(() => {
        process.exit(1);
    });
});