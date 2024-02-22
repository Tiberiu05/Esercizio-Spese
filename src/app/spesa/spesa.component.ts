import { Component } from '@angular/core';

@Component({
  selector: 'app-spesa',
  templateUrl: './spesa.component.html',
  styleUrls: ['./spesa.component.css']
})

export class SpesaComponent
{

  newSpesa = 0;

  lista : number [] =
  [
    200,
    -200,
  ]


  addNewEntrata()
  {
    if(this.newSpesa)
      this.lista.push(this.newSpesa);
  }

  addNewUscita()
  {
    if(this.newSpesa)
      this.lista.push(this.newSpesa * (-1))
  }

  removeSpesa(index: number)
  {
    this.lista.splice(index, 1);
  }
}
