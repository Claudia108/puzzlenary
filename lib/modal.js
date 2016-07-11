import $ from 'jQuery';

  function testSp()
  {
    alert("hit");
  }
  window.onload=testSp;


$(document).ready ( function(){
  var modal = document.getElementById('myModal');
       modal.style.display = "block";
});​

var span = document.getElementsByClassName("close")[0];

window.onload = function() {
    modal.style.display = "block";
};

span.onclick = function() {
    modal.style.display = "none";
};

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
