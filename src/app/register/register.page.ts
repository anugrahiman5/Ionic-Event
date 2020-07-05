import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.mode';
import { ToastController, LoadingController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  user = {} as User;

  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private afAuth: AngularFireAuth
  ) { }

  ngOnInit() {
  }

  async register(user: User){
    if(this.formValidation){
      let loader = this.loadingCtrl.create({
        message: "Mohon tunggu..."
      });
      (await loader).present();

      try{
        
      }catch(e){
        this.showToast(e);
      }

      (await loader).dismiss();
    }
  }

  formValidation(){
    if(this.user.email){
      this.showToast("Masukkan email");
      return false;
    }
    
    if(this.user.password){
      this.showToast("Masukkan password");
      return false;
    }

    return true;
  }

  showToast(message: string){
    this.toastCtrl.create({
      message: message,
      duration: 3000
    })
    .then(toastData => toastData.present());
  }

}
