import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { CartComponent } from '../cart/cart.component';
import { AccountDialogComponent } from '../account/account.component';
import { LogoutComponent } from '../logout/logout.component';
import { AboutUsComponent } from '../../about/about-us/about-us.component';
import { ContactComponent } from '../../about/contact/contact.component';
import { MapComponent } from '../../about/map/map.component';
import { TopSellComponent } from '../top-sell/top-sell.component';
import { AccountService } from '../../service/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    public accountDialog: MatDialog,
    public logoutDialog: MatDialog,
    public Cartdialog: MatDialog,
    public aboutDialog: MatDialog,
    public analysisDialog: MatDialog,
    private accountService: AccountService,
    private router: Router,
  ) {
    this.showAdmin = this.accountService.checkAdmin();
  }

  showAdmin: boolean = false;

  openCart() {
    this.Cartdialog.open(CartComponent);
  }

  openAccount(goToLink: string = null) {
    if (localStorage.getItem("JWT") != null) {
      const logoutRef = this.logoutDialog.open(LogoutComponent);
      logoutRef.afterClosed().subscribe(
        result => {
          if (result != undefined) {
            this.showAdmin = this.accountService.checkAdmin();
            if (goToLink != null) {
              this.router.navigateByUrl(goToLink);
            } else {
              this.router.navigateByUrl('home');
            }
          }
        }
      )
    }
    else {
      const accountRef = this.accountDialog.open(AccountDialogComponent);
      accountRef.afterClosed().subscribe(
        result => {
          if (result != undefined) {
            this.showAdmin = this.accountService.checkAdmin();
            if (this.showAdmin) {
              goToLink = 'manage/computer';
            }
            if (goToLink != null) {
              this.router.navigateByUrl(goToLink);
            } else {
              this.router.navigateByUrl('home');
            }
          }
        }
      )
    }
  }

  openBill() {
    if (localStorage.getItem("JWT") != null) {
      this.router.navigateByUrl('/bill');
    }
    else {
      this.openAccount('bill');
    }
  }

  openChat(){
    if (localStorage.getItem("JWT") != null) {
      this.router.navigateByUrl('/chat');
    }
    else {
      this.openAccount('chat');
    }
  }

  openAnalysis() {
    this.analysisDialog.open(TopSellComponent);
  }

  openAboutUs() {
    this.aboutDialog.open(AboutUsComponent);
  }
  openContact() {
    this.aboutDialog.open(ContactComponent);
  }
  openMap() {
    this.aboutDialog.open(MapComponent);
  }

}
