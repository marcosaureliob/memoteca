import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
    { conteudo: 'Comunicação entre componentes',
    autoria: 'Angular',
    modelo: 'modelo3'},
    { conteudo: 'Informações para o componente filho',
    autoria: 'Componente pai',
    modelo: 'modelo1'},
    { conteudo: 'Morbi leo mi, nonummy eget, tristique non, rhoncus non, leo. Nullam faucibus mi quis velit. Integer in sapien. Fusce tellus odio, dapibus id, fermentum quis, suscipit id, erat. Fusce aliquam vestibulum ipsum. Aliquam erat volutpat. Pellentesque sapien. Cras elementum. Nulla pulvinar eleifend sem. Cum sociis natoque penatibus et magnis dis',
    autoria: 'Lorem',
    modelo: 'modelo1'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
