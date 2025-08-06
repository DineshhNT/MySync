// ✅ Skills Section Logos
import htmlLogo from '../images/Skills/Front-End/html.png';
import cssLogo from '../images/Skills/Front-End/CSS.png';
import JsLogo from '../images/Skills/Front-End/js.png';
import TailwindCSSLogo from '../images/Skills/Front-End/Tailwind.png';
import ReactLogo from '../images/Skills/Front-End/REACT.png';
import ViteLogo from '../images/Skills/Front-End/Vite.png';

import NodeLogo from '../images/Skills/Back-End/NodeJS.png';
import PythonLogo from '../images/Skills/Back-End/python.png';
import FlaskLogo from '../images/Skills/Back-End/Flask.png';

import MysqlLogo from '../images/Skills/Back-End/MySql.png';
import MongoDBLogo from '../images/Skills/Back-End/MongoDB.png';
import FireBaseLogo from '../images/Skills/Back-End/FireBase.png';

import NumPyLogo from '../images/Skills/AIML/Numpy.png';
import PandasLogo from '../images/Skills/AIML/Pandas.png';
import TensorFlowLogo from '../images/Skills/AIML/TensorFlow.png';
import ScikitLogo from '../images/Skills/AIML/Scikitlearn.png';
import PyTorchLogo from '../images/Skills/AIML/PyTorch.png';

import CanvaLogo from '../images/Skills/Others/Canva.png';
import VSCodeLogo from '../images/Skills/Others/VS Code.png';
import GitHubLogo from '../images/Skills/Others/GitHub.png';

// ✅ Personal Images
import ME from '../images/My/Heroimage.png';
import CV from '../images/My/Dinesh N T_Resume.pdf';
import Dlogo from '../images/My/Dlogo.png';

// ✅ Team Members
import TM0 from '../images/Teammembers/D.jpg'
import TM1 from '../images/Teammembers/Deena.jpeg';
import TM2 from '../images/Teammembers/Priyanka.jpg';

import Mysync from '../images/ProjectThumb/My Sync.png';
import Sentiment from '../images/ProjectThumb/Sentiment.png';
import Healtron from '../images/ProjectThumb/Medassist.png';
import Glaucoma from '../images/ProjectThumb/Glaucoma.png';
import Gemini from '../images/ProjectThumb/Gemini.png';
import Mushroom from '../images/ProjectThumb/Mushroom.png';
// ✅ Institutions & Companies
import SGNHSSLogo from '../images/Institutionlogo/school_logo.png';
import KCELogo from '../images/Institutionlogo/college_logo.png';
import InternPeLogo from '../images/Institutionlogo/internpe_logo.jpeg';
import IZetLogo from '../images/Institutionlogo/izet_logo.jpeg';

import Instagram from '../images/Social Icons/Instagram.png';
import LinkedIn from '../images/Social Icons/LinkedIn (1).png';
import GitHub from '../images/Social Icons/GitHub.png';

// ✅ Skills Info
export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: JsLogo },
      { name: 'Tailwind CSS', logo: TailwindCSSLogo },
      { name: 'React Js', logo: ReactLogo },
      { name: 'Vite', logo: ViteLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node Js', logo: NodeLogo },
      { name: 'Python', logo: PythonLogo },
      { name: 'Flask', logo: FlaskLogo },
    ],
  },
  {
    title: 'AI/ML',
    skills: [
      { name: 'NumPy', logo: NumPyLogo },
      { name: 'Pandas', logo: PandasLogo },
      { name: 'TensorFlow', logo: TensorFlowLogo },
      { name: 'Scikit-Learn', logo: ScikitLogo },
      { name: 'PyTorch', logo: PyTorchLogo },
    ],
  },
  {
    title: 'Data Base',
    skills: [
      { name: 'MySQL', logo: MysqlLogo },
      { name: 'MongoDB', logo: MongoDBLogo },
      { name: 'FireBase', logo: FireBaseLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'GitHub', logo: GitHubLogo },
      { name: 'VS Code', logo: VSCodeLogo },
      { name: 'Canva', logo: CanvaLogo },
    ],
  },
];

// ✅ Personal Details
export const MyDetails = [
  {
    name: "Dinesh N T",
    profileImage: ME,
    cv: CV,
    Dlogo: Dlogo,
  },
];

