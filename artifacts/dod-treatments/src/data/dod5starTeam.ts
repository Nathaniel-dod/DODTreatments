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
    bio: 'Dr. Darrell Wolfe, Ac., Ph.D., D.N.M., D.H.S., has over 45 years of experience in Advanced Energy Medicine Therapy and Psychology. Known as the “Doc of Detox,” he is a medical intuitive, professor, and director of the BraveHeartNation World Healing & Training Movement. His whole-body philosophy informs the New World Practitioner Certification Program, including Whole Life Health, Wolfe Non Surgical Bodywork, and Pain Free Pelvic Restoration.',
    image: 'images/darrell-team.webp',
    imageAlt: 'Dr. Darrell Wolfe',
  },
  {
    name: 'Dr. Sage Wolfe',
    role: 'Host & Master Practitioner',
    bio: 'Dr. Sage Wolfe is a Doctor of Natural Medicine and Indigenous Medicine, Certified Wolfe Non Surgical Master Trainer, and primary author of the Wolfe Non Surgical training manual. Drawing on 17 years of experience, he combines natural medicine, hands-on bodywork, movement, recovery, psychology, and human performance.',
    image: 'images/sage-team.webp',
    imageAlt: 'Dr. Sage Wolfe performing a hands-on treatment',
  },
  {
    name: 'Jesse Malcolm',
    role: 'Host & Master Practitioner',
    bio: 'Jesse is a Wolfe Non Surgical Master Practitioner dedicated to helping guests improve mobility, ease physical restrictions, and support overall well-being through advanced non-invasive deep tissue therapy. He is known for his calm, professional, and approachable manner.',
    image: 'images/jesse-consultation.webp',
    imageAlt: 'Jesse Malcolm',
  },
  {
    name: 'Cinthia',
    role: 'House Manager',
    bio: 'Your house manager at the retreat, making sure every detail of your stay is taken care of.',
  },
];