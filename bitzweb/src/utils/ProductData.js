import AvailabilityImage from "../assets/images/stock/247Availability.jpg"
import TollfreeImage from "../assets/images/stock/Tollfree.jpg"
import MultilingualImage from "../assets/images/stock/Multilingual.jpg"
import ConfidentialityImage from "../assets/images/stock/Confidentiality.jpg"
import DocumentationImage from "../assets/images/stock/Documentation.jpg"
import FeedbackImage from "../assets/images/stock/Contact.jpg"
import AnalyticsImage from "../assets/images/stock/Analytics.jpg"
import ClientManagementImage from "../assets/images/stock/Client.jpg"
import CalendarImage from "../assets/images/stock/Calendar.jpg"
import ReportingImage from "../assets/images/stock/Reportsanalysis.jpg"
import ContactImage from "../assets/images/stock/Contact.jpg"
import IntegrationImage from "../assets/images/stock/Integration.jpg"
import AccessControlImage from "../assets/images/stock/SourceControl.jpg"
import SaccoAvailabilityImage from '../assets/images/stock/SaccoAvailability.jpg'
import MultichannelImage from '../assets/images/stock/multichannel.jpg'
import SaccoIntegrationImage from '../assets/images/stock/SeamlessIntegration.jpg'
export const productsData = [
  {
    id: 1,
    menu_name: "OPENCHS",
    menu_description: "Comprehensive Child Helpline System",
    title: "OPENCHS - Empowering Children's Safety",
    description:
      "Our Child Helpline System (OPENCHS) is a comprehensive and cutting-edge solution dedicated to safeguarding children's well-being. It provides a lifeline for children in need, connecting them with immediate support, guidance, and protection. With OPENCHS, we aim to create a world where every child's voice is heard and their safety is paramount.",
    Modules:"24/7 Availability,Toll-Free Hotline,Multilingual SUpport, Anonymity and COnfidentiality, Immediate Response, Analytics and Reporting , Crisis Intervention,Counselling and Emotional Support, Legal Guidance",
    imageURL: "https://picsum.photos/200/150?random=1",
  },
  {
    id: 2,
    menu_name: "Legal Case Management",
    menu_description: "Efficient Legal Case Workflow Management",
    title: "Legal Case Management - Streamline Your Legal Workflow",
    description:
      "Our Legal Case Management solution is designed to simplify and streamline your legal processes. It empowers legal professionals to efficiently manage cases, documents, and clients, ensuring a well-organized and productive legal practice. With our comprehensive legal case management system, you can focus on achieving favorable outcomes for your clients while optimizing your legal operations.",
    Modules:"Client and Case Information Management,Document Management,Calendar and Deadline Tracking, Workflow Automation,Time and Expense Tracking, Legal Research and Knowledge Management,Analytics and Reporting",
    imageURL: "https://picsum.photos/200/150?random=2",
  },
  {
    id: 3,
    menu_name: "Sacco Case Management",
    menu_description: "Optimized Sacco Operations Management",
    title: "Sacco Case Management - Elevate Your Sacco Efficiency",
    description:
      "Experience a new level of efficiency in managing your Sacco operations with our Sacco Case Management solution. It simplifies member management, loans, and savings, making Sacco operations accessible and profitable. Our aim is to empower Sacco organizations to serve their members effectively and enhance financial inclusion for all.",
    Modules:"Exceptional Membership Management, Multi-Channel Communication,Seamless Integration,Exceptional Member Engagement,24/7 Accessibility, Training and Support ",
    imageURL: "https://picsum.photos/200/150?random=3",
  },
];


