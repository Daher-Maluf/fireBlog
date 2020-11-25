import { DetailsPostComponent } from './components/posts/details-post/details-post.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerAppComponent } from './components/pages/container-app/container-app.component';
import { BuscarComponent } from './components/pages/buscar/buscar.component';

const routes: Routes = [
  {
    path: '',
    component: ContainerAppComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./components/pages/home/home.module').then(m => m.HomeModule)
      },
      { path: 'post/:id', component: DetailsPostComponent },
      {
        path: 'about',
        loadChildren: () =>
          import('./components/pages/about/about.module').then(
            m => m.AboutModule
          )
      },
      {
        path: 'tags',
        loadChildren: () =>
          import('./components/pages/tags/Tags.module').then(
            m => m.TagsModule
          )
      },

      // {
      //   path: 'buscar/:termino',
      //   loadChildren: () =>
      //     import('./components/pages/buscar/buscar.module').then(
      //       m => m.BuscarModule
      //     )
      // },
      {
        path: 'buscar/:termino',
         component: BuscarComponent
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  },

  {
    path: 'admin',
    loadChildren: () =>
      import('./components/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./components/auth/login/login.module').then(m => m.LoginModule)
  },
  { path: 'forgot-password',
   loadChildren: () => 
      import('./components/auth/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule) 
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
