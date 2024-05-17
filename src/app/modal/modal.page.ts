import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage {
  @Input() selectedv: any;

  constructor(public modalController: ModalController) {}

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
