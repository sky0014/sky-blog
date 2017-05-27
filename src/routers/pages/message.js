import Router from "koa-better-router";
import fecha from 'fecha';

import { Message } from './../../db/mongo';

const router = new Router().loadMethods();

router.get("/message", async(ctx, next) => {
    const messages = await Message.find().exec();
    ctx.body = await ctx.render("template/message.html", {
        messages: messages.map(message => {
            //格式化时间                   
            console.log('message---------', message);
            const obj = {...message, createTime: fecha.format(message.createTime, 'YYYY-MM-DD hh:mm:ss') };
            console.log('obj---------', obj);
            return obj;
        })
    });
});

export default router;