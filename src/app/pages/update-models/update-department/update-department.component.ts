import { Component, OnInit, Input } from '@angular/core';
import { Department } from '../../../models/department';
import { DepartmentService } from '../../../services/department.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-department',
  templateUrl: './update-department.component.html',
  styleUrls: ['./update-department.component.scss']
})
export class UpdateDepartmentComponent implements OnInit {
  @Input() department;

  constructor(private departementService : DepartmentService, 
    private modalServiceClose: NgbActiveModal,
    private router : Router,) { }

  ngOnInit() {
    
  }

  updateDepartment(department : Department) {
    department.departmentId = this.department.departmentId;
    this.departementService.updateDepartment(department);
    this.modalServiceClose.close();
    this.router.navigateByUrl('/employees/department');
  }

}