// ✅ Team Members
export const Teammembers = [
  {
    id: 0,
    name: "Dinesh",
    img: TM0,
    github: "https://github.com/DineshhNT",
    linkedin: "https://www.linkedin.com/in/dinesh-n-t-20b0b6256/",
  },
  {
    id: 1,
    name: "Deena",
    img: TM1,
    github: "https://github.com/DeenathayalanCK",
    linkedin: "https://www.linkedin.com/in/deenathayalan-c-k-3a823a230/",
  },
  {
    id: 2,
    name: "Priyanka",
    img: TM2,
    github: "https://github.com/Priyankakamalesh",
    linkedin: "https://www.linkedin.com/in/priyanka-k-a3bb79284/",
  },
];

export const SocialLogos = 
  {
  github: GitHub,
  instagram: Instagram,
  linkedin: LinkedIn,
  }


// ✅ Journey Data — CORRECTED with `type`
export const JourneyData = [
  // ✅ Experience items
  {
    id: 0,
    img: IZetLogo,
    role: "Software Engineer Intern",
    company: "I Zet e-Payments Pvt Ltd",
    url: "https://www.izetpe.in/",
    date: "Feb 2025 - May 2025",
    desc: "Worked as a Software Engineer Intern, gaining valuable hands-on experience in web development while actively contributing to real-world projects. This internship enhanced both my technical skills and understanding of organizational workflows in a corporate environment.Significantly improved my web development proficiency and gained exposure to professional software development practices in a structured, real-world setting.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "TypeScript",
      "Node JS",
      "Tailwind CSS",
      "MongoDB",
    ],
    type: "experience",
  },
  {
    id: 1,
    img: InternPeLogo,
    role: "AI/ML Intern",
    company: "InternPe",
    url: "https://internpe.in/",
    date: "Aug 2024 - Sep 2024",
    desc: "I completed a remote internship focused on core machine learning concepts, exploring key algorithms through hands-on projects. I implemented supervised and unsupervised models, strengthening my theory and practical skills. This experience boosted my ability to solve real-world problems using ML. It also built my confidence as a growing ML practitioner.",
    skills: [
      "ReactJS",
      "Redux",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "SQL",
    ],
    type: "experience",
  },
  
  // ✅ Education items
  {
    id: 3,
    img: KCELogo,
    degree: "B.Tech - AI & Data Science",
    school: "Kathir College of Engineering",
    url: "https://kathir.ac.in/",
    date: "2021 - 2025",
    grade: "7.64",
    desc: "Completed my Bachelor of Technology in Artificial Intelligence & Data Science at Kathir College of Engineering with a CGPA of 7.64. Built expertise in AI, machine learning, data analysis, and visualization. Studied advanced coding, database design, and smart systems. Worked on practical projects and internships to apply theoretical concepts. Developed strong problem-solving skills and a passion for innovative tech solutions.",
    type: "education",
  },
  {
    id: 4,
    img: SGNHSSLogo,
    degree: "High School",
    school: "Sri Gopal Naidu Hr.Sec.School",
    url: "https://srigopalnaiduschools.in/",
    date: "2020 - 2021",
    grade: "86%",
    desc: "Successfully completed my Higher Secondary Schooling at Sri Gopal Naidu Higher Secondary School with 86%, gaining a solid foundation in mathematics, science, and logical thinking while building strong study discipline and problem-solving skills.",
    type: "education",
  },
];

