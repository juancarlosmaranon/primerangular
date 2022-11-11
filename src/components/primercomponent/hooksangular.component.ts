import { Component, OnInit, DoCheck } from "@angular/core";

@Component({
    selector: "hooks-angular",
    templateUrl: "./hooksangular.component.html"
})

export class HooksAngular implements OnInit{
    public mensaje : string;

    constructor(){
        console.log("Entrando en constructor");
        this.mensaje = "Esto es un MENSAJE!!!";
    }

    //IMPLEMENTAMOS EL METODO ngOnInit
    ngOnInit(): void{
        console.log("ngOnInit():Ejecutando este metodo!!!");
    }

    //IMPLEMENTAMOS EL METODO ngDoCheck
    ngDoCheck(): void{
        console.log("Ejecutando ngDoCheck()!!");
    }

    //VAMOS A CREAR UN METODO PERSONALIZADO
    //PARA LLAMARLO CON UN BOTON
    cambiarMensaje():void{
        this.mensaje = "SingleDay!!!";
    }
}