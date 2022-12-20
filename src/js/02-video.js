import Player from '@vimeo/player';

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
  console.log(data);
}

player.on('timeupdate', onPlay);

player
  .setCurrentTime(30.456)
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
