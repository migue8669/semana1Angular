import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { FireModel } from './fireModel';

@Injectable({
  providedIn: 'root',
})
export class Semana1Service {
  dato: AngularFireList<any>;
  selectedDato: FireModel = new FireModel();

  url =
    'https://api.the-odds-api.com/v3/odds/?sport=soccer_epl&region=uk&apiKey=92a5becf1c2351ce301b2c78716f4c91';
  constructor(
    private http: HttpClient,
    private firebase: AngularFireDatabase
  ) {}

  get(): Observable<any> {
    return this.http.get(this.url);
  }

  getFirebase() {
    this.dato = this.firebase.list('node-c1ffb');
    console.log(this.dato);

    //   console.log(this.imageDetailList);
    return this.dato;
  }

  update(imageDetails: FireModel,i:any) {
    this.dato = this.firebase.list('/node-c1ffb');
    console.log(imageDetails);
    this.dato.update(imageDetails.$key, {
      team: i,
      resultado1: imageDetails.resultado1,
      resultado2: imageDetails.resultado2,

    });
  }
  insert(imageDetails: FireModel, i:any) {
    this.dato = this.firebase.list('/node-c1ffb');
    this.dato.push({
      resultado1: imageDetails.resultado1,
      resultado2: imageDetails.resultado2,

      team: i,

    });
    console.log(this.dato);
  }
}
