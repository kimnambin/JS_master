<?php
//헤더설정
header("Access-Control-Allow-Origin: *"); //모든 출처 허용
header("Content-Type: application/json; charset=UTF-8");

//데이터베이스 연결정보
$servername = "localhost"; //서버 주소
$username = "root"; //데이터베이스 사용자 이름
$password = "1234";
$dbname = "ionic";

// 데이터베이스 연결
$conn = new mysqli($servername, $username, $password, $dbname);

// 연결 확인
if ($conn->connect_error) {
    die(json_encode(array("success" => false, "message" => "데이터베이스 연결 실패")));
}

//데이터 가져오기
$sql = "SELECT * FROM free";
$result  = $conn->query($sql);

//결과를 배열로 반환
$rows = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $rows[] = $row;
    }
}

// 배열을 역순으로 정렬(최근 게시글이 위로 가기 위함)
$rows = array_reverse($rows);
// // //20개씩 잘라서 반환해보기
// $rows = array();
// if ($result->num_rows > 0) {
//     $cnt = 0;
//     while ($row = $result->fetch_assoc()) {
//         $rows[] = $row;
//         $cnt++;
//         if ($cnt >= 20) {
//             break;
//         }
//     }
// }

//json 결과로 변환하여 출력
header('Content-Type: application/json');
echo json_encode($rows);

// 데이터베이스 연결 종료
$conn->close();
