import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonutilService } from './shared/services/commonutil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'front-end';
  loggedIn!: string;
  constructor(
    public commonUtilService: CommonutilService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.commonUtilService.setLoggedIn('');
  }

  logout() {
    this.commonUtilService.setLoggedIn('');
    this.router.navigateByUrl('/login');
  }

  // checkItIsAppComponentOrNot() {
  //   console.log(this.activatedRoute.snapshot);
  //   return !(this.activatedRoute.snapshot.url[0].path === 'login');
  // }
}
