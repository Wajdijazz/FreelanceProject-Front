import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router, NavigationEnd } from '@angular/router';
import { TokenStorageService } from '../../auth/token-storage.service';
import { userDetail } from '../../../models/user-detail';
import { AddUserComponent } from '../../add-models/add-user/add-user.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: any;
  mySubscription: any;

  constructor(private userService : UserService, private modalService: NgbModal,
    private router: Router,   private tokenStorage: TokenStorageService) {
      this.router.routeReuseStrategy.shouldReuseRoute = function () {
        return false;
      };
    this.mySubscription = this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
            this.router.navigated = false;
        }
      });
  }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    let email = this.tokenStorage.getUsername();
    this.userService.getUserInfor(email).subscribe((data : userDetail) => {
       this.userService.getUsers(data.companyId).subscribe((data : any )=>{
         this.users = data;
         console.log(this.users);
       });
    });
  }

  addUser() {
    this.modalService.open(AddUserComponent);
  }

  deleteUser(userId : Number) {
    this.userService.deleteUser(userId);
    this.router.navigateByUrl('/user');
  }

}
