document.getElementById("demo").innerHTML = "Hello JavaScript";
demo = setInterval(frame, 5);

function frame() {
  if (/* test for finished */) {
    clearInterval(demo);
  } else {
    /* code to change the element style */ 
  }
}