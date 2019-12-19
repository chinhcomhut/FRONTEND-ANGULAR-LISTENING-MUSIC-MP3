import { Component, OnInit } from '@angular/core';
import {PlaylistInfor} from '../../../model/playlist/playlist-Infor';
import {PlaylistService} from '../../../services/playlistManager/playlist.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  title = 'Danh Sách Bài Hát Trong PLaylist Của Tôi';

  playlist: PlaylistInfor;

  constructor(private playlistService: PlaylistService,
              private routes: ActivatedRoute) {
  }

  ngOnInit() {
    this.routes.paramMap.subscribe(paramMap => {
      const id = +paramMap.get('id');
      this.playlistService.getPlayListById(id).subscribe(
          next => {
            this.playlist = next;
            console.log(next);
          },
          error => {
            this.playlist = null;
            console.log(error);
          }
      );
    });
  }
}
