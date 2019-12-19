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

import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import { CreateSongComponent } from './component/songManager/create-song/create-song.component';
import { TitlePageComponent } from './component/layout/title-page/title-page.component';
import { MenuLeftComponent } from './component/layout/menu-left/menu-left.component';
import { ContentComponent } from './component/layout/content/content.component';
import { DetailSongComponent } from './component/songManager/detail-song/detail-song.component';
import { AboutUsComponent } from './component/layout/about-us/about-us.component';
import { CarouselComponent } from './component/layout/carousel/carousel.component';
import {NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './component/layout/header/header.component';
import { NotGuardComponent } from './component/layout/not-guard/not-guard.component';
import { SearchComponent } from './component/layout/search/search.component';
import { FooterComponent } from './component/layout/footer/footer.component';
import { ListSongComponent } from './component/songManager/list-song/list-song.component';
import { AllListSongComponent } from './component/songManager/all-list-song/all-list-song.component';
import { UpdatesingerComponent } from './component/singerManager/updatesinger/updatesinger.component';
import { SingeraddsongComponent } from './component/singerManager/singeraddsong/singeraddsong.component';
import { ListSingerUserComponent } from './component/singerManager/list-singer-user/list-singer-user.component';
import { ListSingerComponent } from './component/singerManager/list-singer/list-singer.component';
import { CarouselListSingerComponent } from './component/singerManager/carousel-list-singer/carousel-list-singer.component';
import { CreateSingerComponent } from './component/singerManager/create-singer/create-singer.component';
import { DetailSingerComponent } from './component/singerManager/detail-singer/detail-singer.component';
import { AddsongComponent } from './component/playlistManager/addsong/addsong.component';
import { CreatePlaylistComponent } from './component/playlistManager/create-playlist/create-playlist.component';
import { ListPlaylistComponent } from './component/playlistManager/list-playlist/list-playlist.component';
import { PlaylistComponent } from './component/playlistManager/playlist/playlist.component';
import { UpdatePlaylistComponent } from './component/playlistManager/update-playlist/update-playlist.component';
import {AuthGuard} from './services/userManager/auth.guard';
import {AuthService} from './auth/auth.service';

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
        component: CreateSongComponent, canActivate: [AuthGuard]
    }
];

@NgModule({
    declarations: [
        // tslint:disable-next-line:max-line-length
        AppComponent, HomeComponent, GettingStartedComponent, ListComponent, LoginComponent, RegisterComponent,
        // tslint:disable-next-line:max-line-length
        UserComponent, PmComponent, AdminComponent, UploadAvatarComponent, UploadFileComponent, CreateSongComponent, TitlePageComponent, MenuLeftComponent, ContentComponent, DetailSongComponent, AboutUsComponent, CarouselComponent, HeaderComponent, NotGuardComponent, SearchComponent, FooterComponent, ListSongComponent, AllListSongComponent, UpdatesingerComponent, SingeraddsongComponent, ListSingerUserComponent, ListSingerComponent, CarouselListSingerComponent, CreateSingerComponent, DetailSingerComponent, AddsongComponent, CreatePlaylistComponent, ListPlaylistComponent, PlaylistComponent, UpdatePlaylistComponent,
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
        AngularFireModule.initializeApp(environment.firebaseConfig), NgbCarouselModule,
    ],
    providers: [httpInterceptorProviders, AuthGuard, AuthService],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor() {
        library.add(faFacebookF, faTwitter, faGooglePlusG, faLinkedinIn);
    }
}
