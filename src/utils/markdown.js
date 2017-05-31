import marked from 'marked';
import highlight from 'highlight.js';

marked.setOptions({
    //设置代码高亮
    highlight: code => highlight.highlightAuto(code).value
});

/**
 * Markdown -> Html
 * @param {string} markdown 
 */
export function markdown(markdown) {
    return marked(markdown);
}