import Router from "koa-better-router";

const router = new Router().loadMethods();

router.get("/", async(ctx, next) => {
    ctx.body = await ctx.render("template/index.html");
});

export default router;