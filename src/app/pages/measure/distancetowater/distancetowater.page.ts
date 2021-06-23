import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";


@Component({
  selector: 'app-distancetowater',
  templateUrl: './distancetowater.page.html',
  styleUrls: ['./distancetowater.page.scss'],
})
export class DistancetowaterPage implements OnInit {
  public distancetowater: number;

  constructor(private storage: Storage) { }

 async ngOnInit() {
 
  await this.storage.create();







  }



  async validate() {
//   await this.storage.create();

this.storage.set('distancetowater', this.distancetowater).then(result => {
console.log('Data is saved');
}).catch(e => {
console.log("error: " + e);
});
  this.storage.get('distancetowater').then((val) => {

    console.log('Distance to water', val);

  });

  }


}
