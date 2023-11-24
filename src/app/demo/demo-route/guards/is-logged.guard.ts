import { CanActivateFn } from '@angular/router';
import { FakeAuthServiceService } from '../../demo-service/service/fake-auth-service.service';
import { inject } from '@angular/core';

export const isLoggedGuard: CanActivateFn = (route, state) => {

  const _fakeAuthService: FakeAuthServiceService = inject(FakeAuthServiceService);

  return _fakeAuthService.isconnected;
};
