<?php
// 헤더 설정
header("Access-Control-Allow-Origin: *"); // 모든 출처 허용
header("Content-Type: application/json; charset=UTF-8");

// 데이터베이스 연결 정보
$servername = "localhost"; // 서버 주소
$username = "root"; // 데이터베이스 사용자 이름
$password = "1234";
$dbname = "ionic";

// 데이터베이스 연결
$conn = new mysqli($servername, $username, $password, $dbname);

// 연결 확인
if ($conn->connect_error) {
    die(json_encode(array("success" => false, "message" => "데이터베이스 연결 실패")));
}

// 데이터 가져오기
$sql = "SELECT * FROM healthTip";
$result = $conn->query($sql);

// 결과를 배열로 반환
$rows = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        // 이미지 URL 추가
        $rows[] = $row;
    }
}

// JSON 결과로 변환하여 출력
echo json_encode($rows);

// 데이터베이스 연결 종료
$conn->close();