// ✅ Projects (Work)
export const projects = [
  {
    id: 0,
    title: "Personalized AI - Med Assist",
    description:
      "HealTron is a personalized AI-powered medical assistant web application that helps users manage chronic diseases by combining natural language processing (NLP) for symptom analysis, machine learning models for early disease detection, and real-time IoT data integration. It provides an interactive chatbot interface where users can describe their health conditions, receive smart diagnostics, and get tailored recommendations. HealTron securely stores user health data on the cloud, supports real-time monitoring through connected devices, and ensures privacy compliance. By integrating modern AI, ML, and IoT technologies into one platform, HealTron aims to make healthcare more accessible, accurate, and user-friendly for patients anytime, anywhere.",
    image: Healtron,
    tags: ["MongoDB", "Express", "React", "Node", "AI/ML", "Python"],
    // Add the extraTags property here
    extraTags: ["Flask","NLP Bot","TailwindCSS"],
    github: "https://github.com/AI-MED-ASSIST/HealTron",
    webapp: "https://ai-med-assist.github.io/HealTron/#/login",
    domain: "Fullstack",
    duration: "Jan 2024 - Apr 2024",
    teammembers: [0, 1, 2],
  },
  {
    id: 1,
    title: "MySync | Personal Portfolio",
    description:
      "MySync is a modern, fully responsive personal portfolio web application designed to showcase my skills, projects, and professional journey in a clean and engaging way. Built with React, Vite, and Tailwind CSS, it combines smooth animations, stylish UI components, and reusable layouts to create a seamless user experience across all devices. This portfolio highlights my AI/ML, web development, and full-stack capabilities, featuring interactive project previews, detailed project pages, and dynamic sections for skills, experience, and education. The design emphasizes visual clarity and performance while making it easy for visitors, recruiters, and collaborators to explore my work, connect with me, and stay updated with my latest contributions and achievements.",
    image: Mysync,
    tags: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/DineshhNT/MySync",
    webapp: "https://dineshhnt.github.io/MySync/",
    domain: "Fullstack",
    duration: "Jan 2024 - Apr 2024",
    teammembers: [0],
  },
    {
    id: 5,
    title: "Sentimental Analysis",
    description:
      "Sentimental Analysis using Python implements a Natural Language Processing (NLP) pipeline to analyze and classify the sentiment of product reviews collected from popular e-commerce platforms like Flipkart and Amazon. It processes large volumes of customer feedback by performing data cleaning, tokenization, and vectorization. Then, it trains machine learning models to detect whether the sentiment expressed in a review is positive, negative, or neutral. Visualizations such as word clouds and sentiment distribution graphs help interpret customer opinions.",
    image: Sentiment,
    tags: ["AI/ML", "Python", "NLTK", "WordCloud"],
    github: "https://github.com/DineshhNT/SentimentalAnalysisUsingPython",
    webapp: "https://github.com/DineshhNT/SentimentalAnalysisUsingPython",
    domain: "AI/ML",
    duration: "Jan 2024 - Apr 2024",
    teammembers: [0],
  },
  {
    id: 3,
    title: "Gemini Clone",
    description:
      "The Gemini Clone is an advanced conversational AI interface developed using ReactJS, designed to replicate the real-time interactivity of Google's Gemini chatbot. It allows users to engage in seamless conversations with the Gemini API, rendering streaming responses in a dynamic and fluid chat experience. Built with a focus on responsiveness and performance, the application uses modular React components, Tailwind CSS for a modern UI, and efficient API handling to ensure fast, intuitive communication. This project showcases a practical implementation of large language model integration, reflecting strong frontend development and AI interaction skills.",
    image: Gemini,
    tags: ["React JS", "Node.js", "NPM", "Validation"],
    github: "https://github.com/DineshhNT/GeminiGPT",
    webapp: "https://dineshhnt.github.io/GeminiGPT/",
    domain: "Fullstack",
    duration: "Jan 2024 - Apr 2024",
    teammembers: [0],
  },
  {
    id: 4,
    title: "Glaucoma Disease Detection",
    description:
      "This project leverages Convolutional Neural Networks (CNNs) to detect glaucoma from retinal fundus images with high accuracy. Developed using Python and Keras, the system processes a balanced dataset of healthy and glaucomatous eyes to train a robust classification model. Preprocessing techniques such as contrast enhancement and noise reduction were applied to optimize image quality. The project includes performance visualization using ROC curves and precision-recall metrics, making it a valuable solution for early diagnosis in ophthalmology. It reflects practical experience in medical AI, deep learning, and image-based health diagnostics.",
    image: Glaucoma,
    tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
    github: "https://github.com/DineshhNT/GlaucomaDetectionUsingCNN",
    webapp: "https://github.com/DineshhNT/GlaucomaDetectionUsingCNN",
    domain: "AI/ML",
    duration: "Jan 2024 - Apr 2024",
    teammembers: [0,1],
  },
  {
    id: 6,
    title: "Mushroom Classifier",
    description:
      "The Mushroom Classifier is a machine learning web application developed using Python and Streamlit, aimed at predicting whether a mushroom is edible or poisonous based on its physical characteristics. The project utilizes a cleaned version of the UCI Mushroom Dataset, and several supervised learning algorithms were trained and evaluated, including Random Forest and Decision Tree classifiers, with the Random Forest model achieving high accuracy. The user-friendly Streamlit interface allows users to input mushroom features and receive real-time predictions instantly. This project demonstrates expertise in end-to-end ML development, model evaluation, and rapid deployment using lightweight web frameworks.",
    image: Mushroom,
    tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
    github: "https://github.com/DineshhNT/MushroomClassifier",
    webapp: "https://github.com/DineshhNT/MushroomClassifier",
    domain: "AI/ML",
    duration: "Jan 2024 - Apr 2024",
    teammembers: [0],
  },
];