import projects1 from "../assets/projects1.webp";
import projects2 from "../assets/projects2.webp";
import projects3 from "../assets/projects3.webp";
import projects4 from "../assets/projects4.webp";
import projects5 from "../assets/projects5.webp";

export const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const HERO_CONTENT = {
  greeting: "Hey, I'm Jaymin ",
  introduction:
    "I’m Jayminkumar Parmar, a dedicated full-stack developer with a passion for crafting innovative and user-centric web applications.",
  description:
    "I have a keen interest in Web 3 technologies, data analysis, and designing user-friendly UI/UX. I’m passionate about discovering creative solutions that improve user experiences and simplify workflows.",
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
    name: "Recipe Finder",
    description:
      "A web app that helps users discover recipes based on the ingredients they have on hand, providing easy meal solutions.",
    image: projects5,
    link: "https://github.com/JayminSenpai2884",
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
    title: "Software Developer Intern at L&T Technology Services",
    location: "Vadodara, GJ",
    description: [
      "Developed enterprise-level web applications using Node.js and Express.js.",
      "Optimized MySQL queries, reducing response times by 25%.",
      "Automated data processing tasks using Python scripts and integrated RESTful APIs.",
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
  footerText: `© ${new Date().getFullYear()} Jayminkumar Parmar. All rights reserved.`,
};
