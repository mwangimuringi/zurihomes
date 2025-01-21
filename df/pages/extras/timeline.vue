<script>
/**
 * Timeline component
 */
export default {
    head() {
        return {
            title: `${this.title} | Minton - Nuxtjs Responsive Admin Dashboard Template`
        }
    },
    data() {
        return {
            title: 'Timeline',
            items: [{
                    text: 'Minton',
                    href: '/',
                },
                {
                    text: 'Extras',
                    href: '/',
                },
                {
                    text: 'Timeline',
                    active: true,
                },
            ],
            timelineData: [{
                    button: 'Today',
                },
                {
                    time: '1 hour ago',
                    description: 'Dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde?',
                    align: 'left',
                    minute: '08:25 am'
                },
                {
                    time: '2 hours ago',
                    description: 'consectetur adipisicing elit. Iusto, optio, dolorum John deon provident rerum aut hic quasi placeat iure tempora laudantium ',
                    minute: '08:25 am',
                },
                {
                    time: '10 hours ago',
                    description: '3 new photo Uploaded on facebook fan page',
                    align: 'left',
                    image: [require('~/assets/images/small/img-1.jpg'), require('~/assets/images/small/img-2.jpg'), require('~/assets/images/small/img-3.jpg')],
                    minute: '08:25 am'
                },
                {
                    time: '14 hours ago',
                    description: 'Outdoor visit at California State Route 85 with John Boltana & Harry Piterson regarding to setup a new show room.',
                    minute: '08:25 am'
                },
                {
                    time: '19 hours ago',
                    description: 'Jonatha Smith added new milestone Pathek Lorem ipsum dolor sit amet consiquest dio',
                    align: 'left',
                    minute: '08:25 am'
                },
                {
                    button: 'Yesterday',
                },
                {
                    time: '22 February 2019',
                    description: 'Montly Regular Medical check up at Greenland Hospital by the doctor Johm meon',
                    minute: '08:25 am'
                },
                {
                    time: '07 January 2019',
                    description: 'Download the new updates of Ubold admin dashboard',
                    align: 'left',
                    minute: '08:25 am'
                },
                {
                    time: '02 January 2019',
                    description: 'Jonatha Smith added new milestone crishtian Lorem ipsum dolor sit amet consiquest dio',
                    minute: '08:25 am'
                },
                {
                    button: 'Last Month',
                },
                {
                    time: '31 December 2018',
                    description: 'Download the new updates of Ubold admin dashboard',
                    minute: '08:25 am',
                    align: 'left',
                },
                {
                    time: '16 Decembar 2018',
                    description: 'Jonatha Smith added new milestone prank Lorem ipsum dolor sit amet consiquest dio',
                    minute: '08:25 am'
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
    <div class="row">
        <div class="col-12">
            <div class="timeline" dir="ltr">
                <article v-for="data in timelineData" :key="data.time" :class="{ 'timeline-item-left': `${data.align}` === 'left' }" class="timeline-item">
                    <div v-if="data.button">
                        <h2 class="m-0 d-none">&nbsp;</h2>
                        <div v-if="data.button" class="time-show mt-3">
                            <a href="javascript: void(0);" class="btn btn-primary width-lg">{{data.button}}</a>
                        </div>
                    </div>
                    <div class="timeline-desk">
                        <div v-if="!data.button" class="timeline-box">
                            <span :class="{ 
                'arrow-alt': `${data.align}` === 'left',
                'arrow': `${data.align}` !== 'left',
                }"></span>
                            <span class="timeline-icon">
                                <i class="mdi mdi-adjust"></i>
                            </span>
                            <h4 class="mt-0 font-16">{{data.time}}</h4>
                            <p class="text-muted">
                                <small>{{data.minute}}</small>
                            </p>
                            <p class="mb-0">{{data.description}}</p>
                            <div v-if="data.image" class="timeline-album">
                                <a href="javascript: void(0);">
                                    <img alt :src="`${data.image[0]}`" />
                                </a>
                                <a href="javascript: void(0);">
                                    <img alt :src="`${data.image[1]}`" />
                                </a>
                                <a href="javascript: void(0);">
                                    <img alt :src="`${data.image[2]}`" />
                                </a>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
            <!-- end timeline -->
        </div>
        <!-- end col -->
    </div>
</div>
</template>
