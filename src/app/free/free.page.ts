import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-free',
  templateUrl: './free.page.html',
  styleUrls: ['./free.page.scss'],
})
export class FreePage implements OnInit {

  data: any[] =[];
  selectedv: any;

  constructor(private http: HttpClient , 
              private router: Router,
              private modalController: ModalController) { } // ModalController 주입

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.http.get<any[]>('http://34.22.111.229/freeView.php').subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        console.error('에러 :' , error);
      }
    );
  }

  showwrite(v: any) {
    this.selectedv = v;
    console.log('이 글의 내용은 :' , v);
  }

  async openModal(v: any) {
    const modal = await this.modalController.create({
      component: ModalPage, // 모달 컨텐츠 페이지 지정
      componentProps: {
        selectedv: v // 모달에 전달할 데이터
      },
      cssClass: 'custom-modal-class'
    });
    return await modal.present();
  }
}
