<template>
    <div class="h-[100vh] relative">
        <div class="p-10 flex flex-col gap-6 md:w-3/4 md:mx-auto">
            <div class="h-14 border-2 flex items-center justify-center">
                <p>Screen</p>
            </div>
            <div class="grid grid-cols-5 gap-6">
                <div v-for="seat in state.seatLayout">
                    <button :class="['cursor-pointer border-2 h-10 w-full flex items-center justify-center',
                        { 'text-white bg-slate-400': state.selectedSeat.includes(seat) },
                    ]" @click="clickOnSeat(seat)">
                        <p class="text-center">{{ seat ?? "" }}</p>
                    </button>
                </div>
            </div>
        </div>
        <div class="bottom-0 grid grid-cols-3 gap-2 fixed px-10 py-4 bg-white w-full">
            <div class="col-span-1">
                <select class="border-2 w-full p-1" v-model="state.seatCount" @change="handleResetSeat">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            <div class="col-span-2">
                <button :disabled="state.selectedSeat.length !== Number(state.seatCount)"
                    class="w-full p-2 bg-[#576CBC] text-white rounded-md" @click="onButtonSelect">Select</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { getMovieList } from '@/stores/store';
import { reactive, onBeforeMount } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const useStore = getMovieList();
const route = useRoute();
const router = useRouter();

const state = reactive({
    seatLayout: [],
    selectedSeat: [],
    seatCount: 1,
    selectedMovie: useStore.movieData.filter(item => item.imdbID === route.params.id)[0]
});

const clickOnSeat = (id) => {
    if (state.selectedSeat.includes(id)) {
        const index = state.selectedSeat.indexOf(id);
        state.selectedSeat.splice(index, 1);
    } else {
        if (Number(state.seatCount) > state.selectedSeat.length) {
            state.selectedSeat.push(id)
        }
    }
}

const createSeatLayout = () => {
    let seats = [];
    for (let i = 0; i < 3; i++) {
        for (let n = 1; n <= 5; n++) {
            seats.push(`${i === 0 ? 'A' + n : i === 1 ? 'B' + n : 'C' + n}`);
        }
    }
    return seats
}

const handleResetSeat = () => {
    state.selectedSeat = [];
}

const onButtonSelect = () => {
    const obj = {
        title: state.selectedMovie.Title,
        poster: state.selectedMovie.Poster,
        detailData: state.selectedMovie,
        bookedSeat: state.selectedSeat
    }
    useStore.onSelect(obj)
    router.push('/history');
}

onBeforeMount(() => {
    state.seatLayout = createSeatLayout()
})

</script>

<style lang="scss" scoped></style>