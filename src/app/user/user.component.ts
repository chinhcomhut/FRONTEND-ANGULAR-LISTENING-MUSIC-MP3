import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { TokenStorageService} from '../auth/token-storage.service';
import {Song} from '../model/song/song';
import {SongService} from '../services/song/song.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  board: string;
  errorMessage: string;
info: any;
    songList: Song[] = [];
  constructor(private userService: UserService,
              private token: TokenStorageService,
              private songService: SongService) { }

  ngOnInit() {
    this.userService.getUserBoard().subscribe(
        data => {
          this.board = data;
        },
        error => {
          this.errorMessage = `${error.status}: ${JSON.parse(error.error).message}`;
        }
    );
    this.info = {
          token: this.token.getToken(),
          username: this.token.getUsername(),
        avatar: this.token.getAvatar(),
          roles: this.token.getAuthorities()
      };
    this.songService.getSong()
          .subscribe(next => {
              this.songList = next;
              console.log(next);
          }, error => {
              console.log(error);
          });
  }
    logout() {
        this.token.signOut();
        window.location.reload();
    }
    update(songs: Song[]) {
        this.songList = songs;
    }


}
