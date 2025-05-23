export const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" }
];

export const HERO_CONTENT = {
  greeting: "Hey, I'm Jaymin ",
  introduction: "I'm a developer focused on building high-performance, user-friendly web applications.",
  description:
    "I work across frontend and backend, explore cloud and AI solutions, and am currently diving into Data Science and AI/ML.",
  resumeLinkText: "Download Resume",
  resumeLink: "/resume.pdf",
};
export const PROJECTS = [
  {
    name: "StepByStep",
    description:
      "AI-powered roadmap generator built with React.js and Vite, designed to offer a clean, responsive UI and a personalized user experience.",
    technologies: ["React", "Vite", "AI", "Figma"],
    link: "https://stepbystep-rho.vercel.app/", 
  },
  
  {
    name: "QuickMail",
    description:
      "Effortlessly craft personalized and professional emails using advanced AI technology, ensuring impactful communication with every message.",
    technologies: ["Next.js", "OpenAI", "Tailwind"],
    link: "https://quickmail-jp.vercel.app/",
  },
  {
    name: "FilmyBox",
    description:
      "A movie discovery app providing personalized film recommendations based on user preferences.",
    technologies: ["React", "TMDB API", "CSS"],
    link: "https://github.com/JayminSenpai2884/FilmyBox",
  },
  {
    name: "CaptionCraftAI",
    description:
      "An AI-driven content creation tool designed to generate captivating captions, tweets, and LinkedIn posts. Features secure user login via Clerk and stripe payment processing, ensuring a seamless user experience.",
    technologies: ["React", "Clerk", "Stripe", "AI"],
    link: "https://captioncraftsai.netlify.app",
  },
  {
    name: "JPWrites - Personal Blog",
    description:
      "Check out my blog where I share insights about tech, development tips, and my learning journey.",
    technologies: ["Next.js", "MDX", "Tailwind"],
    link: "https://jpwrites.vercel.app/",
  },
];


export const ABOUT_CONTENT = {
  paragraphs: [
    "I am a dedicated developer with a passion for building modern web applications that are both functional and user-friendly. My experience ranges from frontend development to backend logic and database optimization, always ensuring high performance and seamless user experiences.",
    "I specialize in technologies like JavaScript, TypeScript, Node.js, and Express.js to create responsive and scalable applications. My focus is on writing clean, maintainable code while collaborating with cross-functional teams to deliver projects that meet both business goals and user needs. I thrive in environments that challenge me to continuously learn and grow.",
  ],
};

export const EXPERIENCES = [
  {
    yearRange: "March 2025 — Present",
    title: "Technical Support Specialist",
    company: "OpenText",
    location: "Waterloo, ON",
    description: [
      "Providing technical support and troubleshooting for Carbonite cloud service.",
      "Collaborating with cross-functional teams to resolve customer issues promptly.",
      "Leveraging knowledge of cloud technologies and support tools to enhance user experience.",
      "Documenting solutions and best practices to improve efficiency and customer satisfaction.",
    ]
  },
  {
    yearRange: "September 2022 — March 2025",
    title: "Customer Service Representative",
    company: "Tim Hortons",
    location: "Waterloo, ON",
    description: [
      "Developed strong customer service skills and efficient service delivery.",
      "Utilized data analysis for daily decision-making and sales improvement.",
      "Collaborated effectively with team members to maintain smooth workflow.",
    ],
  },
  {
    yearRange: "May 2022 — August 2022",
    title: "Web Developer Intern",
    company: "WEIZUR PRIVATE LIMITED",
    location: "Anand, GJ",
    description: [
      "Developed responsive web applications using modern technologies, focusing on performance optimization.",
      "Streamlined data flow between front-end and back-end systems, improving system responsiveness.",
      "Contributed to timely feature releases while ensuring alignment with requirements.",
    ],
  },
  {
    yearRange: "July 2021 — April 2022",
    title: "Hardware and Software Assistant",
    company: "Pearl Computer",
    location: "Borsad, GJ",
    description: [
      "Diagnosed and resolved hardware and software issues, improving system performance.",
      "Implemented remote troubleshooting procedures for efficient off-site support.",
      "Provided user training and technical support to enhance effective use of technology solutions.",
    ],
  },
];


export const CONTACT_CONTENT = {
  headline: "LET'S CONNECT AND CREATE SOMETHING AMAZING",
  description:
    "I'm excited to apply my skills and knowledge to new challenges. Whether you have a project in mind or just want to chat about technology, I'd love to hear from you!",
  email: "work.jaymin2884@gmail.com",
  socialLinks: [
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/jayminkumarparmar2884/",
      ariaLabel: "Connect with me on LinkedIn",
      icon: "RiLinkedinFill",
    },
    {
      platform: "GitHub",
      url: "https://github.com/JayminSenpai2884",
      ariaLabel: "View my GitHub profile",
      icon: "RiGithubFill",
    },
    // You can add more social links if needed
  ],
  footerText: `© ${new Date().getFullYear()} Jaymin Parmar. All rights reserved.`,
};
