import {Component} from '@angular/core';

@Component({
    selector: 'my-component',
    template: `
        Hi, I am <span [style.color]="inputElement.value ==='yes' ? 'red' : ''">{{name}}</span> and this is my first Angular2 Component!
         <span [class.is-awesome]="inputElement.value === 'yes'">It's so awesome !!!</span>
         <br><br>
         Is it awesome?
         <input type="text" #inputElement (keyup)="0">
         <br><br>
         <button [disabled]="inputElement.value !=='yes'">Only enabled if 'yes' was entered</button>
    `,
    styleUrls: ['src/css/mycomponent.css']
})

export class MyComponentComponent {
    name = "Ken";
}