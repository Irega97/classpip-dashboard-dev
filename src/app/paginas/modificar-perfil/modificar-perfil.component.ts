import { Component, OnInit } from '@angular/core';
import { Profesor, User } from 'src/app/clases';
import {SesionService, PeticionesAPIService, CalculosService, ComServerService} from '../../servicios/index';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modificar-perfil',
  templateUrl: './modificar-perfil.component.html',
  styleUrls: ['./modificar-perfil.component.scss']
})
export class ModificarPerfilComponent implements OnInit {

  // profesor: Profesor;
  // nombre: string;
  // primerApellido: string;
  // segundoApellido: string;
  // username: string;
  // email: string;
  // contrasena: string;
  // contrasenaRepetida: string;
  // cambio = false;
  // cambioPass = false;
  // identificador: string;
  // imagenPerfil: string;
  // user: User;

  constructor(
    private sesion: SesionService,
    private router: Router,
    private peticionesAPI: PeticionesAPIService,
  ) { }

  ngOnInit() {
    // this.profesor = this.sesion.DameProfesor();
    // this.peticionesAPI.getUser(this.profesor.userId).subscribe(res => {
    //   if(res != undefined){
    //     this.user.username = res.username;
    //     this.user.email = res.email;
    //     this.user.password = res.password;
    //   }
    // });

    // if(this.user != undefined && this.profesor != undefined){
    //   this.nombre = this.profesor.Nombre;
    //   this.primerApellido = this.profesor.PrimerApellido;
    //   this.segundoApellido = this.profesor.SegundoApellido;
    //   this.username = this.user.username;
    //   this.email = this.user.email;
    //   this.contrasena = this.user.password;
    //   this.identificador = this.profesor.Identificador;
    //   this.imagenPerfil = this.profesor.ImagenPerfil;
  
    // }
  }

  Volver() {
    // this.router.navigate(['/inicio/' + this.profesor.id]);
  }
  
  ValidaEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }


  // Registrar() {
  //     if (this.cambioPass && (this.contrasena !== this.contrasenaRepetida)) {
  //     Swal.fire('Error', 'No coincide la contraseña con la contraseña repetida', 'error');
  //   } else if (!this.ValidaEmail (this.email)) {
  //     Swal.fire('Error', 'El email no es correcto', 'error');
  //   } else {

  //       Swal.fire({
  //         title: '¿Seguro que quieres modificar los datos?',
  //         icon: 'warning',
  //         showCancelButton: true,
  //         confirmButtonColor: '#3085d6',
  //         cancelButtonColor: '#d33',
  //         confirmButtonText: 'Si, estoy seguro'
  //       }).then((result) => {
  //         if (result.value) {
  //             this.profesor.Nombre = this.nombre;
  //             this.profesor.PrimerApellido = this.primerApellido;
  //             this.profesor.SegundoApellido = this.segundoApellido;
  //             this.profesor.Identificador = this.identificador;
  //             this.profesor.ImagenPerfil = this.imagenPerfil;
  //             console.log ('voy a modificar profesor');
  //             console.log (this.profesor);

  //             this.user.username = this.username;
  //             this.user.email = this.email;
  //             this.user.password = this.password;

  //             this.peticionesAPI.ModificaProfesor (this.profesor)
  //             .subscribe (  (res) => Swal.fire('OK', 'Datos modificados', 'success'),
  //                         (err) => {
  //                           Swal.fire('Error', 'Fallo en la conexion con la base de datos', 'error');
  //           });
  //         }
  //       });
  //   }

  // }

}
