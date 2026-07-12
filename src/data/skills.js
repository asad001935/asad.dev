// Proficiency is a 0-100 scale used to animate the progress bars on scroll.

export const SKILL_GROUPS = [
  {
    id: 'frontend',
    title: 'Frontend',
    description: 'Building interfaces people enjoy using.',
    skills: [
      { name: 'HTML5', level: 92 },
      { name: 'CSS3', level: 90 },
      { name: 'JavaScript (ES6+)', level: 88 },
      { name: 'React.js', level: 90 },
      { name: 'Tailwind CSS', level: 88 },
      { name: 'Bootstrap', level: 80 },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    description: 'Designing APIs that stay fast under real load.',
    skills: [
      { name: 'Node.js', level: 86 },
      { name: 'Express.js', level: 88 },
      { name: 'REST APIs', level: 90 },
      { name: 'Authentication', level: 84 },
      { name: 'JWT', level: 85 },
      { name: 'MongoDB', level: 86 },
      { name: 'Mongoose', level: 84 },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Deployment',
    description: 'Shipping, versioning, and keeping projects live.',
    skills: [
      { name: 'Git', level: 88 },
      { name: 'GitHub', level: 88 },
      { name: 'Render', level: 78 },
      { name: 'Vercel', level: 80 },
      { name: 'MongoDB Atlas', level: 82 },
    ],
  },
];
