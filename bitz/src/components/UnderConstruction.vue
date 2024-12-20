<template>
    <div class="coming-soon-container">
        <!-- Left Section -->
        <div class="left-section">
            <h1>UNDER CONSTRUCTION</h1>
            <h2>This Page Will Be Available Soon</h2>
            <p>
                Sign up for our latest blog posts and be the first to know when we go live!
            </p>
            <button class="signup-button">Sign Up!</button>
        </div>

        <!-- Right Section -->
        <div class="right-section">
            <div class="decorative-box"></div>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
/* General Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Import Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Playfair+Display:wght@400;700&display=swap');

/* Container */
.coming-soon-container {
    display: flex; 
    flex-direction: row; 
    height: 100vh;
    width: 100%;
    font-family: 'Roboto', sans-serif;
    color: #ffffff;
    background-color: #0b022a;
    overflow-x: hidden;
}

/* Left Section */
.left-section {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 3rem; 
    min-height: 50vh; 
}

.left-section h1 {
    font-family: 'Playfair Display', serif;
    font-size: 3rem; 
    font-weight: 700;
    letter-spacing: 3px;
    margin-bottom: 1.5rem; 
    color: #eceff4;
}

.left-section h2 {
    font-family: 'Roboto', sans-serif;
    font-size: 1.5rem; 
    font-weight: 500;
    margin-bottom: 2rem; 
    color: #b0c4de;
}

.left-section p {
    font-size: 1rem; 
    line-height: 1.6;
    font-weight: 400;
    margin-bottom: 2rem; 
    color: #dbe2ef;
    width: 90%;
}

/* Button */
.signup-button {
    background-color: #ffffff;
    color: #0b022a;
    padding: 1rem 2.5rem; 
    border: none;
    border-radius: 50px;
    font-size: 1rem; 
    font-weight: 500;
    text-transform: uppercase;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
    margin-top: 1.5rem; 
}

.signup-button:hover {
    background-color: #dbe2ef;
    transform: translateY(-3px);
}

/* Right Section */
.right-section {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #02184c, #0b022a);
    clip-path: polygon(15% 0, 100% 0, 100% 100%, 0 100%);
    position: relative;
    min-height: 50vh; 
}

.decorative-box {
    width: 300px; 
    height: 300px; 
    background-color: #ffffff;
    border-radius: 50%;
    opacity: 0.1;
    animation: float 5s infinite alternate ease-in-out;
}

/* Floating Animation */
@keyframes float {
    from {
        transform: translateY(0);
    }
    to {
        transform: translateY(-20px);
    }
}

/* Responsive Design */
@media (max-width: 768px) {
    .coming-soon-container {
        flex-direction: column; 
        text-align: center;
    }

    
    .left-section {
        padding: 2rem; 
        min-height: auto; 
    }

    .left-section h1 {
        font-size: 2rem; 
        margin-bottom: 1rem; 
    }

    .left-section h2 {
        font-size: 1.2rem; 
        margin-bottom: 1.5rem; 
    }

    .left-section p {
        font-size: 0.9rem;
        margin-bottom: 1.5rem; 
    }

    .signup-button {
        font-size: 0.8rem; 
        padding: 0.8rem 2rem; 
    }

   
    .right-section {
        height: auto; 
        clip-path: none; 
        padding: 1rem 0; 
    }

    .decorative-box {
        width: 150px; 
        height: 150px; 
    }
}
</style>
