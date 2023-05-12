// SONG AND ICON  START
// 1no
let mySong = document.getElementById('mySong');
let icon = document.getElementById('icon');
// 2no
let mySong1 = document.getElementById('mySong1');
let icon1 = document.getElementById('icon1');
  // third no ;
let mySong3 = document.getElementById('mySong3');
let icon3 = document.getElementById('icon3');
  // 4no 
let mySong4 = document.getElementById('mySong4');
let icon4 = document.getElementById('icon4');
  // 5no 
let mySong5 = document.getElementById('mySong5');
let icon5 = document.getElementById('icon5');
  // 6no 
let mySong6 = document.getElementById('mySong6');
let icon6 = document.getElementById('icon6');
// 7no 
let mySong7 = document.getElementById('mySong7');
let icon7 = document.getElementById('icon7');
// 8no 
let mySong8 = document.getElementById('mySong8');
let icon8 = document.getElementById('icon8');
// 9no 
let mySong9 = document.getElementById('mySong9');
let icon9 = document.getElementById('icon9');
//   10no 
let mySong10 = document.getElementById('mySong10');
let icon10 = document.getElementById('icon10');
// 11no 
let mySong11 = document.getElementById('mySong11');
let icon11 = document.getElementById('icon11');
// 12no 
let mySong12 = document.getElementById('mySong12');
let icon12 = document.getElementById('icon12');
// 13no
let mySong13 = document.getElementById('mySong13');
let icon13 = document.getElementById('icon13');
// 14no
let mySong14 = document.getElementById('mySong14');
let icon14 = document.getElementById('icon14');
// 15no 
let mySong15 = document.getElementById('mySong15');
let icon15 = document.getElementById('icon15');
// 16 no 
let mySong16 = document.getElementById('mySong16');
let icon16 = document.getElementById('icon16');
// SONG AND ICON END THANKU 

// progress baar start 
let progress = document.getElementById("progress");
let progress2 = document.getElementById("progress2");
let progress3 = document.getElementById("progress3");
let progress4 = document.getElementById("progress4");
let progress5 = document.getElementById("progress5");
let progress6 = document.getElementById("progress6");
let progress7 = document.getElementById("progress7");
let progress8 = document.getElementById("progress8");
let progress9 = document.getElementById("progress9");
let progress10 = document.getElementById("progress10");
let progress11 = document.getElementById("progress11");
let progress12 = document.getElementById("progress12");
let progress13 = document.getElementById("progress13");
let progress14 = document.getElementById("progress14");
let progress15 = document.getElementById("progress15");
let progress16 = document.getElementById("progress16");
// progress baar end 
// 0 1 number 
icon.addEventListener('click',()=>{
    if(mySong.paused){
       mySong.play();
       icon.src = "pause.png.png";
     }
     else{
       mySong.pause();
       icon.src = "play.png.png";
     }
 });
// progress bar 
    mySong.onloadedmetadata = function () {
    progress.max = mySong.duration;
    progress.value = mySong.currentTime;
  };

  if (mySong.play()) {
    setInterval(() => {
      progress.value = mySong.currentTime;
    }, 500);
  }

  progress.addEventListener('click',()=>{
    mySong.play();
    mySong.currentTime = progress.value;
  })


        // 1 NUMBER 

icon1.addEventListener('click',()=>{
   if(mySong1.paused){
      mySong1.play();
       icon1.src = "pause.png.png";
      }else{
        mySong1.pause();
        icon1.src = "play.png.png";
  }
    }); 

    mySong1.onloadedmetadata = function () {
        progress2.max = mySong1.duration;
        progress2.value = mySong1.currentTime;
      };
    
      if (mySong1.play()) {
        setInterval(() => {
          progress2.value = mySong1.currentTime;
        }, 500);
      }
    
      progress2.onchange = function () {
        mySong1.play();
        mySong1.currentTime = progress2.value;
       
      };

     // 2 NUMBER 
        icon3.addEventListener('click',()=>{
            if(mySong3.paused){
                mySong3.play();
                icon3.src = "pause.png.png";
                // icon.src ="fa-solid fa-forward"
            }else{
                mySong3.pause();
                icon3.src = "play.png.png";
                // mySong.play();

            }
        });
        // 3 NUMBER 
          
        mySong3.onloadedmetadata = function () {
            progress3.max = mySong3.duration;
            progress3.value = mySong3.currentTime;
          };
        
          if (mySong3.play()) {
            setInterval(() => {
              progress3.value = mySong3.currentTime;
            }, 500);
          }
        
          progress3.onchange = function () {
            mySong3.play();
            mySong3.currentTime = progress3.value;
          };


        // 4 NUMBER 

        icon4.addEventListener('click',()=>{
            if(mySong4.paused){
                mySong4.play();
                icon4.src = "pause.png.png";
                // icon.src ="fa-solid fa-forward"
            }else{
                mySong4.pause();
                icon4.src = "play.png.png";
                // mySong.play();

            }
        });

        // progress 
        mySong4.onloadedmetadata = function () {
            progress4.max = mySong4.duration;
            progress4.value = mySong4.currentTime;
          };
        
          if (mySong4.play()) {
            setInterval(() => {
              progress4.value = mySong4.currentTime;
            }, 500);
          }
        
          progress4.onchange = function () {
            mySong4.play();
            mySong4.currentTime = progress4.value;
          };
       
        // 5 NUMBER 
      

