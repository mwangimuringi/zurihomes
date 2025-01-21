const widgetData = [
    {
        icon: 'fe-tag',
        tickets: 25563,
        title: 'Total tickets',
        text: '',
    },
    {
        icon: 'fe-archive',
        tickets: 6952,
        title: 'Pending Tickets',
        text: 'warning'
    },
    {
        icon: 'fe-shield',
        tickets: 18361,
        title: 'Closed Tickets',
        text: 'success'
    },
    {
        icon: 'fe-delete',
        tickets: 250,
        title: 'Deleted Tickets',
        text: 'danger'
    }
];


const tableData = [
    {
        id: '#1020',
        requestuser: require('~/assets/images/users/avatar-9.jpg'),
        name: 'Erwin E. Brown',
        subject: 'A new rating has been received',
        assignuser: require('~/assets/images/users/avatar-1.jpg'),
        priority: 'Medium',
        status: 'Closed',
        createddate: '08/11/2013',
        duedate: '21/06/2013',
    },
    {
        id: '#1254',
        requestuser: require('~/assets/images/users/avatar-8.jpg'),
        name: 'Margeret V. Ligon',
        subject: 'Your application has been received!',
        assignuser: require('~/assets/images/users/avatar-10.jpg'),
        priority: 'High',
        status: 'Closed',
        createddate: '01/04/2017',
        duedate: '21/05/2017'
    },
    {
        id: '#1256',
        requestuser: require('~/assets/images/users/avatar-2.jpg'),
        name: 'George A. Lianes',
        subject: 'Support for theme',
        assignuser: require('~/assets/images/users/avatar-10.jpg'),
        priority: 'Low',
        status: 'Open',
        createddate: '28/04/2017',
        duedate: '12/05/2017'
    },
    {
        id: '#1352',
        requestuser: require('~/assets/images/users/avatar-5.jpg'),
        name: 'Karen R. Doyle',
        subject: 'Question regarding your Bootstrap Theme',
        assignuser: require('~/assets/images/users/avatar-8.jpg'),
        priority: 'High',
        status: 'Open',
        createddate: '01/04/2017',
        duedate: '21/05/2017'
    },
    {
        id: '#2251',
        requestuser: require('~/assets/images/users/avatar-8.jpg'),
        name: 'Mark C. Diaz',
        subject: 'Verify your new email address!',
        assignuser: require('~/assets/images/users/avatar-10.jpg'),
        priority: 'High',
        status: 'Open',
        createddate: '01/04/2017',
        duedate: '21/05/2017'
    },
    {
        id: '#2542',
        requestuser: require('~/assets/images/users/avatar-3.jpg'),
        name: 'Jose D. Delacruz',
        subject: 'New submission on your website',
        assignuser: require('~/assets/images/users/avatar-9.jpg'),
        priority: 'Medium',
        status: 'Closed',
        createddate: '25/04/2008',
        duedate: '12/06/2008'
    },
    {
        id: '#320',
        requestuser: require('~/assets/images/users/avatar-5.jpg'),
        name: 'Phyllis K. Maciel',
        subject: 'Verify your new email address!',
        assignuser: require('~/assets/images/users/avatar-10.jpg'),
        priority: 'High',
        status: 'Open',
        createddate: '20/04/2017',
        duedate: '25/04/2017'
    },
    {
        id: '#3562',
        requestuser: require('~/assets/images/users/avatar-8.jpg'),
        name: 'Freddie J. Plourde',
        subject: 'Security alert for my account',
        assignuser: require('~/assets/images/users/avatar-2.jpg'),
        priority: 'Low',
        status: 'Open',
        createddate: '01/04/2017',
        duedate: '21/05/2017'
    },
    {
        id: '#3653',
        requestuser: require('~/assets/images/users/avatar-3.jpg'),
        name: 'Jessica T. Phillips',
        subject: 'Item Support Message sent',
        assignuser: require('~/assets/images/users/avatar-10.jpg'),
        priority: 'Medium',
        status: 'Closed',
        createddate: '01/04/2017',
        duedate: '21/05/2017'
    },
    {
        id: '#3653',
        requestuser: require('~/assets/images/users/avatar-4.jpg'),
        name: 'Luke J. Sain',
        subject: 'Your password has been resett',
        assignuser: require('~/assets/images/users/avatar-10.jpg'),
        priority: 'Low',
        status: 'Open',
        createddate: '01/04/2017',
        duedate: '21/05/2017'
    },
    {
        id: '#3654',
        requestuser: require('~/assets/images/users/avatar-2.jpg'),
        name: 'Robert K. Joseph',
        subject: 'Support for theme',
        assignuser: require('~/assets/images/users/avatar-10.jpg'),
        priority: 'Low',
        status: 'Open',
        createddate: '01/04/2017',
        duedate: '21/05/2017'
    },
    {
        id: '#3658',
        requestuser: require('~/assets/images/users/avatar-9.jpg'),
        name: 'Darrell J. Cook',
        subject: 'Christopher S. Ahmad',
        assignuser: require('~/assets/images/users/avatar-10.jpg'),
        priority: 'Medium',
        status: 'Closed',
        createddate: '01/04/2017',
        duedate: '21/05/2017'
    },
    {
        id: '#854',
        requestuser: require('~/assets/images/users/avatar-2.jpg'),
        name: 'William L. Trent',
        subject: 'Your Profile has been accepted',
        assignuser: require('~/assets/images/users/avatar-10.jpg'),
        priority: 'High',
        status: 'Open',
        createddate: '01/04/2017',
        duedate: '21/05/2017'
    },
    {
        id: '#9501',
        requestuser: require('~/assets/images/users/avatar-10.jpg'),
        name: 'Amy R. Barnaby',
        subject: 'Homeworth for your property increased',
        assignuser: require('~/assets/images/users/avatar-3.jpg'),
        priority: 'Low',
        status: 'Open',
        createddate: '01/04/2017',
        duedate: '21/05/2017'
    },
    {
        id: '#9852',
        requestuser: require('~/assets/images/users/avatar-5.jpg'),
        name: 'Debra J. Wilson',
        subject: 'Your item has been updated!',
        assignuser: require('~/assets/images/users/avatar-10.jpg'),
        priority: 'High',
        status: 'Open',
        createddate: '01/04/2017',
        duedate: '21/05/2017'
    }
];

export { widgetData, tableData };

