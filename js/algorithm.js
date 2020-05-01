var algorithmModule = angular.module('algorithm', []);

algorithmModule.filter('paddingSpace', function () {
  return function (num, count) {
    if (!count) {
      count = 3;
    }
    var ret = num + '';

    for (var i = ret.length; i < count; i++) {
      ret = '\u00A0' + ret;
    }
    return ret;
  };
});

algorithmModule.controller('AlgorithmController', [
  '$scope',
  '$log',
  function ($scope, $log) {
    var _generateAdditions = function () {
      var currentTime = new Date().getTime();
      var e = [];
      for (var i = 300; i < 400; i++)
        for (var j = 200; j < 300; j++)
          for (var k = 100; k < 200; k++) {
            e.push([i, j, k]);
          }
      $log.debug('Generated ' + e.length + ' equations.');
      e = _suffle(e);
      e = e.slice(0, 12);
      $log.debug(
        'Get random ' +
          e.length +
          ' additions in ' +
          (new Date().getTime() - currentTime) +
          'ms.'
      );

      return e;
    };

    var _generateSubtractions = function () {
      var currentTime = new Date().getTime();
      var e = [];
      for (var i = 500; i < 600; i++)
        for (var j = 100; j < 200; j++)
          for (var k = 200; k <= 300; k++) {
            if (i - j - k < 0) {
              $log.error(
                'Algorithm error in generating subtraction: ' +
                  i +
                  ' - ' +
                  j +
                  ' - ' +
                  k +
                  ' = ' +
                  (i - j - k)
              );
              continue;
            }
            e.push([i, j, k]);
          }

      e = _suffle(e);
      e = e.slice(0, 12);
      $log.debug(
        'Get random ' +
          e.length +
          ' subtractions in ' +
          (new Date().getTime() - currentTime) +
          'ms.'
      );

      return e;
    };

    var _suffle = function (array) {
      var currentIndex = array.length,
        temporaryValue,
        randomIndex;

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
    };

    var _multiplicationTable = function () {
      var m = [];
      for (var i = 1; i <= 12; i++) {
        var l = [];
        for (var j = 1; j <= i; j++) {
          l.push([i, j]);
        }

        m.push(l);
      }
      // $log.debug("Generate multiplication table: " + JSON.stringify(m));
      return m;
    };

    $scope.additions = _generateAdditions();
    $scope.subtractions = _generateSubtractions();
    $scope.multiplicationTable = _multiplicationTable();
  },
]);
