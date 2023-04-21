<template>
    <n-card>
        <n-button @click="count++">count</n-button>
    </n-card>

</template>


<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)

</script>

<style scoped>

</style>