import AvailabilityImage from "../assets/images/stock/Contact us-pana.svg";
import Dashboard from "../assets/images/stock/Social Dashboard-pana.svg";
import QA from "../assets/images/stock/QA.svg";

import DocumentationImage from "../assets/images/stock/Documentation.jpg";

import AnalyticsImage from "../assets/images/stock/Investor presentation-cuate.svg";
import ClientManagementImage from "../assets/images/stock/Client.jpg";
import CalendarImage from "../assets/images/stock/Calendar.jpg";
import ReportingImage from "../assets/images/stock/Reportsanalysis.jpg";
import ContactImage from "../assets/images/stock/Contact.jpg";
import IntegrationImage from "../assets/images/stock/Integration.jpg";
import AccessControlImage from "../assets/images/stock/SourceControl.jpg";
import SaccoAvailabilityImage from "../assets/images/stock/SaccoAvailability.jpg";
import MultichannelImage from "../assets/images/stock/multichannel.png";
import SaccoIntegrationImage from "../assets/images/stock/SeamlessIntegration.jpg";
import Openchs from "../assets/images/stock/Openchs.jpg";
import LegalCaseManagement from "../assets/images/stock/LegalCaseManagement.jpg";
import SaccoCaseManagement from "../assets/images/stock/SaccoCaseManagement.jpg";
import Integration from "../assets/images/stock/SeamlessIntegration.jpg"

export const productsData = [
  {
    id: 1,
    menu_name: "OPENCHS",
    menu_description: "Comprehensive Child Helpline System",
    title: "OPENCHS - Empowering Children's Safety",
    description:
      "Our Child Helpline System (OPENCHS) is a comprehensive and cutting-edge solution dedicated to safeguarding children's well-being. It provides a lifeline for children in need, connecting them with immediate support, guidance, and protection. With OPENCHS, we aim to create a world where every child's voice is heard and their safety is paramount.",
    Modules:
      "24/7 Availability,Toll-Free Hotline,Multilingual SUpport, Anonymity and COnfidentiality, Immediate Response, Analytics and Reporting , Crisis Intervention,Counselling and Emotional Support, Legal Guidance",
    imageUrl: Openchs,
  },
  {
    id: 2,
    menu_name: "Legal Case Management",
    menu_description: "Efficient Legal Case Workflow Management",
    title: "Legal Case Management - Streamline Your Legal Workflow",
    description:
      "Our Legal Case Management solution is designed to simplify and streamline your legal processes. It empowers legal professionals to efficiently manage cases, documents, and clients, ensuring a well-organized and productive legal practice. With our comprehensive legal case management system, you can focus on achieving favorable outcomes for your clients while optimizing your legal operations.",
    Modules:
      "Client and Case Information Management,Document Management,Calendar and Deadline Tracking, Workflow Automation,Time and Expense Tracking, Legal Research and Knowledge Management,Analytics and Reporting",
    imageUrl: LegalCaseManagement,
  },
  {
    id: 3,
    menu_name: "Sacco Case Management",
    menu_description: "Optimized Sacco Operations Management",
    title: "Sacco Case Management - Elevate Your Sacco Efficiency",
    description:
      "Experience a new level of efficiency in managing your Sacco operations with our Sacco Case Management solution. It simplifies member management, loans, and savings, making Sacco operations accessible and profitable. Our aim is to empower Sacco organizations to serve their members effectively and enhance financial inclusion for all.",
    Modules:
      "Exceptional Membership Management, Multi-Channel Communication,Seamless Integration,Exceptional Member Engagement,24/7 Accessibility, Training and Support ",
    imageUrl: SaccoCaseManagement,
  },
];

