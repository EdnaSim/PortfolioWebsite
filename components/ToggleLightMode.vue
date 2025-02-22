<template>
<div>
    <UButton icon="i-heroicons-sun" @click="isDark = !isDark" class="rounded-tr-none"/>
</div>
</template>

<script setup lang="ts">
import { useColorMode } from "../.nuxt/imports";
import {computed} from "vue";

const colorMode = useColorMode();
const isDark = computed({
    get () {
        return colorMode.value === 'dark'
    },
    set () {
        colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
    }
});
</script>