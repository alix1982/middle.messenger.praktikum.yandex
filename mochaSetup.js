import {JSDOM} from 'jsdom';
// import avatarDefault from './static/img/avatarDefault.svg'
// Node.js version compatibility fix - using require for ts-node registration
// instead of module.register which may not be available in the current Node version
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
require('ts-node').register({ transpileOnly: true });

const jsdom = new JSDOM('<body></body>');
jsdom.reconfigure({ url: "https://messenger15.netlify.app" })

global.window = jsdom.window;
global.document = jsdom.window.document;
global.Node = jsdom.window.Node;
global.MouseEvent = jsdom.window.MouseEvent;
// global.avatarDefault = avatarDefault
