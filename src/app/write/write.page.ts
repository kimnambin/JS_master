import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-write',
  templateUrl: './write.page.html',
  styleUrls: ['./write.page.scss'],
})
export class WritePage implements OnInit {

  title : string | undefined;
  content : string | undefined;

  constructor(private http: HttpClient , private router: Router) { }
  
  ngOnInit() {
  }

  //이게 서버에 데이터를 넣어주는 곳
  freeform() {
    const Data = {
      title: this.title,
      content: this.content,
      //time_stamp: new Date().toISOString()
    };

     // 데이터 보내기
     this.http.post('http://34.22.111.229/free.php', Data)
     .subscribe(
       (response) => {
         // Handle the server response if needed
          console.log('Server Response:', response);
       this.router.navigate(['/free']);
       },
       (error) => {
         // Handle error if the request fails
         console.error('Error:', error);
       }
     );

   // 디버깅 내용 추가
   console.log('제목:', this.title);
   console.log('내용:', this.content);
   


   // input form reset
   this.title = '';
   this.content = '';


 }

  }




