<script>
import Error404 from "~/pages/extras/404.vue";

/**
 * Error layout
 */
export default {
    name: "nuxt-error",
    components: {
        Error404
    },
    data() {
        return {};
    },
    layout: 'auth'
};
</script>

<template>
<div class="nuxt-error">
    <Error404 />
</div>
</template>
