import { Component, OnInit } from '@angular/core';
import { Employee } from '../Employee';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  firstName: string = '';
  lastName: string = '';
  managerId: number = 0;
  employeeList: any = {};
  isrecordAdded: boolean = false;

  constructor(private employeeService: EmployeeServiceService) {}

  ngOnInit(): void {
    this.isrecordAdded = false;
    this.getAllEmployeeList();
  }
  getAllEmployeeList() {
    let str = '';
    let jsonArray = [];
    this.employeeService.getAllEmployees().subscribe((resp) => {
      str = JSON.stringify(resp);
      jsonArray = JSON.parse(str);
      this.employeeList = jsonArray;
      console.log(jsonArray);
    });
  }

  addEmployee() {
    this.isrecordAdded = false;
    let payload = {
      firstname: this.firstName,
      lastname: this.lastName,
      managerId: this.managerId,
    };
    console.log(this.managerId);
    console.log(payload);
    this.employeeService.addEmployee(payload).subscribe((resp) => {
      if (resp != undefined) this.isrecordAdded = true;
      this.clear();
    });
  }
  clear() {
    this.firstName = '';
    this.lastName = '';
    this.managerId = 0;
    this.getAllEmployeeList();
  }

  resetFlag() {
    this.isrecordAdded = false;
  }
}
