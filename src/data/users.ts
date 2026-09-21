export type User = {
  id: number;
  name: string;
  email: string;
  role: string;
  status: "Active" | "Inactive";
};

export const users: User[] = [
  {
    id: 1,
    name: "Ahmed Hassan",
    email: "ahmed@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 2,
    name: "Sara Ali",
    email: "sara@example.com",
    role: "Editor",
    status: "Active",
  },
  {
    id: 3,
    name: "Omar Khaled",
    email: "omar@example.com",
    role: "Viewer",
    status: "Inactive",
  },
  {
    id: 4,
    name: "Mariam Adel",
    email: "mariam@example.com",
    role: "Editor",
    status: "Active",
  },
  {
    id: 5,
    name: "Youssef Tarek",
    email: "youssef@example.com",
    role: "Viewer",
    status: "Inactive",
  },
  {
    id: 6,
    name: "Nour Ahmed",
    email: "nour@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 7,
    name: "Karim Mohamed",
    email: "karim@example.com",
    role: "Editor",
    status: "Active",
  },
  {
    id: 8,
    name: "Salma Mostafa",
    email: "salma@example.com",
    role: "Viewer",
    status: "Inactive",
  },
];