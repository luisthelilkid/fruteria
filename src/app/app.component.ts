import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(){
    this.setinicio();
  }

  setinicio(){
    this.inicio = "Somos tu fuente de frutas frescas y saludables. ¡Ven a visitarnos hoy!";
  }



  title = 'fruteria';


  inicio: string = "";
  acercade: string = "Frutería Delicioso es una empresa familiar que ha estado sirviendo a la comunidad durante más de 20 años. Nuestro objetivo es proporcionar productos de la más alta calidad a precios asequibles.";
  productos: string = "Ofrecemos una amplia variedad de frutas frescas, verduras y jugos naturales. Visita nuestra tienda para explorar nuestro catálogo completo.";
  contacto: string = "¡Contáctanos para hacer pedidos o hacer preguntas! Estamos ubicados en:"


  direccion = [{
    calle: "123 Calle de la fruta",
    ciudad: "2004",
    telefono: "656 531 4143",
 }];
}
