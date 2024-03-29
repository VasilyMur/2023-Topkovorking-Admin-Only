const express = require('express');
const next = require('next');
const cors = require('cors')
const Fingerprint = require('express-fingerprint')
const cookieParser = require('cookie-parser');
require('dotenv').config({ path: 'variables.env' });

const PORT = process.env.PORT || 8080;
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

const mongoose = require('mongoose');
const routes = require('./routes/index');
const errorMiddleware = require('./middlewares/error-middleware');

const useDB = process.env.DATABASE;
//   process.env.NODE_ENV === 'development'
//     ? process.env.DATABASE
//     : process.env.DATABASE_PROD;

mongoose.connect(`${useDB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    });

mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
mongoose.connection.on('error', (err) => {
console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
});


nextApp
  .prepare()
  .then(() => {
    const server = express();
    server.set('trust proxy',true); 
    server.use(express.json());
    server.use(cookieParser());
    server.use(Fingerprint({
      parameters:[
          // Defaults
          Fingerprint.useragent,
          Fingerprint.acceptHeaders,
          Fingerprint.geoip,
   
          // Additional parameters
          function(next) {
              // ...do something...
              next(null,{
              'param1':'value1'
              })
          },
          function(next) {
              // ...do something...
              next(null,{
              'param2':'value2'
              })
          },
      ]
  }))
    server.use(cors({
        credentials: true,
        origin: 'https://www.trendymoscow.com'
    }));
    // server.use(cors());


    server.use('/api', routes);
    server.use(errorMiddleware);


    server.get('*', (req, res) => handle(req, res));

    server.listen(PORT, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${PORT}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });

