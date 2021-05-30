//ポップアップ呼び出し用Wait画像参照変数
var Waiter;

//ポップアップコメントオブジェクト参照変数
var PopUpField;
//ポップアップ表示幅
var PopUpWidth = 400;
//ポップアップ表示高さ
var PopUpHeight = 540;
//表示・消去処理速度
var ViewSpeed = 20;

//待ち受け画像参照変数
var ImgWait;
//キャラクタ画像参照変数
var Img;
//しゃべるキャラクタ画像参照変数
var ImgTalk;
//コメントフィールド参照変数
var CommentField;
//コメント表示スクロール位置保持変数
var CommentScrollTop =10;

//質問フィールド参照変数
var QuestionField;
//送信ボタン参照変数
var SubmitBtn;
//Closeボタン参照変数
var CloseBtn;



//ページロード時の処理
window.onload = function(){

//---------待ち受け画像エリア------

    //画像の表示位置等のパラメータ
    ImgWait = document.createElement('img');
    ImgWait.src = "telephone-operator_female.png";
    ImgWait.style="position:absolute;"
    ImgWait.width = 40;
    ImgWait.height = 40;
    ImgWait.style.top = -2;
    ImgWait.style.left = -1;

//---------待ち受け画像エリア------


    //待ち受け画像の生成と表示
    Waiter = new WaitImg();
    Waiter.View();

    //ポップアップフィールドを生成する
    PopUpField =  new PopUpComment();


//---------キャラクタ画像エリア------

    //画像の表示位置等のパラメータ
    ImgNormal = document.createElement('img');
    ImgNormal.id = "ImgNormalID";
    ImgNormal.src = "telephone-operator_female.png";
    ImgNormal.style="position:absolute;"
    ImgNormal.width = 160;
    ImgNormal.style.top = 90;
    ImgNormal.style.left = 0;

//---------キャラクタ画像エリア------

//---------しゃべるキャラクタ画像エリア------

    //画像の表示位置等のパラメータ
    ImgTalk = document.createElement('img');
    ImgTalk.src = "telephone-operator_female.png";
    ImgTalk.style="position:absolute;"
    ImgTalk.width = 160;
    ImgTalk.style.top = 90;
    ImgTalk.style.left = 0;

//---------しゃべるキャラクタ画像エリア------




//---------コメントスクロールエリア------

    //コメント表示部のiframeを作成する
    CommentField = document.createElement("iframe");

    //iframeをポップアップコメントに追加
    PopUpField.Div.appendChild(CommentField);

    //iframeの見栄えをセット
    CommentField.setAttribute("frameBorder", "0");
    CommentField.setAttribute("scrolling", "yes");

    // iframeの大きさや表示位置をセット
    CommentField.style.position = "absolute";
    CommentField.style.top = 40;
    CommentField.style.left = 160;
    CommentField.style.width = 230;
    CommentField.style.height = 350;

//---------コメントスクロールエリア------


//---------質問テキストボックス----

    //テキストエリアの生成
    QuestionField = document.createElement('textarea');

    //スクロールバーを非表示
    QuestionField.style.overflow = "hidden";

    QuestionField.style.fontSize = "12";
    QuestionField.style.color = "black";
    QuestionField.style.borderRadius = 5;

    QuestionField.style.position = "absolute";
    QuestionField.style.top = 420;
    QuestionField.style.left = 20;
    QuestionField.style.width = 350;
    QuestionField.style.height = 60;

//---------質問テキストボックス----


//---------送信ボタン--------------

    //送信ボタンの生成
    SubmitBtn = document.createElement('button');

    SubmitBtn.textContent = "送信";
    SubmitBtn.style.fontSize = "12";
    SubmitBtn.style.position = "absolute";
    SubmitBtn.style.top = 500;
    SubmitBtn.style.left = 320;

    //マウスイベントハンドラの追加（送信ボタン）
    SubmitBtn.addEventListener('click',SubmitOnClick , false);

//---------送信ボタン--------------


//---------Closeボタン--------------

    //Closeボタンの生成
    CloseBtn = document.createElement('button');

    CloseBtn.textContent = "Close";
    CloseBtn.style.fontSize = "10";
    CloseBtn.style.color = "#00BFFF";
    CloseBtn.style.backgroundColor = "#CCFFFF";
    CloseBtn.style.position = "absolute";
    CloseBtn.style.top = 10;
    CloseBtn.style.left = 340;

    //マウスイベントハンドラの追加（Closeボタン）
    CloseBtn.addEventListener('click',CloseOnClick , false);

//---------Closeボタン--------------

    //POPUPに初期画像を組み込む
    PopUpField.Div.appendChild(ImgNormal);
    var Question = new CommentCls(1,"こんにちは。\n何でも聞いてくださいね。");

};



