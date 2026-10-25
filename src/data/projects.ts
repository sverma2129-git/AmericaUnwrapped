import { NavItem, ProjectMeta } from '@/types';

export const NAVIGATION_LINKS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Explore History', href: '/vietnam' },
  { label: 'Study Guide', href: '/vietnam/study-guide' },
  { label: 'About', href: '/about' },
];

export const PROJECTS: ProjectMeta[] = [
  {
    id: 'vietnam-war',
    title: 'The Vietnam War (1945–1975)',
    slug: '/vietnam',
    subtitle: 'An interactive historical exploration of conflict, decision-making, and consequence across Washington and Hanoi.',
    status: 'published',
    statusLabel: 'Flagship Digital Experience',
  },
];
