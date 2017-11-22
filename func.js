function unhide(clickedButton, divID) {
  var item = document.getElementById(divID);
  if (item) {
      //if(item.className=='hidden') {
      //    item.className = 'unhidden';
          var movie = Math.floor(Math.random() * 8);
          item.innerHTML = '<img src="media/' + movie + '.jpg" sizes="(max-width: 471px) 100vw, 471px" width="471" height="701">';
      //}
      //else {
      //    item.className = 'hidden';
      //}
}}
