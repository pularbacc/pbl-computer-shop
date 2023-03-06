import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ComputerManageComponent} from './component/manage/computer-manage/computer-manage.component';
import {ComputerComponent} from './component/computer/computer.component';
import {BillComponent} from './component/bill/bill.component';
import {BillManageComponent} from './component/manage/bill-manage/bill-manage.component';
import {ChatComponent} from './component/chat/chat.component';
import {TestComponent} from './component/test/test.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'manage/computer',component:ComputerManageComponent},
  {path:'manage/bill',component:BillManageComponent},
  {path:'home',component:ComputerComponent},
  {path:'bill',component:BillComponent},
  {path:'chat',component:ChatComponent},
  {path:'test',component:TestComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
