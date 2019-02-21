<template>
    <h1>A single user, with ID: {{ $route.params.id }}</h1>
</template>

<script>
export default {
    validate (data) {
        console.log(data)
        // return true
        // return data.params.id == 1  // only lets in route urls that have '1' in it
        return /^\d+$/.test(data.params.id) // only lets in routes that have numbers in them
    },
    layout: 'users'
}
</script>

<style>

</style>