<script>
    export default {
        data: () => ({
            loading: false
        }),
        methods: {
            start() {
                this.loading = true;
            },
            finish() {
                this.loading = false;
            }
        }
    }
</script>

<template>
<div id="preloader" v-if="loading">
    <div class="card-portlets-loader">
        <div class="spinner-border text-primary m-2" role="status"></div>
    </div>
</div>
</template>
