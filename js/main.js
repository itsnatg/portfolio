function renderFrame(index) {
  const frameRate = 100; // Adjust the frame rate as needed (in milliseconds)

  // Replace 'gifElement' with the ID or class of your GIF element
  const gifElement = document.getElementById('word');

  // Check if the GIF element is found
  if (!gifElement) {
    console.error('GIF element not found');
    return;
  }

  // Clear the canvas or container element where you want to display the GIF
  gifElement.style.display = 'none';

  // Check if it's the last frame
  if (index >= frames.length - 1) {
    gifElement.style.display = 'block'; // Display the last frame
    gifElement.src = 'data:image/gif;base64,' + frames[index]; // Set the last frame explicitly
    return; // Stop the animation
  }

  gifElement.src = 'data:image/gif;base64,' + frames[index];

  // Delay the next frame rendering
  setTimeout(function () {
    // Increment the frame index
    index++;

    // Render the next frame
    renderFrame(index);
  }, frameRate);
}

// -----------------------GIF CIRCLE------------------------------
const circleImage = document.getElementById('circle');
const circleGif = document.getElementById('circle-gif');

circleImage.addEventListener('mouseenter', showGif);
circleImage.addEventListener('mouseleave', hideGif);

function showGif() {
  circleGif.style.display = 'block';
}

function hideGif() {
  circleGif.style.display = 'none';
}

//------------------------ENLARGE---------------------------




