<template>
    <section class="single-recipe">
        <h1>{{ recipe.title }}</h1>
        <div>
            <img :src="recipe.thumbnail" :alt="recipe.title" class="recipeImage">
        </div>
        <p>{{ recipe.previewText }}</p>
    </section>
</template>

<script>
export default {
    asyncData(context) {   // <- get's new data for this vue
        return new Promise((resolve, reject) => {
            setTimeout(() => {  //poc showing ajax request
                resolve({
                    recipe: [
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
                    ].find(el => el.id === context.params.id)
                })
            }, 0); //1500);
        })
    },
}
</script>

<style scoped>
    .single-recipe {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 1rem;
        flex-flow: column;
    }
    .recipeImage {
        height: 60vh;
    }
</style>
