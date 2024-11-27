import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaTools, FaMicrosoft, FaUserFriends, FaSalesforce, FaUserShield } from 'react-icons/fa';
import { 
  SiCplusplus, SiCsharp, SiPython, SiJavascript, SiTypescript, SiMysql,
  SiPhp, SiTailwindcss, SiDotnet, SiNodedotjs, SiExpress, SiMongodb,
  SiGit, SiDocker, SiReact
} from 'react-icons/si';
import { TfiMicrosoftAlt } from 'react-icons/tfi';


const skillsData = [
  { category: "Programming Languages", icon: FaCode, items: [
    { name: "C/C++", icon: SiCplusplus },
    { name: "C#", icon: SiCsharp },
    { name: "Python", icon: SiPython },
    { name: "SQL", icon: SiMysql },
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
  ]},
  { category: "Technologies & Tools", icon: FaTools, items: [
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express.js", icon: SiExpress },
    { name: "React", icon: SiReact },
    { name: "MongoDB", icon: SiMongodb },
    { name: "RESTful APIs", icon: FaCode },
    { name: "Docker", icon: SiDocker },
    { name: "Git", icon: SiGit },
    { name: "TRUX", icon: FaCode },
    { name: "Microsoft O365", icon: TfiMicrosoftAlt },
    { name: "CRM", icon: FaUserFriends },
    { name: "Salesforce", icon: FaSalesforce },
    { name: "SAP", icon: FaCode },
    { name: "Active Directory", icon: FaUserShield },
    { name: "PHP", icon: SiPhp },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "ASP.NET", icon: SiDotnet },
  ]},
];

const SkillItem = ({ name, icon: Icon }) => (
  <motion.div
    className="flex items-center bg-white/5 backdrop-blur-lg rounded-lg p-3 cursor-pointer"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    whileHover={{ 
      scale: 1.01, 
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      transition: { duration: 0.2, ease: "easeInOut" } 
    }}
  >
    <Icon className="text-blue-400 text-xl mr-2" />
    <span className="text-white text-sm">{name}</span>
  </motion.div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 lg:mb-20 text-white">
          Skills & Technologies
        </h2>
        {skillsData.map((category, index) => (
          <div key={index} className="mb-12">
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
              <category.icon className="mr-2 text-blue-400" />
              {category.category}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {category.items.map((skill, skillIndex) => (
                <SkillItem key={skillIndex} name={skill.name} icon={skill.icon} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
