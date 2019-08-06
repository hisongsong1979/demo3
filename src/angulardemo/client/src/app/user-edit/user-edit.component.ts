import {Component, OnDestroy, OnInit} from '@angular/core';
import { UserService} from "../shared/user/user.service";
import {ActivatedRoute, Router, Routes} from "@angular/router";
import {Subscription} from "rxjs";
import { NgForm } from '@angular/forms';
import {error} from "selenium-webdriver";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit, OnDestroy {
  user: any = {};

  sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private userService: UserService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params =>{
        const id = params['id'];
        if (id) {
          this.userService.get(id).subscribe((user: any) => {
            if (user) {
              this.user = user;
              this.user.href = user._links.self.href;
            } else {
              console.log(`User with id '${id}' not found, returning to list`);
              this.gotoList()
            }
            });
        }
      });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }
  gotoList () {
    this.router.navigate(['/user-list']);
  }

  save(form: NgForm) {
    this.userService.edit(form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error))
  }
  delete(href) {
     this.userService.delete(href).subscribe(result =>{
       this.gotoList();
     }, error => console.error(error))
  }
}
