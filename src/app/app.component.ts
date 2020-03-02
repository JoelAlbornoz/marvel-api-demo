import { Component , OnInit } from '@angular/core';
import { HfethService} from './hfeth.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'marvel-api-demo';
  respuesta : any;
  buscador: string;
  constructor(private heroesService : HfethService){
    
  }


  ngOnInit(): void {
    
    
    this.heroesService.getHeroes().subscribe(data => {this.respuesta = {...data}
      this.respuesta = [...this.respuesta.data.results]
      console.log(this.respuesta)
    })
    
  }

  buscar(){
    this.heroesService.buscarHeroes(this.buscador).subscribe(data => {this.respuesta = {...data}
      this.respuesta = [...this.respuesta.data.results]
     console.log(this.respuesta)
    })
     
  }
 
}
