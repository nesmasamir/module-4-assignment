(function (window) {
    var speakWorld = "hello";
    var helloSpeaker = {
        speak: function (names) {
            console.log(speakWorld + " " + names)
        }

    };
    window.helloSpeaker = helloSpeaker;

})(window);