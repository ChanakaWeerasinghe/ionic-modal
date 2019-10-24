import { Component } from "@angular/core";
import { NavController, ViewController } from "ionic-angular";
import { ModalController } from "ionic-angular";

@Component({
  selector: "page-modal",
  templateUrl: "modal.html",
  styleUrls: ["modal.scss"]
})
export class ModalPage {
  isError: boolean = false;
  imageUrl: any;
  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {
    if (this.isError) {
      this.imageUrl =
        "https://www.freeiconspng.com/uploads/red-circular-image-error-0.png";
    } else {
      this.imageUrl=
        "https://img.pngio.com/correct-hover-icon-with-png-and-vector-format-for-free-unlimited-correct-symbol-png-512_512.png";
    }
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
