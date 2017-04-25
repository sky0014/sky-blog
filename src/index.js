import Koa from "koa";
import Router from "koa-router";
import serve from "koa-better-serve";
import ejs from "ejs";

const app = new Koa();
const router = new Router();

router.get("/", (ctx, next) => {
  ejs.renderFile("template/index.html", (err, str) => {
    ctx.body = str;
  });
});

app.use(serve("assets", "/assets/"));
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
console.log("server start at port 3000...");
