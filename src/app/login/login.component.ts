import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './shared/login.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})
export class LoginComponent {
    constructor(private LoginService: LoginService, private router: Router) {}

    onSubmit(username: string, password: string) {
        this.LoginService.login(username, password).subscribe((result) => {
            if (result) {
                this.router.navigate(['/events']);
            }
        });
    }
}