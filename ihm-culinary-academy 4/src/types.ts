export interface SyllabusTopic {
  code: string;
  name: string;
  type: "Theory" | "Practical" | "Both";
  hours: number;
  description: string;
  modules: string[];
  recommendedBooks?: string[];
  keyRecipes?: string[];
}

export interface SemesterSyllabus {
  semester: string;
  title: string;
  description: string;
  subjectsCount: number;
  coreFocus: string;
  subjects: SyllabusTopic[];
}

export interface SliderSlide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  slideType?: "vacancies" | "ingredients" | "videos" | "news" | "chefs" | "miscellaneous";
}

export interface SubjectCovered {
  id: string;
  title: string;
  icon: string;
  description: string;
  keySkills: string[];
}

export interface CareerCard {
  id: string;
  title: string;
  salary: string;
  growth: string;
  skills: string[];
  description: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "Kitchen" | "Service" | "Patisserie" | "FrontOffice" | "Events";
  image: string;
  caption: string;
}

export interface StudyNote {
  id: string;
  title: string;
  subject: string;
  semester: string;
  type: "PDF Notes" | "Practical File" | "Question Paper" | "Assignment";
  fileSize: string;
  downloadsCount: number;
  contentPreview?: string;
  author: string;
}

export interface HotelNews {
  id: string;
  title: string;
  source: string;
  date: string;
  summary: string;
  url?: string;
  category: string;
}

export interface ChefCertificate {
  id: string;
  title: string;
  issuedBy: string;
  skillsCertified: string[];
  bgColor: string;
}
