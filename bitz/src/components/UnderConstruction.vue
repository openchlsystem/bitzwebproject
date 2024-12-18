<template>
    <div class="construction-container">
        <img src="https://picsum.photos/seed/picsum/300/200" alt="Construction Image" />
        <h1>Page Under Maintenance</h1>
        <p>We're working hard to grow our community! Please check back later.</p>
        <a href="/" class="home-button">Return to Homepage</a>
        <div class="contact-info">
            <p>If you have any questions, contact us at <a href="mailto:info@example.com">support@bitz-itc.com</a></p>
        </div>
    </div>
</template>

<script setup>
    // No additional setup needed
</script>

<style scoped>
    body {
        margin: 0;
        padding: 0;
        font-family: 'Arial', sans-serif;
        background-color: #f0f0f0;
        color: #333;
    }

    .construction-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        text-align: center;
        padding: 20px;
        background-color: #ffffff;
        box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        max-width: 500px;
        margin: 0 auto;
    }

    .construction-container img {
        width: 100%;
        max-width: 300px;
        height: auto;
        border-radius: 8px;
        margin-bottom: 20px;
        object-fit: cover;
    }

    .construction-container h1 {
        font-size: 32px;
        margin-bottom: 15px;
        color: #FF6347;
    }

    .construction-container p {
        font-size: 16px;
        margin-bottom: 20px;
        color: #666;
    }

    .home-button {
        display: inline-block;
        padding: 10px 20px;
        font-size: 16px;
        color: #fff;
        background-color: #FF6347;
        text-decoration: none;
        border-radius: 5px;
        transition: background-color 0.3s ease;
    }

    .home-button:hover {
        background-color: #e5533d;
    }

    .contact-info {
        margin-top: 20px;
        font-size: 14px;
        color: #999;
    }

    .contact-info a {
        color: #007bff;
        text-decoration: none;
    }

    .contact-info a:hover {
        text-decoration: underline;
    }
</style>
