import Koa from "koa";
import Router from "koa-router";
import serve from "koa-better-serve";
import ejs from "ejs";

import { toPromise } from './util';

const app = new Koa();
const router = new Router();
const renderFile = toPromise(ejs.renderFile);

async function renderCommonPage(...args) {
    const content = await renderFile(...args);
    const html = await renderFile("template/common.html", { content });
    return html;
}

router.get("/", async(ctx, next) => {
    const html = await renderCommonPage("template/index.html");
    ctx.body = html;
});

router.get("/message", async(ctx, next) => {
    const html = await renderCommonPage("template/message.html");
    ctx.body = html;
});

app.use(serve("assets", "/assets/"));
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
console.log("server start at port 3000...");