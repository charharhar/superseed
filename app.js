const path = require('path');
const chalk = require('chalk');
const dotenv = require('dotenv');
const express = require('express');
const helmet = require('helmet');
const logger = require('morgan');
const compression = require('compression');
const bodyParser = require('body-parser');

/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
dotenv.load({ path: '.env.example' });

/**
 * Controllers (route handlers).
 */
const homeController = require('./controllers/home');

/**
 * Create Express server.
 */
const app = express();

/**
 * Express configuration.
 */
app.use(helmet());
app.use(compression());
app.use(logger('dev'));

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));

/**
 * Primary app routes.
 */
app.get('/', homeController.index);

/**
 * Start Express server.
 */
app.listen(app.get('port'), () => {
  console.log('%s App is running at http://localhost:%d in %s mode', chalk.green('✓'), app.get('port'), app.get('env')); 
  console.log('  Press CTRL-C to stop\n');
});

module.exports = app;
