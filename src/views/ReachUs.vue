<template>
  <main class="container-fluid timeless-background">
    <section class="container" id="contactinfo">
      <div class="row justify-content-center">
        <h2 id="contactz" class="display-4 timeless-heading">Contact Us</h2>
      </div>
      <div class="col-md-8 mx-auto">
        <div class="card timeless-card">
          <div class="card-body text-dark">
            <div class="contact-details">
              <p class="timeless-text">
                <i class="bi bi-telephone-fill timeless-icon"></i> Phone: 084-734-9535
              </p>
              <p class="timeless-text">
                <i class="bi bi-envelope-fill timeless-icon"></i> Email: RetroVision@gmail.com
              </p>
              <p class="timeless-text">
                <i class="fa-sharp fa-solid fa-location-dot timeless-icon"></i> Address: Cape Town, South Africa
              </p>
              <p class="timeless-text">
                <i class="fa-brands fa-instagram timeless-icon"></i>
                <i class="fa-brands fa-facebook timeless-icon"></i>
                <i class="fa-brands fa-twitter timeless-icon"></i>
              </p>
            </div>
            <form action="https://formspree.io/f/mleqqlvy" method="POST">
              <h3 class="timeless-form-heading">How can we assist you?</h3>
              <div class="mb-3">
                <label for="exampleInputName" class="form-label timeless-label">Name</label>
                <input
                  name="name"
                  type="text"
                  class="form-control timeless-input"
                  id="exampleInputName"
                  aria-describedby="nameHelp"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label timeless-label">Email address</label>
                <input
                  name="email"
                  type="email"
                  class="form-control timeless-input"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  required
                />
              </div>
              <div class="mb-3">
                <label id="message" class="form-label timeless-label">Message</label>
                <textarea
                  name="message"
                  class="form-control timeless-textarea"
                  id="exampleInputMessage"
                  required
                ></textarea>
              </div>
              <div class="button-group">
                <button id="sub" type="submit" class="btn timeless-button">Submit</button>
                <button id="clearer" type="reset" class="btn timeless-button">Clear</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'ContactForm'
}
</script>

<style scoped>
.timeless-background {

  background-color: #d2c9c2;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  min-height: 100vh;
}

.timeless-heading {
  font-family: 'Garamond', serif;
  color: #2c3e50;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  margin-bottom: 1.5rem;
  text-align: center;
}

.timeless-card {
  background-color: rgba(255, 255, 255, 0.9);
  border: 1px solid #ccc;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  padding: 2rem;
}

.contact-details {
  margin-bottom: 2rem;
}

.timeless-text {
  font-family: 'Garamond', serif;
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.timeless-icon {
  color: #34495e;
  margin-right: 8px;
}

.timeless-form-heading {
  font-family: 'Garamond', serif;
  color: #2c3e50;
  margin-bottom: 1rem;
  text-align: center;
}

.timeless-label {
  font-family: 'Garamond', serif;
  color: #34495e;
}

.timeless-input, .timeless-textarea {
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f7f7f7;
}

.timeless-button {
  background-color: #2c3e50;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-family: 'Garamond', serif;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.timeless-button:hover {
  background-color: #34495e;
}
</style>
