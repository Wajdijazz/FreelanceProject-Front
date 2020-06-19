import { Component, OnInit } from '@angular/core';
import { Department } from '../../../models/department';
import { DepartmentService } from '../../../services/department.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { TokenStorageService } from '../../auth/token-storage.service';
import { UserService } from '../../../services/user.service';
import { userDetail } from '../../../models/user-detail';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.scss']
})
export class AddDepartmentComponent implements OnInit {

  department : Department = {
    departmentId : null,
    departmentName : '',
    creationDate : null,
    isActive : true,
    companyClientId : null
  }
  constructor(private departmentService : DepartmentService, 
    private modalServiceClose: NgbActiveModal,
    private router : Router, private tokenStorage: TokenStorageService,
     private userService : UserService) { }

  ngOnInit() {
    this.getUserLoggedInfo();
  }

  saveDepartment(data : Department) {
    this.department.departmentName = data.departmentName;
    this.departmentService.addDepartment(this.department);
    this.modalServiceClose.close();
    this.router.navigateByUrl('/employees/department');
  }

  getUserLoggedInfo() {
    let email = this.tokenStorage.getUsername();
      this.userService.getUserInfor(email).subscribe((data : userDetail) => {
        this.department.companyClientId = data.companyId;
    });
  }

}
