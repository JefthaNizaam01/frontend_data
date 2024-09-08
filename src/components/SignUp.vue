<template>
    <div class="signup-container">
      <h1>Sign Up</h1>
      <form @submit.prevent="register">
        <div class="form-group">
          <!-- Form Fields -->
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="First Name"
              v-model="payload.firstName"
              required
            />
          </div>
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Last Name"
              v-model="payload.lastName"
              required
            />
          </div>
          <div class="mb-3">
            <input
              type="number"
              class="form-control"
              placeholder="Age"
              v-model="payload.userAge"
              required
            />
          </div>
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Gender"
              v-model="payload.Gender"
              required
            />
          </div>
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Role e.g. user"
              v-model="payload.userRole"
            />
          </div>
          <div class="mb-3">
            <input
              type="email"
              class="form-control"
              placeholder="Email Address"
              v-model="payload.emailAdd"
              required
            />
          </div>
          <div class="mb-3">
            <input
              type="password"
              class="form-control"
              placeholder="Password"
              v-model="payload.userPass"
              required
            />
          </div>
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Profile Picture URL"
              v-model="payload.userProfile"
              required
            />
          </div>
        </div>
        <div class="form-footer">
          <button type="button" class="btn btn-secondary" @click="$emit('close')">Close</button>
          <button type="submit" class="btn btn-primary">Sign Up</button>
        </div>
      </form>
  
      <!-- Loading Spinner -->
      <div v-if="loading" class="loading-spinner">
        <SpinnerComp />
      </div>
  
      <!-- Success Modal -->
      <div v-if="showModal" class="modal fade show d-block" tabindex="-1" aria-labelledby="successModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="successModalLabel">Success</h5>
            </div>
            <div class="modal-body">
              <p>You have successfully signed up! Click the button below to log in.</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" @click="showModal = false">Close</button>
              <button type="button" class="btn btn-primary" @click="redirectToLogin">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import SpinnerComp from '@/components/SpinnerComp.vue'; // Import the spinner component
  
  export default {
    name: 'SignUp',
    components: {
      SpinnerComp // Register the spinner component
    },
    data() {
      return {
        payload: {
          firstName: "",
          lastName: "",
          userAge: null,
          Gender: "",
          userRole: "",
          emailAdd: "",
          userPass: "",
          userProfile: "",
        },
        showModal: false,
        loading: false, // Track loading state
      };
    },
    methods: {
      async register() {
        this.loading = true; // Show spinner
        try {
          await this.$store.dispatch('register', this.payload);
          this.showModal = true; // Show modal on success
        } catch (error) {
          console.error(error);
        } finally {
          this.loading = false; // Hide spinner
        }
      },
      redirectToLogin() {
        this.showModal = false;
        this.$router.push('/login'); // Redirect to login
      },
    },
  };
  </script>
  
  <style scoped>
  .signup-container {
    width: 30rem;
    margin: 2rem auto;
    padding: 20px;
    border: 1px solid #dcdcdc;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    background: linear-gradient(135deg, #f3f4f6, #e9ecef);
  }
  
  h1 {
    text-align: center;
    color: #343a40;
    font-size: 2.5rem;
    font-family: 'Garamond', serif;
    margin-bottom: 1.5rem;
  }
  
  .form-control {
    width: 100%;
    padding: 10px;
    border: 1px solid #ced4da;
    border-radius: 8px;
    font-size: 1rem;
    margin-bottom: 1rem;
  }
  
  .form-control::placeholder {
    color: #6c757d;
  }
  
  .form-footer {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
  }
  
  .btn {
    font-family: 'Garamond', serif;
    font-size: 1rem;
    padding: 10px 15px;
    border: 1px solid transparent;
    border-radius: 8px;
    text-align: center;
    text-transform: uppercase;
    transition: background-color 0.3s, color 0.3s;
  }
  
  .btn-primary {
    background-color: #343a40;
    color: #f8f9fa;
    border-color: #343a40;
  }
  
  .btn-primary:hover {
    background-color: #495057;
    color: #ffffff;
  }
  
  .btn-secondary {
    background-color: #f8f9fa;
    color: #343a40;
    border-color: #ced4da;
  }
  
  .btn-secondary:hover {
    background-color: #e9ecef;
    color: #495057;
  }
  
  .modal.show.d-block {
    display: flex !important;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.6);
  }
  
  .modal-dialog {
    max-width: 400px;
    margin: 1.5rem auto;
  }
  
  .modal-content {
    border-radius: 12px;
    background: #ffffff;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }
  
  .modal-header, .modal-footer {
    border-bottom: 1px solid #e9ecef;
    border-top: 1px solid #e9ecef;
  }
  
  .loading-spinner {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1050;
  }
  </style>
  