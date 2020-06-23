import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../../../services/department.service';
import { Department } from '../../../models/department';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddDepartmentComponent } from '../../add-models/add-department/add-department.component';
import { NavigationEnd, Router } from '@angular/router';
import { UpdateDepartmentComponent } from '../../update-models/update-department/update-department.component';
import { TokenStorageService } from '../../auth/token-storage.service';
import { UserService } from '../../../services/user.service';
import { userDetail } from '../../../models/user-detail';
import { throwMatDialogContentAlreadyAttachedError } from '@angular/material/dialog';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {
  departments: Department[];
  mySubscription: any;

  constructor(private departmentService : DepartmentService, 
    private modalService: NgbModal,
    private router: Router,
    private tokenStorage: TokenStorageService, private userService : UserService) { 

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
    this.getDepartments();
  }

  getDepartments(){
    let email = this.tokenStorage.getUsername();
    this.userService.getUserInfor(email).subscribe((data : userDetail) => {
        this.departmentService.getAllDepartments(data.companyId).subscribe((data : Department [] )=> {
        this.departments = data;
      })
    });
  }

  addDepartment() {
    this.modalService.open(AddDepartmentComponent);
  }

  deletDepartment(departmentId : Number) {
    this.departmentService.deleteDepartment(departmentId);
    this.router.navigateByUrl('/employees/department');
  }

  updateDepartment(department : Department) {
    const modalRef = this.modalService.open(UpdateDepartmentComponent);
    modalRef.componentInstance.department = department;
  }


}
