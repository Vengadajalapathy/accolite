import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/services/login.service';
import { CommonutilService } from '../../../shared/services/commonutil.service';
import { HttpClientService } from '../../../shared/services/httpclient.service';
import { Login } from '../../models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private loginService: LoginService,
    private commonutilService: CommonutilService,
    private router: Router,
    private httpClientService: HttpClientService
  ) {}

  ngOnInit(): void {}
  onSubmitLoginForm(form: NgForm) {
    console.log(form);
    this.loginService.login(form.value).subscribe(
      (res) => {
        let data: Login = res;
        if (data && data.isAdmin) {
          this.commonutilService.setLoggedIn(data.isAdmin.toString());
          this.getAndSetLookupData();
          this.router.navigateByUrl('/products');
        } else {
          alert('Not an administrator');
        }
      },
      (err) => {
        alert(err.error.message);
      }
    );
  }

  getAndSetLookupData() {
    this.httpClientService.getLookupData().subscribe((res) => {
      this.commonutilService.setLookupRam(res[0]);
      this.commonutilService.setLookupMemory(res[1]);
      this.commonutilService.setLookupCamera(res[2]);
    });
  }
}
