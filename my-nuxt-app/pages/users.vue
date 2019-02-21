<template>
    <div>
        <h1>Users</h1>
        <input type="text" v-model="userId">
        <button @click="onLoadUser">Load User</button>
        <!-- Nested route... component that loads on that routes sub routes-->
        <nuxt-child />
    </div>
</template>

<script>
export default {
    data() {
        return {
            userId: ''
        }
    },
    methods: {
        onLoadUser() {
            this.$router.push('/users/' + this.userId)
        }
    },
    layout: 'users'
}
</script>

<style>

</style>
