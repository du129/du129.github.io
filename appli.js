var kanye = [ ];
var loadedIndex = 0;// horrible way of forcing a load of audio sounds

// puts the audios into the queue
function init(audios) {
    "use strict";
    for (var i = 0 ;i<audios.length;i++) {
    var audio = new Audio(audios[i]);
    kanye.push(audio);
    buffer(audio);
  }
}

// enough data is available
function buffer(audio) {
  if(audio.readyState==4)
      return loaded();
  setTimeout(function(){buffer(audio)},100);
}

// checks if queue is full
function loaded() {
  loadedIndex++;
  if(kanye.length==loadedIndex)
      playLooped();
}

// play and loop after finished
function playLooped() {
  var audio=Math.floor(Math.random() * (collection.length));
  audio=collection[audio];
  audio.play();
  setTimeout(playLooped,audio.duration*1000);
}

init([
    
]);