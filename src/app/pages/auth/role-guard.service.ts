import { Injectable } from '@angular/core';
import { TokenStorageService } from './token-storage.service';
import { AuthService } from './auth.service';
import { Router, ActivatedRouteSnapshot, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService  implements CanActivate  {
  role: string;

  constructor(private tokenStorage: TokenStorageService, public auth: AuthService, 
    public router: Router) { }
    canActivate(route: ActivatedRouteSnapshot): boolean {
      const expectedRole = route.data.expectedRole;
      const token = this.tokenStorage.getToken();
      const tokenPayload = this.tokenStorage.getAuthorities();
      tokenPayload.forEach(element=>{
        this.role=element
      })
      if (
        !this.auth.isAuthenticated() || 
        this.role !== expectedRole
      ) {
        this.router.navigateByUrl('');
        return false;
      }
      return true;
    }
  }
