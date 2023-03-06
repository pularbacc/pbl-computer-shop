import { Component, OnInit } from '@angular/core';
import { Bill } from '../../../model/bill';
import { BillService } from '../../../service/bill.service';
import { BillManageDialogComponent } from '../bill-manage-dialog/bill-manage-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AccountService } from '../../../service/account.service';

@Component({
  selector: 'app-bill-manage',
  templateUrl: './bill-manage.component.html',
  styleUrls: ['./bill-manage.component.css']
})
export class BillManageComponent implements OnInit {

  constructor(
    private router: Router,
    private billService: BillService,
    public dialog: MatDialog,
    private accountService: AccountService
  ) {
    this.showAdmin = this.accountService.checkAdmin();
    if (this.showAdmin != true) {
      this.router.navigateByUrl('home');
    }
  }

  showAdmin: boolean = false;

  ngOnInit(): void {
    this.getBill();
  }

  bills: Bill[] = [];

  getBill(): void {
    this.billService.getBillManage()
      .subscribe(bills => {
        this.bills = bills;
      });
  }
  openDialog(obj) {
    const dialogRef = this.dialog.open(BillManageDialogComponent, {
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result != undefined){
        this.updateBill(result);
      }
    })
  }

  updateBill(bill : Bill):void{
    this.billService.updateBill(bill.id, bill).subscribe();

    let i = 0;
    this.bills.forEach(function (item, index) {
      if (item.id == bill.id) {
        i = index;
      }
    })
    this.bills[i] = bill;
  }

}
