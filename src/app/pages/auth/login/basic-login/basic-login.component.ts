import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthLoginInfo } from '../../login-info';
import { AuthService } from '../../auth.service';
import { TokenStorageService } from '../../token-storage.service';

@Component({
  selector: 'app-basic-login',
  templateUrl: './basic-login.component.html',
  styleUrls: ['./basic-login.component.scss']
})
export class BasicLoginComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  private loginInfo: AuthLoginInfo;

  constructor( private router: Router,private authService: AuthService, private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    document.querySelector('body').setAttribute('themebg-pattern', 'theme1');
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getAuthorities();
    }
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
          this.router.navigateByUrl('/dashboard');

        },
        error => {
          this.errorMessage = error.error.message;
          this.isLoginFailed = true;
        }
      );

  }


}
