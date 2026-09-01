export interface PractitionerTestimonial {
  practitionerId: string;
  practitionerName: string;
  author: string;
  paragraphs: string[];
}

export const practitionerTestimonials: PractitionerTestimonial[] = [
  {
    practitionerId: 'p6',
    practitionerName: 'Neriinga Carlson',
    author: 'Anthony P.',
    paragraphs: [
      'For several years I struggled with recurring swelling in my feet. Sometimes it was one foot, sometimes the other, and occasionally both. The episodes became frequent enough that they interfered with my ability to work and stay active.',
      'I went through multiple medical tests and saw different doctors and specialists, but the exact cause was never identified. It wasn’t gout, my shoes weren’t the issue, and there was no clear food or lifestyle trigger. Most of the time I was simply prescribed anti-inflammatory medications or strong gout medications, which didn’t solve the problem.',
      'Eventually a friend recommended that I speak with Neringa. What stood out to me immediately was that she took the time to look at my overall health and lifestyle, not just the symptoms.',
      'During our consultation she suggested a few simple changes to my daily routine and paying closer attention to certain aspects of my diet and wellness. To my surprise, the swelling stopped shortly after I began following her recommendations.',
      'It has now been about three years without the recurring swelling that used to disrupt my life. I work full days in steel-toe boots and average around 10,000 steps a day without issues.',
      'My experience with Neringa was positive because she approached my situation thoughtfully and offered a perspective I hadn’t been given before. I’m grateful for the guidance she provided and the improvement I’ve experienced since.',
    ],
  },
];