export interface Question {
  id: number;
  text: string;
  category: string;
  options: string[];
}

export interface UserResponses {
  [key: string]: number;
}

export interface CareerRecommendation {
  field: string;
  description: string;
  courses: {
    title: string;
    provider: string;
    url: string;
    image: string;
  }[];
}