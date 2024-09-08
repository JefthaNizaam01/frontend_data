<template>
    <div class="auth-container">
      <div class="center-container">
        <div class="text-center">
          <h1>Timeless</h1>
          <div class="auth-buttons" v-if="!showForm">
         
            <button @click="showForm = 'signup'" class="btn">Register</button>
            <button @click="showForm = 'login'" class="btn">Login</button>
          </div>
        </div>
        <Login v-if="showForm === 'login'" @close="showForm = null" />
        <SignUp v-if="showForm === 'signup'" @close="showForm = null" />
      </div>
    </div>
  </template>
  
  <script>
  import SignUp from '../components/SignUp.vue';
  import Login from '../components/LoginComp.vue';
  
  export default {
    name: 'AuthOptions',
    components: {
      SignUp,
      Login,
    },
    data() {
      return {
        showForm: null,
      };
    },
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poetsen+One&display=swap');
  
  .auth-container {
    text-align: center;
    background-color: #968e87; /* Updated background color */
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    background-position: center;
  }
  
  h1 {
    color: #fff; /* Updated text color for better contrast */
    font-family: "Poetsen One", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 5rem; /* Adjusted for a more elegant look */
    margin-bottom: 20px;
    text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5); /* Softer text shadow */
    letter-spacing: 1px; /* Slightly increased letter spacing for elegance */
  }
  
  .center-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    backdrop-filter: blur(5px);
  }
  
  .auth-buttons {
    margin-top: 20px;
  }
  
  .btn {
    margin: 0 10px;
    padding: 12px 24px;
    border: none;
    border-radius: 5px;
    font-size: 16px; /* Slightly smaller font size for a refined look */
    letter-spacing: 1px;
    text-transform: uppercase;
    color: white;
    background: linear-gradient(135deg, #b88d56, #d57a8e); /* Softer gradient colors */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); /* Softer shadow for elegance */
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3); /* Adjusted shadow for hover effect */
  }
  
  .btn:active {
    transform: translateY(0);
  }
  
  @media only screen and (max-width: 767px) {
    .auth-container {
      background-position: center;
    }
  }
  </style>
  