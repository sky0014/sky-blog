import Koa from "koa";
import serve from "koa-better-serve";

import setRender from './utils/templateRender';
import router from './routers';

const app = new Koa();

//设置模板渲染方法
setRender(app);

//静态资源
app.use(serve("assets", "/assets/"));
//路由
app.use(router.middleware());

app.listen(3000);
console.log("server start at port 3000...");