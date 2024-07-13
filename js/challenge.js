//setInterval() to increment the counter every second.
document.addEventListener('DOMContentLoaded', () => {
    let counter = 0;
    let intervalID;
    const counterDisplay = document.getElementById('counter');
  
    function startTimer() {
      intervalID = setInterval(() => {
        counter++;
        counterDisplay.textContent = counter;
      }, 1000);
    }
  
    startTimer();

    //event listeners to the plus and minus buttons to manually increment and decrement the counter.
    const plusButton = document.getElementById('plus');
    const minusButton = document.getElementById('minus');

    plusButton.addEventListener('click', () => {
        counter++;
        counterDisplay.textContent = counter;
    });

    minusButton.addEventListener('click', () => {
        counter--;
        counterDisplay.textContent = counter;
    });

    //event listener to the like button to like the current number.
    const likeButton = document.getElementById('heart');
    const likesList = document.querySelector('.likes');
    let likes = {};

    likeButton.addEventListener('click', () => {
        likes[counter] = (likes[counter] || 0) + 1;
        let li = document.getElementById(`like-${counter}`);
        if (li) {
        li.textContent = `${counter} has been liked ${likes[counter]} times`;
        } else {
        li = document.createElement('li');
        li.id = `like-${counter}`;
        li.textContent = `${counter} has been liked ${likes[counter]} times`;
        likesList.appendChild(li);
        }
    });

    // Implement a pause button to pause and resume the counter.
    const pauseButton = document.getElementById('pause');
    let isPaused = false;

    pauseButton.addEventListener('click', () => {
        if (isPaused) {
        startTimer();
        pauseButton.textContent = 'pause';
        toggleButtons(false);
        } else {
        clearInterval(intervalID);
        pauseButton.textContent = 'resume';
        toggleButtons(true);
        }
        isPaused = !isPaused;
    });

    function toggleButtons(disable) {
        plusButton.disabled = disable;
        minusButton.disabled = disable;
        likeButton.disabled = disable;
    }

    //Allow users to leave comments.
    const commentForm = document.getElementById('comment-form');
    const commentList = document.getElementById('list');

    commentForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const commentInput = document.getElementById('comment-input');
        const comment = commentInput.value;
        const p = document.createElement('p');
        p.textContent = comment;
        commentList.appendChild(p);
        commentForm.reset();
    });
    
  });