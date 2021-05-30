<?php
$link = mysqli_connect('start-aws-db-instance.cxulytbuqnlc.ap-northeast-1.rds.amazonaws.com', 'start_aws_dbuser', 'start_aws_db_password', 'aws_chat');

// 接続状況をチェックします
if (mysqli_connect_errno()) {
    die("データベースに接続できません:" . mysqli_connect_error() . "\n");
} else {
    echo "データベースの接続に成功しました。\n";
}

$query = "SELECT * FROM `test`";
// クエリを実行します。
if ($result = mysqli_query($link, $query)) {
    echo "SELECT に成功しました。\n";
    foreach ($result as $row) {
        var_dump($row);
    }
}

// 接続を閉じます
mysqli_close($link);
?>