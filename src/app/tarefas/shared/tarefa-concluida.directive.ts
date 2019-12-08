import { Directive, Input, ElementRef, OnInit } from '@angular/core';

/* Diretiva gera um atributo enquanto o componente gera uma tag hmtl */

@Directive({
  selector: '[tarefaConcluida]'
})

export class TarefaConcluidaDirective implements OnInit{
  @Input() tarefaConcluida: boolean;
  @Input() campoData: string;
  constructor(private el: ElementRef) { }

  ngOnInit(){

    if(this.tarefaConcluida){
      this.el.nativeElement.style.textDecoration = "line-through"
    }
    
    /*


    TENTEI INVERTER AS DATAS AQUI MAS NÃO FUNCIONOU :(

    if(this.campoData !== ''){
      let data = this.campoData.split('-');
      let dataInvertida = data[2] +'/'+data[1]+'/'+data[0];
      this.campoData = dataInvertida;
    } */

  }

}
