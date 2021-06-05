var vAudio = document.getElementById("divAudio");
            function playMusic()
            {
               vAudio.play();
            }


 window.onload = function() {
                //  alert(navigator.userAgent);
                  if (navigator.userAgent.indexOf("Firefox") > 0) {
                      alert("Enable sound in Firefox");
                  }
              }         