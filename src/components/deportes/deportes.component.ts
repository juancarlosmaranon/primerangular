import { Component } from "@angular/core";

@Component({
    selector: "app-deportes",
    templateUrl: "./deportes.component.html",
    styleUrls: ["./deportes.component.css"]
})

export class DeportesComponent{
    public sports: Array<string>;
    public numeros: Array<number>;

    constructor(){
        this.numeros = [1,2,3,4,5,6,7,8,9];
        this.sports = ["futbol","basket","squirting","canicas","golf"];
    }
}