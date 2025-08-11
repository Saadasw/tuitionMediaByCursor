export interface User {
  id: string;
  email: string;
  name: string;
  role: 'student' | 'tutor' | 'admin';
  avatar?: string;
}

export interface TutorProfile extends User {
  subjects: string[];
  experience: number;
  hourlyRate: number;
  location: string;
  bio: string;
  qualifications: string[];
  rating: number;
  verified: boolean;
}

export interface StudentRequest {
  id: string;
  studentId: string;
  subject: string;
  grade: string;
  description: string;
  budget: number;
  location: string;
  createdAt: string;
  status: 'open' | 'closed';
}

export interface TutorBid {
  id: string;
  tutorId: string;
  requestId: string;
  proposedRate: number;
  message: string;
  createdAt: string;
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  createdAt: string;
  read: boolean;
}