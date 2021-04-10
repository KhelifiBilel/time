import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'time';
  h:string;
  m:string;
  s:string;
  gc:any;

  private afficher_heure(){
   const heure =new Date(Date.now());
   this.h=this.formattime(heure.getHours());
   this.m=this.formattime(heure.getMinutes());
   this.s=this.formattime(heure.getSeconds());
  }

  private mis_ajour(){
    setInterval(()=> {
        this.afficher_heure();}
        ,1000)
    }

  ngOnInit(){
    this.afficher_heure();
    this.gc=this.mis_ajour();
  }  
  ngOnDestroy(){
   clearInterval(this.gc);
  }

  private formattime(n:any)
   {if (n<10) return '0'+n.toString();
    else return n.toString();}
  }

