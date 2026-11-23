// Central place for all site copy that isn't a case study.
// Edit this file to update the home page.

export const site = {
  name: 'Ahmad Abdullahi',
  title: 'Ahmad Abdullahi — Product Designer',
  description:
    'Portfolio of Ahmad Abdullahi, a product designer in Indiana. UX/UI and web design case studies, experience, and the story behind my creative work.',
  role: 'Product Designer',
  location: 'Indiana, USA',
  email: 'atabdullahi.business@gmail.com',
  calendly: 'https://calendly.com/atabdullahi-business/30min',
  resume: 'https://drive.google.com/file/d/1fk7oHKFZc8pl6wLUDXm6wyUfohLLasOP/view?usp=sharing',
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
  { label: 'Experience', href: '/#experience' },
  { label: 'Contact', href: '/#contact' },
];

export const about = {
  intro:
    'I was born and raised in Bloomington, Indiana with a Nigerian ethnic background. I graduated from Indiana University Bloomington in May 2026 with a B.S. in Informatics, a cognate in Business, and minors in web design and human-centered computing. I design and build clear, purposeful web and product experiences, from discovery research to final product.',
  roots:
    'My creativity and passion for technology started early. I started gaming on a Game Boy, PS2, Wii, and Xbox 360 when I was younger. I then built my own gaming PC in high school, got into editing gaming videos for YouTube, short-form content for TikTok, taking photographs on my Canon (yes, that’s a picture I took), and making music on FL Studio. Over time that evolved into designing websites and gaining an interest in product design.',
  education: {
    school: 'Indiana University Bloomington',
    degree: 'B.S. in Informatics',
    detail: 'Cognate in Business · Minors in Web Design & Human-Centered Computing',
    year: '2026',
  },
};

// "Off the clock" section on the home page.
export const offTheClock = {
  beat: { title: 'flow', src: '/audio/flow.mp3', duration: '2:05' },
  game: { title: 'Cyberpunk 2077', href: 'https://www.cyberpunk.net/us/en/' },
  pc: [
    { part: 'CPU', name: 'Ryzen 5 2600' },
    { part: 'GPU', name: 'Radeon RX 570' },
    { part: 'RAM', name: '32 GB DDR4' },
    { part: 'Storage', name: '500 GB SSD + 1.5 TB HDD' },
    { part: 'Case', name: 'Cougar' },
  ],
  activities: [
    { label: 'Biking', icon: 'bike' },
    { label: 'Running', icon: 'run' },
    { label: 'Strength training', icon: 'gym' },
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
