// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './shared/login.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})
export class LoginComponent {
    constructor(private LoginService: LoginService, private router: Router) {}

    onSubmit(login: string, password: string) {
        this.LoginService.login(login, password).subscribe((result) => {
            if (result) {
                this.router.navigate(['/events']);
            }
        });
    }
}