import Koa from "koa";

const app = new Koa();
app.use((ctx, next) => {
  ctx.body = "Hello Koa";
});

app.listen(3000);
console.log("server start at port 3000...");
