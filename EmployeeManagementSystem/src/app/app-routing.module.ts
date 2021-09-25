import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { EmployeeManagersComponent } from './employee-managers/employee-managers.component';
import { EmployeeReporteesComponent } from './employee-reportees/employee-reportees.component';
import { GetEmployeeComponent } from './get-employee/get-employee.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'employees/add', component: AddEmployeeComponent },
  { path: 'employees/edit', component: EditEmployeeComponent },
  { path: 'employees/search', component: GetEmployeeComponent },
  { path: 'employees', component: ListEmployeeComponent },
  { path: 'employees/managers', component: EmployeeManagersComponent },
  { path: 'employees/reportees', component: EmployeeReporteesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
