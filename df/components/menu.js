export const menuItems = [
    {
        id: 1,
        label: "menuitems.navigation.text",
        isTitle: true
    },
    {
        id: 2,
        label: "menuitems.dashboard.text",
        icon: "ri-dashboard-line",
        link: '/'
    },
    
    {
        id: 6,
        label: "menuitems.apps.text",
        isTitle: true
    },
    {
        id: 1001,
        label: 'menuitems.management.text',
        icon: 'ri-stack-line',
        
        isMenuCollapsed: false,
        subItems: [
            {
                id: 1002,
                label: 'menuitems.management.list.admins',
                link: '/management/users'
            },
            {
                id: 1003,
                label: 'menuitems.management.list.agents',
                link: '/management/agents'
            },
            {
                id: 1004,
                label: 'menuitems.management.list.managers',
                link: '/management/managers'
            },
            {
                id: 1005,
                label: 'menuitems.management.list.landLords',
                link: '/management/landlords'
            },
            {
                id: 1015,
                label: 'menuitems.management.list.tenants',
                link: '/management/tenant'
            },
        ]
    },
    {
        id: 7,
        label: "menuitems.properties.text",
        icon: "ri-building-2-line",
        link: '/properties'
    },
{
	id:12001,
	label:"Leads",
	icon:"mdi mdi-account-multiple-outline",
	isMenuCollapsed:false,
	subItems:[
	 {
        id: 12000,
        label: "menuitems.leads.text",
        icon: "mdi mdi-account-mutliple-outline",
        link: 'leads'
    },
	{
	id:12002,
	label:"Leads Search",
	icon:"mdi mdi-account-multiple-outline",
	link:"lead-list"
	},
]

}, 



{
        id: 77,
        label: "menuitems.rentalapplication.text",
        icon: "ri-briefcase-line",
        link: '/rental-app'
    },

{
	id:5000,
	label:"Payments",
	icon:"mdi mdi-account-mutliple-outline",
	isMenuCollapsed: false,
	subItems:[
		{id:5001,
		label: 'Payment',
		link: '/landlord/payments'
		},
	{id:5002,
label: 'Payment History',
link: '/landlord/payments-history',
},
	]
},

{
	id:5003,
	label:'Leases',
	link:'/landlord/leases',
},

    {
        id: 11,
        label: "menuitems.management.list.tenants",
        icon: "mdi mdi-account-multiple-outline",
        
        isMenuCollapsed: false,
        subItems: [
            {
                id: 1102,
                label: 'menuitems.tenant.text',
                link: '/landlord/tenant'
            },
             {
                 id: 1103,
                 label: 'menuitems.search.text',
                 link: '/landlord/tenant-search'
             },
            {
                id: 1105,
                label: 'menuitems.searchhistory.text',
                link: '/landlord/search-history'
            },
            {
                id: 1104,
                label: 'menuitems.tenantinfo.text',
                link: '/landlord/tenant-information'
            },
            
        ]
    },
    {
        id: 8,
        label: "menuitems.approvals.text",
        icon: "ri-home-smile-2-line",
        link: '/approvals/list'
    },
    {
        id: 9,
        label: "menuitems.reports.text",
        icon: "ri-task-line",
        link: '/reports/list'
    },
    {
        id: 3000,
        label: 'menuitems.email.text',
        icon: 'ri-mail-line',
        isMenuCollapsed: false,
        subItems: [
            {
                id: 3001,
                label: 'menuitems.email.list.inbox',
                link: '/email/inbox'
            },
            {
                id: 3002,
                label: 'menuitems.email.list.reademail',
                link: '/email/reademail/1'
            },
            {
                id: 3003,
                label: 'menuitems.email.list.template',
                link: '/email/templates'
            }
        ]
    },
     {
        id: 29,
        label: 'menuitems.ticket.text',
        icon: 'ri-customer-service-2-line',
        link: '/apps/tickets'
    },
    
    {
        id: 12,
        label: "menuitems.rentalapplication.text",
        icon: "ri-task-line",
        link: '/landlord/rentalapplication'
    },
    {
        id: 10,
        label: "menuitems.companies.text",
        icon: "mdi mdi-bullseye",
        link: '/landlord/company'
    },
    // {
    //     id: 2000,
    //     label: "Options",
    //     isTitle: true
    // },
    // {
    //     id: 2001,
    //     label: 'LandLords',
    //     icon: 'ri-stack-line',
        
    //     isMenuCollapsed: false,
    //     subItems: [
    //         {
    //             id: 2002,
    //             label: 'Tenant',
    //             link: '/management/users'
    //         },
    //         {
    //             id: 2003,
    //             label: 'Reports',
    //             link: '/management/agents'
    //         },
    //         // {
    //         //     id: 1004,
    //         //     label: 'Managers',
    //         //     link: '/management/managers'
    //         // },
    //         // {
    //         //     id: 1005,
    //         //     label: 'Landlords',
    //         //     link: '/management/landlords'
    //         // },
    //         // {
    //         //     id: 1015,
    //         //     label: 'Tenants',
    //         //     link: '/management/tenant'
    //         // },
    //     ]
    // },
    // {
    //     id: 8,
    //     label: "menuitems.chat.text",
    //     icon: "ri-message-2-line",
    //     link: '/apps/chat'
    // },
    // {
    //     id: 8,
    //     label: "menuitems.ecommerce.text",
    //     icon: "ri-shopping-cart-2-line",
    //     badge: {
    //         variant: "danger",
    //         text: "menuitems.ecommerce.badge"
    //     },
    //     isMenuCollapsed: false,
    //     subItems: [
    //         {
    //             id: 9,
    //             label: "menuitems.ecommerce.list.products",
    //             link: "/ecommerce/products"
    //         },
    //         {
    //             id: 10,
    //             label: "menuitems.ecommerce.list.productsgrid",
    //             link: "/ecommerce/products-grid"
    //         },
    //         {
    //             id: 11,
    //             label: 'menuitems.ecommerce.list.productdetail',
    //             link: '/ecommerce/product-detail/1'
    //         },
    //         {
    //             id: 12,
    //             label: 'menuitems.ecommerce.list.createproduct',
    //             link: '/ecommerce/product-create'
    //         },
    //         {
    //             id: 13,
    //             label: "menuitems.ecommerce.list.customers",
    //             link: "/ecommerce/customers"
    //         },
    //         {
    //             id: 14,
    //             label: "menuitems.ecommerce.list.orders",
    //             link: "/ecommerce/orders"
    //         },
    //         {
    //             id: 15,
    //             label: "menuitems.ecommerce.list.orderdetail",
    //             link: "/ecommerce/order-detail"
    //         },
    //         {
    //             id: 16,
    //             label: "menuitems.ecommerce.list.sellers",
    //             link: "/ecommerce/sellers"
    //         },
    //         {
    //             id: 17,
    //             label: "menuitems.ecommerce.list.cart",
    //             link: "/ecommerce/cart"
    //         },
    //         {
    //             id: 18,
    //             label: "menuitems.ecommerce.list.checkout",
    //             link: "/ecommerce/checkout"
    //         }
    //     ]
    // },
    // {
    //     id: 19,
    //     label: 'menuitems.calendar.text',
    //     icon: 'ri-calendar-2-line',
    //     link: '/apps/calendar'
    // },
    
    // {
    //     id: 24,
    //     label: 'menuitems.companies.text',
    //     icon: 'ri-building-4-line',
    //     link: '/apps/companies'
    // },
    // {
    //     id: 25,
    //     label: 'menuitems.tasks.text',
    //     icon: 'ri-task-line',
    //     isMenuCollapsed: false,
    //     subItems: [
    //         {
    //             id: 26,
    //             label: 'menuitems.tasks.list.list',
    //             link: '/task/list'
    //         },
    //         {
    //             id: 27,
    //             label: 'menuitems.tasks.list.detail',
    //             link: '/task/detail'
    //         },
    //         {
    //             id: 28,
    //             label: 'menuitems.tasks.list.kanban',
    //             link: '/task/kanban'
    //         }
    //     ]
    // },
    // {
    //     id: 29,
    //     label: 'menuitems.ticket.text',
    //     icon: 'ri-customer-service-2-line',
    //     link: '/apps/tickets'
    // },
    // {
    //     id: 30,
    //     label: 'menuitems.contacts.text',
    //     icon: 'ri-profile-line',
    //     isMenuCollapsed: false,
    //     subItems: [
    //         {
    //             id: 31,
    //             label: 'menuitems.contacts.list.members',
    //             link: '/contacts/list'
    //         },
    //         {
    //             id: 32,
    //             label: 'menuitems.contacts.list.profile',
    //             link: '/contacts/profile'
    //         }
    //     ]
    // },
    // {
    //     id: 33,
    //     label: 'menuitems.filemanager.text',
    //     icon: 'ri-folders-line',
    //     link: '/apps/file-manager'
    // },
    // {
    //     id: 34,
    //     label: "menuitems.custom.text",
    //     isTitle: true
    // },
    // {
    //     id: 35,
    //     label: 'menuitems.auth.text',
    //     icon: 'ri-shield-user-line',
    //     isMenuCollapsed: false,
    //     subItems: [
    //         {
    //             id: 36,
    //             label: 'menuitems.auth.list.login',
    //             link: '/auth/login'
    //         },
    //         {
    //             id: 37,
    //             label: 'menuitems.auth.list.login-2',
    //             link: '/auth/login-2'
    //         },
    //         {
    //             id: 38,
    //             label: 'menuitems.auth.list.register',
    //             link: '/auth/register'
    //         },
    //         {
    //             id: 39,
    //             label: 'menuitems.auth.list.register-2',
    //             link: '/auth/register-2'
    //         },
    //         {
    //             id: 40,
    //             label: 'menuitems.auth.list.signin-signup',
    //             link: '/auth/signin-signup'
    //         },
    //         {
    //             id: 41,
    //             label: 'menuitems.auth.list.signin-signup-2',
    //             link: '/auth/signin-signup-2'
    //         },
    //         {
    //             id: 42,
    //             label: 'menuitems.auth.list.recoverpwd',
    //             link: '/auth/recoverpwd'
    //         },
    //         {
    //             id: 43,
    //             label: 'menuitems.auth.list.recoverpwd-2',
    //             link: '/auth/recoverpwd-2'
    //         },
    //         {
    //             id: 44,
    //             label: 'menuitems.auth.list.lock-screen',
    //             link: '/auth/lock-screen'
    //         },
    //         {
    //             id: 45,
    //             label: 'menuitems.auth.list.lock-screen-2',
    //             link: '/auth/lock-screen-2'
    //         },
    //         {
    //             id: 46,
    //             label: 'menuitems.auth.list.logout',
    //             link: '/auth/logout'
    //         },
    //         {
    //             id: 47,
    //             label: 'menuitems.auth.list.logout-2',
    //             link: '/auth/logout-2'
    //         },
    //         {
    //             id: 48,
    //             label: 'menuitems.auth.list.confirm-mail',
    //             link: '/auth/confirm-mail'
    //         },
    //         {
    //             id: 49,
    //             label: 'menuitems.auth.list.confirm-mail-2',
    //             link: '/auth/confirm-mail-2'
    //         },
    //     ]
    // },
    // {
    //     id: 50,
    //     label: 'menuitems.extrapages.text',
    //     icon: 'ri-pages-line',
    //     isMenuCollapsed: false,
    //     subItems: [
    //         {
    //             id: 51,
    //             label: 'menuitems.extrapages.list.starter',
    //             link: '/extras/starter'
    //         },
    //         {
    //             id: 52,
    //             label: 'menuitems.extrapages.list.timeline',
    //             link: '/extras/timeline'
    //         },
    //         {
    //             id: 53,
    //             label: 'menuitems.extrapages.list.sitemap',
    //             link: '/extras/sitemap'
    //         },
    //         {
    //             id: 54,
    //             label: 'menuitems.extrapages.list.invoice',
    //             link: '/extras/invoice'
    //         },
    //         {
    //             id: 55,
    //             label: 'menuitems.extrapages.list.faqs',
    //             link: '/extras/faqs'
    //         },
    //         {
    //             id: 56,
    //             label: 'menuitems.extrapages.list.search-results',
    //             link: '/extras/search-results'
    //         },
    //         {
    //             id: 57,
    //             label: 'menuitems.extrapages.list.pricing',
    //             link: '/extras/pricing'
    //         },
    //         {
    //             id: 58,
    //             label: 'menuitems.extrapages.list.maintenance',
    //             link: '/extras/maintenance'
    //         },
    //         {
    //             id: 59,
    //             label: 'menuitems.extrapages.list.comingsoon',
    //             link: '/extras/coming-soon'
    //         },
    //         {
    //             id: 60,
    //             label: 'menuitems.extrapages.list.lightbox',
    //             link: '/extras/lightbox'
    //         },
    //         {
    //             id: 61,
    //             label: 'menuitems.extrapages.list.error404',
    //             link: '/extras/404'
    //         },
    //         {
    //             id: 61,
    //             label: 'menuitems.extrapages.list.error404-alt',
    //             link: '/extras/404-alt'
    //         },
    //         {
    //             id: 62,
    //             label: 'menuitems.extrapages.list.error500',
    //             link: '/extras/500'
    //         }
    //     ]
    // },
    // {
    //     id: 63,
    //     label: "menuitems.components.text",
    //     isTitle: true
    // },
    // {
    //     id: 64,
    //     label: 'menuitems.ui.text',
    //     icon: 'ri-pencil-ruler-2-line',
    //     isMenuCollapsed: false,
    //     subItems: [
    //         {
    //             id: 65,
    //             label: 'menuitems.ui.list.avatars',
    //             link: '/ui/avatars'
    //         },
    //         {
    //             id: 66,
    //             label: 'menuitems.ui.list.buttons',
    //             link: '/ui/buttons'
    //         },
    //         {
    //             id: 67,
    //             label: 'menuitems.ui.list.cards',
    //             link: '/ui/cards'
    //         },
    //         {
    //             id: 68,
    //             label: 'menuitems.ui.list.carousel',
    //             link: '/ui/carousel'
    //         },
    //         {
    //             id: 69,
    //             label: 'menuitems.ui.list.dropdowns',
    //             link: '/ui/dropdowns'
    //         },
    //         {
    //             id: 70,
    //             label: 'menuitems.ui.list.video',
    //             link: '/ui/video'
    //         },
    //         {
    //             id: 71,
    //             label: 'menuitems.ui.list.general',
    //             link: '/ui/general'
    //         },
    //         {
    //             id: 72,
    //             label: 'menuitems.ui.list.grid',
    //             link: '/ui/grid'
    //         },
    //         {
    //             id: 73,
    //             label: 'menuitems.ui.list.images',
    //             link: '/ui/images'
    //         },
    //         {
    //             id: 74,
    //             label: 'menuitems.ui.list.listgroup',
    //             link: '/ui/list-group'
    //         },
    //         {
    //             id: 75,
    //             label: 'menuitems.ui.list.modals',
    //             link: '/ui/modals'
    //         },
    //         {
    //             id: 76,
    //             label: 'menuitems.ui.list.notifications',
    //             link: '/ui/notifications'
    //         },
    //         {
    //             id: 77,
    //             label: 'menuitems.ui.list.portlet',
    //             link: '/ui/portlets'
    //         },
    //         {
    //             id: 78,
    //             label: 'menuitems.ui.list.progress',
    //             link: '/ui/progress'
    //         },
    //         {
    //             id: 79,
    //             label: 'menuitems.ui.list.ribbons',
    //             link: '/ui/ribbons'
    //         },
    //         {
    //             id: 80,
    //             label: 'menuitems.ui.list.spinners',
    //             link: '/ui/spinners'
    //         },
    //         {
    //             id: 81,
    //             label: 'menuitems.ui.list.tabs',
    //             link: '/ui/tabs-accordions'
    //         },
    //         {
    //             id: 82,
    //             label: 'menuitems.ui.list.tooltip',
    //             link: '/ui/tooltips-popovers'
    //         },
    //         {
    //             id: 83,
    //             label: 'menuitems.ui.list.typography',
    //             link: '/ui/typography'
    //         }
    //     ]
    // },
    // {
    //     id: 84,
    //     label: 'menuitems.extendedui.text',
    //     icon: 'ri-stack-line',
    //     badge: {
    //         variant: "primary",
    //         text: "menuitems.extendedui.badge"
    //     },
    //     isMenuCollapsed: false,
    //     subItems: [
    //         {
    //             id: 85,
    //             label: 'menuitems.extendedui.list.rangeslider',
    //             link: '/extended/rangeslider'
    //         },
    //         {
    //             id: 86,
    //             label: 'menuitems.extendedui.list.sweetalert',
    //             link: '/extended/sweet-alert'
    //         },
    //         {
    //             id: 87,
    //             label: 'menuitems.extendedui.list.tour',
    //             link: '/extended/tour'
    //         },
    //         {
    //             id: 88,
    //             label: 'menuitems.extendedui.list.scrollspy',
    //             link: '/extended/scrollspy'
    //         },
    //     ]
    // },
    // {
    //     id: 89,
    //     label: 'menuitems.widgets.text',
    //     icon: 'ri-honour-line',
    //     link: '/widgets'
    // },
    // {
    //     id: 90,
    //     label: 'menuitems.icons.text',
    //     icon: 'ri-markup-line',
    //     isMenuCollapsed: false,
    //     subItems: [
    //         {
    //             id: 91,
    //             label: 'menuitems.icons.list.feather',
    //             link: '/icons/feather'
    //         },
    //         {
    //             id: 92,
    //             label: 'menuitems.icons.list.remix',
    //             link: '/icons/remix'
    //         },
    //         {
    //             id: 93,
    //             label: 'menuitems.icons.list.boxicons',
    //             link: '/icons/boxicons'
    //         },
    //         {
    //             id: 94,
    //             label: 'menuitems.icons.list.materialdesign',
    //             link: '/icons/mdi'
    //         },
    //         {
    //             id: 95,
    //             label: 'menuitems.icons.list.fontawesome',
    //             link: '/icons/font-awesome'
    //         },
    //         {
    //             id: 96,
    //             label: 'menuitems.icons.list.weather',
    //             link: '/icons/weather'
    //         }
    //     ]
    // },
    // {
    //     id: 97,
    //     label: 'menuitems.forms.text',
    //     icon: 'ri-eraser-line',
    //     isMenuCollapsed: false,
    //     subItems: [
    //         {
    //             id: 98,
    //             label: 'menuitems.forms.list.elements',
    //             link: '/forms/elements'
    //         },
    //         {
    //             id: 99,
    //             label: 'menuitems.forms.list.advanced',
    //             link: '/forms/advanced'
    //         },
    //         {
    //             id: 100,
    //             label: 'menuitems.forms.list.validation',
    //             link: '/forms/validation'
    //         },
    //         {
    //             id: 101,
    //             label: 'menuitems.forms.list.wizard',
    //             link: '/forms/wizard'
    //         },
    //         {
    //             id: 102,
    //             label: 'menuitems.forms.list.mask',
    //             link: '/forms/mask'
    //         },
    //         {
    //             id: 103,
    //             label: 'menuitems.forms.list.editor',
    //             link: '/forms/quill'
    //         },
    //         {
    //             id: 104,
    //             label: 'menuitems.forms.list.fileupload',
    //             link: '/forms/file-uploads'
    //         }
    //     ]
    // },
    // {
    //     id: 105,
    //     label: 'menuitems.tables.text',
    //     icon: 'ri-table-line',
    //     isMenuCollapsed: false,
    //     subItems: [
    //         {
    //             id: 106,
    //             label: 'menuitems.tables.list.basic',
    //             link: '/tables/basic'
    //         },
    //         {
    //             id: 107,
    //             label: 'menuitems.tables.list.advanced',
    //             link: '/tables/advanced'
    //         },
    //     ]
    // },
    // {
    //     id: 108,
    //     label: 'menuitems.charts.text',
    //     icon: 'ri-bar-chart-line',
    //     isMenuCollapsed: false,
    //     subItems: [
    //         {
    //             id: 109,
    //             label: 'menuitems.charts.list.apex',
    //             link: '/charts/apex'
    //         },
    //         {
    //             id: 109,
    //             label: 'menuitems.charts.list.chartjs',
    //             link: '/charts/chartjs'
    //         },
    //         {
    //             id: 109,
    //             label: 'menuitems.charts.list.c3',
    //             link: '/charts/c3'
    //         },
    //         {
    //             id: 109,
    //             label: 'menuitems.charts.list.chartist',
    //             link: '/charts/chartist'
    //         },
    //         {
    //             id: 109,
    //             label: 'menuitems.charts.list.knob',
    //             link: '/charts/knob'
    //         }
    //     ]
    // },
    // {
    //     id: 110,
    //     label: 'menuitems.maps.text',
    //     icon: 'ri-map-pin-line',
    //     isMenuCollapsed: false,
    //     subItems: [
    //         {
    //             id: 111,
    //             label: 'menuitems.maps.list.googlemap',
    //             link: '/maps/google'
    //         }
    //     ]
    // },
    // {
    //     id: 112,
    //     label: "menuitems.multilevel.text",
    //     icon: "ri-share-line",
    //     isMenuCollapsed: false,
    //     subItems: [
    //         {
    //             id: 113,
    //             label: "menuitems.multilevel.list.level1.1",
    //             link: "javascript: void(0);",
    //         },
    //         {
    //             id: 114,
    //             label: "menuitems.multilevel.list.level1.2",
    //             isMenuCollapsed: false,
    //             subItems: [
    //                 {
    //                     id: 115,
    //                     label: "menuitems.multilevel.list.level1.level2.1",
    //                     link: "javascript: void(0);"
    //                 },
    //                 {
    //                     id: 116,
    //                     label: "menuitems.multilevel.list.level1.level2.2",
    //                     link: "/level2.2"
    //                 }
    //             ]
    //         }
    //     ]
    // }

];

