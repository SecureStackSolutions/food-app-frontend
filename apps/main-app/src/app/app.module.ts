import { APP_INITIALIZER, isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgxsModule } from '@ngxs/store';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from '../environments/environment';
import { AuthenticationStateService } from './libs/authentication/authentication-state.service';
import { HttpClientModule } from '@angular/common/http';
import { UserState } from './libs/state-management/user/user.state';
import { AtlasModule } from '@atlas';

@NgModule({
   declarations: [AppComponent],
   entryComponents: [],
   imports: [
      // core
      BrowserModule,
      HttpClientModule,
      IonicModule.forRoot({ mode: 'md' }),
      AngularFireModule.initializeApp(environment.firebase),
      AngularFireAuthModule,
      AtlasModule,
      AppRoutingModule,
      NgxsModule.forRoot([UserState], {
         developmentMode: isDevMode(),
      }),
   ],
   providers: [
      { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
      [
         {
            provide: APP_INITIALIZER,
            multi: true,
            deps: [AuthenticationStateService],
            useFactory: (ass: AuthenticationStateService) => () => ass.init(),
         },
      ],
   ],
   bootstrap: [AppComponent],
})
export class AppModule {}
