function saklar(lamp) {

      let toogle1 = document.getElementById("default-toogle1");
      let toogle2 = document.getElementById("default-toogle2");
      let toogle3 = document.getElementById("default-toogle3");
      let toogle4 = document.getElementById("default-toogle4");
      if (toogle1.checked) {
        lampu1.src = "assets/on.gif";
      } else {
        lampu1.src = "assets/off.gif";
      }
    
      if (toogle2.checked) {
        lampu2.src = "assets/on.gif";
      } else {
        lampu2.src = "assets/off.gif";
      }
      if (toogle3.checked) {
        lampu3.src = "assets/on.gif";
      } else {
        lampu3.src = "assets/off.gif";
      }
      if (toogle4.checked) {
        lampu4.src = "assets/on.gif";
      } else {
        lampu4.src = "assets/off.gif";
      }
}    