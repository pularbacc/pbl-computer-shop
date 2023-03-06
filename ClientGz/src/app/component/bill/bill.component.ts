import { Component, OnInit } from '@angular/core';
import { Bill } from '../../model/bill';
import { BillService } from '../../service/bill.service';
import { BillDialogComponent } from '../bill-dialog/bill-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {

  constructor(
    private router: Router,
    private billService: BillService,
    public dialog: MatDialog
  ) {
    if (localStorage.getItem("JWT") == null) {
      this.router.navigateByUrl('home');
    } else {
      this.getBill();
    }
  }

  ngOnInit(): void {
  }


  bills: Bill[] = [];

  getBill(): void {
    this.billService.getBill()
      .subscribe(bills => {
        this.bills = bills;
      });
  }
  openDialog(obj) {
    this.dialog.open(BillDialogComponent, {
      data: obj
    });
  }

}
