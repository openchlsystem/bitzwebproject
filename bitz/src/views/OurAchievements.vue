<template>
    <div class="our-achievements">
        <h3>Our Achievements</h3>
        <p>Here are some of our notable achievements:</p>
        <ul>
            <li v-for="achievement in achievementsData" :key="achievement.id">
                <div class="achievements">
                    <div class="image-container">
                        <!-- Display the first image or main image -->
                        <img :src="achievement.images[0]" alt="Main Image">
                    </div>
                    <div class="description">
                        <div class="other-images">
                            <!-- Display the additional images -->
                            <img v-for="(image, index) in achievement.images.slice(1)" :key="index" :src="image"
                                alt="Additional Image">
                        </div>
                        <div class="achievement-text">
                            <h3>{{ achievement.title }}</h3>
                            <p>{{ achievement.description }}</p>
                            <p><strong>Year:</strong> {{ achievement.year }}</p>
                            <p><strong>Country:</strong> {{ achievement.country }}</p>
                            <p><strong>Partners:</strong> {{ achievement.partners.join(', ') }}</p>
                            <p><strong>Support:</strong> {{ achievement.support }}</p>
                            <p><strong>Key Features:</strong> {{ achievement.keyFeatures.join(', ') }}</p>
                            <p><strong>Impact:</strong> {{ achievement.impact }}</p>

                            
                        </div>
                    </div>
                    <div class="background-column">
                        <!-- Background column content -->
                        <p></p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import { achievementsData } from '@/utils/Achievements.js'
    export default {
        name: 'OurAchievements',
        setup() {
            return {
                achievementsData,
            }
        }
    };
</script>

<style>
    
</style>
