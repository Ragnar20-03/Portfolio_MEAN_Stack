import { Component, OnInit, afterNextRender } from '@angular/core';
import { GetPortFolioService } from '../get-port-folio.service';

@Component({
  selector: 'app-portfollio',
  templateUrl: './portfollio.component.html',
  styleUrls: ['./portfollio.component.css']
})
export class PortfollioComponent  implements OnInit{
  port :any = []
  constructor(public pobj : GetPortFolioService)
  {

  }
  length = this.port.length
  ngOnInit()
  {
    this.pobj.getPortFollio().subscribe(
      {
        next : res =>{
          this.port = res;
          console.log(res);
          
        } , 
        error : err => console.log(err) 
      }
    )
  }
}
