import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { createServiceFactory, mockProvider, SpectatorService } from '@ngneat/spectator';
import { FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { AuthenticationService, AuthProvider, authProviderMap } from './authentication.service';

const expectedAuthProviders = [AuthProvider.Facebook, AuthProvider.Google];
const expectedAuthProviderMap = {
   [AuthProvider.Facebook]: new FacebookAuthProvider(),
   [AuthProvider.Google]: new GoogleAuthProvider(),
};

describe('AuthenticationService', () => {
   let spectator: SpectatorService<AuthenticationService>;

   const angularFireAuthMock = {
      signInWithPopup: jest.fn(),
   };
   const httpClientMock = {
      post: jest.fn(),
   };

   const createService = createServiceFactory({
      service: AuthenticationService,
      providers: [
         mockProvider(AngularFireAuth, angularFireAuthMock),
         mockProvider(HttpClient, httpClientMock),
      ],
   });

   beforeEach(() => (spectator = createService()));

   it('should create service', () => {
      expect(spectator).toBeTruthy();
   });

   it('providers should be set', () => {
      for (const authProvider of expectedAuthProviders) {
         const actualAuthProviderMapping = authProviderMap[authProvider];
         expect(actualAuthProviderMapping).toEqual(expectedAuthProviderMap[authProvider]);
      }
   });
});
