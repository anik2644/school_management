export type UserRole = "admin" | "teacher" | "staff" | "student";
export type ApprovalStatus = "pending" | "approved" | "rejected";

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: UserRole;
  status: ApprovalStatus;
  createdAt: string;
}

export interface Student extends User {
  dateOfBirth: string;
  gender: "male" | "female" | "other";
  guardianName: string;
  guardianPhone: string;
  address: string;
  classLevel: string;
  photo?: string;
  birthCertificate?: string;
  admissionDate: string;
}

export interface Teacher extends User {
  subject: string;
  assignedSections: string[];
}

export interface Staff extends User {
  roleType: "office_staff" | "accountant";
}

export interface ClassLevel {
  id: string;
  name: string;
  order: number;
}

export interface Section {
  id: string;
  name: string;
  classId: string;
  classLevel: string;
  enrolledStudents: string[];
  assignedTeachers: string[];
}

export interface Attendance {
  id: string;
  sectionId: string;
  date: string;
  studentId: string;
  status: "present" | "absent" | "late";
}

export interface ExamMark {
  id: string;
  studentId: string;
  sectionId: string;
  examType: string;
  marks: number;
  totalMarks: number;
}

export interface Payment {
  id: string;
  studentId: string;
  studentName: string;
  amount: number;
  status: "pending" | "verified" | "failed";
  date: string;
  month: string;
}

// Fixed class levels
export const CLASS_LEVELS: ClassLevel[] = [
  { id: "play", name: "Play", order: 1 },
  { id: "nursery", name: "Nursery", order: 2 },
  { id: "kg", name: "Kindergarten", order: 3 },
  { id: "class1", name: "Class 1", order: 4 },
  { id: "class2", name: "Class 2", order: 5 },
  { id: "class3", name: "Class 3", order: 6 },
  { id: "class4", name: "Class 4", order: 7 },
  { id: "class5", name: "Class 5", order: 8 },
];

// Mock Users
export const ADMIN_USER: User = {
  id: "admin1",
  name: "Dr. Sarah Johnson",
  email: "admin@littlescholars.edu",
  phone: "0300-1234567",
  role: "admin",
  status: "approved",
  createdAt: new Date().toISOString(),
};

