<script setup lang="ts">
import { initLayerBuilder } from '@buildwithlayer/builder';
import { initLayerChat } from '@buildwithlayer/chat';
import { initLayerCore } from '@buildwithlayer/core';

initLayerBuilder();
initLayerChat();
initLayerCore();

layerBuilder.mount();
layerChat.mount();
layerCore.mount({
    copilot: 'RAG',
    systemMessage:
        'Please be precise in your answers. If your answer requires bullet points, please also be short and to the point.',
    layerApiKey: '0569d960-4ca2-4367-9b55-69fca75c9499',

    // Do not include this in production code
    layerCustomerApiKey: 'e5fd4f1f-5683-413d-9aaf-6b8231719cc0',
});
</script>

<template>
    <div>
        <img
            src="https://www.smartxadvisory.com/wp-content/uploads/2020/09/smartx-logo.png"
            class="logo vue"
            alt="Vue logo"
        />
    </div>
</template>

<style scoped>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
}
.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
