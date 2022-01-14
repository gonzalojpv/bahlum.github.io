<template>
    <div>{{ title }}</div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    setup() {
    const title = ref('Hola About')
        return { title }
    },
})
</script>

