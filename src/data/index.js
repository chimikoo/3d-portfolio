import {
  tetris,
} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Hero",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "Full Stack Developer (Intern)",
    company_name: "Luday AB",
    date: "2024 - 2024",
    details: [
      "Developed and maintained <span style='color: white;'>Architectural</span> documentation and design principles for <span style='color: white;'>Scalable</span> web and mobile applications.",
      "Building responsive web and mobile applications using <span style='color: white;'>React</span>, <span style='color: white;'>React Native</span>, and <span style='color: white;'>Tailwind CSS</span>, focusing on component-based architecture. ",
      "Developed backend solutions and <span style='color: white;'>RESTful APIs</span> using <span style='color: white;'>Python</span> and <span style='color: white;'>Flask</span>, ensuring secure and efficient data handling. ",
    ],
  },
  {
    title: "Full Stack Developer (Student)",
    company_name: "DCI Digital Career Institute",
    date: "2023 - 2024",
    details: [
      "<span style='color: white;'>Successfully</span> completed a 14-month intensive full-stack web development training program with a focus on the <span style='color: white;'>MERN</span> stack (MongoDB, Express.js, React, Node.js)",
      "<span style='color: white;'>Strengthened</span> problem-solving skills through coding challenges, debugging, and <span style='color: white;'>optimizing</span> applications for performance and scalability.",
      "<span style='color: white;'>Consolidated</span> technical expertise by integrating third-party APIs, implementing authentication strategies, and ensuring responsive <span style='color: white;'>UI/UX design</span>.",
    ],
  },
  {
    title: "Chef de Partie ",
    company_name: "Freischwimmer",
    date: "04/2022 - 11/2022",
    details: [
      "<span style='color: white;'>Experienced</span> in thriving within high-pressure environments, adeptly managing stress to maintain productivity and deliver results efficiently.",
      "<span style='color: white;'>Proficient</span> in overseeing plating operations and ensuring stringent hygiene control measures are implemented and maintained to uphold quality standards.",
      "<span style='color: white;'>Demonstrated</span> ability to cultivate strong customer relationships through attentive service and effective communication, resulting in enhanced satisfaction and loyalty.",
    ],
  },
  {
    title: "Manager",
    company_name: "SSAM - Korean BBQ",
    date: "07/2021 - 04/2022",
    details: [
      "<span style='color: white;'>Effectively</span> led and managed teams of up to six individuals, developing invaluable skills in team leadership, motivation, and conflict resolution.",
      "<span style='color: white;'>Proficient</span> in overseeing comprehensive operational tasks, including procurement and scheduling of weekly meetings, demonstrating strong organizational and planning abilities.",
      "<span style='color: white;'>Skilled</span> in the creation and oversight of recipes, ensuring adherence to quality standards and consistency in culinary output.",
    ],
  },
  {
    title: "Student",
    company_name: "DeutchESchule",
    date: "04/2021 - 07/2021",
    details: [
      "Completed <span style='color: white;'>A1</span> and <span style='color: white;'>A2</span> level German courses, building a strong foundation in grammar, vocabulary, and basic communication.",
      "<span style='color: white;'>Developed</span> practical language skills for daily conversations, including speaking, listening, reading, and writing",
      "Gained cultural insights and improved confidence in using <span style='color: white;'>German</span> in real-life situations",
    ],
  },
];

const portfolio = [
  {
    name: "TapTrack",
    description:
      "It's a Restaurant Management System designed to streamline operations using Express.js and MongoDB. The system includes features for user management, tracking work hours, role-based access control, menu and order management, stock tracking, receipt handling, and automated end-of-day reporting. With a focus on security and efficiency, it helps restaurants manage their daily workflow more effectively.",
    videoUrl: "https://www.youtube.com/embed/CY5McmNfGuM",
  },
  {
    name: "Tetris Clone",
    description:
      "A mini-Tetris clone built with React and Three.js, but in 2D, leveraging Three.js for rendering instead of the traditional Canvas API. This approach allows for hardware-accelerated rendering, smooth animations, and potential future expansion into 3D. The game retains the classic Tetris mechanics, including falling tetrominoes, row-clearing logic, and increasing difficulty. A unique take on Tetris using modern web technologies!",
    image: tetris,
  },
];

export { experiences, portfolio };

