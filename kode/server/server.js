/**
 * Server.js er basert på Marius Wallins' forelesninger gjennom semestert
 */
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import hpp from 'hpp';
import xssClean from 'xss-clean';
import csrf from 'csurf';
import mongoSantitize from 'express-mongo-sanitize';
import rateLimit from 'express-rate-limit';

import {PORT} from './constants/index.js';
import 'dotenv/config.js';


import errorMiddleware from './middleware/errors.js';
import connectDatabase from './config/db.js';
import article from './routes/article.js';
import auth from './routes/auth.js';
import category from './routes/category.js';
import image from './routes/image.js';
import email from './routes/email.js';

const app = express();
// Sikkerhetstiltak er satt opp fra leksjon 13_08
app.use(helmet());
app.use(mongoSantitize());
app.use(xssClean());
app.use(hpp());

const limiter = rateLimit({
    windowMs: 10*60*1000,
    max: 100,
});

app.use(limiter);


if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(`./public`))

app.use(cors({
    origin: 'http://localhost:3000',
    allowedHeaders: ['Content-Type', 'Authorization', 'x-csrf-token'],
    credentials: true,
  }))

  app.use(cookieParser());
  //Hentet fra leksjon 13_08
  //app.use(csrf({cookie: true}));

  app.get(`${process.env.BASEURL}/csrf-token`, (req, res) => {
      res.status(200).json({data: req.csrfToken() });
  });

  app.use(`${process.env.BASEURL}/category`, category);
  app.use(`${process.env.BASEURL}/article`, article);
  app.use(`${process.env.BASEURL}/image`, image);
  app.use(`${process.env.BASEURL}/`, auth);
  app.use(`${process.env.BASEURL}/email`, email);


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