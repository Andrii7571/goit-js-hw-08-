import Player from '@vimeo/player';
import throttle from 'lodash.throttle'

const PLAYBACK_TIME = "videoplayer-current-time";

const iframe = document.querySelector('iframe');
const player = new Player(iframe, {
    loop: true,
    fullscreen: true,
    quality: '1080p',
});

const getCurrentTime = function (currentTime) {
    const seconds = currentTime.seconds;
    localStorage.setItem(PLAYBACK_TIME, JSON.stringify(seconds));
};
player.on('timeupdate', throttle(getCurrentTime, 1000));
player.setCurrentTime(JSON.parse(localStorage.getItem(PLAYBACK_TIME)) || 0);

player
    .setColor('#687864')
    .then(function (color) {
        console.log('The new color value:#687864');
    })
    .catch(function (error) {
        console.log('An error occurred while setting the color');
    });