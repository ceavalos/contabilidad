import { Component, OnInit } from '@angular/core';
import {EmpresaService} from '../../servicios/empresa.service';
import {Empresa} from '../../modelos/empresa'

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {

  private empresas : Empresa[];

  constructor(private empresaService: EmpresaService ) { };


  ngOnInit() {
    this.getAll();
  }

   getAll(): void{
    this.empresas = this.empresaService.getAll();
   }

}
