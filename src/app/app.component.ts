import { Component, OnInit } from '@angular/core';
import { Semana1Service } from './semana1.service';
import { Model } from './modelApi';
import { FormControl, FormGroup } from '@angular/forms';
import { FireModel } from './fireModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular';
  borderStyle = 'solid';
  title = 'semana1';
  list: any = [];
  listaFirebase: FireModel[];
  formTemplate = new FormGroup({
    $key: new FormControl(''),
    team:new FormControl(''),
    resultado1: new FormControl(''),
    resultado2: new FormControl('')

  });
  dataDepor: Model;
  constructor(public service: Semana1Service) {}
  ngOnInit() {
     this.resetForm();

    var i = 0;
    this.service.get().subscribe((data) => {
      this.dataDepor = data;
      console.log(this.dataDepor);
      i = this.dataDepor.data.length;

      for (let index = 0; index < i; index++) {
        console.log(this.dataDepor.data[index].teams);
        this.list.push(index);

      }
    });
    const x = this.service.getFirebase();
    x.snapshotChanges().subscribe((item) => {
      this.listaFirebase = [];
      console.log(item)
      item.forEach((element) => {
        const y = element.payload.toJSON();
        y['$key'] = element.key;
        this.listaFirebase.push(y as FireModel);
        console.log(this.listaFirebase)
      });
    });
  }
  resetForm() {
    this.formTemplate.reset();
    this.formTemplate.setValue({
      $key: null,
      team:'',
      resultado1: '',
      resultado2: ''

    });
  }

  onSubmit(formValue,i) {
    console.log(formValue,i)
    
    console.log(this.dataDepor.data[i].teams)
    if (formValue.$key == null) {
      this.service.insert(formValue,this.dataDepor.data[i].teams);
    } else {
      this.service.update(formValue,this.dataDepor.data[i].teams);
    }

    this.resetForm();
  }

  get formControls() {
    return this.formTemplate['controls'];
  }
}
