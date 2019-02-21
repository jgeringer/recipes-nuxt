<template>
  <section class="container">
    <div>
      <h1 class="title">Recipes</h1>
      <h2 class="subtitle">A nuxt.js example</h2>
      
      <span>
        <h3>Tutorials:</h3>
        <ul>
          <li><a href="https://www.udemy.com/vuejs-jump-start-with-nuxtjs-firebase/">Vue/Nuxt/Firebase</a></li>
          <li><a href="https://www.udemy.com/nuxtjs-vuejs-on-steroids/">Nuxt</a></li>
          <li><a href="https://www.youtube.com/watch?v=nteDXuqBfn0">Youtube</a></li>
        </ul>
        <hr />
        <h4>Things to work on next:</h4>
        <ol>
          <li>Finish udemy course on vue to learn more on filtering and vuex</li>
          <li>Have nav built dynamically (mock)</li>
          <li>Wire up to contentful
            <ul>
              <li>Setup environment variables</li>
              <li>Nav</li>
              <li>About</li>
              <li>Listing</li>
              <li>Detail</li>
            </ul>
          </li>
          <li>PWA</li>
          <li>Login?</li>
        </ol>
      </span>
    </div>
  </section>
</template>

<script>
export default {
  components: {
  }
}
</script>

<style>
h3{
  margin-bottom: 1rem;
}
span {
  text-align: left;
}
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
