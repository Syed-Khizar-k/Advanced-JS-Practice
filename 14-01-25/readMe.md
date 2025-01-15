<h1>Carousel Implementation</h1>

<p>This carousel is implemented using two main functions and some event listeners.</p>

---

<h2>1. Update Function</h2>

<pre>
<code>
function update() {
  offset = -index * 100;
  items.forEach((item) => {
    item.style.transform = `translateX(${offset}%)`;
  });

  // Update the active dot
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[index].classList.add("active");
}
</code>
</pre>

<p>
The <code>update()</code> function calculates the offset based on the <code>index</code> value
(<code>offset = -index * 100</code>). It updates the <code>transform</code> property of each image for proper displacement
and ensures the navigation dots change color based on the current image.
</p>

---

<h2>2. Next and Previous Buttons</h2>

<pre>
<code>
nextButton.addEventListener("click", () => {
  index = (index + 1) % items.length; // Move to the next image (looping back to the start if at the end).
  update(); // Call the update function
});

prevButton.addEventListener("click", () => {
  index = (index - 1 + items.length) % items.length; // Move to the previous image (looping back if at the start).
  update(); // Call the update function
});
</code>
</pre>

<p>
I added event listeners on both buttons to calculate the <code>index</code> and then call the <code>update()</code> function to adjust the images and dots accordingly.
</p>

---

<h2>3. Automatic Image Sliding Function</h2>

<pre>
<code>
function automate() {
  index++;
  if (index >= items.length) {
    index = 0;
  }
  items.forEach((item) => {
    item.style.transform = `translateX(-${index * 100}%)`;
  });
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

// Time interval function to call automate() every 3 seconds
setInterval(automate, interval);
</code>
</pre>

<p>
The <code>automate()</code> function increments the <code>index</code> and resets it if it exceeds the total number of images.
It then adjusts the images and updates the navigation dots. The <code>setInterval()</code> method ensures this function runs every 3 seconds.
</p>

---

<h2>Features</h2>

<ul>
  <li>Responsive carousel with smooth sliding transitions.</li>
  <li>Next and previous buttons for manual navigation.</li>
  <li>Automatic image sliding every 3 seconds.</li>
  <li>Navigation dots that update based on the current image.</li>
</ul>
