<template>
    <div class="px-6 py-8">
        <div v-if="useStore.history.length" class="flex flex-col gap-4 ">
            <div v-for="history in useStore.history">
                <div class="grid grid-cols-2 gap-6">
                    <div class="flex justify-end">
                        <img :src="history.poster" />
                    </div>
                    <div>
                        <p class="font-bold text-[#19376D]">{{ history.title }}</p>
                        <span>Seats : <p class="text-[#576CBC]">{{ history.bookedSeat.toString() }}</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="text-center">
            <p>Data History Tidak Ditemukan.</p>
        </div>
    </div>
</template>

<script setup>
import { getMovieList } from '@/stores/store';
import { useRouter } from 'vue-router';

const useStore = getMovieList();
const router = useRouter();
</script>

<style lang="scss" scoped></style>