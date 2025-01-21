<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
        icon: {
            type: String,
            required: true,
        },
        value: {
            type: String,
            required: true,
        },
        text: {
            type: String,
            required: true,
        },
    },
    data() {
        return {};
    },
};
</script>

<template>
<div class="card">
    <div class="card-body">
        <div class="d-flex justify-content-between">
            <div>
                <h5 class="text-muted font-weight-normal mt-0 text-truncate" title="Campaign Sent">{{ title }}</h5>
                <h3 class="my-2 py-1">
                    <span data-plugin="counterup">{{ value }}</span>
                </h3>
                <p class="mb-0 text-muted">
                    <span class="text-success mr-2">
                        <span class="mdi mdi-arrow-up-bold"></span>
                        {{ text }}
                    </span>
                    <span class="text-nowrap">Since last month</span>
                </p>
            </div>
            <div class="avatar-sm">
                <span class="avatar-title bg-soft-primary rounded">
                    <i :class="`${icon} font-20 text-primary`"></i>
                </span>
            </div>
        </div>
    </div>
</div>
</template>
