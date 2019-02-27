import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: []
        },
        mutations: {
            setPosts(state, posts) {
                state.loadedPosts = posts
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        vuexContext.commit('setPosts', [
                            { id: '1', title: 'First Post', previewText: 'This is our first post!', thumbnail: 'https://files.pitchbook.com/website/images/content/Chip_board.png' },
                            { id: '2', title: 'Not first Post', previewText: 'This is our second post!', thumbnail: 'https://images.pexels.com/photos/1161446/pexels-photo-1161446.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=450&w=860' },
                            { id: '3', title: 'A third Post', previewText: 'This is our third post!', thumbnail: 'https://images.pexels.com/photos/351448/pexels-photo-351448.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' }
                        ]);
                        resolve();
                    }, 1000);
                });
            },
            setPosts(vuexContext, posts) {
                vuexContext.commit('setPosts', posts)
            }
        },
        getters: {
            loadedPosts(state) {
                return state.loadedPosts
            }
        }
    })
}

export default createStore