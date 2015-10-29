var parseNote = function(songNote){
  var noteString = "ABCDEFG";
  var songNote = songNote[0].toUpperCase() + songNote.slice(1);
  if (songNote[0] == parseInt(songNote[0]) || (! noteString.includes(songNote[0]))){
    alert(songNote + " wasn't a note...");
  } else {
    console.log(songNote);
    console.log(noteString.includes(songNote[0]));
    var splitNote = songNote.split("");
    var char = splitNote[splitNote.length - 1];
    if (char == parseInt(char)) {
      var beat = splitNote.pop();
      splitNote.pop();
    } else {
      var beat = 1;
    }
    var note = {};
    note["pitch"] = splitNote.join("");
    note["beats"] = parseInt(beat);
    console.log(note);
    return note;
  }
}
// console.log(parseNote("C#*2"));
// console.log(parseNote("D"));

var parseSong = function(song){
  var noteString = "ABCDEFG";
  if (song !== null){
    var songNotes = song.split(" ");
    var songNotesArray = [];
    for(var i = 0; i < songNotes.length; i++){
      if (parseNote(songNotes[i]) !== undefined){
      songNotesArray.push(parseNote(songNotes[i]));
    }
    }
    return songNotesArray;
  }
}
// console.log(parseSong("Ab B"));
//
var keepPlaying = function(){
  var songstring = prompt("Give me more notes!")
  if (songstring !== null){
    var song = parseSong(songstring);
    playSong(song, 120, keepPlaying);
  }
}
var song = prompt("Please give me some notes!");
// var song = parseSong(songstring); // have array of object-hashes
playSong(parseSong(song), 120, keepPlaying);
// e*2 e*2 f*2 g*2 g*2 f*2 e*2 d*2 c*2 c*2 d*2 e*2 e*4 d d*4 e e f g g f e d c c d e d*2 c c*2
// e*2 d*2 c*2 d*2 e*2 e*2 e*3 d*2 d*2 d*3 e*2 g*2 g*3 e*2 d*2 c*2 d*2 e*2 e*2 e*3 e*2 d*2 d*2 e*2 d*2 c*3
