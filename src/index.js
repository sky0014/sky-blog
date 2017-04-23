import Koa from "koa";
import Router from "koa-router";
import ejs from "ejs";
import fs from "fs";

const app = new Koa();
const router = new Router();

router.get("/", (ctx, next) => {
  ejs.renderFile("template/index.html", (err, str) => {
    ctx.body = str;
  });
});

router.get("/assets/img/:name", (ctx, next) => {
  ctx.type = "image/jpeg";
  ctx.body = fs.createReadStream(`assets/img/${ctx.params.name}`);
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
console.log("server start at port 3000...");
