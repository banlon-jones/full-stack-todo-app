import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import Lara from '@primeng/themes/lara';


import { routes } from './app.routes';
import {providePrimeNG} from 'primeng/config';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {authInterceptor} from './interceptor/auth.interceptor';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import {FIREBASE_OPTIONS} from '@angular/fire/compat';
import {environment} from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    providePrimeNG({
      theme: {
        preset: Lara
      }
    }),
    provideHttpClient(
      withInterceptors([authInterceptor])
    ),
    // Firebase
    provideFirebaseApp(()=> initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()),
    { provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig },

  ]
};
