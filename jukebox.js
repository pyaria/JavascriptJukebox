var parseNote = function(songnote){
  var notebeat = {};
  noteArray = songnote.split("");
  var lastDigit = noteArray[noteArray.length - 1];
  if (lastDigit == parseInt(lastDigit)) {
    var beat = noteArray.pop();
    noteArray.pop();
  } else {
    var beat = 1;
  }
  notebeat["pitch"] = noteArray.join("");
  notebeat["beats"] = beat;
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

var songstring = prompt("Please give me some notes!");
var song = parseSong(songstring);
for(var i = 0; i < song.length; i++){
  playSong(songstring[i][0], songstring[i][1]);
}
