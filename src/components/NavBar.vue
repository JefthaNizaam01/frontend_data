<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top">
        <div class="container-fluid">
            <router-link class="navbar-brand" to="/">
                <img src="https://jefthanizaam01.github.io/favoriteimages/images/timeless logo.png" loading="lazy" alt="logo">
            </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link" aria-current="page" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/about">About</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/products">Products</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/admin">Admin</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/reachUs">Reach us</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.navbar {
   margin: 0;
   padding: 0; 
}

.nav-link {
    color: #332d28;
    font-weight: bold;
    font-family: 'Playfair Display', serif; /* Elegant serif font */
    font-size: 20px;
}

.navbar-nav .nav-link:hover {
    color: #d2c9c2; 
}

.navbar-nav .nav-link:visited {
    color: #968e87; 
}

.navbar-nav .nav-link:active {
    color: rgb(129, 116, 116); 
}

.container-fluid {
    background-color: #e2dbd6; 
}

    
</style>
