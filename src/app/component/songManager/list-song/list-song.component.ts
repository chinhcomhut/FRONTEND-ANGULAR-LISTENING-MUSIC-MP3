import { Component, OnInit } from '@angular/core';
import {Song} from '../../../model/song/song';
import {SongService} from '../../../services/song/song.service';
import {Track} from 'ngx-audio-player';

@Component({
  selector: 'app-list-song',
  templateUrl: './list-song.component.html',
  styleUrls: ['./list-song.component.css']
})

export class ListSongComponent implements OnInit {

  constructor(private songService: SongService) {
  }
    private fmaBaseUrl = 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music';
  songList: Song[] = [];
  song: Song;
  delete: Song;
  // title = 'Danh Sách Bài Hát';
    msbapTitle = 'Night Owl (by Broke For Free)';
    msbapAudioUrl = `${this.fmaBaseUrl}/WFMU/Broke_For_Free/Directionless_EP/Broke_For_Free_-_01_-_Night_Owl.mp3`;

    msbapDisplayTitle = false;
    msbapDisplayVolumeControls = true;

    // Material Style Advance Audio Player Playlist

    // msaapPlaylist: Track[] = [
    //     {
    //         title: '1400 (by Yung Kartz)',
    //         link: `${this.fmaBaseUrl}/no_curator/Yung_Kartz/August_2018/Yung_Kartz_-_10_-_1400.mp3`
    //     },
    //     {
    //         title: 'Epic Song (by BoxCat Games)',
    //         link: `${this.fmaBaseUrl}/ccCommunity/BoxCat_Games/Nameless_The_Hackers_RPG_Soundtrack/BoxCat_Games_-_10_-_Epic_Song.mp3`
    //     },
    //     {
    //         title: 'Hachiko (The Faithful Dog) (by The Kyoto)',
    //         link: `${this.fmaBaseUrl}/ccCommunity/The_Kyoto_Connection/Wake_Up/The_Kyoto_Connection_-_09_-_Hachiko_The_Faithtful_Dog.mp3`
    //     },
    //     {
    //         title: 'Starling (by Podington Bear)',
    //         link: `${this.fmaBaseUrl}/Music_for_Video/Podington_Bear/Solo_Instruments/Podington_Bear_-_Starling.mp3`
    //     },
    //     {
    //         title: 'chot nhot',
    //         // tslint:disable-next-line:max-line-length
    //         link: `https://firebasestorage.googleapis.com/v0/b/chinhbeo-18d3b.appspot.com/o/17bt97q7eld?alt=media&token=21a7e218-7dd7-4924-b21a-9e19640e6560`
    //     }
    // ];
    // msaapPlaylist: Track[] = [
    //     {
    //         title:  'hihi',
    //         link:  `https://firebasestorage.googleapis.com/v0/b/chinhbeo-18d3b.appspot.com/o/24fixz1g6o7h?alt=media&token=89ebc483-9e50-4713-810c-6d19ca8f0118`
    //     },
    //     {
    //             title: 'Starling (by Podington Bear)',
    //             link:  this.song.mp3Url
    //         },
    // ];

    msaapDisplayTitle = true;
    msaapDisplayPlayList = true;
    pageSizeOptions = [2, 4, 6];

    msaapDisplayVolumeControls = true;
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

  ngOnInit() {
    // const userId = sessionStorage.getItem('AuthUserId');
    this.songService.getAllSongUserId()
        .subscribe(next => {
          this.song = next.data;
          console.log(this.song);
        }, error => {
          console.log(error);
        });
  }

  deleteSong(id: number) {
    this.songService
        .deleteSong(id)
        .subscribe(
            data => {
              this.delete = data;
              window.location.reload();
            },
            error => {
              this.delete = null;
            }
        );
  }

}
