function Multiplication() {
    var self = this;
    var questions = [];

    for (var i = 2; i <= 9; i++)
        for (var j = i; j <= 9; j++) {
            // self.questions.push({n1: i, n2: j});
            var n1, n2;
            var multiplication = 100 * i * j;
            n1 = _randomPendingZero() * i;
            n2 = multiplication / n1;
            questions.push([n1, n2, multiplication]);
        }

    function _suffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }
    ;

    function _randomPendingZero() {
        // get random number from 0 to 2
        return Math.pow(10, Math.round(Math.random() * 2));
    }

    self.multiplications = ko.observableArray(_suffle(questions.slice()));
    self.divisions = ko.observableArray(_suffle(questions.slice()));
}

// var x = new Multiplication();
// console.debug(x.questions)
ko.applyBindings(new Multiplication());
/* 
 * Copyright 2014 Capital One Financial Corporation All Rights Reserved.
 * 
 * This software contains valuable trade secrets and proprietary information of
 * Capital One and is protected by law. It may not be copied or distributed in
 * any form or medium, disclosed to third parties, reverse engineered or used in
 * any manner without prior written authorization from Capital One.
 */