//リサイズ時に表示位置を変更する
window.onresize = function () {

    timer = setTimeout(function () {

        //待機画像の表示変更
        Waiter.View();
        //ポップアップの表示変更
        PopUpField.View(PopUpHeight - ViewSpeed);

    }, 100);
};

//スクロール時に表示位置を変更する
window.onscroll = function () {

    timer = setTimeout(function () {

        //待機画像の表示変更
        Waiter.View();
        //ポップアップの表示変更
        PopUpField.View(PopUpHeight - ViewSpeed);

    }, 100);
};


//コメントクラスの定義
var CommentCls = function(Mode,Message) {

    //テキストエリアの生成
    Text = document.createElement('textarea');
    Text.style.fontSize = "12";
    Text.style.color = "black";
    Text.style.borderRadius = 5;

    Text.style.position = "absolute";
    Text.style.top = CommentScrollTop;
    Text.style.width = 150;

    //質問か答えかを判別して表示位置と色を変更する（0は質問、1は答え）
    if(Mode == 0){
        Text.style.backgroundColor = "#FFFFCC";
        Text.style.left = 50;
    }
    else{
        Text.style.backgroundColor = "#FFEBCD";
        Text.style.left = 10;
        //しゃべる画像に変更する
        PopUpField.Div.removeChild(ImgNormal) 
        PopUpField.Div.appendChild(ImgTalk);
        //数秒後に画像をもとに戻す
        setTimeout(function(){
            PopUpField.Div.removeChild(ImgTalk);
            PopUpField.Div.appendChild(ImgNormal);
        },2000);
    }

    //表示内容の入力
    Text.innerHTML = Message;

    //Divにテキストエリアを組み込む
    CommentField.contentDocument.body.appendChild(Text);
    //テキストエリアの高さを調整
    Text.style.height = parseInt(Text.scrollHeight) + 5;
    //スクロール位置を変更する
    CommentScrollTop = CommentScrollTop + parseInt(Text.style.height) + 10;
    CommentField.contentDocument.body.scrollTop = CommentScrollTop;
}


