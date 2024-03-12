<template lang="">
    <div
    class="flex w-[100%] h-16 justify-between items-center px-20 border-b-2"
    >
        <div>Logo</div>
        <input class="border-2 w-64 h-12 px-4" v-model="message" placeholder="edit me" />
        <div
        class="flex w-64 justify-between"
        >
            <div>Profile</div>
            <div>Dashboard</div>
        </div>
    </div>
</template>
<script setup>
import {ref} from 'vue'
 const message = ref("")

</script>
<style lang="">
    
</style>