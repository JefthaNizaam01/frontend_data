<template>
    <div class="auth-container">
      <div class="center-container">
        <div class="text-center">
          <h1>Timeless</h1>
          <div class="auth-buttons" v-if="!showForm">
            <button @click="showForm = 'login'" class="btn">Login</button>
            <button @click="showForm = 'signup'" class="btn">Register</button>
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
    background-size: cover; 
    background-repeat: no-repeat; 
    height: 100vh;
    background-position: center;
    animation: backgroundAnimation 60s infinite linear;
  }
  
  @keyframes backgroundAnimation {
    0% { background-position: 0% 0%; }
    50% { background-position: 100% 100%; }
    100% { background-position: 0% 0%; }
  }
  
  h1 {
    color: rgb(167, 103, 51);
    font-family: "Poetsen One", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 7rem;
    margin-bottom: 20px;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
    animation: textGlow 1.5s ease-in-out infinite;
  }
  
  @keyframes textGlow {
    0% { text-shadow: 0 0 5px rgb(218, 122, 32); }
    50% { text-shadow: 0 0 20px rgb(207, 139, 75); }
    100% { text-shadow: 0 0 5px goldenrod; }
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
    font-size: 18px;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: white;
    background: linear-gradient(135deg, #b88d56, #FF6F61);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
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
  