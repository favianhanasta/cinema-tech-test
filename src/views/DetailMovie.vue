<template>
    <div class="h-screen py-4 overflow-y-hidden">
        <div class="px-10 py-4 flex flex-col gap-4 h-[90vh] overflow-y-scroll md:px-36">
            <section>
                <p class="text-2xl font-bold text-[#0B2447]">{{ selectedMovie.Title }}</p>
                <p class="text-[#19376D]">
                    {{ selectedMovie.Year }} • {{ selectedMovie.Rated }} • {{ selectedMovie.Runtime }}
                </p>
                <div class="flex justify-center">
                    <img v-bind:src="selectedMovie.Poster" />
                </div>
            </section>
            <section class="movie-info">
                <p class="text-justify">{{ selectedMovie.Plot }}</p>
                <span class="flex gap-2">IMDb Rating: <p>{{ selectedMovie.imdbRating }} / 10</p>
                </span>
                <span class="flex gap-2">Genre: <p>{{ selectedMovie.Genre }}</p></span>
                <span class="flex gap-2">Director: <p>{{ selectedMovie.Director }}</p></span>
                <span class="flex gap-2">Writer: <p>{{ selectedMovie.Writer }}</p></span>
                <span class="flex gap-2">Stars: <p>{{ selectedMovie.Actors }}</p></span>
            </section>
        </div>
        <div class="w-full flex justify-center bg-white items-center bottom-0 py-2 fixed">
            <button class="w-3/4 cursor-pointer p-2 rounded-md bg-[#576CBC] text-white" @click="onClickBook">Book</button>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { fetchById } from '@/services/fetchApi'

const selectedMovie = ref({})

const route = useRoute();
const router = useRouter();

const onClickBook = () => {
    router.push(`/book-seat/${route.params.id}`)
}

onMounted(async () => {
    selectedMovie.value = await fetchById(route.params.id);
})

</script>

<style lang="scss" scoped>
$color-info : #576CBC;

.movie-info {
    span {
        p {
            color: $color-info;
        }
    }
}
</style>