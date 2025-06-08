export interface Skill {
  category: string
  items: string[]
}

export interface Experience {
  company: string
  position: string
  location: string
  duration: string
  achievements: string[]
}

export interface Project {
  title: string
  description: string
  technologies: string[]
  features: string[]
  githubUrl?: string
  demoUrl?: string
}

export interface Education {
  degree: string
  specialization: string
  university: string
  location: string
  cgpa: string
}

export interface ContactInfo {
  phone: string
  email: string
  linkedin: string
  github: string
}
