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
  username: "Gagan Saddal",
  title: "Hi all, I'm Gagan",
  subTitle: emoji(
    "A passionate MERN Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1_C9z2yseOk0XyxQ6MSuXAITMPZ8euvRW/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links//

const socialMediaLinks = {
  github: "https://github.com/GaganSaddal",
  linkedin: "https://www.linkedin.com/in/gagansaddal/",
  gmail: "gagansaddal@gmail.com",
  gitlab: "https://gitlab.com/gagansaddal",
  facebook: "https://www.facebook.com/gagansaddal",
  medium: "https://medium.com/@gagansaddal",
  stackoverflow: "https://stackoverflow.com/users/18721943/gagan-saddal",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER SPECIALIZING IN THE MERN STACK",
  skills: [
    emoji("⚡ Build highly interactive front-end applications using React"),
    emoji("⚡ Develop efficient back-end services with Node.js and Express"),
    emoji("⚡ Seamless integration with MongoDB for data management"),
    emoji("⚡ Expertise in creating RESTful APIs and single-page applications (SPA)"),
    emoji("⚡ Integration of third-party services like Firebase, AWS, and Digital Ocean")
  ]
,  

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Mongodb",
      fontAwesomeClassname: "fab fa-mdb"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Punjabi University",
      logo: require("./assets/images/Punjabi_University,_Patiala_Logo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2019 - April 2021",
      desc: "Focused on developing scalable system architectures and API integrations, contributing to real-time data applications.",
      descBullets: [
        "Architected a highly scalable system capable of handling over 500,000 daily requests",
        "Specialized in API development and service-oriented architecture (SOA)",
        "Published 3 papers in areas of distributed systems and network security"
      ]
    },
    {
      schoolName: "Punjabi University",
      logo: require("./assets/images/Punjabi_University,_Patiala_Logo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "July 2015 - July 2018",
      desc: "Ranked in the top 10% of the program. Took courses on Software Engineering, Web Security, Operating Systems, and Database Management Systems.",
      descBullets: [
        "Developed a strong foundation in algorithms and data structures",
        "Led a final year project on building a secure web application",
        "Completed coursework in advanced programming, operating systems, and software engineering"
      ]      
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "50%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "100%"
    },
    {
      Stack: "Programming",
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
      company: "NetScape Labs",
      companylogo: require("./assets/images/Cu.png"),
      date: "March 2023 – Present",
      desc: "Developing scalable back-end systems and working on large-scale applications with a focus on API integration and service-oriented architecture.",
      descBullets: [
        "Architected and optimized systems to handle over 500,000 daily requests",
        "Collaborated with cross-functional teams to design and implement new features",
        "Worked extensively on Node.js and TypeScript to improve system performance"
      ]
    },
    {
      role: "Back-End Developer",
      company: "CodeTribe Solutions",
      companylogo: require("./assets/images/llb.png"),
      date: "Aug 2022 – March 2023",
      desc: "Built and maintained server-side logic and optimized APIs for better performance in various client applications.",
      descBullets: [
        "Developed RESTful APIs using Node.js and Express",
        "Enhanced security and performance in web applications",
        "Contributed to the deployment and monitoring of production systems"
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Toxal",
      companylogo: require("./assets/images/Cute.png"),
      date: "March 2022 – Aug 2022",
      desc: "Assisted in building server-side functionality for web applications and supported in software design processes.",
      descBullets: [
        "Worked on bug fixes and feature enhancements",
        "Collaborated with senior developers on back-end solutions",
        "Gained hands-on experience in full software development lifecycle"
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
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/logo-blue.png"),
      projectName: "Whuups",
      projectDesc: "Developed a comprehensive social platform connecting users globally through voice and video calls, messaging, and interactive features. Focused on creating meaningful, real-time communication experiences.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://whuups.com/"
        }
        // You can add extra buttons here.
      ]
    },
    {
      
        image: require("./assets/images/menehariya.png"),
        projectName: "Menehariya",
        projectDesc: "Built a classified ads platform that allows users to post, browse, and manage ads across various categories. Integrated search filters, user authentication, and a secure payment system for premium listings.",
        footerLink: [
          {
            name: "Visit Website",
            url: "https://menehariya.com/"
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
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "Sharing insights and knowledge to empower fellow developers.",
  displayMediumBlogs: true, // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@gagansaddal/the-future-of-node-js-trends-to-watch-in-2024-b4600ad3018b",
      title: "Node.js in 2024: Key Trends Shaping the Future of Development",
      description:
        "As Node.js continues to revolutionize web development, 2024 brings forth exciting trends that every developer should watch. This blog explores the rise of microservices architecture, the shift towards serverless computing, the increasing demand for real-time applications, enhanced security practices, and the integration of AI and machine learning in Node.js projects. Stay ahead of the curve and discover how these trends will impact your development strategies and drive innovation in your applications."
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interfaces. It is maintained by Facebook and a community of individual developers and companies."
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
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  image:require("./assets/images/mobile-image.png"),
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9877016360",
  email_address: "gagansaddal@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "GaganSaddal", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
