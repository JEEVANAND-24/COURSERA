(function() {
    var names = ["Mouli", "John", "Jen", "Jason", "Dharan", "Moya", "Larry", "Paula", "Laura", "Jim"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speaker(names[i]);
        } else {
            helloSpeaker.speaker(names[i]);
        }
    }
})();
