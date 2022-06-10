import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const player = new Player('vimeo-player');

const CURRENTTIMEKEY = "videoplayer-current-time";

let playTime = 0;
let currentTime = 0;

function onTimeUpdate(data) {
    playTime = data.seconds
    localStorage.setItem(CURRENTTIMEKEY, playTime)
    
};

player.on('timeupdate', throttle(onTimeUpdate, 1000));

currentTime = localStorage.getItem(CURRENTTIMEKEY);

player.setCurrentTime(currentTime).then(function (seconds) {
    
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            
            break;

        default:
            
            break;
    }
});

