import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ShareButtonsModule} from '@ngx-share/buttons';
import {AppComponent} from './app.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faFacebookF, faTwitter, faGooglePlusG, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSlideToggleModule
} from '@angular/material';
import {HomeComponent} from './home/home.component';
import {GettingStartedComponent} from './gettingstarted/gettingstarted.component';
import {HttpClientModule} from '@angular/common/http';
import {NgxAudioPlayerModule} from 'ngx-audio-player';
import {ListComponent} from './list/list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { PmComponent } from './pm/pm.component';
import { AdminComponent } from './admin/admin.component';
import { httpInterceptorProviders} from './auth/auth-interceptor';
import {MatFormFieldModule} from '@angular/material/form-field';
import { UploadAvatarComponent } from './component/upload/upload-avatar/upload-avatar.component';
import { UploadFileComponent } from './component/upload/upload-file/upload-file.component';
// import { UploadFormComponent } from './uploads/upload-form/upload-form.component';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import { CreateSongComponent } from './component/songManager/create-song/create-song.component';

export const appRoutes: Routes = [
    {path: '', component: HomeComponent, data: {title: 'Home'}},
    {path: 'guide/getting-started', component: GettingStartedComponent, data: {title: 'Getting Started'}},
    {path: 'list', component: ListComponent},
    {
        path: 'user',
        component: UserComponent,
    },
    {
        path: 'pm',
        component: PmComponent
    },
    {
        path: 'admin',
        component: AdminComponent
    },
    {
        path: 'auth/login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: RegisterComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'uploadfile',
        component: UploadFileComponent
    },
    {
        path: 'createmusic',
        component: CreateSongComponent
    }
];

@NgModule({
    declarations: [
        // tslint:disable-next-line:max-line-length
        AppComponent, HomeComponent, GettingStartedComponent, ListComponent, LoginComponent, RegisterComponent,
        UserComponent, PmComponent, AdminComponent, UploadAvatarComponent, UploadFileComponent, CreateSongComponent,
    ],
    imports: [
        HttpClientModule,
        BrowserModule, FontAwesomeModule,
        MatCardModule, MatToolbarModule, MatIconModule, MatRadioModule, MatCheckboxModule, MatSlideToggleModule,
        BrowserAnimationsModule, ShareButtonsModule,
        NgxAudioPlayerModule,
        FormsModule, ReactiveFormsModule,
        RouterModule.forRoot(appRoutes, {useHash: false}), MatFormFieldModule,
        AngularFireStorageModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
    ],
    providers: [httpInterceptorProviders],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor() {
        library.add(faFacebookF, faTwitter, faGooglePlusG, faLinkedinIn);
    }
}
