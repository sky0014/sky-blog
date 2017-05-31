import Router from "koa-better-router";

import { Message } from './../../db/mongo';
import { markdown } from './../../utils/markdown';
import { formatDate } from './../../utils/util';

const router = new Router().loadMethods();

router.get("/message", async(ctx, next) => {
    const messages = await Message.find().exec();
    ctx.body = await ctx.render("template/message.html", {
        messages: messages.map(message => {
            const json = message.toJSON();
            //格式化时间
            json.createTime = formatDate(json.createTime, 'YYYY-MM-DD hh:mm:ss');
            //markdown
            json.content = markdown(json.content);
            return json;
        })
    });
});

export default router;