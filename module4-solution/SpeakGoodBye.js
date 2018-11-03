
(function (window) {


var speakWord = "Good Bye";
window.speakWord = speakWord;


var byeSpeaker = {

speak : function (name) {
  console.log(speakWord + " " + name);
}

};

window.byeSpeaker = byeSpeaker;

} ) (window);

