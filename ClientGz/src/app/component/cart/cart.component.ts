import { Component, OnInit } from '@angular/core';
import { Item } from '../../model/item';
import { CartService } from '../../service/cart.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { BillInfoComponent } from '../bill-info/bill-info.component';
import { Bill } from '../../model/bill';
import { BillService } from '../../service/bill.service';
import { AccountDialogComponent } from '../account/account.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(
    private cartService: CartService,
    private billService: BillService,
    public dialogRef: MatDialogRef<CartComponent>,
    public billDialog: MatDialog,
    public accountDialog: MatDialog,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.getItem();
  }

  openSnackBar(mess: string) {
    this._snackBar.open(mess, "ok", { duration: 2000 });
  }

  items: Item[] = [];
  total: number = 0;
  getItem(): void {
    this.items = this.cartService.getCart();

    let total = 0;
    if (this.items != null) {
      this.items.forEach(function (item) {
        total = total + item.computer.price * item.quanLiTy;
      })
    }
    this.total = total;
  }

  openBillInfo() {
    if (localStorage.getItem("JWT") != null) {
      if (this.items.length != 0) {
        let bill;
        const dialogRef = this.billDialog.open(BillInfoComponent, { data: bill });
        dialogRef.afterClosed().subscribe(result => {
          if (result != undefined) {
            this.addBill(result.data);
          }
        });
      }
    }
    else {
      const accountRef = this.accountDialog.open(AccountDialogComponent);
      accountRef.afterClosed().subscribe(
        result => {
          if (result != undefined)
            if (result.check == true)
              this.openBillInfo();
        }
      );
    }
  }
  addBill(bill: Bill) {
    bill.totalPrice = this.total;

    this.billService.addBill(bill).subscribe(result => {
      localStorage.removeItem("cart");
    });
    this.openSnackBar("Oder success, thank you");
    this.dialogRef.close();
  }

  updateCart(idCom: number, plus: boolean, remove: boolean) {
    let i = 0;
    this.items.forEach(function (item, index) {
      if (item.computer.id == idCom) {
        i = index;
      }
    })
    if (remove != true) {
      if (plus) {
        this.items[i].quanLiTy++;
        this.total = this.total + this.items[i].computer.price;
      }
      else {
        if (this.items[i].quanLiTy > 0) {
          this.items[i].quanLiTy--;
          this.total = this.total - this.items[i].computer.price;
        }
      }
    }
    else {
      this.total = this.total - this.items[i].computer.price * this.items[i].quanLiTy;
      this.items = this.items.filter(h => h.computer.id !== idCom);
    }

    this.cartService.updateCart(idCom, plus, remove);
  }
}
