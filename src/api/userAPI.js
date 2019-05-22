/**
 * This API consists of a simple "userAPI" object which contains:
 * "users" property: an array that contains "user" objects.
 * "all" method: returns the "users" array.
 * "get" method: returns a specific "user" object found by a given "username" parameter.
 *               Returns undefined otherwise.
 *
 * API adapted from https://to.ly/1zcHw and https://to.ly/1zcHy
 * */
import getRandomIntInclusive from "../helpers/helpers";

const userAPI = {
  all() {
    return this.users;
  },
  get(username) {
    return new Promise((resolve, reject) => {
      const isUser = user => user.username === username;
      const user = this.users.find(isUser);
      if (user) {
        setTimeout(() => resolve(user), getRandomIntInclusive(200, 600));
      } else {
        const err = new Error("User not found");
        reject(err);
      }
    });
  },
  post(username, tweet) {
    return new Promise((resolve, reject) => {
      const isUser = user => user.username === username;
      const user = this.users.find(isUser);
      if (user) {
        // Add tweet to author user
        user.tweets.unshift(tweet);
        // Add tweet to retweeting users
        // user.tweets[0].retweetedBy.forEach(retweetUsername => {
        //   const isRetweetUser = rtUser => rtUser.username === retweetUsername;
        //   const retweetUser = this.users.find(isRetweetUser);
        //   retweetUser.tweets.unshift(tweet);
        // });
        // Resume Promise resolve
        setTimeout(() => {
          resolve(user);
        }, getRandomIntInclusive(100, 300));
      } else {
        const err = new Error("Can't post tweet");
        reject(err);
      }
    });
  },
  users: [
    {
      id: 1,
      name: "John Smith",
      username: "johnsmith",
      link: "/johnsmith",
      cover: "./assets/images/cover_johnsmith.jpg",
      avatar: "./assets/images/avatar_johnsmith.png",
      bio: "I'm John Smith, aka Smithy. I like to hike on the weekends. 🥾⛰",
      location: "Rio de Janeiro",
      website: "johnsmith.com",
      dateJoined: "February 2011",
      birthdate: "July 30th, 1992",
      following: 13,
      followers: 10,
      likes: 55,
      lists: 2,
      moments: 4,
      tweets: [
        {
          id: 2,
          author: {
            name: "John Smith",
            username: "johnsmith",
            link: "/johnsmith",
            avatar: "./assets/images/avatar_johnsmith.png"
          },
          retweetedBy: [],
          content: "A Tweet not as popular as the last one.",
          date: "Apr 2nd",
          comments: 2,
          retweets: 0,
          likes: 2,
          commented: false,
          liked: true,
          savedToPocket: false
        },
        {
          id: 1,
          author: {
            name: "John Smith",
            username: "johnsmith",
            link: "/johnsmith",
            avatar: "./assets/images/avatar_johnsmith.png"
          },
          retweetedBy: ["janedoe", "hackyoliver"],
          content: "This is a super popular Tweet. All my friends RT.",
          date: "Apr 1st",
          comments: 3,
          retweets: 2,
          likes: 9,
          commented: true,
          liked: false,
          savedToPocket: false
        }
      ]
    },
    {
      id: 2,
      name: "Jane Doe",
      username: "janedoe",
      link: "/janedoe",
      cover: "./assets/images/cover_janedoe.jpg",
      avatar: "./assets/images/avatar_janedoe.png",
      bio: "My name is Doe, Jane Doe. 🕵️‍♀️",
      location: "São Paulo",
      website: "doejanedoe.com",
      dateJoined: "April 2012",
      birthdate: "Dec 19th, 1993",
      following: 42,
      followers: 52,
      likes: 14,
      lists: 0,
      moments: 1,
      tweets: [
        {
          id: 1,
          author: {
            name: "John Smith",
            username: "johnsmith",
            link: "/johnsmith",
            avatar: "./assets/images/avatar_johnsmith.png"
          },
          retweetedBy: ["janedoe", "hackyoliver"],
          content: "This is a super popular Tweet. All my friends RT.",
          date: "Apr 1st",
          comments: 3,
          retweets: 2,
          likes: 9,
          commented: true,
          liked: false,
          savedToPocket: false
        }
      ]
    },
    {
      id: 3,
      name: "Hacky Oliver",
      username: "hackyoliver",
      link: "/hackyoliver",
      cover: "./assets/images/cover_hackyoliver.jpg",
      avatar: "./assets/images/avatar_hackyoliver.png",
      bio: "H4CkY 0LL13 👨‍💻👾",
      location: "Belo Horizonte",
      website: "oll.io",
      dateJoined: "January 2012",
      birthdate: "Apr 1st, 1993",
      following: 103,
      followers: 78,
      likes: 159,
      lists: 7,
      moments: 8,
      tweets: [
        {
          id: 1,
          author: {
            name: "John Smith",
            username: "johnsmith",
            link: "/johnsmith",
            avatar: "./assets/images/avatar_johnsmith.png"
          },
          retweetedBy: ["janedoe", "hackyoliver"],
          content: "This is a super popular Tweet. All my friends RT.",
          date: "Apr 1st",
          comments: 3,
          retweets: 2,
          likes: 9,
          commented: true,
          liked: false,
          savedToPocket: true
        }
      ]
    }
  ]
};

export default userAPI;
