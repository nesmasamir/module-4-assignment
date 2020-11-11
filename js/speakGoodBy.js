(function (window) {
    var speakWorld = "Good By";
    var bySpeaker = {

    speak : function (names) {
        console.log(speakWorld + " " + names)
    }
};

    window.bySpeaker = bySpeaker;
})(window);