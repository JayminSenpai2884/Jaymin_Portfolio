
export const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" }
];

export const HERO_CONTENT = {
  greeting: "Hey, I'm Jaymin ",
  introduction:
    "I’m a developer passionate about creating responsive, user-friendly web applications with high performance.",
  description:
    "With experience in both frontend and backend development, I collaborate to build clean, maintainable code and explore cloud and AI-driven solutions.",
  resumeLinkText: "Download Resume",
  resumeLink: "/resume.pdf",
};
export const PROJECTS = [
  {
    name: "Muzic",
    description:
      "AI-powered music recommendation app offering personalized song suggestions, secure user management, and seamless payment integration.",
    image: projects1,
    link: "https://muzicjp.netlify.app",
  },
  {
    name: "QuickMail",
    description:
      "Effortlessly craft personalized and professional emails using advanced AI technology, ensuring impactful communication with every message.",
    image: projects2,
    link: "https://quickmail-jp.vercel.app/",
  },
  {
    name: "FilmyBox",
    description:
      "A movie discovery app providing personalized film recommendations based on user preferences.",
    image: projects3,
    link: "https://github.com/JayminSenpai2884/FilmyBox",
  },
  {
    name: "CaptionCraftAI",
    description:
      "An AI-driven content creation tool designed to generate captivating captions, tweets, and LinkedIn posts. Features secure user login via Clerk and stripe payment processing, ensuring a seamless user experience.",
    image: projects4,
    link: "https://captioncraftsai.netlify.app",
  },
  {
    name: "JPWrites - Personal Blog",
    description:
      "Check out my blog where I share insights about tech, development tips, and my learning journey.",
    image: projects5,
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
    title: "Technical Support Specialist at OpenText",
    location: "Waterloo, ON",
    description: [
      "Providing technical support and troubleshooting for Carbonite cloud service.",
      "Collaborating with cross-functional teams to resolve customer issues promptly.",
      "Leveraging knowledge of cloud technologies and support tools to enhance user experience.",
      "Documenting solutions and best practices to improve efficiency and customer satisfaction.",
    ]
  }  
  ,{
    yearRange: "2023 — Present",
    title: "Customer Service Representative at Tim Hortons",
    location: "Waterloo, ON",
    description: [
      "Developed strong customer service skills and efficient service delivery.",
      "Utilized data analysis for daily decision-making and sales improvement.",
      "Collaborated effectively with team members to maintain smooth workflow.",
    ],
  },
  {
    yearRange: "May 2022 — September 2022",
    title: "Web Developer Intern",
    location: "Anand, GJ",
    description: [
      "Developed responsive web applications using modern technologies, focusing on performance optimization.",
      "Streamlined data flow between front-end and back-end systems, improving system responsiveness.",
      "Contributed to timely feature releases while ensuring alignment with requirements.",
    ],
  },
  {
    yearRange: "July 2021 — April 2022",
    title: "Hardware and Software Assistant at Pearl Computer",
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
