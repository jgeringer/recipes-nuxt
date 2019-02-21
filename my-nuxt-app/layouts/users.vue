<template>
    <div>
        <Header></Header>
        <section>
            Users Layout Section
        </section>
        <nuxt/>
    </div>
</template>

<script>
import Header from '@/components/Header'

export default {
    components: {
        Header
    }
}
</script>

<style scoped>
    section {
        background: blue; 
        color: white;
    }
</style>
