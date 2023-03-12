import { AuthenticationGuardService } from './authentication.guard';
import { createServiceFactory, mockProvider, SpectatorService } from '@ngneat/spectator/jest';
import { Router, UrlTree } from '@angular/router';
import { of } from 'rxjs';

describe('AuthenticationGuardService', () => {
   let spectator: SpectatorService<AuthenticationGuardService>;

   const mockRouter = {
      parseUrl: jest.fn(),
   };

   const createService = createServiceFactory({
      service: AuthenticationGuardService,
      providers: [mockProvider(Router, mockRouter)],
   });

   beforeEach(() => (spectator = createService()));

   it('should be created', () => {
      expect(spectator).toBeTruthy();
   });

   it('should return true if user is authenticated', (done) => {
      const mockUserIsAuthenticated$ = of(true);
      jest
         .spyOn(spectator.service, 'userIsAuthenticated$', 'get')
         .mockReturnValueOnce(mockUserIsAuthenticated$);
      spectator.service.canActivate().subscribe((result) => {
         expect(result).toBe(true);
         done();
      });
   });

   it('should navigate to /authenticate if user is not authenticated', (done) => {
      const mockUserIsAuthenticated$ = of(false);
      const mockUrlTree = {} as UrlTree;
      jest
         .spyOn(spectator.service, 'userIsAuthenticated$', 'get')
         .mockReturnValueOnce(mockUserIsAuthenticated$);
      mockRouter.parseUrl.mockReturnValueOnce(mockUrlTree);

      spectator.service.canActivate().subscribe((result) => {
         expect(result).toBe(mockUrlTree);
         expect(mockRouter.parseUrl).toHaveBeenCalledWith('/authenticate');
         done();
      });
   });
});
