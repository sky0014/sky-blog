import Router from "koa-router";

import { Message } from './../../db/mongo';

const router = new Router();

router.get('/', async(ctx, nect) => {
    try {
        ctx.body = await Message.find().exec();
    } catch (e) {
        ctx.body = e.message;
    }
});

router.post('/', async(ctx, nect) => {
    const { nick, email, content } = ctx.body;
    const msg = new Message({ nick, email, content });
    try {
        ctx.body = await msg.save();
    } catch (e) {
        ctx.body = e.message;
    }
});

export default router;