<template>
   <div v-if="showMsgs == true" class='z-2 fw-semibold text-light position-absolute top-0 start-0 container-fluid bg-dark box grey d-flex flex-column align-items-center text-center justify-content-center opacity-85'>
<h2 class='fw-1 pb-4'>
Simple Counter
</h2>
<p class='fs-6 '>
A simple tool for counting things and keeping track of numbers.
</p>
<p class='fs-6 '>
&#169; Orji Onyinyechi
</p>
<button @click="notShow"  class='border border-0 bg-transparent grey hover'>
<i class="fa-regular fa-circle-xmark"></i>
    </button>
    </div>
</template>

<script setup(props,context)>
import { ref } from 'vue';

const showMsgs = ref(false);
function notShow() {
    showMsgs.value = false
}

function sendevt() {
    isContext.emit('showVal', showMsgs.value)
}

</script>

<style scoped>

</style>