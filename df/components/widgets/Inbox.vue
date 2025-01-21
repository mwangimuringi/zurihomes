<script>
/**
 * Inbox-widget component
 */
export default {
    data() {
        return {
            inboxData: [{
                    image: require('~/assets/images/users/avatar-1.jpg'),
                    name: 'Chadengle',
                    message: "Hey! there I'm available...",
                },
                {
                    image: require('~/assets/images/users/avatar-2.jpg'),
                    name: 'Tomaslau',
                    message: "I've finished it! See you so...",
                },
                {
                    image: require('~/assets/images/users/avatar-3.jpg'),
                    name: 'Stillnotdavid',
                    message: 'This theme is awesome!',
                },
                {
                    image: require('~/assets/images/users/avatar-4.jpg'),
                    name: 'Kurafire',
                    message: 'Nice to meet you',
                },
                {
                    image: require('~/assets/images/users/avatar-5.jpg'),
                    name: 'Shahedk',
                    message: "Hey! there I'm available...",
                },
                {
                    image: require('~/assets/images/users/avatar-6.jpg'),
                    name: 'Adhamdannaway',
                    message: 'This theme is awesome!',
                },
                {
                    image: require('~/assets/images/users/avatar-8.jpg'),
                    name: 'Arashasghari',
                    message: "Hey! there I'm available...",
                },
                {
                    image: require('~/assets/images/users/avatar-9.jpg'),
                    name: 'Joshaustin',
                    message: "I've finished it! See you so...",
                },
            ],
        }
    },
}
</script>

<template>
<div class="card">
    <div class="card-body">
        <h4 class="header-title mb-3">Inbox</h4>
        <simplebar style="max-height: 404px;">
            <div class="inbox-widget">
                <div v-for="inbox in inboxData" :key="inbox.name" class="inbox-item">
                    <div class="inbox-item-img">
                        <img :src="`${inbox.image}`" class="rounded-circle" alt />
                    </div>
                    <p class="inbox-item-author">{{ inbox.name }}</p>
                    <p class="inbox-item-text">{{ inbox.message }}</p>
                    <p class="inbox-item-date">
                        <a href="javascript:(0);" class="btn btn-sm btn-link text-info font-13">Reply</a>
                    </p>
                </div>
            </div>
            <!-- end inbox-widget -->
        </simplebar>
    </div>
</div>
<!-- end card-box -->
</template>
