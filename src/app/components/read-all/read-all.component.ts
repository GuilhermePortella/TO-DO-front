import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-read-all',
  templateUrl: './read-all.component.html',
  styleUrls: ['./read-all.component.css']
})
export class ReadAllComponent implements OnInit {

  constructor(private service: TodoService) { }

  listaUsuario: Usuario[] = [];
  nomeUsuario: string;
  cpfUsuario: string;
  rgUsuario: string;

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.service.findAll().subscribe((resposta) => {
      this.listaUsuario = resposta;
    })
  }

  delete(id: any): void {
    this.service.delete(id).subscribe((resp)=>{
      if(resp === null){
        this.service.message('Deletado com sucesso!');
        this.listaUsuario= this.listaUsuario.filter(Usuario => Usuario.idUsuario !== id);
      }
    })
  }

}
