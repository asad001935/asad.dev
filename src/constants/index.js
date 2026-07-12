
export const PERSONAL = {
  name: 'Muhammad Asad Ullah',
  firstName: 'Asad',
  role: 'Full Stack MERN Developer',
  tagline: 'I build fast, secure, full stack web applications.',
  location: 'Pakistan',
  email: 'masadullahkhanhfd@gmail.com',
  phone: '+92 329 6021819',
  github: 'https://github.com/asad001935',
  linkedin: 'https://www.linkedin.com/in/muhammad-asad-ullah-375911325?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  resumeUrl: './../../public/Muhammad_Asad_Ullah_CV.pdf', 
  avatarUrl: './../../public/PFP.jpeg', 
  availability: 'Open to MERN Stack internships & junior full stack roles',
};

export const NAV_LINKS = [
  { label: 'Home', to: 'hero' },
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'skills' },
  { label: 'Experience', to: 'experience' },
  { label: 'Projects', to: 'projects' },
  { label: 'Services', to: 'services' },
  { label: 'Contact', to: 'contact' },
];

export const TYPED_ROLES = [
  'Full Stack MERN Developer',
  'React.js Developer',
  'Node.js & Express API Builder',
  'MongoDB & Backend Architecture',
];

export const SOCIALS = [
  { id: 'github', label: 'GitHub', href: PERSONAL.github },
  { id: 'linkedin', label: 'LinkedIn', href: PERSONAL.linkedin },
  { id: 'email', label: 'Email', href: `mailto:${PERSONAL.email}` },
];
