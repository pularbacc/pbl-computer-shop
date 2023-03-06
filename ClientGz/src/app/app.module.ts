import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSliderModule } from '@angular/material/slider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatChipsModule} from '@angular/material/chips';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSnackBarModule} from '@angular/material/snack-bar'; 
import {MatRadioModule} from '@angular/material/radio'; 
import {MatExpansionModule} from '@angular/material/expansion';
import {MatStepperModule} from '@angular/material/stepper';
//
import {BillInfoComponent} from './component/bill-info/bill-info.component';
import { CartComponent } from './component/cart/cart.component';
import {ComputerDialogComponent} from './component/computer-dialog/computer-dialog.component';
import {ComputerComponent} from './component/computer/computer.component';
import {HomeComponent} from './component/home/home.component';
import {ComputerManageComponent} from './component/manage/computer-manage/computer-manage.component';
import {ComputerManageDialogComponent} from './component/manage/computer-manage-dialog/computer-manage-dialog.component';
import { AccountDialogComponent } from './component/account/account.component';
import { LogoutComponent } from './component/logout/logout.component';
import { BillComponent } from './component/bill/bill.component';
import { AboutUsComponent } from './about/about-us/about-us.component';
import { ContactComponent } from './about/contact/contact.component';
import { MapComponent } from './about/map/map.component';
import { TopSellComponent } from './component/top-sell/top-sell.component';
import { BillDialogComponent } from './component/bill-dialog/bill-dialog.component';
import { BillManageComponent } from './component/manage/bill-manage/bill-manage.component';
import { BillManageDialogComponent } from './component/manage/bill-manage-dialog/bill-manage-dialog.component';
import { ChatComponent } from './component/chat/chat.component';
import { TestComponent } from './component/test/test.component';
//

@NgModule({
  declarations: [
    AppComponent,
    BillInfoComponent,
    CartComponent,
    ComputerDialogComponent,
    ComputerComponent,
    HomeComponent,
    ComputerManageDialogComponent,
    ComputerManageComponent,
    AccountDialogComponent,
    LogoutComponent,
    BillComponent,
    AboutUsComponent,
    ContactComponent,
    MapComponent,
    TopSellComponent,
    BillDialogComponent,
    BillManageComponent,
    BillManageDialogComponent,
    ChatComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSliderModule,
    MatSortModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatDialogModule,
    FlexLayoutModule,
    MatInputModule,
    MatRippleModule,
    MatChipsModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatRadioModule,
    MatExpansionModule,
    MatStepperModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
