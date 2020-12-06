import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'region',
        loadChildren: () => import('./region/region.module').then(m => m.SenRhApplicationRegionModule),
      },
      {
        path: 'country',
        loadChildren: () => import('./country/country.module').then(m => m.SenRhApplicationCountryModule),
      },
      {
        path: 'location',
        loadChildren: () => import('./location/location.module').then(m => m.SenRhApplicationLocationModule),
      },
      {
        path: 'department',
        loadChildren: () => import('./department/department.module').then(m => m.SenRhApplicationDepartmentModule),
      },
      {
        path: 'task',
        loadChildren: () => import('./task/task.module').then(m => m.SenRhApplicationTaskModule),
      },
      {
        path: 'employee',
        loadChildren: () => import('./employee/employee.module').then(m => m.SenRhApplicationEmployeeModule),
      },
      {
        path: 'job',
        loadChildren: () => import('./job/job.module').then(m => m.SenRhApplicationJobModule),
      },
      {
        path: 'job-history',
        loadChildren: () => import('./job-history/job-history.module').then(m => m.SenRhApplicationJobHistoryModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class SenRhApplicationEntityModule {}
