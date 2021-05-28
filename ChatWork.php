<?php
$dbhost = $_SERVER['start-aws-db-instance.cxulytbuqnlc.ap-northeast-1.rds.amazonaws.com'];
$dbport = $_SERVER['3036'];
$dbname = $_SERVER['aws_chat'];
$charset = 'utf8' ;

$dsn = "mysql:host={$dbhost};port={$dbport};dbname={$dbname};charset={$charset}";
$username = $_SERVER['start_aws_dbuser'];
$password = $_SERVER['start_aws_db_password'];

$pdo = new PDO($dsn, $username, $password);
?>