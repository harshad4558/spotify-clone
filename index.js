console.log("welcome to spotify");
//initialize variables
let songIndex=0;
let masterplay = document.getElementById('masterplay');
let audioElement = new Audio('[SPOTIFY-DOWNLOADER.COM] Let Me Down Slowly.mp3');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let songsitems = Array.from(document.getElementsByClassName('songitems'));
//var correctedToken = masterplay.trim();

let songs = [
    { songName:" Let Me Down Slowly",filePath:"[SPOTIFY-DOWNLOADER.COM] Let Me Down Slowly.mp3",coverPath:"bagimg.jpg"},    
    { songName:" Hey Mama ",filePath:"[SPOTIFY-DOWNLOADER.COM] Hey Mama (feat. Nicki Minaj, Bebe Rexha & Afrojack).mp3",coverPath:"bgimg.jpg"},
    { songName:" Bad Boy ",filePath:"[SPOTIFY-DOWNLOADER.COM] Bad Boy (feat. Luana Kiara).mp3",coverPath:"bagimg.jpg"},
    { songName:"Champion.mp3",filePath:"[SPOTIFY-DOWNLOADER.COM] Champion.mp3",coverPath:"bagimg.jpg"},
    { songName:" Cheap Thrills.mp3",filePath:"[SPOTIFY-DOWNLOADER.COM] Cheap Thrills.mp3",coverPath:"bagimg.jpg"},
    { songName:" CRISTIANO RONALDO SONG.mp3",filePath:"[SPOTIFY-DOWNLOADER.COM] CRISTIANO RONALDO SONG.mp3",coverPath:"bgimg.jpg"},
    { songName:"Dil Meri Na Sune.mp3",filePath:"[SPOTIFY-DOWNLOADER.COM] Dil Meri Na Sune.mp3",coverPath:"bagimg.jpg"},



]
songsitems.forEach((element,i) => {
  console.log(element,i);
element.getElementsByTagName('img')[0].src = songs[i].coverPath;
element.getElementsByClassName('songname')[0]. innerText = songs[i].songName;
})
//let audioElement = new Audio('[SPOTIFY-DOWNLOADER.COM] Let Me Down Slowly.mp3');
//handdle play/pause
masterplay.addEventListener('click',()=>{
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterplay.classList.remove('fa-solid', 'fa-circle-pause');
        masterplay.classList.add('fa-regular', 'fa-circle-play');
        gif.style.opacity = 1;
      } else {
        audioElement.pause();
        masterplay.classList.remove('fa-regular', 'fa-circle-play');
        masterplay.classList.add('fa-solid', 'fa-circle-pause');
        gif.style.opacity = 0;
      }
      
})
//listen events
audioElement.addEventListener('timeupdate', () => {
    //console.log('timeupdate');
    
    // Update seek bar
    const progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
   // console.log(progress);

    myprogressbar.value = progress;
    myprogressbar.addEventListener('change', ()=>{
        audioElement.currentTime =myprogressbar.value *audioElement.duration/100;
    })


    // Update the seek bar element with the calculated progress value
    //myprogressbar.style.width = progress + '%';
  });
const makeAllplays = ()=>{
  Array.from(document.getElementsByClassName('songitemplay')).forEach((element) =>{
element.classList.remove('fa-circle-pause');
    element.classList.add('fa-circle-play');

    })
}
  Array.from(document.getElementsByClassName('songitemplay')).forEach((element) =>{
    element.addEventListener('click',(e) =>{
//console.log(e.target);
makeAllplays();
const index = parseInt(e.target.id)
e.target.classList.remove('fa-circle-play');
e.target.classList.add('fa-circle-pause');
audioElement.src = 'songs/${index}.mp3';
audioElement.currentTime = 0;
audioElement.play();
//masterplay.target.classList.remove('fa-circle-play');
//masterplay.target.classList.add('fa-circle-pause');
    });

  });