import { USERS } from "./users";

export const POSTS = [
  {
    imageUrl:
      "https://devathon.com/wp-content/uploads/2019/12/blog-post-1-1-6.png",
    user: USERS[0].user,
    likes: 12839,
    caption:
      "Devathon delivers great products. We can design and develop products for web, mobile and wearable platforms",
    profile_picture: USERS[0].image,
    comments: [
      {
        user: "rajshamini",
        comment: "Once I wake up, I'll finally be ready to code this",
      },
    ],
  },
  {
    imageUrl: "https://miro.medium.com/max/1400/1*vCa17423bnQ5NctxTqmQig.jpeg",
    user: USERS[1].user,
    likes: 19569,
    caption:
      "🔴 Build a Discord clone with REACT.JS for beginners! (With REDUX)",
    profile_picture: USERS[3].image,
    comments: [
      {
        user: "Sai Kumar",
        comment: "wow ! This build looks fire, super excited about this ",
      },
      {
        user: "Akshay ",
        comment:
          "I'm really happy to see you again with a massive project 🔥🔥🔥",
      },
      {
        user: "Sonny Sangha ",
        comment: "Love you for the shout out baby bro. 😀",
      },
    ],
  },

  {
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Marina_Mogilko_in_YouTube_Space%2C_San_Francisco.jpg/1200px-Marina_Mogilko_in_YouTube_Space%2C_San_Francisco.jpg",
    user: USERS[2].user,
    likes: 3839,
    caption: "Download my English workbook: https://www.english.online/",
    profile_picture: USERS[2].image,
    comments: [
      {
        user: "Joanna Morica",
        comment: "That was so interesting, thank you! ",
      },
      {
        user: "Steve",
        comment:
          "Awesome research, it's an easy quality learning & clearly presented, Love it! 💖",
      },
    ],
  },
  {
    imageUrl:
      "https://pbs.twimg.com/media/EVRiZrTXkAE-LQ_?format=jpg&name=large",
    user: USERS[3].user,
    likes: 5839,
    caption:
      "When it comes to programming, you don’t usually see the struggles of other people. You only see the results. Therefore you shouldn’t compare yourself to others. Compare yourself to YOU a month ago, a year ago, etc.",
    profile_picture: USERS[1].image,
    comments: [
      {
        user: "Sejal Sud",
        comment: "Everything works out in the end  ",
      },
    ],
  },
  {
    imageUrl:
      "https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/mobile_banner/605ee54f46052_mr._raj_shamai700.png",
    user: USERS[4].user,
    likes: 8868,
    caption:
      "Everything works, you just need to pick one thing and make it work.",
    profile_picture: USERS[4].image,
    comments: [],
  },
];
