export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  thumbnail: Thumbnail;
  tags: string[];
  links: Link[] | null;
  isMine: boolean;
  builtAt: string;
  featured: boolean;
  projectType: string;
  screenshots: Screenshot[];
}

export interface Thumbnail {
  url: string;
}

export interface Link {
  provider: string;
  link: string;
}

export interface Screenshot {
  url: string;
}
