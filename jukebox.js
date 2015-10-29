var parseNote = function(songnote){
  var notebeat = {};
  var noteArray = songnote.split("");
  var lastDigit = noteArray[noteArray.length - 1];
  if (lastDigit == parseInt(lastDigit)) {
    var beat = noteArray.pop();
    noteArray.pop();
  } else {
    var beat = 1;
  }
  notebeat["pitch"] = noteArray.join("");
  notebeat["beats"] = parseInt(beat);
  return notebeat;
}
// console.log(parseNote("C#*2"));
// console.log(parseNote("D"));

var parseSong = function(songstring){
  var songArray = songstring.split(" ");
  var notesArray = [];
  for(var i = 0; i < songArray.length; i++){
    notesArray.push(parseNote(songArray[i]));
  }
  return notesArray;
}
// console.log(parseSong("Ab B"));
//
var songstring = prompt("Please give me some notes!");
var song = parseSong(songstring); // have array of object-hashes
playSong(song, 60);
