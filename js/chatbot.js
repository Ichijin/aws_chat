$('.chatbot').on('click', function(){
    $('.chatbot_ico').hide();
    $('.chatbot_bord').show();

    var obj = document.getElementById('chatbot_talk');
    obj.scrollTop = obj.scrollHeight;
});

$('.btn-gradient-radius').click(function(){
    // 質問
    ques = '<p class="chat-talk mytalk">'
        + '<span class="talk-icon">'
        + '<img src="./guest-icon.png" alt="myicon" width="60" height="60"/>'
        + '</span>'
        + '<span class="talk-content">'+$('#speech').val()+'</span>'
        + '</p>';
    $('.chatbot_talk').append(ques);
    // 回答
    ans = '<p class="chat-talk">'
        + '<span class="talk-icon">'
        + '<img src="./telephone-operator_female.png" alt="tartgeticon" width="60" height="60"/>'
        + '</span>'
        + '<span class="talk-content">ご用をお聞かせください。</span>'
        + '</p>';
    $('.chatbot_talk').append(ans);
});
