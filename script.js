console.log("welcome to Spotify");
//variable initializing
let songIndex=0;
let audioElement= new Audio('songs/1.mp3');
let masterPlay= document.getElementById('masterPlay');
let progressBar=document.getElementById('progressBar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName'); 
let songItems=Array.from(document.getElementsByClassName('songItem'));
//let songItemPlay=Array.from(document.getElementsByClassName('songItemPlay')); //change



let songs=[
    {songName:"Music-Is-Love" , filePath:"songs/1.mp3", coverPath:"covers/cover1.jpeg"},
    {songName:"A-call-to-the-soul" , filePath:"songs/2.mp3", coverPath:"covers/cover2.jpeg"},
    {songName:"Cinematic-Dramatic" , filePath:"songs/3.mp3", coverPath:"covers/cover3.jpeg"},
    {songName:"Easy-Lifestyle" , filePath:"songs/4.mp3", coverPath:"covers/cover4.jpeg"},
    {songName:"Eco-Technology" , filePath:"songs/5.mp3", coverPath:"covers/cover5.jpeg"},
    {songName:"Guitar-elctro-sport" , filePath:"songs/6.mp3", coverPath:"covers/cover6.jpeg"},
    {songName:"Leva-Eternity" , filePath:"songs/7.mp3", coverPath:"covers/cover7.jpeg"},
    {songName:"Lofi-vibes" , filePath:"songs/8.mp3", coverPath:"covers/cover8.jpeg"},
    {songName:"My-universe", filePath:"songs/9.mp3", coverPath:"covers/cover9.jpeg"},
    {songName:"Infinity" , filePath:"songs/10.mp3", coverPath:"covers/cover10.jpeg"},
]
  
songItems.forEach((element,i) => {
   // console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;  //in html doc
});
//play/pause handling
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }

})
//listen to events
audioElement.addEventListener('timeupdate',()=>{
    //console.log('timeupdate');
    //update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    //  console.log(progress);
    progressBar.value=progress; //to have progress in bar
})

progressBar.addEventListener('change',()=>{
    audioElement.currentTime = progressBar.value * audioElement.duration/100; //progressBar.value is in percent value so we have to change it in duration so taken it from above progress formula
})
//making all other (previously playing song button) as play means back to initial condn. where it can be played again
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.add('fa-circle-play');
        element.classList.remove('fa-circle-pause');
    })
}
//to make a song button play and pause 
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
   // console.log(e.target);  //target gives particular element which is clicked
    makeAllPlays();
    songIndex=parseInt(e.target.id);
    e.target.classList.remove('fa-circle-play');
    e.target.classList.add('fa-circle-pause'); 
    audioElement.src=`songs/${songIndex+1}.mp3`;  //playing song accordingly separate songs 
    masterSongName.innerText=songs[songIndex].songName; 
    audioElement.currentTime=0;  //playing songs when button clicked
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-circle-play'); //to handle masterplay button accordingly
    masterPlay.classList.add('fa-circle-pause');

    })
})
   //to play next song
    document.getElementById('next').addEventListener('click',()=>{
        if(songIndex>=9)
        {
           songIndex=0;
        }
        else
        {
            songIndex+=1;
        }

    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName; 
    audioElement.currentTime=0;  
    audioElement.play();
   // gif.style.opacity=1;
    masterPlay.classList.remove('fa-circle-play'); 
    masterPlay.classList.add('fa-circle-pause');
    })
    //to play previous song
    document.getElementById('previous').addEventListener('click',()=>{
        if(songIndex<=0)
        {
           songIndex=0;
        }
        else
        {
            songIndex-=1;
        }

    audioElement.src=`songs/${songIndex+1}.mp3`; 
    masterSongName.innerText=songs[songIndex].songName; 
    audioElement.currentTime=0;  
    audioElement.play();
    //gif.style.opacity=1;
    masterPlay.classList.remove('fa-circle-play'); 
    masterPlay.classList.add('fa-circle-pause');
    })
//changes
// var button = document.getElementById("button");
// var audio = document.getElementById("player");

// button.addEventListener("click", function(){
//   if(audio.paused){
//     audio.play();
//     button.innerHTML = "Pause";
//   } else {
//     audio.pause();
//     button.innerHTML = "Play";
//   }
// });

// Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//     element.addEventListener('click',(e)=>{
//         if(audioElement.paused){
//         audioElement.play();
//        // songItemPlay.innerText=
//         e.target.classList.remove('fa-circle-play');
//         e.target.classList.add('fa-circle-pause'); 
//     }
//     else{
//        audioElement.pause();
//        e.target.classList.remove('fa-circle-pause');
//        e.target.classList.add('fa-circle-play'); 
//     }
// })
    
// })