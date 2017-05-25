import ejs from "ejs";
import { toPromise } from './util';

//----------------------- 通用模板渲染 -------------------------------------
export default app => {
    const renderFile = toPromise(ejs.renderFile);
    async function renderCommonPage(...args) {
        const content = await renderFile(...args);
        const html = await renderFile("template/common.html", { content });
        return html;
    }
    app.context.render = renderCommonPage;
}