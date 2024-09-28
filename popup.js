document.getElementById('start').addEventListener('click', function() {
    document.getElementById('discoMusic').play();
  });
  
  document.getElementById('stop').addEventListener('click', function() {
    document.getElementById('discoMusic').pause();
    document.getElementById('discoMusic').currentTime = 0; // Reset to start
  });
  