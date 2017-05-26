import Router from 'koa-better-router';
import body from 'koa-better-body';

import { Message } from './../../db/mongo';

const router = new Router().loadMethods();

router.get('/message', async(ctx, next) => {
    try {
        ctx.body = await Message.find().exec();
    } catch (e) {
        ctx.body = e.message;
    }
});

router.post('/message', body(), async(ctx, next) => {
    const { nick, email, content } = ctx.request.fields;
    const msg = new Message({ nick, email, content });
    try {
        ctx.body = await msg.save();
    } catch (e) {
        ctx.body = e.message;
    }
});

export default router;