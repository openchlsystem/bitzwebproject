<template>
    <div class="row">
        <!-- <h2>Solutions</h2> -->

        <div class="column">
            <!-- Left column content goes here -->
            <ul>
                <li v-for="solution in SolutionsData" :key="solution.id">
                    <h3>{{ solution.title }}</h3>
                    <p>{{ solution.description }}</p>

                </li>
            </ul>
        </div>
       
    </div>
</template>

<script>
import { SolutionsData } from "@/utils/SolutionsData";


export default {
    setup() {


        return {
            SolutionsData,
        }
    }
}
</script>

<style lang="scss" scoped></style>
