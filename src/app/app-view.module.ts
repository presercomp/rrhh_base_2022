import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PersonalAddComponent } from "./personal/personal-add/personal-add.component";
import { PersonalAdminComponent } from "./personal/personal-admin/personal-admin.component";
import { PersonalEditComponent } from "./personal/personal-edit/personal-edit.component";
import { DashboardComponent } from "./dashboard/dashboard/dashboard.component";
import { FormsModule } from "@angular/forms";

const rutas:Routes = [
    { path: '', component: DashboardComponent},
    { path: 'personal', component: PersonalAdminComponent},
    { path: 'personal/add', component: PersonalAddComponent},
    { path: 'personal/edit', component: PersonalEditComponent}
  ]
  
@NgModule({
    declarations: [
      DashboardComponent,
      PersonalAdminComponent,
      PersonalAddComponent,
      PersonalEditComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(rutas),
    ],
    exports:[RouterModule]
})
export class AppViewModule { }
