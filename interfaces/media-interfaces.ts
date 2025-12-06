export interface Podcast {
  title: string;
  episode: string;
  description: string;
  image: string;
  links: {
    platform: string;
    url: string;
    icon: string;
  }[];
}

export interface Article {
  title: string;
  publication?: string;
  description: string;
  link: string;
  type: string;
  image: string;
}

export interface OtherMedia {
  title: string;
  description: string;
  link: string;
  image: string;
  type: string;
  date?: string;
}
