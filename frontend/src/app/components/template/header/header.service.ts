import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HeaderData } from './header-data.model';

@Injectable({
  /**
   * root significa que só vai existir uma instância dessa classe para todas
   * que precisarem dela
   */
  providedIn: 'root'
})
export class HeaderService {

  /**
   * O BehaviorSubject vai detectar sempre que houver mudança no
   * headerData
   */
  private _headerData = new BehaviorSubject<HeaderData>({
    title: 'Início',
    icon: 'home',
    routeUrl: ''
  })

  constructor() { }

  get headerData(): HeaderData {
    return this._headerData.value
  }

  set headerData(headerData: HeaderData) {
    this._headerData.next(headerData)
  }
}
