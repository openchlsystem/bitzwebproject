<template>
    <div>

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
export default {

}
</script>

<style lang="scss" scoped></style>