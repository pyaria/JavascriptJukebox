var parseNote = function(songnote){
  var splitNote = songnote.split("");
  var possibleBeat = splitNote[splitNote.length - 1];
  if (possibleBeat == parseInt(possibleBeat)) {
    var beat = splitNote.pop();
    splitNote.pop();
  } else {
    var beat = 1;
  }
  var note = {};
  note["pitch"] = splitNote.join("");
  note["beats"] = parseInt(beat);
  return note;
}
// console.log(parseNote("C#*2"));
// console.log(parseNote("D"));

var parseSong = function(song){
  var songNotes = song.split(" ");
  var songNotesArray = [];
  for(var i = 0; i < songNotes.length; i++){
    songNotesArray.push(parseNote(songNotes[i]));
  }
  return songNotesArray;
}
// console.log(parseSong("Ab B"));
//
var songstring = prompt("Please give me some notes!");
var song = parseSong(songstring); // have array of object-hashes
playSong(song, 120);
