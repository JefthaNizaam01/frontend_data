<template> 
    <NavBar/> 
        <div class="container">
          <h1 class="display-3">Checkout</h1>
          <table>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Category</th>
                <th>Product</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="cartItems && cartItems.length > 0">
                <td v-for="item in cartItems" :key="item.cartID"></td>
                  <td>{{ item.prodName }}</td>
                  <td>{{ item.category }}</td>
                  <td><img :src="item.prodURL" alt="Product Image" /></td>
                  <td>{{ item.quantity }}</td>
                  <td>${{ item.amount.toFixed(2) }}</td>
                  <td>
                    <button @click="removeItem(item.prodID)" class="btn btn-danger">Remove</button>
                  </td>
                </tr>
             
              <tr v-if="cartItems && cartItems.length > 0">
                <td colspan="7" class="text-center">Your cart is empty.</td>
              </tr>
            </tbody>
          </table>
          <button @click="clearCart" class="btn btn-secondary">Clear Cart</button>
          <button @click="payNow" class="btn btn-primary">Pay Now</button>
        </div>
    
    </template>