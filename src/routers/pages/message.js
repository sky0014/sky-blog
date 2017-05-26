import Router from "koa-better-router";

const router = new Router().loadMethods();

router.get("/message", async(ctx, next) => {
    ctx.body = await ctx.render("template/message.html");
});

export default router;