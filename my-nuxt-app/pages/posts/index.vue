<template>
    <div class="posts-page">
        <PostList :posts="loadedPosts" />
    </div>
</template>

<script>
import PostList from '@/components/Posts/PostList'

export default {
    components: {
        PostList
    },
    asyncData(context) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    loadedPosts: [
                        { id: '1', title: 'First Post', previewText: 'This is our first post!', thumbnail: 'https://files.pitchbook.com/website/images/content/Chip_board.png' },
                        { id: '2', title: 'Not first Post', previewText: 'This is our second post!', thumbnail: 'https://images.pexels.com/photos/1161446/pexels-photo-1161446.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=450&w=860' },
                        { id: '3', title: 'A third Post', previewText: 'This is our third post!', thumbnail: 'https://images.pexels.com/photos/351448/pexels-photo-351448.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' }
                    ]
                });
            }, 1500)
        })
        .then(data => {
            return data
        })
        .catch(e => {
            context.error(new Error());
        })        
    }
    // data() {
    //     return {
    //         loadedPosts: []
    //     }
    // }
}
</script>

<style scoped>
    .posts-page {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
