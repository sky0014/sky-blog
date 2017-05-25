import Router from "koa-router";
import home from './pages/home';
import message from './pages/message';
import messageApi from './api/message';

const router = new Router();

//---------------------------- 页面 ----------------------------------------
router.use('/', home.routes(), home.allowedMethods());
router.use('/message', message.routes(), message.allowedMethods());

//api
router.use('/api/message', messageApi.routes(), messageApi.allowedMethods());

export default router;