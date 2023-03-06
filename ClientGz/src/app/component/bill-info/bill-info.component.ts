import { Component, OnInit } from '@angular/core';
import { Bill } from '../../model/bill';
import { Inject, Optional } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-bill-info',
  templateUrl: './bill-info.component.html',
  styleUrls: ['./bill-info.component.css']
})
export class BillInfoComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<BillInfoComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Bill,
    private _formBuilder: FormBuilder
  ) {
    this.local_data = { ...data }
  }
  local_data: any;

  ngOnInit(): void {
    this.NameFormGroup = this._formBuilder.group({
      NameCtrl: ['', Validators.required]
    });
    this.PhoneFormGroup = this._formBuilder.group({
      PhoneCtrl: ['', Validators.required]
    });
    this.AddressFormGroup = this._formBuilder.group({
      AddressCtrl: ['', Validators.required]
    });
  }

  order() {
    this.dialogRef.close({ data: this.local_data });
  }

  NameFormGroup: FormGroup;
  PhoneFormGroup: FormGroup;
  AddressFormGroup: FormGroup;
}
