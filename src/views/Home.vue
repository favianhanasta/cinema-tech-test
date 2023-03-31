<template>
  <div class="h-screen overflow-hidden">
    <div class="px-8 mt-4 h-[90vh] overflow-y-scroll md:px-20">
      <div class="grid grid-cols-2 md:grid-cols-5 gap-6 justify-center">
        <span v-for="item in useStore.movieData" @click="onClickRoute(item.imdbID)" class="cursor-pointer">
          <div class="rounded-md overflow-hidden border-2">
            <img v-bind:src="item.Poster" class="h-full w-full" />
          </div>
          <p class="font-bold my-2 text-center text-xs text-[#19376D] md:text-lg">{{ item?.Title ?? '-' }}</p>
        </span>
      </div>
    </div>
    <div class="w-full flex justify-center bg-white items-center bottom-0 py-2 fixed">
      <button class="w-3/4 cursor-pointer p-2 rounded-md bg-[#576CBC] text-white"
        @click="onClickToHistory">History</button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { getMovieList } from '../stores/store'
const router = useRouter();

const useStore = getMovieList();

const onClickRoute = (id) => {
  router.push(`/movie/${id}`)
}

const onClickToHistory = () => {
  router.push(`/history`)
}

</script>

<style lang="scss" scoped></style>