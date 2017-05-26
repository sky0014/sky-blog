import Router from "koa-better-router";
import home from './pages/home';
import message from './pages/message';
import messageApi from './api/message';

const router = new Router();

//---------------------------- 页面 ----------------------------------------
const page = new Router();
page
    .extend(home)
    .extend(message);

//---------------------------- API ----------------------------------------
const api = new Router({ prefix: '/api' });
api
    .extend(messageApi);


export default router.addRoutes(page.getRoutes(), api.getRoutes());