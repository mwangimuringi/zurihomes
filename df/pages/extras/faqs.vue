<script>
/**
 * FAQs component
 */
export default {
    head() {
        return {
            title: `${this.title} | Minton - Nuxtjs Responsive Admin Dashboard Template`
        }
    },
    data() {
        return {
            title: 'FAQs',
            items: [{
                    text: 'Minton',
                    href: '/',
                },
                {
                    text: 'Extras',
                    href: '/',
                },
                {
                    text: 'FAQs',
                    active: true,
                },
            ],
            text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,

        }
    },
    middleware: 'auth'
}
</script>

<template>
<div>
    <PageHeader :title="title" :items="items" />
    <div class="row">
        <div class="col-12">
            <div class="text-center">
                <i class="h1 mdi mdi-comment-multiple-outline text-muted"></i>
                <h3 class="mb-3">Frequently Asked Questions</h3>
                <p class="text-muted">
                    Nisi praesentium similique totam odio obcaecati, reprehenderit,
                    dignissimos rem temporibus ea inventore alias!
                    <br />Beatae animi nemo ea
                    tempora, temporibus laborum facilis ut!
                </p>

                <button type="button" class="btn btn-success waves-effect waves-light mt-2 mr-1">
                    <i class="mdi mdi-email-outline mr-1"></i> Email us your question
                </button>
                <button type="button" class="btn btn-primary waves-effect waves-light mt-2">
                    <i class="mdi mdi-twitter mr-1"></i> Send us a tweet
                </button>
            </div>
        </div>
        <!-- end col -->
    </div>
    <!-- end row -->

    <div class="row mt-4">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <b-tabs pills class="navtab-bg">
                        <b-tab active title-link-class="py-2 px-3">
                            <template v-slot:title>
                                <span class="mr-1"><i class="mdi mdi-help-circle-outline"></i></span>
                                <span class="d-none d-sm-inline-block">General Questions</span>
                            </template>
                            <div class="row pt-2">
                                <div class="col-lg-6">
                                    <div class="p-lg-2">
                                        <!-- Question/Answer -->
                                        <div>
                                            <div class="faq-question-q-box">Q.</div>
                                            <h4 class="faq-question">What is Lorem Ipsum?</h4>
                                            <p class="faq-answer mb-4">{{text}}</p>
                                        </div>

                                        <!-- Question/Answer -->
                                        <div>
                                            <div class="faq-question-q-box">Q.</div>
                                            <h4 class="faq-question" data-wow-delay=".1s">Why use Lorem Ipsum?</h4>
                                            <p class="faq-answer mb-4">{{text}}</p>
                                        </div>

                                        <!-- Question/Answer -->
                                        <div>
                                            <div class="faq-question-q-box">Q.</div>
                                            <h4 class="faq-question">How many variations exist?</h4>
                                            <p class="faq-answer mb-4">{{text}}</p>
                                        </div>
                                    </div>
                                </div>
                                <!--/col-md-5 -->

                                <div class="col-lg-6">
                                    <div class="p-lg-2">
                                        <!-- Question/Answer -->
                                        <div>
                                            <div class="faq-question-q-box">Q.</div>
                                            <h4 class="faq-question">Is safe use Lorem Ipsum?</h4>
                                            <p class="faq-answer mb-4">{{text}}</p>
                                        </div>

                                        <!-- Question/Answer -->
                                        <div>
                                            <div class="faq-question-q-box">Q.</div>
                                            <h4 class="faq-question">When can be used?</h4>
                                            <p class="faq-answer mb-4">{{text}}</p>
                                        </div>

                                        <!-- Question/Answer -->
                                        <div>
                                            <div class="faq-question-q-box">Q.</div>
                                            <h4 class="faq-question">License & Copyright</h4>
                                            <p class="faq-answer mb-4">{{text}}</p>
                                        </div>
                                    </div>
                                </div>
                                <!--/col-md-5-->
                            </div>
                        </b-tab>
                        <b-tab title-link-class="py-2 px-3">
                            <template v-slot:title>
                                <span class="mr-1"><i class="mdi mdi-shield-half-full"></i></span>
                                <span class="d-none d-sm-inline-block">Privacy Policy</span>
                            </template>
                            <div class="row pt-2">
                                <div class="col-lg-6">
                                    <div class="p-lg-2">
                                        <!-- Question/Answer -->
                                        <div>
                                            <div class="faq-question-q-box">Q.</div>
                                            <h4 class="faq-question">What is Lorem Ipsum?</h4>
                                            <p class="faq-answer mb-4">{{text}}</p>
                                        </div>

                                        <!-- Question/Answer -->
                                        <div>
                                            <div class="faq-question-q-box">Q.</div>
                                            <h4 class="faq-question" data-wow-delay=".1s">Why use Lorem Ipsum?</h4>
                                            <p class="faq-answer mb-4">{{text}}</p>
                                        </div>

                                        <!-- Question/Answer -->
                                        <div>
                                            <div class="faq-question-q-box">Q.</div>
                                            <h4 class="faq-question">How many variations exist?</h4>
                                            <p class="faq-answer mb-4">{{text}}</p>
                                        </div>
                                    </div>
                                </div>
                                <!--/col-md-5 -->

                                <div class="col-lg-6">
                                    <div class="p-lg-2">
                                        <!-- Question/Answer -->
                                        <div>
                                            <div class="faq-question-q-box">Q.</div>
                                            <h4 class="faq-question">Is safe use Lorem Ipsum?</h4>
                                            <p class="faq-answer mb-4">{{text}}</p>
                                        </div>

                                        <!-- Question/Answer -->
                                        <div>
                                            <div class="faq-question-q-box">Q.</div>
                                            <h4 class="faq-question">When can be used?</h4>
                                            <p class="faq-answer mb-4">{{text}}</p>
                                        </div>

                                        <!-- Question/Answer -->
                                        <div>
                                            <div class="faq-question-q-box">Q.</div>
                                            <h4 class="faq-question">License & Copyright</h4>
                                            <p class="faq-answer mb-4">{{text}}</p>
                                        </div>
                                    </div>
                                </div>
                                <!--/col-md-5-->
                            </div>
                        </b-tab>
                        <b-tab title-link-class="py-2 px-3">
                            <template v-slot:title>
                                <span class="mr-1"><i class="mdi mdi-headset"></i></span>
                                <span class="d-none d-sm-inline-block">Support</span>
                            </template>
                            <div class="row pt-2">
                                <div class="col-lg-6">
                                    <div class="p-lg-2">
                                        <!-- Question/Answer -->
                                        <div>
                                            <div class="faq-question-q-box">Q.</div>
                                            <h4 class="faq-question">How many variations exist?</h4>
                                            <p class="faq-answer mb-4">{{text}}</p>
                                        </div>

                                        <!-- Question/Answer -->
                                        <div>
                                            <div class="faq-question-q-box">Q.</div>
                                            <h4 class="faq-question" data-wow-delay=".1s">What is Lorem Ipsum?</h4>
                                            <p class="faq-answer mb-4">{{text}}</p>
                                        </div>

                                        <!-- Question/Answer -->
                                        <div>
                                            <div class="faq-question-q-box">Q.</div>
                                            <h4 class="faq-question">Why use Lorem Ipsum?</h4>
                                            <p class="faq-answer mb-4">{{text}}</p>
                                        </div>
                                    </div>
                                </div>
                                <!--/col-md-5 -->

                                <div class="col-lg-6">
                                    <div class="p-lg-2">
                                        <!-- Question/Answer -->
                                        <div>
                                            <div class="faq-question-q-box">Q.</div>
                                            <h4 class="faq-question">Is safe use Lorem Ipsum?</h4>
                                            <p class="faq-answer mb-4">{{text}}</p>
                                        </div>

                                        <!-- Question/Answer -->
                                        <div>
                                            <div class="faq-question-q-box">Q.</div>
                                            <h4 class="faq-question">When can be used?</h4>
                                            <p class="faq-answer mb-4">{{text}}</p>
                                        </div>

                                        <!-- Question/Answer -->
                                        <div>
                                            <div class="faq-question-q-box">Q.</div>
                                            <h4 class="faq-question">License & Copyright</h4>
                                            <p class="faq-answer mb-4">{{text}}</p>
                                        </div>
                                    </div>
                                </div>
                                <!--/col-md-5-->
                            </div>
                        </b-tab>
                    </b-tabs>
                </div>
            </div>
        </div>
    </div>
    <!-- end row -->
</div>
</template>