export const productFeatures = [
  { id: 1,
  Product_id: 1,
  Module: "Call Management",
  Feature: "Inbound and Outbound Call Handling",
  Description: "Ability to manage both incoming and outgoing calls efficiently.",
    imageUrl: AvailabilityImage,
  },
  {
    id: 2,
    Product_id: 1, // This corresponds to OPENCHS
    Module: "Case Management",
    Feature: "Case Creation and Tracking ",
    Description: "User-friendly interface for creating and managing cases, including detailed case information.",
    imageUrl:  DocumentationImage,
  },
  {
    id: 3,
    Product_id: 1, // This corresponds to OPENCHS
    Module: "Quality Assurance",
    Feature: "Call and Case Evaluation",
    Description: "Tools for supervisors to evaluate the quality of calls and cases handled by agents.",
    imageUrl: QA
    
  },
  {
    id: 4, // This corresponds to OPENCHS
    Product_id: 1,
    
    Module: "Reporting and Analytics",
    Feature: "Customizable Reports",
    Description: "Create custom reports tailored to specific metrics and KPIs.",
    imageUrl: AnalyticsImage,
  },
  {
    id: 5,
    Product_id: 1, // This corresponds to OPENCHS
    Module: "Dashboards",
    Feature: "Real-Time Dashboards",
    Description: "Real-time visual dashboards that provide a snapshot of call and case metrics.",
    imageUrl: Dashboard,
  },
  {
    id: 6,
    Product_id: 1,
    Module: "3rd Party Integrations",
    Feature: "CRM Integration",
    Description: "Integration with Customer Relationship Management (CRM) software to access customer data and history.",
    imageUrl: Integration,
  },
 
  {
    id: 1,
    Product_id: 2, // This corresponds to Legal Case Management
    Module: "Legal Case Management",
    Feature: "Client and Case Information Management",
    Description:
      "Easily create, organize, and manage case files, including client information, documents, correspondence, and key dates.",
    imageUrl: ClientManagementImage,
  },
  {
    id: 2,
    Product_id: 2,
    Module: "Legal Case Management",
    Feature: "Calendar and Docketing",
    Description:
      "Manage critical dates, deadlines, court appearances, and appointments with automated calendar and docketing Feature. Reminders and notifications are often included.",
    imageUrl: CalendarImage, // This corresponds to Legal Case Management
  },
  {
    id: 3,
    Product_id: 2,
    Module: "Legal Case Management",
    Feature: "Reporting and Analytics",
    Description:
      "Generate customized reports and analytics on case progress, billable hours, client activity, and other key performance indicators",
    imageUrl: ReportingImage, // This corresponds to Legal Case Management}
  },
  {
    id: 4,
    Product_id: 2,
    MOdule: "Legal Case Management",
    Feature: "Client and Contact Management",
    Description:
      "Maintain a centralized database of client and contact information, including contact details, communication history, and billing records.",
    imageUrl: ContactImage,
  },
  {
    id: 5,
    Product_id: 2,
    Module: "Legal Case Management",
    Feature: "Integration with Email and Communication Tools,",
    Description:
      "Integrate with existing email and communication tools to streamline case management workflows.",
    imageUrl: IntegrationImage,
  },
  {
    id: 6,
    Product_id: 2,
    Module: "Legal Case Management",
    Feature: "Secure Access Control",
    Description:
      "Protect sensitive data and ensure only authorized users have access to case information.Implement role-based access controls to restrict access to sensitive client data and documents.",
    imageUrl: AccessControlImage,
  },
  {
    id: 1,
    Product_id: 3, // This corresponds to Sacco Case Management
    Module: "Sacco Case Management",
    Feature: "24/7 Availability",
    Description:
      "Ensure that members can reach the call center at any time, including outside regular business hours, to address urgent issues or inquiries.",
    imageUrl: SaccoAvailabilityImage,
  },
  {
    id: 2,
    Product_id: 3,
    Module: "Sacco Case Management", // This corresponds to Sacco Case Management
    Feature: "Multichannel Access",
    description:
      "This feature allows members to reach the call center through multiple channels, including voice, text, and chat.",
    imageUrl: MultichannelImage,
  },
  {
    id: 3,
    Product_id: 3,
    Module: "Sacco Case Management",
    Feature: "Seamless Integration",
    Description:
      "This feature allows the call center to seamlessly integrate with existing systems and workflows.",
    imageUrl: SaccoIntegrationImage,
  },
  // ... (Other features for Sacco Case Management)
];
