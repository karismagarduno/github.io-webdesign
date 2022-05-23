function house1() {
    var house1a = document.getElementById('house1before');
    var house1b = document.getElementById('house1after');
    var displaySetting = house1a.style.opacity;
    if (displaySetting == 1) {
      house1a.style.opacity = 0;
      house1b.style.opacity = 1;
      document.getElementById('house1text').innerHTML = "After: ";
      console.log("1");
    }
    else {
      house1a.style.opacity = 1;
      house1b.style.opacity = 0;
      console.log("2");
      document.getElementById('house1text').innerHTML = "Before: ";
    }
  }
  
  function house2() {
    var house2a = document.getElementById('house2before');
    var house2b = document.getElementById('house2after');
    var displaySetting = house2a.style.opacity;
    if (displaySetting == 1) {
      house2a.style.opacity = 0;
      house2b.style.opacity = 1;
      document.getElementById('house2text').innerHTML = "After: ";
      console.log("3");
    }
    else {
      house2a.style.opacity = 1;
      house2b.style.opacity = 0;
      console.log("4");
      document.getElementById('house2text').innerHTML = "Before: ";
    }
  }