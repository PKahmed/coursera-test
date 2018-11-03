
(function (window) {

var speakWord = "Hello";


var helloSpeaker = {

speak: function (name) {
  console.log(speakWord + " " + name);
}

};

window.speakWord = speakWord;
window.helloSpeaker = helloSpeaker;

})(window);

