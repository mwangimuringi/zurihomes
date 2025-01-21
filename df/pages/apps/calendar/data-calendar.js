const categories = [
    {
        name: 'Danger',
        value: 'bg-danger text-white'
    },
    {
        name: 'Success',
        value: 'bg-success text-white'
    },
    {
        name: 'Primary',
        value: 'bg-primary text-white'
    },
    {
        name: 'Info',
        value: 'bg-info text-white'
    },
    {
        name: 'Dark',
        value: 'bg-dark text-white'
    },
    {
        name: 'Warning',
        value: 'bg-warning text-white'
    },
];

const calendarEvents = [
    {
        id: 1,
        title: 'All Day Event',
        start: new Date().setDate(new Date().getDate() + 1),
        className: 'bg-primary text-white',
    },
    {
        id: 2,
        title: 'Long Event',
        start: new Date().setDate(new Date().getDate() - 5),
        end: new Date().setDate(new Date().getDate() -3),
        className: 'bg-warning text-white',
    },
    {
        id: 3,
        title: 'Repeating Event',
        start: new Date().setDate(new Date().getDate() - 3),
        className: 'bg-info text-white',
    },
    {
        id: 4,
        title: 'Meeting',
        start: new Date().setDate(new Date().getDate() + 4),
        className: 'bg-success text-white'
    }
];

export { categories, calendarEvents };
