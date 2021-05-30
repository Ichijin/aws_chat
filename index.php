<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>チャットボットサンプル</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="ここにサイト説明を入れます">
    <meta name="keywords" content="キーワード１,キーワード２,キーワード３,キーワード４,キーワード５">
    <link rel="stylesheet" href="css/chatbot.css">
    <script
    src="https://code.jquery.com/jquery-3.6.0.min.js"
    integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
    crossorigin="anonymous"></script>
</head>

<body>
    <div class="chatbot">
        <div class="chatbot_ico" id="chatbot_ico">
        </div>
        <div class="chatbot_bord" id="chatbot_bord" style="display: none;">
            <div class="chatbot_talk" id="chatbot_talk">
                <p class="chat-talk">
                    <span class="talk-icon">
                        <img src="./telephone-operator_female.png" alt="tartgeticon" width="60" height="60"/>
                    </span>
                    <span class="talk-content">ご用をお聞かせください。</span>
                </p>
            </div>
            <div class="cp_box_container">
                <div class="cp_box">
                    <div class="cp_iptxt cp_item">
                        <input type="text" placeholder="お聞きになりたいこと" id="speech">
                        <i class="fa fa-user fa-lg fa-fw" aria-hidden="true"></i>
                    </div>
                    <div class="cp_item">
                        <input type="submit" value="送信" class="btn-gradient-orange" />
                    </div>
                    <div class="cp_item">
                        <input type="submit" value="閉じる" class="btn-gradation-gray" />
                    </div>
                </div>
            </div>
        </div>
	</div>

<?php for($i = 0; $i < 50; $i++): ?>
    <p>
        contentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontents
    </p>
    <br>
<?php endfor; ?>

</body>
</html>

<script>
$('.chatbot').on('click', function(){
    $('.chatbot_ico').hide();
    $('#chatbot_bord').show();
});

$('.btn-gradient-orange').click(function(){
    if(!$('#speech').val()) return false;

    // 質問
    ques = '<p class="chat-talk mytalk">'
        + '<span class="talk-icon">'
        + '<img src="./guest-icon.png" alt="myicon" width="60" height="60"/>'
        + '</span>'
        + '<span class="talk-content">'+$('#speech').val()+'</span>'
        + '</p>';
    $('#speech').val('');
    $('.chatbot_talk').append(ques);

    // 回答
    ans = '<p class="chat-talk">'
        + '<span class="talk-icon">'
        + '<img src="./telephone-operator_female.png" alt="tartgeticon" width="60" height="60"/>'
        + '</span>'
        + '<span class="talk-content">どのようなことでしょうか。</span>'
        + '</p>';
    $('.chatbot_talk').append(ans);

    var obj = document.getElementById('chatbot_talk');
    obj.scrollTop = obj.scrollHeight;
});

$('.btn-gradation-gray').click(function(){
    $('#chatbot_bord').hide();
    $('.chatbot_ico').show();
});
</script>