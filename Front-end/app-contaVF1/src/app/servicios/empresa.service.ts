import { Injectable, OnInit } from '@angular/core';
import {EMPRESAS} from '../datos/empresa';
import {IEmpresas} from '../interfaces/empresas.ts'

@Injectable({
  providedIn: 'root'
})
export class EmpresaService implements OnInit{

  empresas : IEmpresas[];

  ngOnInit() { this.empresas = EMPRESAS};

  constructor() {  }

  getAll(){
     return this.empresas;
  }



}
