import mongoose from 'mongoose';

const DB_URL = 'mongodb://localhost:27017/blog';

//使用原生Promise
mongoose.Promise = global.Promise;
//建立数据库连接
const conn = mongoose.createConnection(DB_URL)
conn.on('error', e => console.log(e));

//---------------------------- Schemas --------------------------------
//留言
const MessageSchema = mongoose.Schema({
    nick: { type: String, required: true }, //昵称
    email: { type: String, required: true }, //邮箱
    content: { type: String, required: true }, //内容
    createTime: { type: Date, default: Date.now } //留言时间
})


//----------------------------- Models ---------------------------------
export const Message = conn.model('Message', MessageSchema);