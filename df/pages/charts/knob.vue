<script>
import KnobControl from "vue-knob-control";

export default {
    head() {
        return {
            title: `${this.title} | Minton - Nuxtjs Responsive Admin Dashboard Template`,
        };
    },
    components: {
        KnobControl,
    },
    data() {
        return {
            title: "Knob Chart",
            items: [{
                    text: "Minton",
                    href: "/",
                },
                {
                    text: "Charts",
                    href: "/",
                },
                {
                    text: "Knob Chart",
                    active: true,
                },
            ],
            display: 12,
            input: 29,
            visit: -42,
            semitone: 36,
            showText: 2,
            disable: 85,
        };
    },
    methods: {
        /**
         * Show the text of chart value
         */
        toWord: function (showText) {
            const map = {
                0: "zero",
                1: "one",
                2: "two",
                3: "three",
                4: "four",
            };
            return map[showText];
        },
    },
    middleware: "auth",
};
</script>

<template>
<div>
    <PageHeader :title="title" :items="items" />
    <div class="row">
        <div class="col-lg-4">
            <div class="card">
                <div class="card-body">
                    <div class="text-center">
                        <h5>Lifetime Sales</h5>
                        <h3 class="mb-3">
                            <i class="mdi mdi-arrow-up-bold-hexagon-outline text-success"></i> 549849
                            <small>USD</small>
                            <knob-control v-model="display" class="mt-3" :size="150" :animate-value="false" secondary-color="#eeeeee" text-color="#fff"></knob-control>
                            <h6 class="text-muted mt-2">Disable display input</h6>
                        </h3>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="card">
                <div class="card-body">
                    <div class="text-center" dir="ltr">
                        <h5>Income Amounts</h5>
                        <h3 class="mb-3">
                            <i class="mdi mdi-arrow-up-bold-circle-outline text-success"></i> 64654
                            <small>USD</small>
                        </h3>
                        <knob-control v-model="input" class="mt-3" :size="150" primary-color="#4bd396" secondary-color="#eeeeee" text-color="#4bd396"></knob-control>
                        <h6 class="text-muted mt-2">Display input</h6>
                    </div>
                    <!-- end .text-center -->
                </div>
                <!-- end card-box -->
            </div>
        </div>
        <!-- end col-->

        <div class="col-lg-4">
            <div class="card">
                <div class="card-body">
                    <div class="text-center" dir="ltr">
                        <h5>Total visits</h5>
                        <h3 class="mb-3">
                            <i class="mdi mdi-arrow-down-bold-circle-outline text-danger"></i> 87798
                            <small>USD</small>
                        </h3>
                        <knob-control v-model="visit" :min="-52" :max="52" class="mt-3" :size="150" primary-color="#3ac9d6" secondary-color="#eeeeee" text-color="#3ac9d6"></knob-control>
                        <h6 class="text-muted mt-2">Display previous value</h6>
                    </div>
                    <!-- end .text-center -->
                </div>
                <!-- end card-box -->
            </div>
        </div>
        <!-- end col-->
    </div>

    <div class="row">
        <div class="col-lg-4">
            <div class="card">
                <div class="card-body">
                    <div class="text-center" dir="ltr">
                        <h5>Total visits</h5>
                        <h3 class="mb-3">
                            <i class="mdi mdi-arrow-up-bold-circle-outline text-success"></i> 48948
                            <small>USD</small>
                        </h3>
                        <knob-control v-model="semitone" :min="-42" :max="42" :stroke-width="16" :size="150" primary-color="#f5707a" secondary-color="#eeeeee" text-color="#f5707a"></knob-control>
                        <h6 class="text-muted mt-2">Changing size</h6>
                    </div>
                    <!-- end .text-center -->
                </div>
                <!-- end card-box -->
            </div>
        </div>
        <!-- end col-->
        <div class="col-lg-4">
            <div class="card">
                <div class="card-body">
                    <div class="text-center" dir="ltr">
                        <h5>Income Amounts</h5>
                        <h3 class="mb-3">
                            <i class="mdi mdi-arrow-up-bold-circle-outline text-success"></i> 5445
                            <small>USD</small>
                        </h3>
                        <knob-control v-model="showText" :min="0" :max="4" :value-display-function="toWord" :size="150" primary-color="#6b5fb5" secondary-color="#eeeeee" text-color="#6b5fb5"></knob-control>
                        <h6 class="text-muted mt-2">Display value text</h6>
                    </div>
                    <!-- end .text-center -->
                </div>
                <!-- end card-box -->
            </div>
        </div>
        <div class="col-lg-4">
            <div class="card">
                <div class="card-body">
                    <div class="text-center" dir="ltr">
                        <h5>Total visits</h5>
                        <h3 class="mb-3">
                            <i class="mdi mdi-arrow-up-bold-circle-outline text-success"></i> 48948
                            <small>USD</small>
                        </h3>
                        <knob-control v-model="disable" :size="150" :disabled="true" primary-color="#6b5fb5" secondary-color="#eeeeee" text-color="#6b5fb5"></knob-control>
                        <h6 class="text-muted mt-2">Readonly</h6>
                    </div>
                    <!-- end .text-center -->
                </div>
                <!-- end card-box -->
            </div>
        </div>
    </div>
</div>
</template>