export const STUDENTS: Student[] = [
  {
    id: "std1",
    name: "Ahmed Ali",
    email: "ahmed.ali@student.edu",
    phone: "0300-1111111",
    role: "student",
    status: "approved",
    dateOfBirth: "2018-05-15",
    gender: "male",
    guardianName: "Mr. Ali Hassan",
    guardianPhone: "0300-2222222",
    address: "123 Main Street, Karachi",
    classLevel: "class1",
    admissionDate: "2023-08-01",
    createdAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "std2",
    name: "Fatima Khan",
    email: "fatima.khan@student.edu",
    phone: "0300-1111112",
    role: "student",
    status: "approved",
    dateOfBirth: "2018-08-22",
    gender: "female",
    guardianName: "Mrs. Aisha Khan",
    guardianPhone: "0300-2222223",
    address: "456 Park Avenue, Karachi",
    classLevel: "class1",
    admissionDate: "2023-08-01",
    createdAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "std3",
    name: "Hassan Raza",
    email: "hassan.raza@student.edu",
    phone: "0300-1111113",
    role: "student",
    status: "approved",
    dateOfBirth: "2019-03-10",
    gender: "male",
    guardianName: "Mr. Raza Ahmad",
    guardianPhone: "0300-2222224",
    address: "789 Oak Road, Karachi",
    classLevel: "class2",
    admissionDate: "2023-08-01",
    createdAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "std4",
    name: "Zainab Sheikh",
    email: "zainab.sheikh@student.edu",
    phone: "0300-1111114",
    role: "student",
    status: "approved",
    dateOfBirth: "2019-06-18",
    gender: "female",
    guardianName: "Dr. Sheikh Muhammad",
    guardianPhone: "0300-2222225",
    address: "321 Elm Street, Karachi",
    classLevel: "class2",
    admissionDate: "2023-08-01",
    createdAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "std5",
    name: "Ali Hassan",
    email: "ali.hassan@student.edu",
    phone: "0300-1111115",
    role: "student",
    status: "approved",
    dateOfBirth: "2017-11-05",
    gender: "male",
    guardianName: "Hassan Abdullah",
    guardianPhone: "0300-2222226",
    address: "654 Cedar Lane, Karachi",
    classLevel: "class3",
    admissionDate: "2022-08-01",
    createdAt: new Date(Date.now() - 120 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "std6",
    name: "Ayesha Malik",
    email: "ayesha.malik@student.edu",
    phone: "0300-1111116",
    role: "student",
    status: "approved",
    dateOfBirth: "2017-02-14",
    gender: "female",
    guardianName: "Malik Saeed",
    guardianPhone: "0300-2222227",
    address: "987 Birch Avenue, Karachi",
    classLevel: "class3",
    admissionDate: "2022-08-01",
    createdAt: new Date(Date.now() - 120 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "std7",
    name: "Mohammad Amin",
    email: "mohammad.amin@student.edu",
    phone: "0300-1111117",
    role: "student",
    status: "approved",
    dateOfBirth: "2020-07-20",
    gender: "male",
    guardianName: "Amin Khan",
    guardianPhone: "0300-2222228",
    address: "147 Maple Drive, Karachi",
    classLevel: "nursery",
    admissionDate: "2024-08-01",
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "std8",
    name: "Sara Ibrahim",
    email: "sara.ibrahim@student.edu",
    phone: "0300-1111118",
    role: "student",
    status: "pending",
    dateOfBirth: "2020-09-12",
    gender: "female",
    guardianName: "Ibrahim Ahmed",
    guardianPhone: "0300-2222229",
    address: "258 Walnut Street, Karachi",
    classLevel: "nursery",
    admissionDate: "2024-08-01",
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "std9",
    name: "Usman Farooq",
    email: "usman.farooq@student.edu",
    phone: "0300-1111119",
    role: "student",
    status: "pending",
    dateOfBirth: "2021-01-08",
    gender: "male",
    guardianName: "Farooq Malik",
    guardianPhone: "0300-2222230",
    address: "369 Pine Road, Karachi",
    classLevel: "play",
    admissionDate: "2024-08-01",
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "std10",
    name: "Noor Fatima",
    email: "noor.fatima@student.edu",
    phone: "0300-1111120",
    role: "student",
    status: "approved",
    dateOfBirth: "2016-04-25",
    gender: "female",
    guardianName: "Fatima Ali",
    guardianPhone: "0300-2222231",
    address: "741 Spruce Lane, Karachi",
    classLevel: "class4",
    admissionDate: "2021-08-01",
    createdAt: new Date(Date.now() - 365 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "std11",
    name: "Bilal Khan",
    email: "bilal.khan@student.edu",
    phone: "0300-1111121",
    role: "student",
    status: "approved",
    dateOfBirth: "2016-10-30",
    gender: "male",
    guardianName: "Khan Sahab",
    guardianPhone: "0300-2222232",
    address: "852 Ash Court, Karachi",
    classLevel: "class4",
    admissionDate: "2021-08-01",
    createdAt: new Date(Date.now() - 365 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "std12",
    name: "Layla Ahmed",
    email: "layla.ahmed@student.edu",
    phone: "0300-1111122",
    role: "student",
    status: "approved",
    dateOfBirth: "2015-12-07",
    gender: "female",
    guardianName: "Ahmed Khan",
    guardianPhone: "0300-2222233",
    address: "963 Juniper Way, Karachi",
    classLevel: "class5",
    admissionDate: "2020-08-01",
    createdAt: new Date(Date.now() - 730 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "std13",
    name: "Omar Rauf",
    email: "omar.rauf@student.edu",
    phone: "0300-1111123",
    role: "student",
    status: "approved",
    dateOfBirth: "2015-06-14",
    gender: "male",
    guardianName: "Rauf Ahmed",
    guardianPhone: "0300-2222234",
    address: "159 Fir Avenue, Karachi",
    classLevel: "class5",
    admissionDate: "2020-08-01",
    createdAt: new Date(Date.now() - 730 * 24 * 60 * 60 * 1000).toISOString(),
  },
];

export const TEACHERS: Teacher[] = [
  {
    id: "tch1",
    name: "Mrs. Sophia Williams",
    email: "sophia.williams@littlescholars.edu",
    phone: "0300-3333333",
    role: "teacher",
    status: "approved",
    subject: "English",
    assignedSections: ["class1a"],
    createdAt: new Date(Date.now() - 180 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "tch2",
    name: "Mr. Ahmed Hassan",
    email: "ahmed.hassan@littlescholars.edu",
    phone: "0300-3333334",
    role: "teacher",
    status: "approved",
    subject: "Mathematics",
    assignedSections: ["class1b", "class2a"],
    createdAt: new Date(Date.now() - 180 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "tch3",
    name: "Miss Fatima Khan",
    email: "fatima.khan@littlescholars.edu",
    phone: "0300-3333335",
    role: "teacher",
    status: "approved",
    subject: "Science",
    assignedSections: ["class3a", "class4a"],
    createdAt: new Date(Date.now() - 120 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "tch4",
    name: "Mr. Hassan Raza",
    email: "hassan.raza@littlescholars.edu",
    phone: "0300-3333336",
    role: "teacher",
    status: "approved",
    subject: "Social Studies",
    assignedSections: ["class5a"],
    createdAt: new Date(Date.now() - 150 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "tch5",
    name: "Miss Aisha Ali",
    email: "aisha.ali@littlescholars.edu",
    phone: "0300-3333337",
    role: "teacher",
    status: "approved",
    subject: "Urdu",
    assignedSections: ["class2b", "class3b"],
    createdAt: new Date(Date.now() - 120 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "tch6",
    name: "Mr. Khalid Mehmood",
    email: "khalid.mehmood@littlescholars.edu",
    phone: "0300-3333338",
    role: "teacher",
    status: "approved",
    subject: "Physical Education",
    assignedSections: ["class1a", "class2b", "class4b"],
    createdAt: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "tch7",
    name: "Miss Zainab Sheikh",
    email: "zainab.sheikh@littlescholars.edu",
    phone: "0300-3333339",
    role: "teacher",
    status: "pending",
    subject: "Art & Craft",
    assignedSections: [],
    createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "tch8",
    name: "Mr. Muhammad Saeed",
    email: "m.saeed@littlescholars.edu",
    phone: "0300-3333340",
    role: "teacher",
    status: "pending",
    subject: "Computer Science",
    assignedSections: [],
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
  },
];

export const STAFF_MEMBERS: Staff[] = [
  {
    id: "stf1",
    name: "Malik Ahmed",
    email: "malik@littlescholars.edu",
    phone: "0300-4444444",
    role: "staff",
    status: "approved",
    roleType: "office_staff",
    createdAt: new Date(Date.now() - 200 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "stf2",
    name: "Ayesha Tariq",
    email: "ayesha@littlescholars.edu",
    phone: "0300-4444445",
    role: "staff",
    status: "approved",
    roleType: "accountant",
    createdAt: new Date(Date.now() - 180 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "stf3",
    name: "Hasan Mirza",
    email: "hasan@littlescholars.edu",
    phone: "0300-4444446",
    role: "staff",
    status: "approved",
    roleType: "office_staff",
    createdAt: new Date(Date.now() - 150 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "stf4",
    name: "Neha Patel",
    email: "neha@littlescholars.edu",
    phone: "0300-4444447",
    role: "staff",
    status: "pending",
    roleType: "accountant",
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "stf5",
    name: "Rashid Khan",
    email: "rashid@littlescholars.edu",
    phone: "0300-4444448",
    role: "staff",
    status: "approved",
    roleType: "office_staff",
    createdAt: new Date(Date.now() - 100 * 24 * 60 * 60 * 1000).toISOString(),
  },
];

export const SECTIONS: Section[] = [
  {
    id: "class1a",
    name: "Class 1A",
    classId: "class1",
    classLevel: "Class 1",
    enrolledStudents: ["std1"],
    assignedTeachers: ["tch1", "tch6"],
  },
  {
    id: "class1b",
    name: "Class 1B",
    classId: "class1",
    classLevel: "Class 1",
    enrolledStudents: ["std2"],
    assignedTeachers: ["tch2"],
  },
  {
    id: "class2a",
    name: "Class 2A",
    classId: "class2",
    classLevel: "Class 2",
    enrolledStudents: ["std3"],
    assignedTeachers: ["tch2"],
  },
  {
    id: "class2b",
    name: "Class 2B",
    classId: "class2",
    classLevel: "Class 2",
    enrolledStudents: ["std4"],
    assignedTeachers: ["tch5", "tch6"],
  },
  {
    id: "class3a",
    name: "Class 3A",
    classId: "class3",
    classLevel: "Class 3",
    enrolledStudents: ["std5"],
    assignedTeachers: ["tch3"],
  },
  {
    id: "class3b",
    name: "Class 3B",
    classId: "class3",
    classLevel: "Class 3",
    enrolledStudents: ["std6"],
    assignedTeachers: ["tch5"],
  },
  {
    id: "class4a",
    name: "Class 4A",
    classId: "class4",
    classLevel: "Class 4",
    enrolledStudents: ["std10"],
    assignedTeachers: ["tch3"],
  },
  {
    id: "class4b",
    name: "Class 4B",
    classId: "class4",
    classLevel: "Class 4",
    enrolledStudents: ["std11"],
    assignedTeachers: ["tch6"],
  },
  {
    id: "class5a",
    name: "Class 5A",
    classId: "class5",
    classLevel: "Class 5",
    enrolledStudents: ["std12", "std13"],
    assignedTeachers: ["tch4"],
  },
  {
    id: "nurserya",
    name: "Nursery A",
    classId: "nursery",
    classLevel: "Nursery",
    enrolledStudents: ["std7"],
    assignedTeachers: [],
  },
  {
    id: "playgroup",
    name: "Play Group",
    classId: "play",
    classLevel: "Play",
    enrolledStudents: [],
    assignedTeachers: [],
  },
  {
    id: "kg-a",
    name: "Kindergarten A",
    classId: "kg",
    classLevel: "Kindergarten",
    enrolledStudents: [],
    assignedTeachers: [],
  },
];

export const PAYMENTS: Payment[] = [
  {
    id: "pay1",
    studentId: "std1",
    studentName: "Ahmed Ali",
    amount: 5000,
    status: "verified",
    date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    month: "August 2024",
  },
  {
    id: "pay2",
    studentId: "std2",
    studentName: "Fatima Khan",
    amount: 5000,
    status: "pending",
    date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    month: "August 2024",
  },
  {
    id: "pay3",
    studentId: "std3",
    studentName: "Hassan Raza",
    amount: 5500,
    status: "verified",
    date: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    month: "July 2024",
  },
  {
    id: "pay4",
    studentId: "std5",
    studentName: "Ali Hassan",
    amount: 5000,
    status: "pending",
    date: new Date().toISOString(),
    month: "August 2024",
  },
  {
    id: "pay5",
    studentId: "std7",
    studentName: "Mohammad Amin",
    amount: 4500,
    status: "verified",
    date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    month: "August 2024",
  },
];
