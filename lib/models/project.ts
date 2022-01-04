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

interface Thumbnail {
  url: string;
}

interface Link {
  provider: string;
  link: string;
}

interface Screenshot {
  url: string;
}
