import { Component } from "@angular/core";
import { NavController, ViewController } from "ionic-angular";
import { ModalController } from "ionic-angular";

@Component({
  selector: "page-modal",
  templateUrl: "modal.html",
  styleUrls: ["modal.scss"]
})
export class ModalPage {
  isError: boolean ;
  imageUrl: any;
  header: any;
  buttonColor: any;

  ngOnInit() {
    this.header = "Success";
    // this.buttonColor = "red";
    this.isError = true;
  }
  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {
     this.isError = false;
    console.log(this.isError)
    if (this.isError) {
      this.imageUrl =
        "https://www.freeiconspng.com/uploads/red-circular-image-error-0.png";
      this.buttonColor = "red";
    } else {
      this.imageUrl =
        "https://img.pngio.com/correct-hover-icon-with-png-and-vector-format-for-free-unlimited-correct-symbol-png-512_512.png";
         this.buttonColor = "green";
    }
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
