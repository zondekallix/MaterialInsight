import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-menusup',
  templateUrl: 'menusup.component.html',
  styleUrls: ['menusup.component.css']
})



export class MenusupComponent {
  

  activartab( event: any ){
    event.preventDefault();
    /** 
    const boxes = Array.from(
      document.getElementsByClassName('menuPrincipal') as HTMLCollectionOf<HTMLElement>,
    );
    */
    // son los div contenedores de cada componente de pagina en la pagina principal
    const identificadores: string [] = ['inftab1','inftab2','inftab3','inftab4','inftab5'];
    const tabs: string[] = ['tab1','tab2','tab3','tab4','tab5']; 
    const idboton:string = event.target.parentElement.id;//este coge el idboton quien dispare el evento
    console.log(idboton);
    identificadores.forEach ( function(value) {
      const inputdiv = document.getElementById(value) as HTMLInputElement;
      inputdiv.className = 'menuPrincipalClaseOculta';
      console.log(inputdiv);
    })

    identificadores.forEach  ( function(value) 
    {
      const indiceboton:string= idboton.substring(idboton.length-1,idboton.length);
      const indicetab:string= value.substring(value.length-1,value.length);
      if ( indiceboton == indicetab  )
        {
          //const inputdiv = document.getElementById('inftab5') as HTMLInputElement;
          const indice: number = parseInt(indicetab,10);
          const inputdiv = document.getElementById(identificadores[indice-1]) as HTMLInputElement;
          inputdiv.className = 'menuPrincipalClaseVisible';
          console.log(inputdiv);
        }
    }
    )

    

    //const caja = Array.from (document.getElementsByClassName('menuPrincipal')) ;
    //const caja = document.get
    
    //console.log(event.target.parentElement.id);
    //console.log(inputdiv);
    //boxes[0].className='menuPrincipalClaseOculta';
    
  }

}
