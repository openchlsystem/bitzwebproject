export const homeContent = {
  hero: {
    title: "Your Partner in Digital Solutions",
    description: "We deliver AI-powered, future-ready software and digital transformation for startups, enterprises, and innovators across Africa.",
    countriesShowcase: {
      title: "Our Presence Across East Africa",
      countries: [
        {
          name: 'Kenya',
          flag: '🇰🇪',
          description: 'Our headquarters and primary operations center, serving as the hub for East African initiatives.',
          projects: '50+',
          years: '19+'
        },
        {
          name: 'Uganda',
          flag: '🇺🇬',
          description: 'Strong partnerships with government agencies and NGOs for child protection and healthcare systems.',
          projects: '25+',
          years: '8+'
        },
        {
          name: 'Tanzania',
          flag: '🇹🇿',
          description: 'Collaborative projects with ministries and international organizations for digital transformation.',
          projects: '20+',
          years: '6+'
        },
        {
          name: 'Lesotho',
          flag: '🇱🇸',
          description: 'Emerging market presence with focus on government digitization and capacity building.',
          projects: '10+',
          years: '3+'
        }
      ]
    }
  },

  about: {
    title: "About Us",
    description: "Founded in 2007 in Nairobi, BITZ IT Consulting has grown into a leading technology partner across East Africa, with a strong presence in Kenya, Uganda, Tanzania, and Lesotho. We specialize in comprehensive technology solutions, software development, IT infrastructure, and digital transformation solutions, delivering impactful results for government agencies and international organizations, including UNICEF and the World Bank."
  },

  services: {
    sectionTitle: "What We Offer",
    sectionDescription: "Our Services",
    services: [
      {
        id: 1,
        iconComponent: 'Brain',
        title: 'AI-Driven Product Strategy & MVP Development',
        description: 'Turn your vision into a smart, market-ready product.',
        offerings: [
          'AI-powered market research and user-centric roadmaps.',
          'Fast, scalable MVP development.',
          'Built-in intelligence: analytics, NLP, recommendations.'
        ]
      },
      {
        id: 2,
        iconComponent: 'Database',
        title: 'Custom AI Software Development',
        description: 'Tailor-made applications that think for themselves.',
        offerings: [
          'Define AI use cases for your business goals.',
          'Full-cycle web, mobile, and cloud development.',
          'AI features: chatbots, automation, computer vision.'
        ]
      },
      {
        id: 3,
        iconComponent: 'Globe',
        title: 'Legacy System Modernization with AI',
        description: 'Breathe new life into outdated systems with AI.',
        offerings: [
          'Audit and redesign legacy tech for AI adoption.',
          'Modernize with APIs, microservices, cloud.',
          'Add automation, analytics, and AI support.'
        ]
      }
    ],
    whyChooseUs: {
      title: "Why Choose Us?",
      points: [
        "End-to-end expertise – From concept to deployment, we handle it all.",
        "AI that works for you – No hype, just practical, business-driven intelligence.",
        "Scalable & secure – Future-ready solutions that grow with your needs."
      ],
      ctaText: "Ready to build smarter? Get in touch today.",
      ctaLink: "/contact"
    }
  },

  featuredProduct: {
    sectionTitle: "Featured Product",
    heading: "Spotlight: OPENCHS Child Helpline System",
    description: "Our flagship child protection solution making a difference across East Africa",
    product: {
      badge: {
        icon: "Shield",
        text: "Child Protection"
      },
      title: "OPENCHS - Comprehensive Child Helpline System",
      description: "OPENCHS is our flagship child protection platform that provides a safe, confidential environment for children to report issues and seek help. The system has been successfully deployed across multiple countries in East Africa, serving thousands of children and families.",
      stats: [
        { value: "10,000+", label: "Children Helped" },
        { value: "24/7", label: "Availability" },
        { value: "4", label: "Countries" }
      ],
      keyFeatures: {
        title: "Key Capabilities",
        features: [
          {
            icon: "Phone",
            title: "24/7 Helpline Support",
            description: "Round-the-clock availability with multilingual support and trained counselors"
          },
          {
            icon: "Lock",
            title: "Secure Case Management",
            description: "Confidential case tracking with advanced security protocols and data protection"
          },
          {
            icon: "BarChart3",
            title: "Analytics & Reporting",
            description: "Comprehensive reporting tools for monitoring and improving child protection services"
          }
        ]
      },
      actions: {
        primary: {
          text: "View All Products",
          link: "/products"
        },
        secondary: {
          text: "Learn More About OPENCHS"
        }
      }
    },
    modalData: {
      name: 'OPENCHS',
      description: 'A comprehensive child helpline system providing safe and confidential environment for children to report issues and seek help.',
      features: ['Child Protection', 'Case Management', 'Reporting System', '24/7 Support', 'Multi-language', 'Analytics Dashboard'],
      category: 'Child Protection',
      status: 'Active'
    }
  },

  featuredProject: {
    sectionTitle: "Featured Project",
    heading: "Project Spotlight: Digital Transformation Initiative",
    description: "How we helped transform operations for a leading manufacturing company",
    project: {
      badge: {
        icon: "Factory",
        text: "Manufacturing"
      },
      title: "Complete Digital Transformation for Manufacturing Excellence",
      description: "We partnered with a leading East African manufacturing company to completely digitize their operations, resulting in a 40% improvement in operational efficiency and significant cost reductions. This comprehensive project involved system integration, process automation, and staff training.",
      highlights: {
        title: "Project Impact",
        metrics: [
          { value: "40%", label: "Efficiency Improvement" },
          { value: "60%", label: "Cost Reduction" },
          { value: "12", label: "Months Timeline" },
          { value: "500+", label: "Staff Trained" }
        ]
      },
      technologies: {
        title: "Technologies Used",
        tags: ["Cloud Infrastructure", "IoT Integration", "Data Analytics", "Mobile Applications", "API Development"]
      },
      overlay: {
        title: "Real-time Manufacturing Dashboard",
        description: "Live monitoring and analytics for production optimization"
      },
      actions: {
        primary: {
          text: "View All Projects",
          link: "/projects"
        },
        secondary: {
          text: "Read Full Case Study"
        }
      }
    },
    modalData: {
      title: 'Complete Digital Transformation for Manufacturing Excellence',
      category: 'Manufacturing',
      description: 'Comprehensive digital transformation project that improved operational efficiency by 40% and reduced operational costs by 60%. This project involved complete system overhaul, process automation, and extensive staff training across multiple departments.',
      highlights: [
        "40% improvement in operational efficiency",
        "60% reduction in operational costs",
        "Complete system integration and automation",
        "Comprehensive staff training program",
        "12-month implementation timeline"
      ]
    }
  },

  contact: {
    title: "Ready to Transform Your Business?",
    description: "Let's discuss how we can help you achieve your technology goals",
    actions: [
      {
        text: "Get Started Today",
        link: "/contact",
        type: "primary"
      },
      {
        text: "Learn More",
        link: "/projects",
        type: "outline"
      }
    ]
  },

  modalContents: {
    serviceModal: {
      defaultCategory: "Technology Service",
      actions: {
        primary: {
          text: "Reach Out",
          link: "/contact"
        },
        secondary: {
          text: "Close"
        }
      }
    },
    genericActions: {
      primary: {
        text: "Close"
      }
    }
  }
}
