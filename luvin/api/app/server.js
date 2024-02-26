import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import morgan from 'morgan';
import helmet from 'helmet';

import routes from './routes';
import keys from './config/keys';

require('tls').DEFAULT_MIN_VERSION = 'TLSv1';

const { port, app: appConfigs } = keys;

const app = express();

app.use(helmet());

app.use(cors());

// if (!Constants.envs.test) {
//   app.use(morgan('dev'));
// }
app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride());

app.use('/public', express.static(`${__dirname}/public`));

// Mount API routes
app.use(appConfigs.apiPrefix, routes);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`
    Port: ${port}
    Env: ${app.get('env')}
  `);
});

export default app;
