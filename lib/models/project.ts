export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  thumbnail: Thumbnail;
  tags: string[];
  links: Link[];
  isMine: boolean;
}

interface Thumbnail {
  url: string;
}

interface Link {
  provider: string;
  link: string;
}
