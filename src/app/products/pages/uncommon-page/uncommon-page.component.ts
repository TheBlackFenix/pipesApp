import { Component } from '@angular/core';
import { interval } from 'rxjs';


@Component({
  selector: 'products-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  //i18n Select
  public name: string = 'Daniel'
  public gender : 'male' | 'female' = 'male'
  public invitationMap ={
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient():void{
    this.name = 'Evangeline',
    this.gender = 'female'
  }

  //i18Plural
  public clients : string[] = ['Daniel','Juan','Armando','Karen','Jose','Mario']
  public clientsMap = {
    '=0': 'No tenemos ningún cliente esperando.',
    '=1': 'Tenemos un cliente en espera.',
    'other': `Tenemos # clientes esperando`
  }
  atenderCliente(){
    this.clients.shift();
  }

  //KeyValue Pipe

  public person =  {
    name : 'Daniel',
    age : 31,
    profession : 'Software Developer'
  }

  //Async Pipe

  public myObservableTime = interval(500)
}
