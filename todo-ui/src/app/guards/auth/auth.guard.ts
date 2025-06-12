import {CanActivateFn} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {inject} from '@angular/core';
import {map} from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const afAuth = inject(AngularFireAuth);
  return  afAuth.authState.pipe(
    map(user => !!user)
  );
};
