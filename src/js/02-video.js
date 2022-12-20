import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

console.log(Player);

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.on('pause', function () {
  console.log('stoped the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

function onPlay(data) {
  // console.log(data);
  const CurrentTime = data.seconds;
  console.log(CurrentTime);
  localStorage.setItem(STORAGE_KEY, CurrentTime);
}

const STORAGE_KEY = 'videoplayer-current-time';

const savedCurrentTime = localStorage.getItem(STORAGE_KEY);

player.on('timeupdate', throttle(onPlay, 1000));

player
  .setCurrentTime(savedCurrentTime)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
