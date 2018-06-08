import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Music } from '../../models/musics.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('audio') audio: ElementRef;

  music: Music;
  musics: Music[] = [
    {
      music: './assets/musics/Blue_Skies_(Revoke_Remix)_-_Lenka_REVOKE.mp3',
      name: 'Blue Skies (Revoke Remix)',
      artist: 'Lenka, REVOKE'
    },
    {
      music: './assets/musics/Monstercat_-_Dion Timmer_-_Shiawase.mp3',
      name: 'Shiawase',
      artist: 'Dion Timmer, Monstercat'
    },
    {
      music: 'The_Him_-_Feels_Like_Home_(Radio_Edit)_[feat._Son_Mieux].mp3',
      name: 'Feels Like Home (Radio Edit)',
      artist: 'The Him [feat. Son Mieux]'
    },
    {
      music: './assets/musics/Monstercat_-_Koven_-_Silence.mp3',
      name: 'Silence',
      artist: 'Koven, Monstercat'
    },
    {
      music:
        './assets/musics/Monstercat_-_Eminence_&_Alex_Klingle_-_Altitude_(feat._Danyka_Nadeau).mp3',
      name: 'Altitude',
      artist: 'Eminence & Alex Klingle (feat. Danyka Nadeau), Monstercat'
    },
    {
      music:
        './assets/musics/Monstercat_-_Muzzy_&_Flite_-_Elevate_(feat._Miss_Trouble).mp3',
      name: 'Elevate',
      artist: 'Muzzy & Flite (feat. Miss Trouble), Monstercat'
    }
  ];
  volume: number;

  constructor() {}

  getIndex() {
    return Math.floor(Math.random() * (this.musics.length - 1 + 1)) + 0;
  }

  playPause() {
    if (this.audio.nativeElement.paused) {
      this.audio.nativeElement.play();
    } else {
      this.audio.nativeElement.pause();
    }
  }

  ngOnInit() {
    this.music = this.musics[this.getIndex()];
    this.audio.nativeElement.pause();
    setTimeout(() => {
      this.audio.nativeElement.volume = 0;
      setTimeout(() => {
        this.audio.nativeElement.play();
        this.audio.nativeElement.volume = 0.2;
        setTimeout(() => {
          this.audio.nativeElement.volume = 0.4;
          setTimeout(() => {
            this.audio.nativeElement.volume = 0.6;
            setTimeout(() => {
              this.audio.nativeElement.volume = 0.8;
              setTimeout(() => {
                this.audio.nativeElement.volume = 1;
              }, 500);
            }, 500);
          }, 500);
        }, 500);
      }, 500);
    }, 3000);
  }
}
