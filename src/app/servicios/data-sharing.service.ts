import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { menuDia } from '../modelos/Objetos';
@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  menuSource = new BehaviorSubject<menuDia>(new menuDia('',0,'','',''));
  currentmenu = this.menuSource.asObservable();
  constructor() {}
  setMenu(menu: menuDia){
    this.menuSource.next(menu);
  }
}
