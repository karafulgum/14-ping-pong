import 'whatwg-fetch';
import AppController from './controllers/app';

const el = document.querySelector('.app');
const application = new AppController(el);

application.start();
