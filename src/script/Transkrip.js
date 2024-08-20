const audio = document.getElementById("audioPlay");
const slider = document.getElementById("audio-time-seeker");
const E_audioCurrentTime = document.getElementById("audio-current-time");
const E_audioDuration = document.getElementById("audio-duration");
const E_play_button = document.getElementById("play-pause");
const E_mute_button = document.getElementById("audio-mute-button");
const volume = document.getElementById("audio-volume-seeker");
let isAudioPlaying = false;
let isAudioMuted = false;
let audioShow = false;
let audioDuration;

function getMinute(value) {
    return Math.floor(value/60);
}

function getSecond(value) {
    let second = Math.floor(value%60);
    if (second < 10) {
        return `0${second}`;
    }
    else{
        return second;
    }
}

function setAudioProperties() {
    audioDuration = Math.floor(audio.duration);
    slider.max = audioDuration;
    E_audioDuration.innerHTML = `${getMinute(audioDuration)}:${getSecond(audioDuration)}`;
}

function getPrecentage(value) {
    let precentage = value/audioDuration*100;
    return precentage;
}

  //untuk warna background slider
function sliderSettings(time, buffered) {
    let timePrecentage = getPrecentage(time);
    let bufferedPrecentage = getPrecentage(buffered);
    // slider.style = 'background: linear-gradient(to right, #7E57A3 0%, #7E57A3 '
    // + getPrecentage(value) +'%, #3F2C51 ' 
    // + getPrecentage(value) + '%, #3F2C51 100%);';
    slider.style = 'background: linear-gradient(to right, #7E57A3 0%,'
    +'#7E57A3 '+ timePrecentage +'%,'
    +'#B0B0B0 '+ timePrecentage +'%,'
    +'#B0B0B0 '+ bufferedPrecentage +'%,'
    +'#3F2C51 '+ bufferedPrecentage +'%,'
    +'#3F2C51 100%);';
}

//event listener
audio.addEventListener('progress', displayBufferedAmount);
function displayBufferedAmount() {
    const bufferedAmount = Math.floor(audio.buffered.end(audio.buffered.length - 1));
    sliderSettings(audio.currentTime, bufferedAmount);
}

audio.addEventListener('ended', audioEnded);
function audioEnded() {
    isAudioPlaying = false;
    E_play_button.src = "../../assets/play.svg";
}

audio.addEventListener('timeupdate', audioSeekerUpdate);
function audioSeekerUpdate() {
    slider.value = Math.floor(audio.currentTime);
    sliderSettings(audio.currentTime, Math.floor(audio.buffered.end(audio.buffered.length - 1)));
    E_audioCurrentTime.innerHTML = `${getMinute(audio.currentTime)}:${getSecond(audio.currentTime)}`;
}

if (audio.readyState > 0) {
    setAudioProperties();
    displayBufferedAmount();
} else {
    audio.addEventListener('loadedmetadata', () => {
        setAudioProperties();
        displayBufferedAmount();
    });
}

// slider control
slider.addEventListener("input", timeSeekerHandler);
slider.addEventListener("change", timeSeekerHandler);
function timeSeekerHandler() {
    sliderSettings(this.value, Math.floor(audio.buffered.end(audio.buffered.length - 1)));
    audio.currentTime = slider.value;
}

// slider control
volume.addEventListener("input", volumeHandler);
volume.addEventListener("change", volumeHandler);;
function volumeHandler() {
    audio.volume = volume.value/100;
    volume.style = 'background: linear-gradient(to right, #7E57A3 0%,'
    +'#7E57A3 '+ volume.value +'%,'
    +'#3F2C51 '+ volume.value +'%,'
    +'#3F2C51 100%);';
}

// play/pause audio
function playAudio() {
    isAudioPlaying = !isAudioPlaying;
    if (isAudioPlaying) {
        audio.play();
        E_play_button.src = "../../assets/player-pause.svg";
    }
    else{
        audio.pause();
        E_play_button.src = "../../assets/play.svg";
    }
}

function muteAudio() {
    isAudioMuted = !isAudioMuted;
    audio.muted = isAudioMuted;
    if(isAudioMuted) {
        E_mute_button.src = "../../assets/volume-off.svg";
    }
    else{
        E_mute_button.src = "../../assets/speaker.svg";
    }
}

//dropdown togle
function downloadDropdownToggle() {
    var dropdown = document.getElementById("download-dropdown");
    dropdown.style.display === "block" ? dropdown.style.display = "none" : dropdown.style.display = "block";
}


function toggleAudioControl() {
    // Mengambil referensi ke elemen audio control
    const audioControl = document.querySelector('.audio-control');

    // Memeriksa apakah audio control saat ini tersembunyi atau tidak
    const isHidden = audioControl.classList.contains('hidden');

    let transkripField = document.getElementById('transkrip-field');

    // const isExpanded = transkripField.classList.contains('h-[436px]');

    if (audioShow) {
        console.log('audio hilang');
        audioControl.classList.add('hidden');
        audioControl.classList.remove('flex');
        transkripField.classList.add('h-TranscriptLong');
        transkripField.classList.remove('h-TranscriptShort');
    } else if (!audioShow) {
        console.log('audio muncul');
        audioControl.classList.remove('hidden'); 
        audioControl.classList.add('flex');    
        //436-64-12
        transkripField.classList.add('h-TranscriptShort');
        transkripField.classList.remove('h-TranscriptLong');  
    }
    audioShow = !audioShow;
}

