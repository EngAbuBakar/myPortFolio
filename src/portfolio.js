/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Abu Bakar",
  title: "Hi all, I'm Abu Bakar Rana",
  subTitle: emoji(
    "Enthusiastic and detail-oriented Java Spring Boot Developer with 2 years of professional experience building robust backend systems. Skilled in developing scalable APIs, integrating third-party services, and implementing microservices architecture. Strong understanding of Java-based frameworks and development tools with a proven track record of delivering high-quality solutions."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1iofEFMhXIqh6tomZANJFRLWp0C5po1CO/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/EngAbuBakar/",
  linkedin: "https://www.linkedin.com/in/muhammad-abu-bakar-693620176/",
  gmail: "abubakaryameen0243@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@abubakaryameen0243",
  stackoverflow: "https://stackoverflow.com/users/21296362/abubakardev",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Passionate Full Stack Developer Eager to Explore and Master Diverse Technology Stacks",
  skills: [
    emoji(
      "⚡ Build robust, scalable, and efficient back-end systems to power your web and mobile applications."
    ),
    emoji("⚡ Develop Progressive Web Applications (PWAs) using both traditional and Single Page Application (SPA) frameworks."),
    emoji(
      "⚡ Seamless integration of third-party services such as Firebase, AWS, and DigitalOcean."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

softwareSkills: [
  {
    skillName: "Java",
    fontAwesomeClassname: "fab fa-java"
  },
  {
    skillName: "Spring Boot",
    fontAwesomeClassname: "fas fa-cogs"
  },
  {
    skillName: "MySQL/Oracle DB",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "JavaScript",
    fontAwesomeClassname: "fab fa-js"
  },
  {
    skillName: "React.js",
    fontAwesomeClassname: "fab fa-react"
  },
  {
    skillName: "Docker",
    fontAwesomeClassname: "fab fa-docker"
  },
 
  {
    skillName: "SQL",
    fontAwesomeClassname: "fas fa-server"
  },
  {
    skillName: "AWS",
    fontAwesomeClassname: "fab fa-aws"
  }
],
display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Riphah International University",
      logo: require("./assets/images/RiphahLogo.png"),
      subHeader: "Bachelor in Software Engineering",
      duration: "February 2018 - July 2022",
      desc: "The program combines fundamental knowledge of computer science with advanced concepts in software design, engineering principles, and system architecture",
      descBullets: [
        "The key focus areas or specializations (e.g., programming, software design, data science, etc.)",
        "System Analysis and Design"
      ]
    },
    {
      schoolName: "Cisco Networking Academy USA",
      logo: require("./assets/images/Cisco_academy_logo.png"),
      subHeader: "Programming Fundamentals Certificate",
      duration: "September 2020 - April 2011",
      desc: "Understanding fundamental programming constructs such as variables, loops, and conditionals.",
      descBullets: ["Learning essential problem-solving techniques in software development.",
        "Developing algorithms for basic programming tasks."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend Development",
      progressPercentage: "90%"
    },
    {
      Stack: "Frontend/ System Design", //Insert stack or technology you have experience in
      progressPercentage: "60%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Problem Solving",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Softech Systems Pvt Ltd",
      companylogo: require("./assets/images/softech system.jpg"),
      date: "September 2014 – Present",
      desc: "Automate deployment workflows for both front-end and back-end applications.",
      descBullets: [
        "Work with AWS RDS, DynamoDB, or other managed database services for back-end data persistence.",
        "Assisted in debugging and performance optimization of web applications.",
        "Collaborated with the team to integrate backend APIs with React-based front-end."
      ]
    },
    {
      role: "Back-End Developer",
      company: "Xislabs Pvt Ltd",
      companylogo: require("./assets/images/xislabs.jpeg"),
      date: "May 2022 – May 2024",
      desc: "Optimize back-end performance for scalability and efficiency.",
      descBullets: [
        "Integrate third-party libraries and APIs as needed.",
        "Participate in daily stand-ups, sprint planning, and code reviews.",
        "Follow Agile/Scrum methodologies for project management and development cycles.",
        "Adapt quickly to new tools and workflows required in the internship."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Contour Software",
      companylogo: require("./assets/images/contourlog.png"),
      date: "Jan 2021 – May 2022",
      desc: "Responsibilities (Java + React)",
      descBullets: [
        "Develop responsive and user-friendly web interfaces using React.js.",
        "Collaborate on the design and implementation of reusable UI components.",
        "Design, implement, and maintain server-side logic using Java and frameworks like Spring Boot.",
        "Develop RESTful APIs to connect the front end to the back end effectively."

      ]
      
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "Passionate Full Stack Developer Eager to Explore and Master Diverse Technology Stacks",
  projects: [
    {
      image: require("./assets/images/smartwedding.PNG"),
      projectName: "smartWedding",
      projectDesc: "Provide an integrated platform that connects customers, planners, and vendors, making wedding planning seamless and enjoyable.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://smartwedding-pro.com/h/#home"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-308 2365 947",
  email_address: "abubakaryameen0243@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "explorekro", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
