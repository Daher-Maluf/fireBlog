import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  public appName = 'ngBlog';
  @Input() deviceXs: boolean;
  constructor(public authSvc: AuthService,
              private router: Router) {}

  ngOnInit() {}

  buscarPost(termino:string){
    termino = termino.trim();

    if(termino.length === 0){
      return;
    }

    this.router.navigate(['/buscar', termino])
  }

  onLogout(): void {
    this.authSvc.logout();
  }
}
