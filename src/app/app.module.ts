import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewPostComponent } from './components/posts/new-post/new-post.component';
import { NewPostModule } from './components/posts/new-post/new-post.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { QuillModule } from 'ngx-quill';
import {NgxPaginationModule} from 'ngx-pagination';

/* Firebase */
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule} from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';


import { environment } from '../environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { ContainerAppComponent } from './components/pages/container-app/container-app.component';
import { ModalComponent } from './shared/components/modal/modal.component';
import { EditPostComponent } from './components/posts/edit-post/edit-post.component';
import { EditPostModule } from './components/posts/edit-post/edit-post.module';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { ShareButtonsConfig} from 'ngx-sharebuttons';

import { DetailsPostComponent } from './components/posts/details-post/details-post.component';
import { HomeModule } from './components/pages/home/home.module';
import { BuscarModule } from './components/pages/buscar/buscar.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ScullyLibModule } from '@scullyio/ng-lib';

const customConfig: ShareButtonsConfig = {
  include: ['facebook','whatsapp','twitter','reddit','copy' ],
  theme: 'circles-dark',
  debug: true,
  gaTracking: true,
  twitterAccount: 'twitterUsername',
  autoSetMeta: false,
}



@NgModule({
  declarations: [
    AppComponent,
    NewPostComponent,
    ToolbarComponent,
    ContainerAppComponent,
    ModalComponent,
    EditPostComponent,
    DetailsPostComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    AppRoutingModule,
    NewPostModule,
    BuscarModule,
    HomeModule,
    ShareButtonsModule.withConfig(customConfig),
    ShareIconsModule,
    MaterialModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    EditPostModule,
    FlexLayoutModule,
    QuillModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    ScullyLibModule,
    

  ],
  providers: [
    // { provide: StorageBucket, useValue: 'gs://ngblog-149c9.appspot.com' }
  ],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent]
})
export class AppModule { }
