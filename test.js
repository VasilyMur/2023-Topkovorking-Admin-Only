/* eslint-disable no-use-before-define */
/* eslint-disable quotes */
/* eslint-disable no-plusplus */
/* eslint-disable no-restricted-globals */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-var */
/* eslint-disable one-var */
/* eslint-disable strict */
(function () {
    'use strict';

    const a = window.location;
        var o = window.document;
        var r = o.currentScript;
        var s = r.getAttribute('data-api') || `${new URL(r.src).origin  }/api/event`;



        var INITIAL_WAIT = 3000;
        var INTERVAL_WAIT = 10000;
        var ONE_SECOND = 1000;
      
        var events = [
          "mouseup", 
          "keydown", 
          "scroll", 
          "mousemove"
        ];
        var startTime = Date.now();
        var endTime = startTime + INITIAL_WAIT;
        var totalTime = 0;
        var clickCount = 0;
        var buttonClicks = {
          total: 0,
        };
        var buttonClickCount = 0;
        var keypressCount = 0;
        var scrollCount = 0;
        var mouseMovementCount = 0;
        var linkClickCount = 0;
      
        setInterval(function () {
          if (!document.hidden && startTime <= endTime) {
            startTime = Date.now();
            totalTime += ONE_SECOND;

            console.log('totalTime >>>>> ', formatTime(totalTime));
          }
        }, ONE_SECOND);

        function formatTime(ms) {
            return Math.floor(ms / 1000);
          }
      
        document.addEventListener("DOMContentLoaded", function () {
          console.log('window.location.pathname >>> ', window.location.pathname);

          events.forEach(function (e) {
            document.addEventListener(e, function () {
              endTime = Date.now() + INTERVAL_WAIT;
              if (e === "mouseup") {
                clickCount++;
                if (event.target.nodeName === 'BUTTON') {          
                  if(!buttonClicks[event.target.innerText]){
                    buttonClicks[event.target.innerText] = 0;
                  }
                  buttonClicks[event.target.innerText] += 1;
                  buttonClicks.total += 1;         
                }
                else if (event.target.nodeName === 'A') {
                  linkClickCount++;
                }
              }
              else if (e === "keydown") {
                keypressCount++;
              }
              else if (e === "scroll") {
                scrollCount++;
              }
              else if (e === "mousemove") {
                mouseMovementCount++;
              }

              console.log('startTime >> ', startTime);
              console.log('endTime >> ', endTime);
              console.log('totalTime >> ', totalTime);
              console.log('clickCount >> ', clickCount);
              console.log('buttonClicks >> ', buttonClicks);
              console.log('buttonClickCount >> ', buttonClickCount);
              console.log('keypressCount >> ', keypressCount);
              console.log('scrollCount >> ', scrollCount);
              console.log('mouseMovementCount >> ', mouseMovementCount)
              console.log('linkClickCount >> ', linkClickCount);
            });
          });
        });
      
      


        console.log('a >> ', a);
        console.log('o >> ', o);
        console.log('r >> ', r);
        console.log('s >> ', s);


      
})();