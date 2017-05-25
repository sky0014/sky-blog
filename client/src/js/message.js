$(() => {
    $('.message-leave-submit').click(() => {
        const nick = $('input[name=nick]').val().trim();
        const email = $('input[name=email]').val().trim();
        const content = $('textarea[name=content]').val().trim();

        if (!nick) {
            return alert('请输入昵称');
        }

        if (!email) {
            return alert('请输入Email');
        }

        if (!content) {
            return alert('请输入内容');
        }

        $.post('/api/message', { nick, email, content }, data => {
            console.log(data);
        });
    })
})