export const productFeatures = [
  {
    id: 1,
    Product_id: 1, // This corresponds to OPENCHS
    Module: "call center",
    Feature: "24/7 Helpline Access",
    Description:
      "Provide round-the-clock access for survivors to report incidents and seek assistance, as violence can occur at any time..",
    imageUrl: AvailabilityImage,
  },
  {
    id: 2,
    Product_id: 1, // This corresponds to OPENCHS
    Module: "call center",
    Feature: "Toll-Free Hotline ",
    Description:
      "Provide a toll-free hotline for survivors to report incidents and seek assistance, as violence can occur at any time.",
    imageUrl: TollfreeImage,
  },
  {
    id: 3,
    Product_id: 1, // This corresponds to OPENCHS
    MOdule:"call center",
    Feature: "Multilingual Support",
    Description:
      "Offer support in multiple languages to cater to diverse communities.",
    
    imageUrl: MultilingualImage,
  },
  {
  id: 4, // This corresponds to OPENCHS
  Product_id:1,
  Module:"call center",
  Features:"Anonymity and Confidentiality",
  Description:"Provide a safe and secure environment for survivors to report incidents and seek assistance, as violence can occur at any time.",
  imageUrl: ConfidentialityImage,
  },
  {
    id: 5,
    Product_id: 1, // This corresponds to OPENCHS
    Features:"Documentation and Record Management",
    Description:"Keep detailed records of reported incidents to track trends, identify hotspots, and inform policy decisions.",
    imageURL: DocumentationImage,

  },
  {
    id: 6,
    Product_id: 1,
    Module:"call center", // This corresponds to OPENCHS
    Features:"Feedback and Complaint Management",
    Description:"Agents can create cases directly from calls, texts, and chat and immediately categorize the case for escalation and reporting.",
    imageURL:FeedbackImage,
  },
  {
    id: 7,
    Product_id: 1, // This corresponds to OPENCHS
    Module:"call center",
    Features:"Analytics and Reporting",
    Description:"Gain insights into the performance of your call center and identify areas for improvement.",
    imageURL:AnalyticsImage,
  },
  {
    id:1,
    Product_id: 2, // This corresponds to Legal Case Management
    Module:"Legal Case Management",
    Features:"Client and Case Information Management",
    Description:"Easily create, organize, and manage case files, including client information, documents, correspondence, and key dates.",
    imageURL:ClientManagementImage,
  },
  {
    id:2,
    Product_id: 2,
    Module:"Legal Case Management" ,
    Features:"Calendar and Docketing",
    Description:"Manage critical dates, deadlines, court appearances, and appointments with automated calendar and docketing features. Reminders and notifications are often included.",
    imageUrl:CalendarImage,// This corresponds to Legal Case Management
  },
  {
    id:3,
    Product_id: 2,
    Module:"Legal Case Management",
    Features:"Reporting and Analytics",
    Description:"Generate customized reports and analytics on case progress, billable hours, client activity, and other key performance indicators",
    imageUrl:ReportingImage,// This corresponds to Legal Case Management}
  },
  {
    id:4,
    Product_id: 2,
    MOdule:"Legal Case Management",
    Features:"Client and Contact Management",
    Description:"Maintain a centralized database of client and contact information, including contact details, communication history, and billing records.",
    imageURL:ContactImage,
  },
  {
    id:5,
    Product_id:2,
    Module:"Legal Case Management",
    Features:"Integration with Email and Communication Tools,",
    Description:"Integrate with existing email and communication tools to streamline case management workflows.",
    imageURL:IntegrationImage,
  },
  {
    id:6,
    Product_id:2,
    Module:"Legal Case Management",
    Features:"Secure Access Control",
    Description:"Protect sensitive data and ensure only authorized users have access to case information.Implement role-based access controls to restrict access to sensitive client data and documents.",
    imageURL:AccessControlImage,

  },
  {
    id:1,
    product_id:3,// This corresponds to Sacco Case Management
    Module:"Sacco Case Management",
    Features:"24/7 Availability",
    Description:"Ensure that members can reach the call center at any time, including outside regular business hours, to address urgent issues or inquiries.",
    imageURL:SaccoAvailabilityImage,
  },
  {
    id:2,
    product_id:3,
    Module:"Sacco Case Management",// This corresponds to Sacco Case Management
    Features:"Multichannel Access",
    description:"This feature allows members to reach the call center through multiple channels, including voice, text, and chat.",
    imageURL:MultichannelImage,
  },
  {
    id:3,
    product_id:3,
    Module:"Sacco Case Management",
    Features:"Seamless Integration",
    Description:"This feature allows the call center to seamlessly integrate with existing systems and workflows.",
    imageURL:SaccoIntegrationImage,
  }
  // ... (Other features for Sacco Case Management)
];
