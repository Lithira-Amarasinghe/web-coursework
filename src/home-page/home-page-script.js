var images = [
    "GOT.jpg",
    'money-heist.jpg',
    'last.jpg',
    'alice.jpg'
  ];
  
  var currentIndex = 0;
  
  for (var i = 0; i < images.length; i++) {
    var img = new Image();
    img.src = images[i];
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    var myDiv = document.getElementById('special');
  
    if (!myDiv) {
      console.error('Could not find element with ID "myDiv"');
      return;
    }
  
    setInterval(function() {
      currentIndex++;
      if (currentIndex == images.length) {
        currentIndex = 0;
      }
      myDiv.classList.add('hide');
      setTimeout(function() {
        myDiv.classList.remove('hide');
        myDiv.className = 'background-image background-image-' + currentIndex;
      }, 1000); 
    }, 5000); // 5000 milliseconds = 5 second
  });
  