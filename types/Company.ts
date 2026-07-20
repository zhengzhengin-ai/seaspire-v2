export interface Company {
  name: string;

  tagline: string;

  description: string;

  contact: {
    email: string;

    phone: string;
  };

  address: {
    full: string;
  };

  map: {
    embedUrl: string;
  };

  social: {
    linkedin: string;

    facebook: string;
  };

  business: {
    industry: string;

    location: string;
  };

  seo: {
    title: string;

    description: string;
  };
}