// lib/projects.ts

export const projects = [
    {
      slug: "openchs",
      title: "OPENCHS - A Child Helpline System",
      category: "Child Protection",
      description: "OPENCHS is a comprehensive child helpline system that provides a safe and confidential environment for children.",
      image: "/projects/project1.png",
    },
    {
      slug: "case-management-legal",
      title: "Case Management - Legal",
      category: "Legal",
      description: "The Case Management System is designed to streamline legal case handling by providing a centralized platform.",
      image: "/placeholder.svg?height=300&width=600&text=Legal Case Management Image",
    },
    {
      slug: "crm-saccos",
      title: "CRM for SACCOS",
      category: "CRM, Finance",
      description: "CRM for SACCOS simplifies and automates the entire lifecycle of Sacco operations.",
      image: "/placeholder.svg?height=300&width=600&text=CRM for SACCOS Image",
    },
    {
      slug: "edms",
      title: "Electronic Document Management System (EDMS)",
      category: "Document Management",
      description: "EDMS enhances document storage, retrieval, and security with an efficient platform for managing digital docs.",
      image: "/placeholder.svg?height=300&width=600&text=EDMS Image",
    },
    {
      slug: "contract-management",
      title: "Contract Management System",
      category: "Contract Management",
      description: "A comprehensive platform for managing contracts from creation to closeout.",
      image: "/placeholder.svg?height=300&width=600&text=Contract Management Image",
    },
  ];
  
  export function getAllProjects() {
    return projects;
  }
  
  export function getProject(slug: string) {
    return projects.find((p) => p.slug === slug);
  }
  