import { Component, OnInit } from '@angular/core';
import { TestService } from '../../service/test.service';
import {Test} from '../../model/test';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

    constructor(
	private testService: TestService
    ) { }

    ngOnInit(): void {
    }

    check:boolean= false;

    myWin :Window;
    func1() {
	this.testService.post(this.test).subscribe(); 
    }

    test:Test={name:"hello nguyen"}


    func2() {
	//var ifrm = document.getElementById("cc");
	//console.log(ifrm);
	this.func3();
    }

    func3(){
	let a =4;
	console.log(a);


    }

}
