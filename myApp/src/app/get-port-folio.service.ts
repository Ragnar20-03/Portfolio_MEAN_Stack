import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetPortFolioService {

  private _url = "http://localhost:5100/portfolio"

  constructor(public hobj : HttpClient) {
   }

   getPortFollio()
   {
    return  this.hobj.get(this._url)
   }
}
