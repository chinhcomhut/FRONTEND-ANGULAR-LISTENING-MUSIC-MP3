import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../../../auth/token-storage.service';
import {Song} from '../../../model/song/song';
import {SongService} from '../../../services/song/song.service';
import {SingerInfo} from '../../../model/singer/singer-info';
import {SingerManagerService} from '../../../services/singerManager/singer-manager.service';
import {PlaylistService} from '../../../services/playlistManager/playlist.service';
import {PlaylistInfor} from '../../../model/playlist/playlist-Infor';
import {Track} from 'ngx-audio-player';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(
      private token: TokenStorageService,
      private songService: SongService,
      private playlistService: PlaylistService,
      private singerManagerService: SingerManagerService) {
  }
    private fmaBaseUrl = 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music';
  private chinhUrl = 'https://firebasestorage.googleapis.com/v0/b/chinhbeo-18d3b.appspot.com/o/dc5z9uzuj1g?alt=media&token='
  info: any;
  listSongLike: Song[] = [];
  songList: Song[] = [];
  listenSong: Song[] = [];
  listSingers: SingerInfo[] = [];
  playlist: PlaylistInfor[] = [];
  a = {
      title: 'Hồi Ức',
      // tslint:disable-next-line:max-line-length
      link: `https://firebasestorage.googleapis.com/v0/b/chinhbeo-18d3b.appspot.com/o/dc5z9uzuj1g?alt=media&token=f0185b02-5c95-4639-baea-64c018c2cc49`
  }
    // Material Style Basic Audio Player Title and Audio URL
     msbapTitle = 'Chợt Nhớ';
  msbapAudioUrl = `https://firebasestorage.googleapis.com/v0/b/chinhbeo-18d3b.appspot.com/o/24fixz1g6o7h?alt=media&token=89ebc483-9e50-4713-810c-6d19ca8f0118`;

    msbapDisplayTitle = false;
    msbapDisplayVolumeControls = true;

    // Material Style Advance Audio Player Playlist
    msaapPlaylist: Track[] = [
         this.a,
        {
            title: 'chợt nhớ',
            // tslint:disable-next-line:max-line-length
            link: `https://firebasestorage.googleapis.com/v0/b/chinhbeo-18d3b.appspot.com/o/24fixz1g6o7h?alt=media&token=89ebc483-9e50-4713-810c-6d19ca8f0118`
        },
        {
            title: 'Epic Song (by BoxCat Games)',
            // tslint:disable-next-line:max-line-length
            link: `'https://firebasestorage.googleapis.com/v0/b/chinhbeo-18d3b.appspot.com/o/dc5z9uzuj1g?alt=media&token=f0185b02-5c95-4639-baea-64c018c2cc49'`
        },
        {
            title: 'Hachiko (The Faithful Dog) (by The Kyoto)',
            link: `${this.fmaBaseUrl}/ccCommunity/The_Kyoto_Connection/Wake_Up/The_Kyoto_Connection_-_09_-_Hachiko_The_Faithtful_Dog.mp3`
        },
        {
            title: 'Starling (by Podington Bear)',
            link: `${this.fmaBaseUrl}/Music_for_Video/Podington_Bear/Solo_Instruments/Podington_Bear_-_Starling.mp3`
        },
        {
            title: 'hoi uc',
            // tslint:disable-next-line:max-line-length
            link: `https://firebasestorage.googleapis.com/v0/b/chinhbeo-18d3b.appspot.com/o/24fixz1g6o7h?alt=media&token=89ebc483-9e50-4713-810c-6d19ca8f0118`
        }
    ];

    msaapDisplayTitle = true;
    msaapDisplayPlayList = true;
    pageSizeOptions = [2, 4, 6];

    msaapDisplayVolumeControls = true;

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      avatar: this.token.getAvatar(),
      authorities: this.token.getAuthorities()
    };

    this.songService.getSong()
        .subscribe(next => {
          this.songList = next;
          console.log(next);
        }, error => {
          console.log(error);
        });

    this.songService.getLikeSong()
        .subscribe(next => {
          this.listSongLike = next;
          console.log(next);
        }, error => {
          console.log(error);
        });

    this.songService.getListenSong()
        .subscribe(next => {
          this.listenSong = next;
          console.log(next);
        }, error => {
          console.log(error);
        });

    this.singerManagerService.getSinger()
        .subscribe(next => {
          this.listSingers = next;
          console.log(next);
        }, error => {
          console.log(error);
        });

    this.playlistService.getPlayListAll()
        .subscribe(next => {
          this.playlist = next;
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



    changeMsbapDisplayTitle(event) {
        this.msbapDisplayTitle = event.checked;
    }

    changeMsbapDisplayVolumeControls(event) {
        this.msbapDisplayVolumeControls = event.checked;
    }

    changeMsaapDisplayTitle(event) {
        this.msaapDisplayTitle = event.checked;
    }

    changeMsaapDisplayPlayList(event) {
        this.msaapDisplayPlayList = event.checked;
    }

    changeMsaapDisplayVolumeControls(event) {
        this.msaapDisplayVolumeControls = event.checked;
    }


        // this.info = {
        //   token: this.token.getToken(),
        //   username: this.token.getUsername(),
        //   roles: this.token.getAuthorities()
        // }
}
