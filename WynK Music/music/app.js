let mySong = document.getElementById('mySong');
        let icon = document.getElementById('icon');

        icon.onclick = function(){
            if(mySong.paused){
                mySong.play();
                icon.src = "pause.png.png";
                // icon.src ="fa-solid fa-forward"
            }else{
                mySong.pause();
                icon.src = "play.png.png";
                // mySong.play();

            }
            
        }