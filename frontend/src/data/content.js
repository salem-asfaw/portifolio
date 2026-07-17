// Content/data layer — all page text lives here so components stay presentational.
// Edit copy here without touching any JSX.


export const nav = {

  brand: "Salem",

  links: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Certificates", href: "#certificates" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Journey", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ],

};



export const hero = {

  greeting: "I Love Coding",

  name: "Salem Asfaw",

  roles: [
    "a Website Developer",
    "a Full Stack Developer",
    "a Student"
  ],

  ctaLabel: "Get in Touch",

  ctaHref: "#contact",

  initials: "SA",

};





export const about = {

  heading: "About Me",

  bio:
  "I'm a passionate student learning full-stack development. I love building modern websites and applications while improving my skills in frontend, backend, and software engineering.",


  credential: {

    label: "Education",

    value: "Full Stack Development Student"

  },


  cvLabel: "Download CV",

  cvHref: "#contact",

};





export const social = {

  links: [

    {
      label: "GitHub",
      href: "https://github.com/salem-asfaw"
    },


    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/salem-asfaw-8b1988421/"
    },


  ],

};







export const services = {

  heading: "Services",


  items: [

    {

      id: "web",

      title: "Website Development",

      description:
      "Creating modern, fast and user-friendly websites with clean and scalable code."

    },


    {

      id: "frontend",

      title: "Frontend Development",

      description:
      "Building interactive interfaces using React, JavaScript, HTML and CSS."

    },


    {

      id: "backend",

      title: "Backend Development",

      description:
      "Developing APIs and backend systems for powerful web applications."

    },


    {

      id: "database",

      title: "Database Management",

      description:
      "Designing and managing databases for secure and organized data storage."

    },


    {

      id: "problem",

      title: "Problem Solving",

      description:
      "Analyzing challenges and creating efficient technology solutions."

    },


    {

      id: "deployment",

      title: "Deployment",

      description:
      "Deploying applications and websites to make them available online."

    },


    {

      id: "branding",

      title: "Branding",

      description:
      "Creating a professional digital identity and online presence."

    },


    {

      id: "seo",

      title: "SEO & Website Optimization",

      description:
      "Improving website structure and performance to help users discover your website."

    },


    {

      id: "responsive",

      title: "Responsive Web Design",

      description:
      "Making websites look perfect on phones, tablets and computers."

    },


    {

      id: "support",

      title: "Custom Support",

      description:
      "Providing maintenance, updates and support after project completion."

    },


  ],

};







export const portfolio = {

  heading: "My Projects",

  subheading:
  "Explore my latest web applications and development work",


  items: [

    {


      id: 1,


      title: "AI-Powered Evangadi Forum",


      description:
      "A full-stack AI-powered community platform where users can create accounts, ask questions, join discussions, and receive intelligent AI-assisted responses.",


      technologies: [

        "React",

        "Vite",

        "Node.js",

        "Express.js",

        "MySQL",

        "REST API",

        "Git",

        "GitHub",

        "AI Integration"

      ],


      keyFeatures: [

        "User Authentication",

        "AI-Assisted Answers",

        "Community Discussion System",

        "Question and Answer Features",

        "CRUD Operations",

        "Responsive Design",

        "Database Integration"

      ],


      image: "/img/evangadi-forum.png",


      color: "#6c5ce7",


      liveDemo: "https://evangadi-forum-core.netlify.app/",


      github:
      "https://github.com/salem-asfaw/Evangadi-project-.git",


      featured: true,


      aiPowered: true,

    },





    {


      id: 2,


      title: "ChatGPT Clone",


      description:
      "An AI-inspired chat application with a modern conversational interface, user authentication, and full-stack integration using frontend and backend technologies.",


      technologies: [

        "React",

        "Vite",

        "Node.js",

        "Express.js",

        "MySQL",

        "REST API"

      ],


      keyFeatures: [

        "Modern Chat Interface",

        "User Authentication",

        "Conversation Management",

        "Frontend Backend Integration",

        "Responsive Design"

      ],


      image: "/img/chatgpt-clone.png",


      color: "#00b894",


      liveDemo: "https://gptforge.netlify.app/",


      github:
      "https://github.com/salem-asfaw/chatgpt.git",


      featured: true,

    },





    {


      id: 3,


      title: "Netflix Clone",


      description:
      "A Netflix-inspired streaming interface built with React. This project focuses on modern UI design, reusable components, and responsive layouts.",


      technologies: [

        "React",

        "JavaScript",

        "CSS",

        "HTML"

      ],


      keyFeatures: [

        "Responsive Layout",

        "Modern User Interface",

        "Reusable Components",

        "Clean Frontend Structure"

      ],


      image: "/img/netflix-clone.png",


      color: "#0984e3",


      liveDemo: "https://bingio.netlify.app/",


      github:
      "https://github.com/salem-asfaw/Netflix-project-.git",


      featured: true,

    },


  ],

};







export const blog = {

  heading: "My Journey",

  journey:
  "My journey into web development wasn't easy. When I started, I had almost no knowledge of programming or modern technology. Every concept was new to me, so I spent many extra hours learning from documentation, YouTube, and other online resources in addition to my classes.\n\nWhile learning full-stack development, I was also a Grade 10 student with many school subjects and exams. Balancing school with coding became one of my biggest challenges, but it taught me how to manage my time, stay disciplined, and follow a clear study plan.\n\nLiving in Ethiopia brought additional difficulties. Power outages often interrupted my studies, and periods of uncertainty caused by conflict and the fear of war made it difficult to stay focused. Despite these challenges, I kept moving forward whenever I had the opportunity to learn.\n\nOver the past six months, I learned HTML, CSS, JavaScript, React, Node.js, Express.js, MySQL, Git, GitHub, REST APIs, and full-stack web development. I built real-world projects, improved my problem-solving skills, and gained confidence as a developer.\n\nThis journey taught me that success doesn't come from having perfect conditions. It comes from consistency, planning, patience, and refusing to give up when things become difficult. Every challenge became a lesson that helped me grow—not only as a developer, but also as a person.",

};







export const contact = {

  heading: "Get in Touch",


  intro:
  "Have a project idea, opportunity, or want to connect? Feel free to send me a message.",


  phone: "+251 94 949 4521",


  email: "hello@salemasfaw.com",


  address: "Tigray, Ethiopia",



  form: {


    fields: [

      {
        id: "name",
        label: "Name",
        type: "text",
        placeholder: "Your name",
        autoComplete: "name"
      },


      {
        id: "email",
        label: "Email",
        type: "email",
        placeholder: "you@example.com",
        autoComplete: "email"
      },


      {
        id: "message",
        label: "Message",
        type: "textarea",
        placeholder: "Your message"
      },


    ],



    submitLabel: "Send Message",



    successMessage:
    "Thanks! This form is a demo. You can contact me directly through my email.",


  },

};







export const footer = {

  copyright:
  `© ${new Date().getFullYear()} Salem Asfaw. All rights reserved.`,

};