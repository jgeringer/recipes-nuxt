<template>
    <div class="admin-post-page">
        <section class="update-form">
            <AdminPostForm :post="loadedPost" />
        </section>
    </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm'

export default {
    layout: 'admin',
    components: {
        AdminPostForm
    },
    data() {
        return {
            loadedPost: {
                author: 'Joe',
                title: 'My awesome Post',
                content: 'Super amazing, thanks!',
                thumbnailLink: 'https://files.pitchbook.com/website/images/content/Chip_board.png'
            }
        }
    }
}
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
