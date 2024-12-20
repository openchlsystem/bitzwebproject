import AvailabilityImage from "../assets/images/stock/Contact us-pana.svg";
import Dashboard from "../assets/images/stock/Social Dashboard-pana.svg";
import QA from "../assets/images/stock/QA.svg";

import DocumentationImage from "../assets/images/stock/Documentation.jpg";

import AnalyticsImage from "../assets/images/stock/Investor presentation-cuate.svg";
// import ClientManagementImage from "../assets/images/stock/Client.jpg";
// import CalendarImage from "../assets/images/stock/Calendar.jpg";
// import ReportingImage from "../assets/images/stock/Reportsanalysis.jpg";
// import ContactImage from "../assets/images/stock/Contact.jpg";
// import IntegrationImage from "../assets/images/stock/Integration.jpg";
// import AccessControlImage from "../assets/images/stock/SourceControl.jpg";
import SaccoAvailabilityImage from "../assets/images/stock/SaccoAvailability.jpg";
import MultichannelImage from "../assets/images/stock/multichannel.png";
import SaccoIntegrationImage from "../assets/images/stock/SeamlessIntegration.jpg";
import Openchs from "../assets/images/Giphy/helplineGiphy.gif";
import LegalCaseManagement from "../assets/images/Giphy/LegalCMS.gif";
import SaccoCaseManagement from "../assets/images/Giphy/SaccoCMS.gif";
import Integration from "../assets/images/stock/SeamlessIntegration.jpg";
import AuthenticationImage from "../assets/images/stock/Authentification_Image.svg";
import CaseManagementImage from "../assets/images/stock/CaseManagement.svg";
import PartiesProfileImage from "../assets/images/stock/Case_Parties_Profiling.svg";
import CourtProfileImage from "../assets/images/stock/CourtProfileImage.svg";
import FilesMovementImage from "../assets/images/stock/FileMovement.jpg";
import LegalFeesImage from "../assets/images/stock/LegalFeeImage.jpg";
import ReportsImage from "../assets/images/stock/Report-amico.svg";

