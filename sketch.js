let posX, posY;
let items = []; // new array is initialized
let showText = false; // boolean to control when the text appears

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  background(0, 10); // shape out
  fill(random(100, 255), random(100, 255), random(100, 255));
  noStroke();

  // Loop through the items array to draw ellipses
  for (let i = 0; i < items.length; i++) {
    let item = items[i];
    ellipse(item.posX, item.posY, random(5));
    item.posX = item.posX + item.speedX;
    item.posY = item.posY + item.speedY;

    // Remove the item if it's outside the canvas
    if (
      item.posX > width ||
      item.posY > height ||
      item.posX < 0 ||
      item.posY < 0
    ) {
      items.splice(i, 1); // remove item
    }
  }
  // Draw persistent text in the lower-left corner
  textAlign(LEFT, BOTTOM);
  textSize(40); // Set font size for the persistent text
  fill(random(100, 255), random(100, 255), random(100, 255));
  text("Wis(c)ht euch ein Feuerwerk!", 10, height - 10); // Position near the lower-left corner
}

function mouseMoved() {
  items.push({
    posX: mouseX,
    posY: mouseY,
    speedX: random(-1, 1),
    speedY: random(-1, 1),
  });
  textAlign(CENTER, CENTER);
  textSize(32);
  fill(random(100, 255), random(100, 255), random(100, 255));
  text("31.12.2024 20:00", width / 2, height / 2);
  text("Kahlstraße 17", width / 2, height / 1.8);
  text("bring snacks + drinks", width / 2, height / 1.65);
  text("❤️", width / 2, height / 1.5);
}

function touchMoved() {
  items.push({
    posX: mouseX,
    posY: mouseY,
    speedX: random(-1, 1),
    speedY: random(-1, 1),
  });
  textAlign(CENTER, CENTER);
  textSize(32);
  fill(random(100, 255), random(100, 255), random(100, 255));
  text("31.12.2024 20:00", width / 2, height / 2);
  text("Kahlstraße 17", width / 2, height / 1.8);
  text("bring snacks + drinks", width / 2, height / 1.65);
  text("❤️", width / 2, height / 1.5);
  return false; // Prevents default scrolling behavior on touch
}

function mousePressed() {
  background(255);
  textAlign(CENTER, CENTER);
  textSize(32);
  fill(random(100, 255), random(100, 255), random(100, 255));
  text("31.12.2024 20:00", width / 2, height / 2);
  text("Kahlstraße 17", width / 2, height / 1.8);
  text("bring snacks + drinks", width / 2, height / 1.65);
  text("❤️", width / 2, height / 1.5);
}

function touchStarted() {
  background(255);
  return false; // Prevents default scrolling behavior on touch
}
