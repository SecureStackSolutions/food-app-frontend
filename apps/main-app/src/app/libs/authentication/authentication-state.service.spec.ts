import { createServiceFactory, mockProvider, SpectatorService } from '@ngneat/spectator';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Store } from '@ngxs/store';
import { AuthenticationStateService } from './authentication-state.service';

describe('AuthenticationStateService', () => {
   let spectator: SpectatorService<AuthenticationStateService>;

   const angularFireAuthMock = { onAuthStateChanged: jest.fn() };
   const storeMock = { dispatch: jest.fn() };

   const createService = createServiceFactory({
      service: AuthenticationStateService,
      providers: [
         mockProvider(AngularFireAuth, angularFireAuthMock),
         mockProvider(Store, storeMock),
      ],
   });

   beforeEach(() => {
      spectator = createService();
   });

   it('should instantiate service', () => {
      expect(spectator.service).toBeTruthy();
   });

   it('should dispatch SetUserSession action on auth state change', (done) => {
      const session = {};
   });

   //    it('should call next on init$$ when auth state changes', async () => {
   //       const nextSpy = jest.spyOn(spectator.service.init$$, 'next');
   //       const session = {};
   //       spectator.service.authStateListener(session);
   //       expect(nextSpy).toHaveBeenCalledWith(true);
   //    });

   //    it('should return true when init is called', async () => {
   //       const observable = of(true);
   //       jest.spyOn(spectator.service.init$$, 'asObservable').mockReturnValue(observable);
   //       const result = await spectator.service.init();
   //       expect(result).toBe(true);
   //       expect(firstValueFrom).toHaveBeenCalledWith(observable);
   //    });
});
