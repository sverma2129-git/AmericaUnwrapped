export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

export type ProjectStatus = 'planned' | 'in-development' | 'published';

export interface ProjectMeta {
  id: string;
  title: string;
  slug: string;
  subtitle: string;
  status: ProjectStatus;
  statusLabel: string;
}

export interface EditorialPrinciple {
  title: string;
  description: string;
}
