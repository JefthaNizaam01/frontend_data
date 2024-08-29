<template>
  <div class="about">
    <div class="about-image">
      <img src="https://jefthanizaam01.github.io/favoriteimages/images/timeclock.jpg" alt="Elegant Watch">
    </div>
    <div class="about-content">
      <header class="about-header">
        <h1>About Us</h1>
        <h2>Where Every Second Counts.</h2>
      </header>
      <section class="about-text">
        <p>
          At Timeless, we believe that every moment is precious. Our e-commerce store is dedicated to more than just selling watches; we are committed to celebrating the art of timekeeping. In a world where time seems to slip through our fingers faster than we realize, Timeless serves as a reminder to cherish each fleeting second.
        </p>
        <p>
          At Timeless, we understand that time is one of the most valuable resources we have. We strive to offer you watches that are more than just accessories—they are symbols of the moments that shape our lives. Discover watches that resonate with your style and appreciate the beauty of time with Timeless. 
        </p>
      </section>
    </div>
  </div>
</template>

<style scoped>
.about {
  display: flex;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(to bottom right, #3d3b39, #ece7e2);
  padding: 40px;
}

.about-image {
  flex: 1;
  max-width: 50%;
  margin-right: 30px;
}

.about-image img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.about-content {
  flex: 1.5;
  padding: 40px;
  background-color: rgba(218, 208, 208, 0.95);
  border-radius: 15px;
  animation: fadeIn 2s ease-in-out;
  border: 1px solid #e0dcd7;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.about-header {
  margin-bottom: 36px;
  border-bottom: 2px solid #ddd;
  padding-bottom: 20px;
  text-align: center;
}

.about-header h1 {
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 15px;
  font-family: 'Playfair Display', serif;
  color: #847272;
  letter-spacing: 2px;
  text-transform: uppercase;
  animation: textGlow 2s ease-in-out infinite alternate;
}

.about-header h2 {
  font-size: 30px;
  font-weight: 300;
  color: #666;
  margin-bottom: 40px;
  font-family: 'Garamond', serif;
  font-style: italic;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
}

.about-text {
  text-align: justify;
}

.about-text p {
  margin-bottom: 20px;
  font-size: 18px;
  line-height: 1.6;
  color: #555;
  font-family: 'Georgia', serif;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes textGlow {
  0% {
    text-shadow: 0 0 5px #ccc, 0 0 10px #aaa, 0 0 15px #888;
  }
  100% {
    text-shadow: 0 0 10px #fff, 0 0 20px #ccc, 0 0 30px #aaa;
  }
}

@media (max-width: 768px) {
  .about {
    flex-direction: column;
  }

  .about-image {
    max-width: 100%;
    margin-bottom: 20px;
  }

  .about-content {
    width: 100%;
  }
}
</style>
