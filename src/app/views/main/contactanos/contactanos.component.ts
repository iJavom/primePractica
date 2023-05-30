import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.css']
})
export class ContactanosComponent implements OnInit {
  formContactanos! : FormGroup;
  
  constructor( private fb : FormBuilder ) { }

  ngOnInit(): void {
    this.formContactanos = this.fb.group({
      nombre : ['',[Validators.required]],
      email : ['',[Validators.required, Validators.email]],
      telefono : ['',[Validators.required]],
      comentario: ['',[Validators.required]]
    })
  }

  enviaComentario(){
    if(this.formContactanos.invalid){
      alert("Valida tu formulario");
    }else{
      alert("Gracias por tus comentarios!");
    }
  }

}
