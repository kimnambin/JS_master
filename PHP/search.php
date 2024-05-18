<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: DELETE, POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Max-Age: 3600");


$servername = "localhost";
$username = "root";
$password = "1234";
$dbname = "ionic";

// 연결 설정
$conn = new mysqli($servername, $username, $password, $dbname);

// 연결 확인
if ($conn->connect_error) {
    die(json_encode(array("success" => false, "message" => "데이터베이스 연결 실패")));
}

// 클라이언트에서 받은 검색어
$data = json_decode(file_get_contents('php://input'), true);
$query = $data['query']; //검색하는 내용
$likeQuery = "%" . $query . "%";

// SQL 쿼리
$sql = "
    SELECT * FROM free WHERE content LIKE ? 
    UNION
    SELECT * FROM lifeTip WHERE content LIKE ?
";

// 쿼리 실행
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $likeQuery, $likeQuery);
$stmt->execute();
$result = $stmt->get_result();

// 결과를 배열로 변환
$results = [];
while ($row = $result->fetch_assoc()) {
    $results[] = $row;
}

// 결과 반환
header('Content-Type: application/json');
echo json_encode($results);

$stmt->close();
$conn->close();