icon5.addEventListener('click',()=>{
    if(mySong5.paused){
        mySong5.play();
        icon5.src = "pause.png.png";
        // icon.src ="fa-solid fa-forward"
    }else{
        mySong5.pause();
        icon5.src = "play.png.png";
        // mySong.play();

    }
});

// progress 
mySong5.onloadedmetadata = function () {
    progress5.max = mySong5.duration;
    progress5.value = mySong5.currentTime;
  };

  if (mySong5.play()) {
    setInterval(() => {
      progress5.value = mySong5.currentTime;
    }, 500);
  }

  progress5.onchange = function () {
    mySong5.play();
    mySong5.currentTime = progress5.value;
  };

// 6 NUMBER  

icon6.addEventListener('click',()=>{
    if(mySong6.paused){
        mySong6.play();
        icon6.src = "pause.png.png";
        // icon.src ="fa-solid fa-forward"
    }else{
        mySong6.pause();
        icon6.src = "play.png.png";
    }
});

// progress
mySong6.onloadedmetadata = function () {
    progress6.max = mySong6.duration;
    progress6.value = mySong6.currentTime;
  };

  if (mySong6.play()) {
    setInterval(() => {
      progress6.value = mySong6.currentTime;
    }, 500);
  }

  progress6.onchange = function () {
    mySong6.play();
    mySong6.currentTime = progress6.value;
  };

   // 7 NUMBER 
 

icon7.addEventListener('click',()=>{
    if(mySong7.paused){
        mySong7.play();
        icon7.src = "pause.png.png";;
    }else{
        mySong7.pause();
        icon7.src = "play.png.png";
    }
});

// progress
mySong7.onloadedmetadata = function () {
    progress7.max = mySong7.duration;
    progress7.value = mySong7.currentTime;
  };

  if (mySong7.play()) {
    setInterval(() => {
      progress7.value = mySong7.currentTime;
    }, 500);
  }

  progress7.onchange = function () {
    mySong7.play();
    mySong7.currentTime = progress7.value;
  }


        // 8 NUMBER 

icon8.addEventListener('click',()=>{
     if (mySong8.paused) {
         mySong8.play();
        icon8.src ="pause.png.png"
        }else{
         mySong8.pause();
         icon8.src ="play.png.png"
     }
});

// progress 
mySong8.onloadedmetadata = function () {
    progress8.max = mySong8.duration;
    progress8.value = mySong8.currentTime;
  };

  if (mySong8.play()) {
    setInterval(() => {
      progress8.value = mySong8.currentTime;
    }, 500);
  }

  progress8.onchange = function () {
    mySong8.play();
    mySong8.currentTime = progress8.value;
  }

        // 9 NUMBER 

icon9.addEventListener('click',()=>{
    if(mySong9.paused){
        mySong9.play();
        icon9.src ="pause.png.png"
    }else{
        mySong9.pause();
        icon9.src ="play.png.png"
    }
});

// progress
mySong9.onloadedmetadata = function () {
    progress9.max = mySong9.duration;
    progress9.value = mySong9.currentTime;
  };

  if (mySong9.play()) {
    setInterval(() => {
      progress9.value = mySong9.currentTime;
    }, 500);
  }

  progress9.onchange = function () {
    mySong9.play();
    mySong9.currentTime = progress9.value;
  };


        // 10 NUMBER 


