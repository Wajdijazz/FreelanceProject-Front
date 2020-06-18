import { Component, OnInit, Input } from '@angular/core';
import { AuthLoginInfo } from '../auth/login-info';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { TokenStorageService } from '../auth/token-storage.service';

@Component({
  selector: 'app-login-superadmin',
  templateUrl: './login-superadmin.component.html',
  styleUrls: ['./login-superadmin.component.scss']
})
export class LoginSuperadminComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  private loginInfo: AuthLoginInfo;
  @Input() emailContact;

  constructor( private router: Router,private authService: AuthService, private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    document.querySelector('body').setAttribute('themebg-pattern', 'theme1');
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getAuthorities();
    }
    this.form.email=this.emailContact;
    this.form.password="test"
  }

  onSubmit(){
    this.loginInfo = new AuthLoginInfo(
      this.form.email,
      this.form.password);
      this.authService.attemptAuth(this.loginInfo).subscribe(
        data => {
          this.tokenStorage.saveToken(data.token);
          this.tokenStorage.saveUsername(data.username);
          this.tokenStorage.saveAuthorities(data.authorities);
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.roles = this.tokenStorage.getAuthorities();
          this.roles.every(role => {
            if (role === "SUPERADMIN") {
              this.router.navigateByUrl('/company-client');
            } else if (role === "ADMIN") {
            this.router.navigateByUrl('/dashboard');
            }
          })
        },
        error => {
          this.errorMessage = error.error.message;
          this.isLoginFailed = true;
        }
      );
      }
  
}
