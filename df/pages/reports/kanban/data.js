const tasks = [
  {
    id: 1,
    status: "Upcoming",
    items: [
      {
        id: 1,
        title: "iOS App home page",
        description:
          "There are many variations of passages of Lorem Ipsum available.",
        date: "Jan 16, 2019",
        task: "Medium",
        user: [
          require("~/assets/images/users/avatar-1.jpg"),
          require("~/assets/images/users/avatar-3.jpg")
        ],
        groupId: 1
      },
      {
        id: 2,
        title: "Topnav layout design",
        description: "Many desktop publishing packages and web page.",
        date: "Jan 22, 2019",
        task: "Low",
        user: [require("~/assets/images/users/avatar-2.jpg")],
        groupId: 1
      },
      {
        id: 3,
        title: "Invite user to a project",
        description: "If you are going to use a passage of Lorem Ipsum.",
        date: "Feb 08, 2019",
        task: "Low",
        user: [require("~/assets/images/users/avatar-5.jpg")],
        groupId: 1
      },
      {
        id: 4,
        title: "Write a release note",
        description:
          "There are many variations of passages of Lorem Ipsum available.",
        date: "Feb 12, 2019",
        task: "High",
        user: [
          require("~/assets/images/users/avatar-6.jpg"),
          require("~/assets/images/users/avatar-7.jpg")
        ],
        groupId: 1
      }
    ]
  },
  {
    id: 2,
    status: "In Progress",
    items: [
      {
        id: 5,
        title: "Enable analytics tracking",
        description:
          "It has roots in a piece of classical Latin literature from 45 BC.",
        date: "Feb 12, 2019",
        task: "Low",
        user: [require("~/assets/images/users/avatar-6.jpg")],
        groupId: 2
      },
      {
        id: 6,
        title: "Topnav layout design",
        description:
          "All the Lorem Ipsum generators on the Internet tend to repeat predefined.",
        date: "Jan 31, 2019",
        task: "Low",
        user: [
          require("~/assets/images/users/avatar-8.jpg"),
          require("~/assets/images/users/avatar-4.jpg")
        ],
        groupId: 2
      },
      {
        id: 7,
        title: "Code HTML email template",
        description:
          "There are many variations of passages of Lorem Ipsum available.",
        date: "Mar 27, 2019",
        task: "High",
        user: [require("~/assets/images/users/avatar-9.jpg")],
        groupId: 2
      }
    ]
  },
  {
    id: 3,
    status: "Completed",
    items: [
      {
        id: 8,
        title: "Brand logo design",
        description:
          "Various versions have evolved over the years, sometimes by accident.",
        date: "Mar 27, 2019",
        task: "Low",
        user: [require("~/assets/images/users/avatar-2.jpg")],
        groupId: 3
      },
      {
        id: 9,
        title: "Improve animation loader",
        description:
          "A handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.",
        date: "Mar 27, 2019",
        task: "Medium",
        user: [require("~/assets/images/users/avatar-3.jpg")],
        groupId: 3
      },
      {
        id: 10,
        title: "Dashboard Re-design",
        description:
          "There are many variations of passages of Lorem Ipsum available.",
        date: "Apr 19, 2019",
        task: "Low",
        user: [
          require("~/assets/images/users/avatar-5.jpg"),
          require("~/assets/images/users/avatar-8.jpg")
        ],
        groupId: 3
      },
      {
        id: 11,
        title: "iOS App home page",
        description:
          "you need to be sure there isn't anything embarrassing hidden in the middle of text.",
        date: "Apr 27, 2019",
        task: "Low",
        user: [require("~/assets/images/users/avatar-4.jpg")],
        groupId: 3
      }
    ]
  }
];

export { tasks };
