import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { ModalPage } from '../modal/modal-page';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls: ['home.scss']
})
export class HomePage {
  
  constructor(public navCtrl: NavController,public modalCtrl: ModalController) {

  }

  openModal(){
    let modal = this.modalCtrl.create(ModalPage);
    modal.present();
  }

}
