<script>
/**
 * Pricing component
 */
export default {
    head() {
        return {
            title: `${this.title} | Minton - Nuxtjs Responsive Admin Dashboard Template`
        }
    },
    data() {
        return {
            title: 'Pricing',
            items: [{
                    text: 'Minton',
                    href: '/',
                },
                {
                    text: 'Extras',
                    href: '/',
                },
                {
                    text: 'Pricing',
                    active: true,
                },
            ],
            pricingData: [{
                    title: 'Starter Pack',
                    icon: 'fe-at-sign',
                    price: '$9 ',
                    storage: 5,
                    bandwidth: '250 GB Bandwidth',
                    domain: 'No Domain',
                    user: '1 User'
                },
                {
                    title: 'Professional Pack',
                    icon: 'fe-users',
                    price: '$19 ',
                    storage: 50,
                    bandwidth: '500 GB Bandwidth',
                    domain: 'No Domain',
                    user: '1 User'
                },
                {
                    title: 'Business Pack',
                    icon: 'fe-award',
                    price: '$29 ',
                    storage: 50,
                    bandwidth: '900 GB Bandwidth',
                    domain: '2 Domain',
                    user: '10 User',
                    ribbon: 'Popular'
                },
                {
                    title: 'Enterprise Pack',
                    icon: 'fe-aperture',
                    price: '$39 ',
                    storage: 100,
                    bandwidth: 'Unlimited Bandwidth',
                    domain: '10 Domain',
                    user: 'Unlimited User'
                }
            ]
        }
    },
    middleware: 'auth'
}
</script>

<template>
<div>
    <PageHeader :title="title" :items="items" />
    <div class="row justify-content-center">
        <div class="col-xl-12">
            <!-- Pricing Title-->
            <div class="text-center pb-2">
                <h3 class="mb-2">
                    Our
                    <span class="text-primary">Plans</span>
                </h3>
                <p class="text-muted w-50 m-auto">We have plans and prices that fit your business perfectly. Make your client site a success with our products.</p>
            </div>

            <!-- Plans -->
            <div class="row my-3">
                <div v-for="price in pricingData" :key="price.title" class="col-xl-3 col-md-6">
                    <div class="card card-pricing" :class="{ 'ribbon-box': `${price.ribbon}` === 'Popular' }">
                        <div v-if="price.ribbon === 'Popular'" class="ribbon-two ribbon-two-danger">
                            <span>Popular</span>
                        </div>
                        <div class="card-body text-center">
                            <p class="card-pricing-plan-name font-weight-bold text-uppercase">{{price.title}}</p>
                            <span class="card-pricing-icon" :class="{ 'bg-danger': `${price.ribbon}` === 'Popular',
                            'text-primary': `${price.ribbon}` !== 'Popular',
                            'text-white': `${price.ribbon}` === 'Popular' } ">
                                <i :class="`${price.icon}`"></i>
                            </span>
                            <h2 class="card-pricing-price">
                                {{price.price}}
                                <span>/ Month</span>
                            </h2>
                            <ul class="card-pricing-features">
                                <li>{{price.storage}} GB Storage</li>
                                <li>{{price.bandwidth}}</li>
                                <li>{{price.domain}}</li>
                                <li>{{price.user}}</li>
                                <li>Email Support</li>
                                <li>24x7 Support</li>
                            </ul>
                            <button class="btn mt-4 btn-block btn-primary" :class="{ 'btn-danger': `${price.ribbon}` === 'Popular' } ">
                                Sign
                                Up
                            </button>
                        </div>
                    </div>
                    <!-- end Pricing_card -->
                </div>
                <!-- end col -->
            </div>
        </div>
    </div>
</div>
</template>
