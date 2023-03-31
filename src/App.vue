<template>
    <div class="text-center py-2">
        <h1 class="text-4xl font-bold">cinema.</h1>
        <div class="px-10" v-if="route.path !== '/'">
            <button class="flex gap-2 items-center">
                <span class="button-back"></span>
                <a @click="onBack">Back</a>
            </button>
        </div>
    </div>
    <RouterView />
</template>

<script setup>
import { getMovieList } from '@/stores/store';
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const useStore = getMovieList();
const route = useRoute();
const router = useRouter();
const onBack = () => {
    if (route.path === '/history') {
        router.push('/')
    } else {
        router.back();
    }
}

onMounted(() => {
    useStore.fetchApiOmdb();
})


</script>

<style lang="scss" scoped>
$bg-color : #19376D;

.button-back {
    border: solid $bg-color;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 4px;
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
}
</style>