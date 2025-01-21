export const menuItems = [
    {
        id: 1,
        label: 'menuitems.dashboard.text',
        icon: 'ri-dashboard-line',
        subItems: [
            {
                id: 2,
                label: 'menuitems.dashboard.list.sales',
                link: '/'
            },
            {
                id: 3,
                label: 'menuitems.dashboard.list.crm',
                link: '/dashboard/crm'
            },
            {
                id: 4,
                label: 'menuitems.dashboard.list.analytics',
                link: '/dashboard/analytics'
            }
        ]
    },
    {
        id: 5,
        label: 'menuitems.apps.text',
        icon: 'ri-apps-2-line',
        subItems: [
            {
                id: 7,
                label: 'menuitems.calendar.text',
                icon: 'ri-calendar-2-line',
                link: '/apps/calendar'
            },
            {
                id: 8,
                label: "menuitems.chat.text",
                icon: "ri-message-2-line",
                link: '/apps/chat'
            },
            {
                id: 9,
                label: "menuitems.ecommerce.text",
                icon: "ri-shopping-cart-2-line",
                subItems: [
                    {
                        id: 10,
                        label: "menuitems.ecommerce.list.products",
                        link: "/ecommerce/products"
                    },
                    {
                        id: 11,
                        label: "menuitems.ecommerce.list.productsgrid",
                        link: "/ecommerce/products-grid"
                    },
                    {
                        id: 12,
                        label: 'menuitems.ecommerce.list.productdetail',
                        link: '/ecommerce/product-detail/1'
                    },
                    {
                        id: 13,
                        label: 'menuitems.ecommerce.list.createproduct',
                        link: '/ecommerce/product-create'
                    },
                    {
                        id: 14,
                        label: "menuitems.ecommerce.list.customers",
                        link: "/ecommerce/customers"
                    },
                    {
                        id: 15,
                        label: "menuitems.ecommerce.list.orders",
                        link: "/ecommerce/orders"
                    },
                    {
                        id: 16,
                        label: "menuitems.ecommerce.list.orderdetail",
                        link: "/ecommerce/order-detail"
                    },
                    {
                        id: 17,
                        label: "menuitems.ecommerce.list.sellers",
                        link: "/ecommerce/sellers"
                    },
                    {
                        id: 18,
                        label: "menuitems.ecommerce.list.cart",
                        link: "/ecommerce/cart"
                    },
                    {
                        id: 19,
                        label: "menuitems.ecommerce.list.checkout",
                        link: "/ecommerce/checkout"
                    }
                ]
            },
            {
                id: 20,
                label: 'menuitems.email.text',
                icon: 'ri-mail-line',
                subItems: [
                    {
                        id: 21,
                        label: 'menuitems.email.list.inbox',
                        link: '/email/inbox'
                    },
                    {
                        id: 22,
                        label: 'menuitems.email.list.reademail',
                        link: '/email/reademail/1'
                    },
                    {
                        id: 23,
                        label: 'menuitems.email.list.template',
                        link: '/email/templates'
                    }
                ]
            },
            {
                id: 24,
                label: 'menuitems.companies.text',
                icon: 'ri-building-4-line',
                link: '/apps/companies'
            },
            {
                id: 25,
                label: 'menuitems.tasks.text',
                icon: 'ri-task-line',
                subItems: [
                    {
                        id: 26,
                        label: 'menuitems.tasks.list.list',
                        link: '/task/list'
                    },
                    {
                        id: 27,
                        label: 'menuitems.tasks.list.detail',
                        link: '/task/detail'
                    },
                    {
                        id: 28,
                        label: 'menuitems.tasks.list.kanban',
                        link: '/task/kanban'
                    }
                ]
            },
            {
                id: 29,
                label: 'menuitems.contacts.text',
                icon: 'ri-profile-line',
                subItems: [
                    {
                        id: 30,
                        label: 'menuitems.contacts.list.members',
                        link: '/contacts/list'
                    },
                    {
                        id: 31,
                        label: 'menuitems.contacts.list.profile',
                        link: '/contacts/profile'
                    }
                ]
            },
            {
                id: 32,
                label: 'menuitems.filemanager.text',
                icon: 'ri-folders-line',
                link: '/apps/file-manager'
            },
            {
                id: 33,
                label: 'menuitems.ticket.text',
                icon: 'ri-customer-service-2-line',
                link: '/apps/tickets'
            },
        ]
    },
    {
        id: 34,
        label: 'menuitems.ui.text',
        icon: 'ri-pencil-ruler-2-line',
        subItems: [
            {
                id: 35,
                label: 'menuitems.ui.list.avatars',
                link: '/ui/avatars'
            },
            {
                id: 36,
                label: 'menuitems.ui.list.buttons',
                link: '/ui/buttons'
            },
            {
                id: 37,
                label: 'menuitems.ui.list.cards',
                link: '/ui/cards'
            },
            {
                id: 38,
                label: 'menuitems.ui.list.carousel',
                link: '/ui/carousel'
            },
            {
                id: 39,
                label: 'menuitems.ui.list.dropdowns',
                link: '/ui/dropdowns'
            },
            {
                id: 40,
                label: 'menuitems.ui.list.video',
                link: '/ui/video'
            },
            {
                id: 41,
                label: 'menuitems.ui.list.general',
                link: '/ui/general'
            },
            {
                id: 42,
                label: 'menuitems.ui.list.grid',
                link: '/ui/grid'
            },
            {
                id: 43,
                label: 'menuitems.ui.list.images',
                link: '/ui/images'
            },
            {
                id: 44,
                label: 'menuitems.ui.list.listgroup',
                link: '/ui/list-group'
            },
            {
                id: 45,
                label: 'menuitems.ui.list.modals',
                link: '/ui/modals'
            },
            {
                id: 46,
                label: 'menuitems.ui.list.notifications',
                link: '/ui/notifications'
            },
            {
                id: 47,
                label: 'menuitems.ui.list.portlet',
                link: '/ui/portlets'
            },
            {
                id: 48,
                label: 'menuitems.ui.list.progress',
                link: '/ui/progress'
            },
            {
                id: 49,
                label: 'menuitems.ui.list.ribbons',
                link: '/ui/ribbons'
            },
            {
                id: 50,
                label: 'menuitems.ui.list.spinners',
                link: '/ui/spinners'
            },
            {
                id: 51,
                label: 'menuitems.ui.list.tabs',
                link: '/ui/tabs-accordions'
            },
            {
                id: 52,
                label: 'menuitems.ui.list.tooltip',
                link: '/ui/tooltips-popovers'
            },
            {
                id: 53,
                label: 'menuitems.ui.list.typography',
                link: '/ui/typography'
            }
        ]
    },
    {
        id: 54,
        label: 'menuitems.components.text',
        icon: 'ri-stack-line',
        subItems: [
            {
                id: 55,
                label: 'menuitems.extendedui.text',
                icon: 'ri-stack-line',
                subItems: [
                    {
                        id: 56,
                        label: 'menuitems.extendedui.list.rangeslider',
                        link: '/extended/rangeslider'
                    },
                    {
                        id: 57,
                        label: 'menuitems.extendedui.list.sweetalert',
                        link: '/extended/sweet-alert'
                    },
                    {
                        id: 58,
                        label: 'menuitems.extendedui.list.tour',
                        link: '/extended/tour'
                    },
                    {
                        id: 59,
                        label: 'menuitems.extendedui.list.scrollspy',
                        link: '/extended/scrollspy'
                    },
                ]
            },
            {
                id: 60,
                label: 'menuitems.widgets.text',
                icon: 'ri-honour-line',
                link: '/widgets'
            },
            {
                id: 61,
                label: 'menuitems.forms.text',
                icon: 'ri-eraser-line',
                subItems: [
                    {
                        id: 62,
                        label: 'menuitems.forms.list.elements',
                        link: '/forms/elements'
                    },
                    {
                        id: 63,
                        label: 'menuitems.forms.list.advanced',
                        link: '/forms/advanced'
                    },
                    {
                        id: 64,
                        label: 'menuitems.forms.list.validation',
                        link: '/forms/validation'
                    },
                    {
                        id: 65,
                        label: 'menuitems.forms.list.wizard',
                        link: '/forms/wizard'
                    },
                    {
                        id: 66,
                        label: 'menuitems.forms.list.mask',
                        link: '/forms/mask'
                    },
                    {
                        id: 67,
                        label: 'menuitems.forms.list.editor',
                        link: '/forms/quill'
                    },
                    {
                        id: 68,
                        label: 'menuitems.forms.list.fileupload',
                        link: '/forms/file-uploads'
                    }
                ]
            },
            {
                id: 69,
                label: 'menuitems.charts.text',
                icon: 'ri-bar-chart-line',
                subItems: [
                    {
                        id: 70,
                        label: 'menuitems.charts.list.apex',
                        link: '/charts/apex'
                    },
                    {
                        id: 71,
                        label: 'menuitems.charts.list.chartjs',
                        link: '/charts/chartjs'
                    },
                    {
                        id: 72,
                        label: 'menuitems.charts.list.c3',
                        link: '/charts/c3'
                    },
                    {
                        id: 73,
                        label: 'menuitems.charts.list.chartist',
                        link: '/charts/chartist'
                    },
                    {
                        id: 74,
                        label: 'menuitems.charts.list.knob',
                        link: '/charts/knob'
                    }
                ]
            },
            {
                id: 75,
                label: 'menuitems.tables.text',
                icon: 'ri-table-line',
                subItems: [
                    {
                        id: 76,
                        label: 'menuitems.tables.list.basic',
                        link: '/tables/basic'
                    },
                    {
                        id: 77,
                        label: 'menuitems.tables.list.advanced',
                        link: '/tables/advanced'
                    },
                ]
            },
            {
                id: 78,
                label: 'menuitems.icons.text',
                icon: 'ri-markup-line',
                subItems: [
                    {
                        id: 79,
                        label: 'menuitems.icons.list.feather',
                        link: '/icons/feather'
                    },
                    {
                        id: 80,
                        label: 'menuitems.icons.list.remix',
                        link: '/icons/remix'
                    },
                    {
                        id: 81,
                        label: 'menuitems.icons.list.boxicons',
                        link: '/icons/boxicons'
                    },
                    {
                        id: 82,
                        label: 'menuitems.icons.list.materialdesign',
                        link: '/icons/mdi'
                    },
                    {
                        id: 83,
                        label: 'menuitems.icons.list.fontawesome',
                        link: '/icons/font-awesome'
                    },
                    {
                        id: 84,
                        label: 'menuitems.icons.list.weather',
                        link: '/icons/weather'
                    }
                ]
            },
            {
                id: 85,
                label: 'menuitems.maps.text',
                icon: 'ri-map-pin-line',
                subItems: [
                    {
                        id: 86,
                        label: 'menuitems.maps.list.googlemap',
                        link: '/maps/google'
                    }
                ]
            }
        ]
    },
    {
        id: 87,
        label: 'menuitems.pages.text',
        icon: 'ri-pages-line',
        subItems: [
            {
                id: 88,
                label: 'menuitems.authstyle.text',
                subItems: [
                    {
                        id: 89,
                        label: 'menuitems.auth.list.login',
                        link: '/auth/login'
                    },
                    {
                        id: 90,
                        label: 'menuitems.auth.list.register',
                        link: '/auth/register'
                    },
                    {
                        id: 91,
                        label: 'menuitems.auth.list.signin-signup',
                        link: '/auth/signin-signup'
                    },
                    {
                        id: 92,
                        label: 'menuitems.auth.list.recoverpwd',
                        link: '/auth/recoverpwd'
                    },
                    {
                        id: 93,
                        label: 'menuitems.auth.list.lock-screen',
                        link: '/auth/lock-screen'
                    },
                    {
                        id: 94,
                        label: 'menuitems.auth.list.logout',
                        link: '/auth/logout'
                    },
                    {
                        id: 95,
                        label: 'menuitems.auth.list.confirm-mail',
                        link: '/auth/confirm-mail'
                    }
                ]
            },
            {
                id: 96,
                label: 'menuitems.authstyle2.text',
                subItems: [
                    {
                        id: 97,
                        label: 'menuitems.auth.list.login-2',
                        link: '/auth/login-2'
                    },
                    {
                        id: 98,
                        label: 'menuitems.auth.list.register-2',
                        link: '/auth/register-2'
                    },
                    {
                        id: 99,
                        label: 'menuitems.auth.list.signin-signup-2',
                        link: '/auth/signin-signup-2'
                    },
                    {
                        id: 100,
                        label: 'menuitems.auth.list.recoverpwd-2',
                        link: '/auth/recoverpwd-2'
                    },
                    {
                        id: 101,
                        label: 'menuitems.auth.list.lock-screen-2',
                        link: '/auth/lock-screen-2'
                    },
                    {
                        id: 102,
                        label: 'menuitems.auth.list.logout-2',
                        link: '/auth/logout-2'
                    },
                    {
                        id: 103,
                        label: 'menuitems.auth.list.confirm-mail',
                        link: '/auth/confirm-mail-2'
                    },
                ]
            },
            {
                id: 104,
                label: 'menuitems.errors.text',
                subItems: [
                    {
                        id: 105,
                        label: 'menuitems.extrapages.list.error404',
                        link: '/error/404'
                    },
                    {
                        id: 106,
                        label: 'menuitems.extrapages.list.error404-alt',
                        link: '/error/404-alt'
                    },
                    {
                        id: 107,
                        label: 'menuitems.extrapages.list.error500',
                        link: '/error/500'
                    }
                ]
            },
            {
                id: 108,
                label: 'menuitems.utility.text',
                subItems: [
                    {
                        id: 109,
                        label: 'menuitems.extrapages.list.starter',
                        link: '/extras/starter'
                    },
                    {
                        id: 110,
                        label: 'menuitems.extrapages.list.timeline',
                        link: '/extras/timeline'
                    },
                    {
                        id: 111,
                        label: 'menuitems.extrapages.list.sitemap',
                        link: '/extras/sitemap'
                    },
                    {
                        id: 112,
                        label: 'menuitems.extrapages.list.invoice',
                        link: '/extras/invoice'
                    },
                    {
                        id: 113,
                        label: 'menuitems.extrapages.list.faqs',
                        link: '/extras/faqs'
                    },
                    {
                        id: 114,
                        label: 'menuitems.extrapages.list.search-results',
                        link: '/extras/search-results'
                    },
                    {
                        id: 115,
                        label: 'menuitems.extrapages.list.pricing',
                        link: '/extras/pricing'
                    },
                    {
                        id: 116,
                        label: 'menuitems.extrapages.list.maintenance',
                        link: '/extras/maintenance'
                    },
                    {
                        id: 117,
                        label: 'menuitems.extrapages.list.comingsoon',
                        link: '/extras/coming-soon'
                    },
                    {
                        id: 118,
                        label: 'menuitems.extrapages.list.lightbox',
                        link: '/extras/lightbox'
                    },
                ]
            }
        ]
    }
];
