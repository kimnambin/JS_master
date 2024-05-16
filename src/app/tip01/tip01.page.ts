import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tip01',
  templateUrl: './tip01.page.html',
  styleUrls: ['./tip01.page.scss'],
})
export class Tip01Page implements OnInit {

  //선택한 아이템 정보를 정의하는 부분
  data: any[] =[];
  selectedItem : any; //선택된 아이템의 세부 정보
  
  constructor(private http: HttpClient , private router: Router) { }

  ngOnInit() {
    this.loadData(); //데이터를 가져오는 부분
  }

  //데이터 리스트
  loadData(){
    this.http.get<any[]>('http://34.22.111.229/lifeTip.php').subscribe(
      (response) =>{
        this.data = response; // 데이터 응답
      },
      (error) => {
        console.log(error);
      }
    
    )
}

//데이터를 보여주는 부분
showDetails(item: any){
  this.selectedItem = item;
  //잘보여주는 지 확인하는 부분
  console.log('저장된 내용은 : ' , item);
}
}