<template>
    <header>
        <nav>
            <ul>
                <li><nuxt-link to="/">Start Page</nuxt-link></li>
                <li><nuxt-link to="/recipes">Recipes</nuxt-link></li>
                <li><nuxt-link to="/about">About</nuxt-link></li>
                <li><nuxt-link to="/users">Users</nuxt-link></li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {

}
</script>

<style scoped>
    header {
        width: 100%;
        height: 33px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: purple;
    }
    header a {
        color: white;
    }
    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    li {
        margin: 0 10px;
    }
</style>
