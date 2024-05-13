import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

// 모달 내용을 보여주는 Angular 컴포넌트
@Component({
  template: `
    <div id='contents1' class='contents1'>
      <div class="modalcontent">선택된 내용: {{ selectedOption }}</div>
      <button (click)="dismiss()">닫기</button>
    </div>
  `,

  styles: [`
    .modalcontent {
      font-size: 18px;
      color: #333;
      top: 26px;
      height: 387px;
      left: 17px;
      top: -60px;
      position: absoulte;
    }

    /* 버튼 스타일 */
    button {
      background-color: #007bff;
      color: #fff;
      border: none;
      padding: 8px 16px;
      border-radius: 4px;
      cursor: pointer;
    }

    button:hover {
      background-color: #0056b3;
    }
  `]
  
})
export class ModalContentPage implements OnInit {
  selectedOption: string = '';

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss();
  }
}

// Study01Page 컴포넌트
@Component({
  selector: 'app-study01',
  templateUrl: './study01.page.html',
  styleUrls: ['./study01.page.scss'],
})
export class Study01Page implements OnInit {
  selectedOption!: string;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  async openModal() {
    console.log('창이 열림')
    const modal = await this.modalController.create({
      component: ModalContentPage,
      componentProps: {
        selectedOption: this.selectedOption
      }
    });
    return await modal.present();
  }
}