icon10.addEventListener('click',()=>{
    if (mySong10.paused) {
        mySong10.play();
        icon10.src ="pause.png.png"
    }else{
        mySong10.pause();
        icon10.src ="play.png.png"
    }
});

// progress 
mySong10.onloadedmetadata = function () {
    progress10.max = mySong10.duration;
    progress10.value = mySong10.currentTime;
  };

  if (mySong10.play()) {
    setInterval(() => {
      progress10.value = mySong10.currentTime;
    }, 500);
  }

  progress10.onchange = function () {
    mySong10.play();
    mySong10.currentTime = progress10.value;
  }

        // 11 NUMBER 

icon11.addEventListener('click',()=>{
    if (mySong11.paused) {
        mySong11.play();
        icon11.src = "pause.png.png"
    }else{
        mySong11.pause();
        icon11.src = "play.png.png"
    }
});
// progress
mySong11.onloadedmetadata = function () {
    progress11.max = mySong11.duration;
    progress11.value = mySong11.currentTime;
  };

  if (mySong11.play()) {
    setInterval(() => {
      progress11.value = mySong11.currentTime;
    }, 500);
  }

  progress11.onchange = function () {
    mySong11.play();
    mySong11.currentTime = progress11.value;
  }

 //12 NUMBER 

icon12.addEventListener('click',()=>{
    if (mySong12.paused) {
        mySong12.play();
        icon12.src = "pause.png.png"
    }else{
        mySong12.pause();
        icon12.src = "play.png.png"
    }
})
// progress
mySong12.onloadedmetadata = function () {
    progress12.max = mySong12.duration;
    progress12.value = mySong12.currentTime;
  };

  if (mySong12.play()) {
    setInterval(() => {
      progress12.value = mySong12.currentTime;
    }, 500);
  }

  progress12.onchange = function () {
    mySong12.play();
    mySong12.currentTime = progress12.value;
  }

        // 13 NUMBER 

icon13.addEventListener('click',()=>{
    if(mySong13.paused){
        mySong13.play();
        icon13.src ="pause.png.png"
    }else{
        mySong13.pause();
        icon13.src = "play.png.png"
    }
});

// progress
mySong13.onloadedmetadata = function () {
    progress13.max = mySong13.duration;
    progress13.value = mySong13.currentTime;
  };

  if (mySong13.play()) {
    setInterval(() => {
      progress13.value = mySong13.currentTime;
    }, 500);
  }

  progress13.onchange = function () {
    mySong13.play();
    mySong13.currentTime = progress13.value;
  }

        // 14 NUMBER 

icon14.addEventListener('click',()=>{
    if(mySong14.paused){
        mySong14.play();
        icon14.src ="pause.png.png"
    }else{
        mySong14.pause();
        icon14.src = "play.png.png"
    }
});
// progress
mySong14.onloadedmetadata = function () {
    progress14.max = mySong13.duration;
    progress14.value = mySong14.currentTime;
  };

  if (mySong14.play()) {
    setInterval(() => {
      progress14.value = mySong14.currentTime;
    }, 500);
  }

  progress14.onchange = function () {
    mySong14.play();
    mySong14.currentTime = progress14.value;
  }

        // 15 NUMBER 

icon15.addEventListener('click',()=>{
    if(mySong15.paused){
        mySong15.play()
        icon15.src = "pause.png.png"
    }else{
        mySong15.pause()
        icon15.src = "play.png.png"
    }
});
// progress
mySong15.onloadedmetadata = function () {
    progress15.max = mySong15.duration;
    progress14.value = mySong15.currentTime;
  };

  if (mySong15.play()) {
    setInterval(() => {
      progress15.value = mySong15.currentTime;
    }, 500);
  }

  progress15.onchange = function () {
    mySong15.play();
    mySong15.currentTime = progress15.value;
  }

  // 16 NUMBER

  icon16.addEventListener('click',()=>{
     if(mySong16.paused){
      mySong16.play();
      icon16.src =  "pause.png.png"
     }else{
      mySong16.pause();
      icon16.src = "play.png.png"
     }
  })

// progress
mySong16.onloadedmetadata = function(){
progress16.max = mySong16.duration;
progress16.value = mySong16.currentTime
}

if(mySong16.play()){
  setInterval(()=>{
    progress16.value = mySong16.currentTime
  }, 500);
}

progress16.addEventListener('click',()=>{
  mySong16.play()
  mySong16.currentTime = progress16.value;

})
                                    // END AND THANKU 