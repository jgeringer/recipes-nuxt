<template>
  <section class="container">

    <div class="home-page">
      <section class="intro">
        <h1>Get the latest tech news!</h1>
      </section>
      <PostList :posts="loadedPosts" />
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
import PostList from '@/components/Posts/PostList'

export default {
  components: {
    PostList
  },
  data(){
    return {
      loadedPosts: []
    }
  },
  created(){
    // fake ajax: Not part of the server renedered nuxt static code
    // setTimeout(() => {
    //   this.loadedPosts = [
    //     { id: '1', title: 'First Post', previewText: 'This is our first post!', thumbnail: 'https://files.pitchbook.com/website/images/content/Chip_board.png' },
    //     { id: '2', title: 'Not first Post', previewText: 'This is our second post!', thumbnail: 'https://images.pexels.com/photos/1161446/pexels-photo-1161446.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=450&w=860' },
    //     { id: '3', title: 'A third Post', previewText: 'This is our third post!', thumbnail: 'https://images.pexels.com/photos/351448/pexels-photo-351448.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' }
    //   ]
    // }, 1500)
  },
  //only works in Pages... (ajax, that runs on the server)
  asyncData(context, callback) { //note: 'this' does not work here because it's run before this component is created
    console.log('asyncData is executing')
    console.log('context:', context) // context is usefull for getting things like the route, and other 'this' things. 
    setTimeout(() => {
      callback(null, {  //null is the error
        loadedPosts : [ // <- this is the data from the client
            { id: '1', title: 'First Post', previewText: 'This is our first post!', thumbnail: 'https://files.pitchbook.com/website/images/content/Chip_board.png' },
            { id: '2', title: 'Not first Post', previewText: 'This is our second post!', thumbnail: 'https://images.pexels.com/photos/1161446/pexels-photo-1161446.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=450&w=860' },
            { id: '3', title: 'A third Post', previewText: 'This is our third post!', thumbnail: 'https://images.pexels.com/photos/351448/pexels-photo-351448.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' }
        ]
      })
    }, 1500);
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
  background-image: url('~assets/images/main-page-background.jpg');
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
