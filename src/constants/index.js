import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like <mark>React</mark> and <mark>Next.js</mark>, as well as back-end technologies like <mark>Node.js</mark>, <mark>MySQL</mark>, <mark>PostgreSQL</mark>, <mark>MongoDB</mark> and <mark>Amazon Web Services</mark>.`;


export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With <mark> 6 months of professional experience </mark>, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work. I've worked with micro services and enjoy finding <mark>high-quality scalable solutions </mark> to problems. Outside of coding, I enjoy playing <mark>musical instruments</mark> , and contributing to <mark>open-source projects</mark>.`;

export const EXPERIENCES = [
  {
    year: "June 2023 - Dec 2023",
    role: "Software Developer Intern",
    company: "ITE Infotech",
    description: `Worked with my team to build client web projects using React, Node , Postgres etc, and eventually deploying them on AWS servers.`,
    technologies: ["Javascript", "React.js", "Linux", "mongoDB","AWS","Lambda","EC2","S3", "Postgres","Node.js"],
  },
 
];

export const PROJECTS = [
  { livelink:"https://www.google.com", // "https://www.google.com"
    title: "Full Stack Blog App",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Highly Scalable Realtime ChatApp",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "H23 , Gulab Bai Colony , Nagda jn , Ujjain , MadhyaPradesh , India  , 456335",
  phoneNo: "+919098880114",
  email: "yshraj.work@gmail.com",
};
