<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: DELETE, POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Max-Age: 3600");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    // Preflight request, return only the headers and status 200
    header("HTTP/1.1 200 OK");
    exit;
}

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

// 모든 lifeTip 데이터 가져오기
$sql_select_all = "SELECT * FROM lifeTip";
$result_select_all = $conn->query($sql_select_all);
$all_life_tips = [];
if ($result_select_all->num_rows > 0) {
    while ($row = $result_select_all->fetch_assoc()) {
        $all_life_tips[] = $row;
    }
}

// 클라이언트에서 받은 검색어
$data = json_decode(file_get_contents('php://input'), true);
$query = $data['query']; // 검색하는 내용

// 검색어를 안전하게 처리하기 위해 LIKE 쿼리에 넣기 전에 이스케이프 처리
$escapedQuery = $conn->real_escape_string($query);
$likeQuery = "%" . $escapedQuery . "%";

// SQL 쿼리
$sql_search = "SELECT * FROM lifeTip WHERE content LIKE ?";
$stmt = $conn->prepare($sql_search);
$stmt->bind_param("s", $likeQuery);
$stmt->execute();
$result_search = $stmt->get_result();

// 검색 결과를 배열로 변환
$search_results = [];
while ($row = $result_search->fetch_assoc()) {
    $search_results[] = $row;
}

// 결과 반환 (모든 데이터와 검색 결과를 함께 반환)
$response = array(
    "all_life_tips" => $all_life_tips,
    "search_results" => $search_results
);

header('Content-Type: application/json');
echo json_encode($response);

$stmt->close();
$conn->close();
