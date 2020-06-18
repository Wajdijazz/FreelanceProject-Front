import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.scss']
})
export class UpdatePasswordComponent implements OnInit {

  user : any = {
    email : '',
    password : '',
    confirmedPassword : '',
  }
  constructor(private route: ActivatedRoute, private userService : UserService, 
    private router: Router) { }

  ngOnInit() {
    let token =  String(this.route.snapshot.paramMap.get('token'));
    let decode = jwt_decode(token);
    this.user.email = decode.sub;
  }

  updatePassword (user : any){
    console.log(user);
    this.userService.updatePasswordUser(user);
    this.router.navigateByUrl('/login');
  }

}
