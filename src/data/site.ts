// Central place for all site copy that isn't a case study.
// Edit this file to update the home page.

export const site = {
  name: 'Ahmad Abdullahi',
  title: 'Ahmad Abdullahi — Product Designer',
  description:
    'Portfolio of Ahmad Abdullahi, a product designer in Indiana. UX/UI and web design case studies, experience, and the story behind my creative work.',
  role: 'Designer',
  location: 'Indiana, USA',
  email: 'atabdullahi.business@gmail.com',
  calendly: 'https://calendly.com/atabdullahi-business/30min',
  resume: 'https://drive.google.com/file/d/1QUk4oIxjYSsA89dUtwx9umwG2C31lVry/view?usp=sharing',
  current: { role: 'Product Designer', company: 'Elanco Animal Health', since: 'July 2026' },
};

export const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ahmadabdul/', icon: 'linkedin' },
  { label: 'Dribbble', href: 'https://dribbble.com/ahmada01', icon: 'dribbble' },
  { label: 'GitHub', href: 'https://github.com/ahmad-a01', icon: 'github' },
  { label: 'Email', href: `mailto:${site.email}`, icon: 'mail' },
] as const;

export const nav = [
  { label: 'Work', href: '/#work' },
  { label: 'About', href: '/#about' },
  { label: 'Experiences', href: '/#experience' },
  { label: 'Contact', href: '/#contact' },
];

export const about = {
  // The About Me story, one string per paragraph.
  story: [
    'I grew up in Bloomington, Indiana, in a Nigerian, Muslim household, and I’ve always been someone who makes things: building my own gaming PC, editing videos for YouTube, and making music. In a high school web development class, everything clicked. I loved the logic of writing code and the creativity of watching it turn into something visual.',
    'At Indiana University I went deeper, learning UX research, user testing, wireframing and prototyping in Figma, plus visual design fundamentals like Gestalt principles and color theory. The project that shaped me most started as a class assignment. Turkuaz Cafe, a local restaurant, didn’t have a website, so I designed one for my final project, then offered to build them a real one on Square. Working with a real client taught me to design around constraints, pick up new tools quickly, and think through every step of a customer’s journey.',
    'I keep my work simple and intentional. I’ve been lost and frustrated in products before, and I want people to feel calm using mine. I lead with empathy, letting user research and honest feedback shape every decision, and I learn by iterating: prototyping, testing, learning from my mistakes, and refining until it feels right.',
  ],
  education: {
    school: 'Indiana University Bloomington',
    degree: 'B.S. in Informatics',
    detail: 'Cognate in Business · Minors in Web Design & Human-Centered Computing',
    year: '2026',
  },
};

// "Off the clock" section on the home page.
export const offTheClock = {
  beat: { title: 'cl1ck', spoken: 'click', src: '/audio/cl1ck.mp3', duration: '1:45' },
  game: { title: 'Cyberpunk 2077', href: 'https://www.cyberpunk.net/us/en/' },
  daw: { title: 'FL Studio', href: 'https://www.image-line.com/fl-studio/' },
  activities: [
    { label: 'Biking', icon: 'bike', detail: 'Giant Escape 3' },
    { label: 'Running', icon: 'run', detail: 'Brooks Revel 8' },
    { label: 'Strength training', icon: 'gym', detail: 'Arnold Split' },
  ],
};

export const experience = [
  { role: 'Product Designer', company: 'Elanco Animal Health', dates: 'July 2026 – Present', current: true },
  { role: 'IT Intern', company: 'Elanco Animal Health', dates: 'May 2025 – May 2026' },
  { role: 'IT Intern', company: 'WFYI Public Media', dates: 'January 2025 – April 2025' },
  { role: 'Web/UX Design Intern', company: 'Laurie Burns McRobbie Serve IT Clinic', dates: 'January 2024 – December 2024' },
  { role: 'Tech Team Consultant', company: 'Indiana University IT Services (UITS)', dates: 'April 2023 – December 2024' },
];

export const certificates = [
  {
    title: 'Human-Computer Interaction: The Foundations of UX Design',
    issuer: 'Interaction Design Foundation',
    image: 'ixdf',
    href: 'https://ixdf.org/members/ahmad-abdullahi/certificate/course/10a6c31b-b6c8-446d-8a5e-8414f93e1168',
  },
] as const;
