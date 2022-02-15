import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() text: string;
  @Input() color: string;
  @Output() btnClick = new EventEmitter(); //Aqui cramos un nuevo tipo de evento que luego utilizaremos en los componentes que lo implementen

  constructor() {
    this.text = '';
    this.color = '';
  }

  onClick() {
    this.btnClick.emit(); //Emitimos el evento para que lo reciba quien lo implemente
  }

  ngOnInit(): void {}
}
