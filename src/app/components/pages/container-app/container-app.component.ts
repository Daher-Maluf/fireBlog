import { Component, OnInit, OnDestroy } from '@angular/core';
import {MediaObserver, MediaChange} from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-container-app',
  templateUrl: './container-app.component.html',
  styleUrls: ['./container-app.component.scss']
})
export class ContainerAppComponent implements OnInit, OnDestroy {
   mediaSub: Subscription;
   deviceXs: boolean;
   deviceSm: boolean;
   deviceMd: boolean;
   deviceLg: boolean;

  constructor(public mediaObserver: MediaObserver) { }

  ngOnInit() {
    // tslint:disable-next-line: deprecation
    this.mediaSub = this.mediaObserver.media$.subscribe((result: MediaChange) => {
      console.log(result.mqAlias);
      this.deviceXs = result.mqAlias === 'xs' ? true : false;
      this.deviceSm = result.mqAlias === 'sm' ? true : false;
      this.deviceMd = result.mqAlias === 'md' ? true : false;
      this.deviceLg = result.mqAlias === 'lg' ? true : false;

    });
  }
  ngOnDestroy(){
    this.mediaSub.unsubscribe();
  }

}