//ポップアップクラスの定義
var PopUpComment = function() {

    //Divレイヤの定義
    this.Div = document.createElement('div'); 
    this.Div.style.position = "absolute";

    this.Div.style.width = PopUpWidth;
    this.Div.style.height = 0;
    this.Div.style.backgroundColor = "#CCFFFF";
    this.Div.style.border = "outset 2px #66CCFF";
    this.Div.style.borderRadius = "20px";

    //最初は非表示
    this.Div.style.visibility = "hidden";
    //最前面に表示する
    this.Div.style.zIndex = 1000;

    //ページにPOPUP（Div)を組み込む
    document.body.appendChild(this.Div);

    //画面上への表示
    this.View = function(vHeight){

        //表示位置の取得
        var viewX = document.body.clientWidth - PopUpWidth - 20 + document.body.scrollLeft;
        var viewY = document.body.clientHeight - PopUpHeight -20 + document.body.scrollTop;

        //表示位置の指定
        this.Div.style.left = viewX;
        this.Div.style.height = vHeight + ViewSpeed;
        this.Div.style.top = viewY + PopUpHeight -  (vHeight + ViewSpeed);

        if (parseInt(this.Div.style.height) < PopUpHeight){
            setTimeout(function(){ PopUpField.View((vHeight + ViewSpeed)) },10);
        }
        else{
            //質問エリアにフォーカスをセット
            QuestionField.focus();
        }

    }


    //画面からの消去
    this.Hide= function(vHeight){

        //表示位置の取得
        var viewX = document.body.clientWidth - PopUpWidth - 10;
        var viewY = document.body.clientHeight - PopUpHeight -10;

        //表示位置の指定
        this.Div.style.left = viewX + document.body.scrollLeft;
        this.Div.style.height = vHeight - ViewSpeed;
        this.Div.style.top = viewY + PopUpHeight -  (vHeight - ViewSpeed) + document.body.scrollTop;

        if (parseInt(this.Div.style.height) > ViewSpeed+30){
            setTimeout(function(){ PopUpField.Hide((vHeight - ViewSpeed)) },10);
        }
        else{
            //表示中の画像パターンを消去する
            if(document.getElementById("ImgNormalID")){
                PopUpField.Div.removeChild(ImgNormal);
            }
            else{
                PopUpField.Div.removeChild(ImgTalk);
            }
            //POPUPから要素を消去
            PopUpField.Div.removeChild(SubmitBtn);
            PopUpField.Div.removeChild(CloseBtn);
            PopUpField.Div.removeChild(QuestionField);

            //iframeのサイズを最小化
            CommentField.style.height = "1px";
            //ポップアップを非表示
            PopUpField.Div.style.visibility = "hidden";
        }
    }
}


//待機画像クラスの定義
var WaitImg = function() {

    //Divレイヤの定義
    this.Div = document.createElement('div'); 
    this.Div.style.position = "absolute";

    this.Div.style.width = 40;
    this.Div.style.height = 40;
    this.Div.style.backgroundColor = "#FFEBCD";
    this.Div.style.border = "outset 2px #FF8C00";
    this.Div.style.borderRadius = "20px";

    //POPUPの１つ下の階層に表示する
    this.Div.style.zIndex = 999;

    //ページに待機画像（Div)を組み込む
    document.body.appendChild(this.Div);

    this.Div.appendChild(ImgWait);

    //画面上への表示
    this.View = function(){

        //表示位置の取得
        var viewX = document.body.clientWidth - 80 + document.body.scrollLeft;
        var viewY = document.body.clientHeight - 70 + document.body.scrollTop;

        //表示位置の指定
        this.Div.style.left = viewX;
        this.Div.style.top = viewY;

    }

    //マウスイベントハンドラの追加
    this.Div.onclick = function(){
        //ポップアップの表示
        ViewPopUp();
    }

}


//ポップアップの表示
function ViewPopUp(){

    //POPUPに要素を組み込む
    PopUpField.Div.appendChild(ImgNormal);
    PopUpField.Div.appendChild(SubmitBtn);
    PopUpField.Div.appendChild(CloseBtn);
    PopUpField.Div.appendChild(QuestionField);

    //iframeのサイズを最大化
    CommentField.style.height = "350px";
    //ポップアップを表示
    PopUpField.Div.style.visibility = "visible";
    PopUpField.View(0);
}


//ポップアップの消去
function CloseOnClick(){

    //ポップアップ消去
    PopUpField.Hide(PopUpHeight);
}


//質問の送信
function SubmitOnClick(){

    //質問の送信
    if(QuestionField.value){

        //テキストエリアの改行コードを削除
        var InputText = QuestionField.value
        InputText = InputText.replace( /\n/g , "" ) ;
        //質問の表示
        var Question = new CommentCls(0,InputText);
        //テキストエリアのクリア
        QuestionField.value = "";

        //回答に少しタイムラグを持たせる
        setTimeout(function(){
            //回答の出力
            var Question = new CommentCls(1,"そうですね。");
        },800);
    }

    //質問エリアにフォーカスをセット
    QuestionField.focus();

}
