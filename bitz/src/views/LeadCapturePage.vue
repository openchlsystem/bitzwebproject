<template>
    <div class="lead-capture">
        <h2>JOIN OUR Community!</h2>

        <form class="form" @submit.prevent="handleSubmit">
            <h2>Contact Us</h2>

            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" v-model="name" @blur="validateName" required />
                <span v-if="errors.name" class="error">{{ errors.name }}</span>
            </div>

            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="email" @blur="validateEmail" required />
                <span v-if="errors.email" class="error">{{ errors.email }}</span>
            </div>

            <div class="form-group">
                <label for="message">Message:</label>
                <textarea id="message" v-model="message" @blur="validateMessage" rows="10" cols="50"
                    required></textarea>
                <span v-if="errors.message" class="error">{{ errors.message }}</span>
            </div>

            <button type="submit" class="form-submit-btn" :disabled="isSubmitting">
                {{ isSubmitting ? 'Sending...' : 'Submit' }}
            </button>
        </form>
    </div>
</template>



<script>
    import { ref } from 'vue';

    export default {
        props: {
            buttonText: String,
        },


        setup() {


            const name = ref('');
            const email = ref('');
            const message = ref('');
            const errors = ref({});
            const isSubmitting = ref(false);
            const successMessage = ref('');



            const validateName = () => {
                if (!name.value) {
                    errors.value.name = 'Name is required.';
                } else {
                    delete errors.value.name;
                }
            };

            const validateEmail = () => {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!email.value) {
                    errors.value.email = 'Email is required.';
                } else if (!emailPattern.test(email.value)) {
                    errors.value.email = 'Please enter a valid email.';
                } else {
                    delete errors.value.email;
                }
            };

            const validateMessage = () => {
                if (!message.value) {
                    errors.value.message = 'Message is required.';
                } else {
                    delete errors.value.message;
                }
            };

            const handleSubmit = async () => {
                validateName();
                validateEmail();
                validateMessage();

                if (Object.keys(errors.value).length === 0) {
                    isSubmitting.value = true;
                    try {
                        // Simulate form submission
                        await new Promise(resolve => setTimeout(resolve, 1000));
                        successMessage.value = 'Your message has been sent successfully!';
                        name.value = '';
                        email.value = '';
                        message.value = '';
                    } catch (error) {
                        console.error('Failed to send the message:', error);
                    } finally {
                        isSubmitting.value = false;
                    }
                }
            };

            return {
                handleSubmit,
                name,
                email,
                message,
                errors,
                isSubmitting,
                successMessage,
                validateName,
                validateEmail,
                validateMessage
            };
        }



        
    }

    
</script>

<style scoped>

</style>
