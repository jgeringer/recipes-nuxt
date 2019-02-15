<template>
    <section class="recipes">
        <Recipe 
            v-for="recipe in recipes"
            :key="recipe.id"
            :title="recipe.title"
            :thumbnail="recipe.thumbnail"
            :id="recipe.id"
            :previewText="recipe.previewText">
        </Recipe>
    </section>
</template>

<script>
import Recipe from '@/components/Recipe'

export default {
    components: {
        Recipe
    },
    asyncData() {   // <- get's new data for this vue
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    recipes: [
                        {
                            id: '1',
                            title: 'Burger',
                            thumbnail: 'https://amp.businessinsider.com/images/5a7dc169d03072af008b4bf2-750-562.jpg',
                            previewText: 'Awesome Burger!'
                        },
                        {
                            id: '2',
                            title: 'Good Food',
                            thumbnail: 'https://www.drdavidludwig.com/wp-content/uploads/2017/01/1-RIS_6IbCLYv1X3bzYW1lmA.jpeg',
                            previewText: 'This is amazing food!'
                        }
                    ]
                })
            }, 0); // 1500);
        })
    },
}
</script>

<style scoped>
.recipes {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
}
    
</style>
