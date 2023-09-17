// Get the grid container and create an empty colorQueue array
const gridContainer = document.getElementById('b3');
const colorQueue = [];

// Get references to page elements
const page1 = document.querySelector('.check');
const page2 = document.querySelector('.page2');

// Create a 3x3 grid using nested loops
for (let row = 1; row <= 3; row++) {
    const rowContainer = document.createElement('div');

    for (let col = 1; col <= 3; col++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('smallbox');
        rowContainer.appendChild(gridItem);

        // Add a click event listener to grid items
        gridItem.onclick = function () {
            if (row !== 3 || col !== 3) {
                this.style.backgroundColor = 'red';
                colorQueue.push(this);
            } else {
                this.style.backgroundColor = 'red';
                colorQueue.push(this);
                const allGridItems = document.querySelectorAll('.smallbox');
                processQueue();
            }
        };
    }
    gridContainer.appendChild(rowContainer);
}

// Process the colorQueue
function processQueue() {
    if (colorQueue.length > 0) {
        const item = colorQueue.shift(); // Dequeue the next item
        item.style.backgroundColor = 'blue';

        setTimeout(function () {
            processQueue(); // Process the next item after a 0.5-second delay
        }, 500);
    }
}

// Function to switch to page 1
function go_to_page1() {
    page1.style.display = "block";
    page2.style.display = "none";
}

// Function to switch to page 2
function go_to_page2() {
    page1.style.display = "none";
    page2.style.display = "block";
}
