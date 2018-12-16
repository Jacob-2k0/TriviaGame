
    var counter = 10;
    setInterval(function(){
        if(counter > 0) {
        counter--;
        $("#demo").html("<p>Time Remaining: " + counter + " Seconds</p>");
        }else if(counter === 0) {
            submitAnswer();
        }
    }, 1000);

  function submitAnswer() {

      var unAnswered = 0;
      var correct = 0;
      var incorrect = 0;
      $("input").attr('disabled','disabled');

      var q1 = document.getElementsByName("q1");
      var len1 = q1.length;
      var checked = false ;
      var q1Answer;

      for (var i = 0; i < len1 ; i++) {
          if ( q1[i].checked) {
              checked = true;
              q1Answer = q1[i].value;
          }
      }

      if ( !checked ) {
        unAnswered++;
      } else if ( q1Answer === "Yellow") {
            correct++;
      } else {
            incorrect++;
      }

      var q2 = document.getElementsByName("q2");
      var len2 = q2.length;
      var q2Answer;

      checked = false ;

      for ( i = 0; i < len2 ; i++) {
            if ( q2[i].checked) {
                checked = true;
                q2Answer = q2[i].value;
            }
        }

      if ( !checked ) {
        unAnswered++;
      } else if ( q2Answer === "Orange") {
          correct++;
      } else {
          incorrect++;
      }

      var q3 = document.getElementsByName("q3");
      var len3 = q3.length;
      var q3Answer;

      checked = false ;

      for ( i = 0; i < len3 ; i++) {
            if ( q3[i].checked) {
                checked = true;
                q3Answer = q3[i].value;
            }
        }

      if ( !checked ) {
        unAnswered++;
      } else if ( q3Answer === "Green") {
          correct++;
      } else {
          incorrect++;
      }

      var q4 = document.getElementsByName("q4");
      var len4 = q4.length;
      var q4Answer;

      checked = false ;

      for ( i = 0; i < len4 ; i++) {
            if ( q4[i].checked) {
                checked = true;
                q4Answer = q4[i].value;
            }
        }

      if ( !checked ) {
        unAnswered++;
      } else if ( q4Answer === "Lime") {
          correct++;
      } else {
          incorrect++;
      }

      $("#correct").html("You got " + correct + " questions correct.");
      $("#incorrect").html("You got " + incorrect + " questions incorrect.");
      $("#unAnswered").html("You left " + unAnswered + " questions unanswered.");
}
