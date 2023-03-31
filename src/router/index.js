import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Movie from '../views/DetailMovie.vue'
import History from '../views/History.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/movie/:id',
    name: 'movie',
    component: Movie
  },
  {
    path: '/history',
    name: 'history',
    component: History
  },
  {
    path: '/book-seat/:id',
    name: 'bookSeat',
    component: ()=>import('../views/BookSeat.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
