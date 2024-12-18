<template>
    <div class="coming-soon-container">
        <!-- Left Section -->
        <div class="left-section">
            <h1>UNDER CONSTRUCTION</h1>
            <h2>This Page will be available soon</h2>
            <p>
                Sign up for our latest blog posts and be the first to know when we go live!
            </p>
            <button class="signup-button">Sign Up!</button>

            <!-- Social Media Icons -->
            <div class="social-icons">
                <a href="#"><i class="fab fa-pinterest"></i></a>
                <a href="#"><i class="fab fa-facebook"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
            </div>
        </div>

        <!-- Right Section -->
        <div class="right-section">
            <!-- Background image -->
        </div>
    </div>
</template>

<script setup>
    // Vue 3 Composition API script (if needed for logic)
</script>

<style scoped>

    /* Container */
    .coming-soon-container {
        display: flex;
        height: 100vh;
        font-family: 'Arial', sans-serif;
        color: #fff;
    }

    /* Left Section */
    .left-section {
        background-color: #0b022a;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 3rem;
        text-align: center;
    }

    .left-section h1 {
        font-size: 1.8rem;
        letter-spacing: 2px;
        margin-bottom: 1rem;
    }

    .left-section h2 {
        font-size: 2.2rem;
        margin: 0.5rem 0;
    }

    .left-section p {
        font-size: 1rem;
        margin: 1rem 0 2rem;
    }

    .signup-button {
        background-color: #fff;
        color: #000;
        border: none;
        padding: 0.8rem 2rem;
        cursor: pointer;
        font-weight: bold;
        border-radius: 5px;
        transition: 0.3s;
    }

    .signup-button:hover {
        background-color: #f4f4f4;
    }

    /* Social Icons */
    .social-icons {
        display: flex;
        justify-content: center;
        margin-top: 1rem;
        gap: 1.5rem;
    }

    .social-icons a {
        color: #fff;
        font-size: 1.5rem;
        transition: 0.3s;
    }

    .social-icons a:hover {
        color: #aaa;
    }

    /* Right Section */
    .right-section {
        flex: 1;
        /* background: url('/path-to-your-background-image/undercontruction.jpg') no-repeat center center/cover; */
        transform: skewX(-10deg);
        margin-left: -5rem;
    }
</style>
