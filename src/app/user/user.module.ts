import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { userRoutes } from './user.routes';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule, // alternative for BrowserModule
        RouterModule.forChild(userRoutes),
        FormsModule
    ],
    declarations: [
        ProfileComponent,
        LoginComponent
    ],
    providers: [
        // providers are shared between all angular modules!
        // so service that we import in app module is also available here.
        // this is only true for providers, but not for other arrays.
    ]
})
export class UserModule { }
