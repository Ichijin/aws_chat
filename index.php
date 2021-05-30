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
</head>

<body>
    <div class="chatbot">
        <div class="chatbot_ico">
        </div>
        <div class="chatbot_bord" style="display: none;">
            <p class="chat-talk">
                <span class="talk-icon">
                <img src="[ファイルのurl]" alt="tartgeticon" width="XX" height="XX"/>
                </span>
                <span class="talk-content">[トーク内容を記載]</span>
                </p>
                <p class="chat-talk mytalk">
                <span class="talk-icon">
                <img src="[ファイルのurl]" alt="myicon" width="XX" height="XX"/>
                </span>
                <span class="talk-content">[トーク内容を記載]</span>
            </p>
        </div>
	</div>

    <p>
        contentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontentscontents
    </p>
    <br>
</body>
</html>

<script
    src="https://code.jquery.com/jquery-3.6.0.min.js"
    integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
    crossorigin="anonymous"></script>
<script>
    $('.chatbot').on('click', function(){
        $('.chatbot_ico').hide();
        $('.chatbot_bord').show();
    });
</script>