export const productsData = [
  {
    id: 1,
    menu_name: "OPENCHS",
    menu_description: "Comprehensive Child Helpline System",
    title: "OPENCHS - A Child Helpline System",
    description:
      "OPENCHS is a comprehensive child helpline system that provides a safe and confidential environment for children. It offers a range of services:",
    Modules:
      "24/7 Availability,Toll-Free Hotline,Multilingual Support, Anonymity and Confidentiality, Immediate Response, Analytics and Reporting, Crisis Intervention, Counselling and Emotional Support, Legal Guidance",
    imageUrl: Openchs,
    features: [
      {
        Module: "Call Management",
        Feature: "Inbound and Outbound Call Handling",
        Description:
          "Ability to manage both incoming and outgoing calls efficiently.",
        imageUrl: AvailabilityImage,
      },
      {
        Module: "Case Management",
        Feature: "Case Creation and Tracking",
        Description:
          "User-friendly interface for creating and managing cases, including detailed case information.",
        imageUrl: DocumentationImage,
      },
      {
        Module: "Quality Assurance",
        Feature: "Call and Case Evaluation",
        Description:
          "Tools for supervisors to evaluate the quality of calls and cases handled by agents.",
        imageUrl: QA,
      },
      {
        Module: "Reporting and Analytics",
        Feature: "Customizable Reports",
        Description: "Create custom reports tailored to specific metrics and KPIs.",
        imageUrl: AnalyticsImage,
      },
      {
        Module: "Dashboards",
        Feature: "Real-Time Dashboards",
        Description:
          "Real-time visual dashboards that provide a snapshot of call and case metrics.",
        imageUrl: Dashboard,
      },
      {
        Module: "3rd Party Integrations",
        Feature: "CRM Integration",
        Description:
          "Integration with Customer Relationship Management (CRM) software to access customer data and history.",
        imageUrl: Integration,
      },
    ],
  },
  {
    id: 2,
    menu_name: "Case Management - Legal",
    menu_description: "Efficient Legal Case Workflow Management",
    title: "Case Management - Legal",
    description:
      "Case Management - Legal is a comprehensive legal case management solution that simplifies and automates the entire lifecycle of legal cases.",
    Modules:
      "Client and Case Information Management, Document Management, Calendar and Deadline Tracking, Workflow Automation, Time and Expense Tracking, Legal Research and Knowledge Management, Analytics and Reporting",
    imageUrl: LegalCaseManagement,
    features: [
      {
        Module: "Legal Case Management",
        Feature: "Authentication & Authorization",
        Description:
          "Users are required to log in to the system using their unique credentials. The system has robust authentication and authorization features to ensure that only authorized users have access to the system and that they can only perform actions that they are authorized to perform.",
        imageUrl: AuthenticationImage,
      },
      {
        Module: "Legal Case Management",
        Feature: "Case Management & Profiling",
        Description:
          "The system allows users to create, manage, and view cases. Each case has a unique case number and is associated with a set of case-related data, such as the parties involved, the case status, and the court in which the case is being heard. The system also allows for the creation of case profiles that contain detailed information about the case and its history.",
        imageUrl: CaseManagementImage,
      },
      {
        Module: "Legal Case Management",
        Feature: "Case Parties Profiling",
        Description:
          "The system allows for the creation of profiles for advocates and magistrates involved in the cases. These profiles contain information such as their contact details, qualifications, and case history.",
        imageUrl: PartiesProfileImage,
      },
      {
        Module: "Legal Case Management",
        Feature: "Court Profile",
        Description:
          "The system allows for the creation of profiles for courts involved in the cases. These profiles contain information such as the court's location, jurisdiction, and case history.",
        imageUrl: CourtProfileImage,
      },
      {
        Module: "Legal Case Management",
        Feature: "Management Tracking of Files Movement",
        Description:
          "The system allows users to track the movement of case files within the court system. This feature provides real-time updates on the location of the case files and the status of the case.",
        imageUrl: FilesMovementImage,
      },
      {
        Module: "Legal Case Management",
        Feature: "Administration of Legal Fees",
        Description:
          "The system allows for the administration of legal fees for cases. This feature facilitates the calculation of legal fees for each case and provides the ability to generate invoices for the fees.",
        imageUrl: LegalFeesImage,
      },
      {
        Module: "Legal Case Management",
        Feature: "Reports",
        Description:
          "The system provides a set of predefined reports that can be generated based on user-specified criteria. The reports provide detailed information about cases, such as the status of cases, the number of cases pending, and the number of cases that have been closed. Additionally, the system allows users to create custom reports as well.",
        imageUrl: ReportsImage,
      },
    ],
  },
  {
    id: 3,
    menu_name: "Sacco Case Management",
    menu_description: "Optimized Sacco Operations Management",
    title: "CRM for SACCOS",
    description:
      "CRM for SACCOS is a comprehensive software platform that simplifies and automates the entire lifecycle of Sacco operations.",
    Modules:
      "Exceptional Membership Management, Multi-Channel Communication, Seamless Integration, Exceptional Member Engagement, 24/7 Accessibility, Training and Support",
    imageUrl: SaccoCaseManagement,
    features: [
      {
        Module: "Sacco Case Management",
        Feature: "24/7 Availability",
        Description:
          "Ensure that members can reach the call center at any time, including outside regular business hours, to address urgent issues or inquiries.",
        imageUrl: SaccoAvailabilityImage,
      },
      {
        Module: "Sacco Case Management",
        Feature: "Multichannel Access",
        Description:
          "This feature allows members to reach the call center through multiple channels, including voice, text, and chat.",
        imageUrl: MultichannelImage,
      },
      {
        Module: "Sacco Case Management",
        Feature: "Seamless Integration",
        Description:
          "This feature allows the call center to seamlessly integrate with existing systems and workflows.",
        imageUrl: SaccoIntegrationImage,
      },
    ],
  },
];
