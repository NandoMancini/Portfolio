import { v4 as uuidv4 } from "uuid";

const dataSlider = [
    {
      id: uuidv4(),
      title: "ULinks",
      subTitle: "Ulinks is a platform for students to post links to their class group-chats, and to facilitate the " +
          "connection between students. ULinks was my first interation with a larger scale, full-stack project, and how" +
          " the git workflow works. " +
          "I worked as an open-source contributor, mostly in the frontend but also had interactions with the backend.",
      image: "ulinks",
      github: "https://github.com/jcserv/ulinks",
    },
    {
      id: uuidv4(),
      title: "WeathAvi",
      subTitle: `WeathAvi was a project created for the <span>Pyjac hackathon</span>, and is a <span>Discord bot</span> 
            that sends you the current weather forecast, along with appropriate suggestions. As one of our members is 
            a pilot, WeathAvi also displays weather data meant for aviators planning flight paths, besides also recording 
            all data and commands it receives by uploading it to Google Drive using <span>Google's API</span>.`,
      image: "bot",
      devpost: "https://devpost.com/software/weather-bot-y956fc",
      github: "https://github.com/NandoMancini/PyJaC",
      youtube: "https://youtu.be/RwVAqgZecL0",
    },
    {
      id: uuidv4(),
      title: "Portfolio",
      subTitle: `Creating this website was my first personal project, meaning I had full control over the technologies
          I could use, but also meaning I had full responsibility over the project. I mostly took this as a great 
          opportunity to learn <span> web development </span> tools such as <span> React </span>, but also to be 
          able to have a place to showcase my other projects to the world!`,
      image: "portfolio",
      github: "https://github.com/NandoMancini/Portfolio",
    },
    {
      id: uuidv4(),
      title: "Three Musketeers",
      subTitle: "Three Musketeers was a full semester culminating group project for UofT's CSC207 class, where we " +
          "were able to use our design patterns that we learned in class in a creative way. Each group member worked " +
          "on different features, where I worked on the game's <span>saving</span> and <span>auto-saving</span> features.",
      image: "musketeer",
    },
  ];
  
  export default dataSlider;