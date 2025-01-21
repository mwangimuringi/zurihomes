<script>
/**
 * portlet component
 */
export default {
    props: {
        headertitle: {
            type: String,
            default: ""
        },
        portletclass: {
            type: String,
            default: ""
        }
    },

    data() {
        return {
            isVisible: true,
            showCollapse: true,
            isLoading: false
        };
    },
    methods: {
        refreshContent() {
            this.isLoading = true;
            setTimeout(() => {
                this.isLoading = false;
            }, 2000);
        },
        remove() {
            this.isVisible = false;
        },
        collapse() {
            this.showCollapse = !this.showCollapse;
        }
    }
};
</script>

<template>
<div v-if="isVisible" class="card">
    <!-- card header -->

    <div class="card-body">
        <div class="card-widgets">
            <a href="javascript: void(0);" @click="refreshContent">
                <i class="mdi mdi-refresh"></i>
            </a>
            <a :class="[
            showCollapse ? 'collapsed' : null,
            showCollapse ? 'mdi mdi-minus' : 'mdi mdi-plus'
          ]" :aria-expanded="showCollapse ? 'true' : 'false'" aria-controls="collapse-1" @click="collapse"></a>
            <a href="javascript: void(0);" @click="remove">
                <i class="mdi mdi-close"></i>
            </a>
        </div>
        <h4 class="header-title mb-0" :class="portletclass">{{ headertitle }}</h4>
    </div>
    <!-- End card header -->

    <b-collapse id="collapse-1" v-model="showCollapse">
        <slot></slot>
    </b-collapse>

    <div v-if="isLoading" class="card-disabled">
        <div class="card-portlets-loader">
            <div class="spinner-border text-primary m-2" role="status"></div>
        </div>
    </div>
</div>
</template>
