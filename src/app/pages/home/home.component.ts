import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  cantidad = signal<number>(1);
  cantidad1 = signal<number>(1);
  total = computed(() => {  
    return (this.cantidad() + 1)})

  constructor() {
  
  }
  ngOnDestroy(): void {    
  }


  ngOnInit(): void {

  }


  incrementa() {
    this.cantidad.update((e) => e + 1);
  }
  incrementa1() {
    this.cantidad1.update((e) => e + 1);
  }

}
