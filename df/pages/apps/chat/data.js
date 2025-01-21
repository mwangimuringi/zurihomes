const chatData = [
  {
    id: 1,
    image: require("~/assets/images/users/avatar-2.jpg"),
    name: "Brandon Smith",
    message: "How are you today?",
    time: "4:30am",
    status: "away"
  },
  {
    id: 2,
    image: require("~/assets/images/users/avatar-5.jpg"),
    name: "James Zavel",
    message: "Hey! a reminder for tomorrow's meeting...",
    time: "5:30am",
    status: "online"
  },
  {
    id: 3,
    image: require("~/assets/images/users/avatar-7.jpg"),
    name: "Maria C",
    message: "Are we going to have this week's planning meeting today?",
    time: "Thu",
    status: "away"
  },
  {
    id: 4,
    image: require("~/assets/images/users/avatar-8.jpg"),
    name: "Rhonda D",
    message: "Please check these design assets...",
    time: "Wed",
    status: "warning"
  },
  {
    id: 5,
    image: require("~/assets/images/users/avatar-3.jpg"),
    name: "Michael H",
    message: "Are you free for 15 min? I would like to discuss something...",
    time: "Tue",
    status: "do-not-disturb"
  },
  {
    id: 6,
    image: require("~/assets/images/users/avatar-6.jpg"),
    name: "Thomas R",
    message: "Let's have meeting today between me, you and Tony...",
    time: "Tue",
    status: "away"
  },
  {
    id: 7,
    image: require("~/assets/images/users/avatar-8.jpg"),
    name: "Thomas J",
    message: "Howdy?",
    time: "Tue",
    status: "online"
  },
  {
    id: 8,
    image: require("~/assets/images/users/avatar-4.jpg"),
    name: "Ricky J",
    message: "Are you interested in learning?",
    time: "Tue",
    status: "online"
  }
];

const chatMessagesData = [
  {
    id: 1,
    image: require("~/assets/images/users/avatar-5.jpg"),
    name: "James Zavel",
    message: "Hello!",
    time: "10:00"
  },
  {
    id: 2,
    align: "right",
    image: require("~/assets/images/users/avatar-1.jpg"),
    name: "Nik Patel",
    message: "Hi, How are you? What about our next meeting?",
    time: "10:01"
  },
  {
    id: 3,
    image: require("~/assets/images/users/avatar-5.jpg"),
    name: "James Zavel",
    message: "Yeah everything is fine",
    time: "10:01"
  },
  {
    id: 4,
    align: "right",
    image: require("~/assets/images/users/avatar-1.jpg"),
    name: "Nik Patel",
    message: "Wow that's great",
    time: "10:02"
  },
  {
    id: 5,
    name: "James Zavel",
    image: require("~/assets/images/users/avatar-5.jpg"),
    message: "Let's have it today if you are free",
    time: "10:02"
  },
  {
    id: 6,
    align: "right",
    image: require("~/assets/images/users/avatar-1.jpg"),
    name: "Nik Patel",
    message: "Sure thing! let me know if 2pm works for you",
    time: "10:03"
  },
  {
    id: 7,
    name: "James Zavel",
    image: require("~/assets/images/users/avatar-5.jpg"),
    message:
      "Sorry, I have another meeting scheduled at 2pm. Can we have it at 3pm instead?",
    time: "10:04"
  },
  {
    id: 8,
    name: "James Zavel",
    image: require("~/assets/images/users/avatar-5.jpg"),
    message:
      "We can also discuss about the presentation talk format if you have some extra mins",
    time: "10:04"
  },
  {
    id: 9,
    image: require("~/assets/images/users/avatar-1.jpg"),
    align: "right",
    name: "Nik Patel",
    message:
      "3pm it is. Sure, let's discuss about presentation format, it would be great to finalize today. I am attaching the last year format and assets here...",
    file: true
  }
];

export { chatData, chatMessagesData };
