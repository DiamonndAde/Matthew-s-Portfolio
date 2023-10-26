import {
    victor,
    viewbutton,
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    saheed,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    daveworld,
    yelpcamp,
    colorgame,
    yabatech,
    ariktee,
    yelplogo,
    logo,
    booklist
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full Stack Web Developer",
      icon: web,
    },
    {
      title: "Blockchain Developer",
      icon: mobile,
    },
    {
      title: "MERN Stack Developer",
      icon: backend,
    },
    {
      title: "Solidity Developer",
      icon: creator,
    }
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Front End Developer",
      company_name: "Yabatech",
      icon: yabatech,
      iconBg: "#383E56",
      date: "March 2022 - October 2022",
      points: [
        "Developing and maintaining web applications using HTML, CSS, JavaScript, and Bootstrap and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Front End Developer",
      company_name: "Ariktee Logistics",
      icon: ariktee,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using Sass, Bootstrap, and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Matthew Inc",
      icon: logo,
      iconBg: "#E6DEDD",
      date: "Jan 2019 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I've had the pleasure of working with Matthew on several projects, his commitment to meeting project deadlines is truly exceptional🥰 ",
      name: "Daveworld",
      designation: "CEO",
      company: "Daveworld Inc",
      image: daveworld,
    },
    {
      testimonial:
        "Matthew is an amazing programmer, he taught me the basics of JavaScript and he made me see the Joy in programming and liking it. Thank you😊🙏 ",
      name: "Saheed",
      designation: "Web developer",
      company: "Yabatech",
      image: saheed,
    },
    {
      testimonial:
        "It's always nice working with you Matt. Your resilence is on another level and it makes me confident whenever you are asked to handle a job",
      name: "Vicol",
      designation: "CEO",
      company: "Gorent Uniosun",
      image: victor,
    },
  ];
  
  const projects = [
    {
      name: "Yelp Camp",
      description:
        "Yelp Camp is a web application (created primarily with bootstrap and nodeJs) that encompasses essential backend functionalities, including user authentication, mapping services, and geolocation features. Its user interface boasts simplicity and intuitiveness, providing an accessible and user-friendly experience. Check it out!",
      tags: [
        {
          name: "bootstrap",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "nodeJs",
          color: "pink-text-gradient",
        },
      ],
      image: yelpcamp,
      source_code_demo: 'https://glacial-plains-71847-f9ada60e670b.herokuapp.com/',
      source_code_link: 'https://github.com/Matthew-Ayinde/yelp-camp'
    },
    {
      name: "ColorGuess Pro",
      description:
        "The application, 'ColorGuess Pro,' leverages the RGB color model to generate a random color and subsequently prompts the user to make an educated guess regarding the resultant hue. This interactive web game engages participants in a challenging and entertaining exercise of color perception and recognition.",
      tags: [
        {
          name: "HTML5",
          color: "blue-text-gradient",
        },
        {
          name: "CSS3",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: colorgame,
      source_code_demo: 'https://matthewcolorgame.netlify.app/',
      source_code_link: 'https://github.com/Matthew-Ayinde/colour-game'
    },
    {
      name: "Book List",
      description:
        "My booklist project, created using HTML5, BootStrap and JavaScript, provides an intuitive platform for managing books with a user-friendly minimalistic approach. This project underscores my proficiency in web development and commitment to user-centered design, laying a strong foundation for future projects in this domain.",
      tags: [
        {
          name: "HTML5",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: booklist,
      source_code_link: 'https://github.com/Matthew-Ayinde/book-list-project',
      source_code_demo: 'https://book-list-project-pi.vercel.app/'
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };