type Dod5StarTeamMember = {
  name: string;
  role: string;
  bio: string;
  image?: string;
  imageAlt?: string;
};

export const dod5StarTeam: Dod5StarTeamMember[] = [
  {
    name: 'Dr. Darrell Wolfe',
    role: 'Founder',
    bio: 'Creator of the DOD5Star retreat. With 45 years in the trenches of functional medicine, Dr. Wolfe created Wolfe Non-Surgical and the Doc of Detox approach to reversing the so-called irreversible.',
    image: 'images/darrell-team.webp',
    imageAlt: 'Dr. Darrell Wolfe',
  },
  {
    name: 'Dr. Sage Wolfe',
    role: 'Host & Master Practitioner',
    bio: 'Host Master Practitioner of the retreat, guiding guests through their personalized healing and training experience. Full bio coming soon.',
    image: 'images/sage-team.webp',
    imageAlt: 'Dr. Sage Wolfe performing a hands-on treatment',
  },
  {
    name: 'Jesse Malcolm',
    role: 'Host & Master Practitioner',
    bio: 'Host Master Practitioner of the retreat, delivering personalized treatment and training throughout your stay. Full bio coming soon.',
    image: 'images/jesse-consultation.webp',
    imageAlt: 'Jesse Malcolm',
  },
  {
    name: 'Cinthia',
    role: 'House Manager',
    bio: 'Your house manager at the retreat, making sure every detail of your stay is taken care of. Full bio coming soon.',
  },
];