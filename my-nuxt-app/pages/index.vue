<template>
  <section class="container">

    <div class="home-page">
      <section class="intro">
        <h1>Get the latest tech news!</h1>
      </section>
      <section class="featured-posts">
        <PostPreview 
          id="1" 
          thumbnail="https://files.pitchbook.com/website/images/content/Chip_board.png"
          title="Hello There!"
          previewText="This is my first post!" />
        <PostPreview 
          id="2" 
          thumbnail="https://images.techhive.com/images/article/2016/11/computerworld_tech_forecast_2017_hottest-tech-skills-for-2017-100692085-large.jpg"
          title="AI Is Here"
          previewText="Yet another post about AI" />
      </section>      
    </div>

    <div>
      <h4 class="title3">Recipes</h4>      
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
import PostPreview from '@/components/Posts/PostPreview'

export default {
  components: {
    PostPreview
  }
}
</script>

<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

</style>
