import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

// Job Data
const jobsData = [
  {
    location: "India | Delhi NCR",
    title: "Associate- Environment",
    more: "Learn More"
  },
  {
    location: "India | Delhi NCR",
    title: "Associate- Social",
    more: "Learn More"
  },
  {
    location: "India | Delhi NCR",
    title: "Manager- Accounts & Ops",
    more: "Learn More"
  },
  {
    location: "India | Delhi NCR",
    title: "Associate- Human Resource",
    more: "Learn More"
  },
];

// Job Details Data
const jobDetailsData = [
  {
    title: "Associate- Environment",
    positions: "02",
    location: "Delhi NCR, India",
    about: `ESG Global Partners is hiring an Environment Associate to join our team in India. The successful candidate will work on a variety of technical projects and programs for Clients in diverse sectors, both within the country and internationally. This role will provide a platform to the candidate to engage with international consultants in sharing and developing best practices across the industry while gaining ongoing learning opportunities. This is an excellent career opportunity to work with a consulting firm in supporting diverse set of Clients with challenging business needs.`,
    duties: [
      "Assess regulatory compliance, perform regulatory applicability evaluations and implement environmental compliance management systems and processes.",
      "Perform fieldwork such as sampling, inspections, audits, compilation of field data, conduct interviews with site representatives and stakeholders.",
      "Able to write reports based on field visits and assessments under the guidance of senior team members.",
      "Collect, organize, review and analyze documents and datasets.",
      "Contribute towards drafting of working papers on environmental issues, policy, ecosystem services, sustainable development, etc.",
      "Support project teams with other tasks and management aspects as defined by the team",
      "Promote a culture of safety, collaboration and excellence."
    ],
    required: [
      "Bachelor’s/Master’s Degree in Environmental Science/Engineering or related discipline;",
      "0-7 years of professional experience in environmental permitting and compliance preferably in the areas of EIA/ESIA, Environmental Auditing, EHS Audits, Management Systems Design, Implementation, Regulatory Advisory etc."
    ],
    preferred: [
      "Demonstrated ability to manage multiple assignments while maintaining clear communication with clients and colleagues.",
      "Ability to multi-task, maintain flexibility, travel and work independently with minimal supervision.",
      "Ability to read, understand and apply environmental regulations and agency guidance documents.",
      "Strong analytical and computational skills to solve technical problems and implement effective solutions.",
      "Excellent written and verbal communication skills including technical writing experience.",
      "Strong self-management skills including time management and organisation.",
      "Strong MS Office computer skills with an advanced understanding of PowerPoint and Excel required.",
      "Ability to thrive in a fast paced consulting environment, handling multiple project assignments, meeting strict deadlines and travelling to Client’s Office as needed.",
      "Apply a collaborative approach and enjoy teaming with colleagues in different geographies.",
      "Positive and enthusiastic attitude, motivated to deliver outstanding client service and grow the business."
    ],
    apply: "Submit your updated CVs to hr@esggp.org."
  },
  {
    title: "Associate- Social",
    positions: "01",
    location: "Delhi NCR, India",
    about: `ESG Global Partners is hiring a Social Associate/ Social Consultant to join our team in India. The successful candidate will work on a variety of technical projects and programs for Clients in diverse sectors, both within the country and internationally. This role will provide a platform to the candidate to engage with international consultants in sharing and developing best practices across the industry while gaining ongoing learning opportunities. This is an excellent career opportunity to work with a consulting firm in supporting diverse set of Clients with challenging business needs.`,
    duties: [
      "Undertake socio-economic reviews, community engagement, CSR strategies development and implementation programs.",
      "Assist senior members of team in report writing and data analytics.",
      "Manage client’s grievances management systems and stakeholder engagement exercises.",
      "Perform fieldwork such as sampling, inspections, audits, compilation of field data, conduct interviews with site representatives and stakeholders.",
      "Able to write reports based on field visits and assessments under the guidance of senior team members.",
      "Collect, organize, review and analyze documents and datasets.",
      "Contribute towards drafting of working papers on social issues, policy, sustainable development, etc.",
      "Support project teams with other tasks and management aspects as defined by the team",
      "Promote a culture of safety, collaboration and excellence."
    ],
    required: [
      "Bachelor’s/Master’s Degree in Social Sciences, humanities or related discipline;",
      "0-5 years of professional experience in development projects.",
      "Experience in conducting surveys, communities engagement, managing stakeholders & their grievances.",
      "Fluency in English and Nepali is must."
    ],
    preferred: [
      "Demonstrated ability to manage multiple assignments while maintaining clear communication with clients and colleagues.",
      "Ability to multi-task, maintain flexibility, travel and work independently with minimal supervision.",
      "Ability to read, understand and apply guidance documents.",
      "Strong analytical and computational skills to solve technical problems and implement effective solutions.",
      "Excellent written and verbal communication skills including technical writing experience.",
      "Strong self-management skills including time management and organisation.",
      "Strong MS Office computer skills with an advanced understanding of PowerPoint and Excel required.",
      "Ability to thrive in a fast paced consulting environment, handling multiple project assignments, meeting strict deadlines and travelling to Client’s Office as needed.",
      "Apply a collaborative approach and enjoy teaming with colleagues in different geographies.",
      "Positive and enthusiastic attitude, motivated to deliver outstanding client service and grow the business."
    ],
    apply: "Submit your updated CVs to hr@esggp.org."
  },
  {
    title: "Manager- Accounts & Ops",
    positions: "01",
    location: "Delhi NCR, India",
    about: `ESG Global Partners is hiring a Manager for Accounts & Operations to join our team in Delhi NCR, India. The successful candidate will be responsible for cash management, record-keeping, and procurement. This role involves managing vendor payments, supporting the operations team, ensuring GST compliance, invoicing, and salary disbursement.`,
    duties: [
      "Responsible for Cash Management, Records and Procurement.",
      "Understanding team requirements based on day to day activities obtaining approval of daily budgets, Weekly and Monthly budgets and providing budget and funds of approved tasks.",
      "Vendor payments arrangement and ECS processing.",
      "Support operations team in the delivery of daily tasks.",
      "Books management ensuring costs and expenses are well recorded.",
      "GST compliance management, ensuring the returns are filed on time and GST inputs are recorded.",
      "Invoicing- ensure project invoices are raised as per the project milestone and track payment accordingly.",
      "Monthly reconciliation of cost and expenses, profit and loss, recording data in Tally ERP and submit the same to company appointed CA.",
      "Salaries and wages record management with HR executive insuring timely compliance are maintained and salaries disbursed.",
      "Ensuring end to end finance management support to the team."
    ],
    required: [
      "5 to 10 years in similar role.",
      "Experience in end-to-end operations management through finance and related tools.",
      "Good understanding of English writing and spoken.",
      "Experience in email communication, MS word and excel.",
      "Experience in P&L estimation, inventory audits, records management filing & archiving.",
      "GST filing and regulatory compliance.",
      "Accounting through Microsoft excel is a plus.",
      "Experience in use & records of Tally ERP."
    ],
    preferred: [],
    apply: "Submit your updated CVs to hr@esggp.org."
  },
  {
    title: "Associate- Human Resource",
    positions: "01",
    location: "Delhi NCR, India",
    about: `ESG Global Partners is hiring a Human Resource Associate to join our team in Delhi NCR, India. The successful candidate will manage day-to-day HR functions, develop HR policies, support management in hiring, assess employee training needs, implement grievance redressal mechanisms, and track employee progress.`,
    duties: [
      "To be well versed and take care of HR related day to day functions of the Organisation.",
      "Understanding and experience in developing HR policies and procedures and its implementation.",
      "Support Management team in hiring of personnel through effective sourcing, screening and interviewing techniques.",
      "Assess employees training needs and develop/coordinate learning materials from sources for employees of the organisation.",
      "Implement Grievance Redressal Mechanism and tracking of concerns/issues and its support in its satisfactory redressal.",
      "Support in tasks pertaining to employee mapping, employee functions and tracking employee upgradation/promotions."
    ],
    required: [
      "Proven 3 to 5 years of work experience in similar role as HR executive or HR Manager.",
      "Graduate in HR Management and related field.",
      "Good command (reading, writing and speaking) command of Nepali language.",
      "Knowledge and experience of developing Human Resource Management Systems and its implementation.",
      "Knowledge of Grievance Redressal Mechanism and its workflow.",
      "Knowledge of national and local labour regulations and its applicability.",
      "Demonstrable leadership skills, good communication skills including (English) writing skills and team player."
    ],
    preferred: [],
    apply: "Submit your updated CVs to hr@esggp.org."
  }
];

const Career = () => {
  return (
    <div className="font-helvetica">
      <div className="w-full h-screen relative">
        {/* Image Background */}
        <img src="career001.jpg" alt="Market Manufacturing" className="absolute top-0 left-0 w-full h-full object-cover" />
        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        {/* Heading and Subheading */}
        <div className="relative container mx-auto flex flex-col justify-end h-full px-5 py-10 text-white">
          <div className="mb-20">
            {/* Main Heading with Helvetica font */}
            <h1 className="text-3xl sm:text-6xl md:text-6xl font-medium-bold mb-6 font-helvetica">Careers</h1>
            {/* Subheading with Helvetica font */}
            <h2 className="w-[800px] text-lg sm:text-xl md:text-xl md:text-medium-bold font-helvetica">
              We believe our people are our assets. We love what we do, and if you share the same passion, you should get in touch with us. Apply to the open positions on this page or alternatively write to us <a href="mailto:hr@esggp.org" className=" text-[#00b0f0]">hr@esggp.org</a>. We will find ways to join hands!
            </h2>
          </div>
        </div>
      </div>
      {/* JOB's Card Section */}
      <div className="min-h-screen bg-gray-800 text-white flex flex-col items-center font-helvetica">
        {/* Main container */}
        <header className="text-center py-8 mt-10">
          {/* Header section */}
          <h1 className="text-4xl font-bold text-white font-helvetica">Come Join Us </h1>
          {/* Header title */}
        </header>
        <div className="w-full max-w-7xl p-8">
          {/* Wrapper div for custom scrollbar */}
          <SimpleBar style={{ maxHeight: 500 }}>
            {/* Custom Scrollbar */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Grid with 2 columns */}
              {jobsData.map((job, index) => (
                // Mapping through jobsData
                <div
                  key={index}
                  className="flex flex-col justify-between border-t-4 border-[#00a7ff] p-4 rounded-lg shadow-lg bg-white transform hover:scale-105 transition-transform duration-300 ease-in-out w-full sm:w-10/12 mx-auto"
                >
                  <div>
                    {/* Job location with Helvetica font */}
                    <p className="text-gray-600 font-medium mb-1 font-helvetica">{job.location}</p>
                    {/* Job title with Helvetica font */}
                    <h2 className="text-xl font-bold text-gray-900 mb-2 font-helvetica">{job.title}</h2>
                    {/* Job description with Helvetica font */}
                    <p className="text-gray-500 mb-3 font-helvetica">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac diam ac urna.</p>
                  </div>
                  {/* Learn More button with Helvetica font */}
                  <button className="mt-2 px-3 py-1 bg-gradient-to-r from-blue-200 to-[#00b0f0] hover:from-blue-600 hover:to-[#00b0f0] text-white rounded-lg self-start transition-colors duration-300 ease-in-out shadow-md hover:shadow-lg font-helvetica">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </SimpleBar>
        </div>
        {/* Job Details Section */}
        {jobDetailsData.map((jobDetail, index) => (
          <div key={index} className="w-full max-w-7xl p-8 bg-gray-900 text-white mt-10 rounded-lg shadow-lg">
            {/* Job Detail Title with Helvetica font */}
            <h2 className="text-3xl font-bold mb-4 font-helvetica">{jobDetail.title}</h2>
            {/* Number of Positions with Helvetica font */}
            <p className="text-lg mb-2 font-helvetica"><span className="font-semibold">No. of Positions:</span> {jobDetail.positions}</p>
            {/* Location with Helvetica font */}
            <p className="text-lg mb-2 font-helvetica"><span className="font-semibold">Location:</span> {jobDetail.location}</p>
            {/* About Section with Helvetica font */}
            <h3 className="text-2xl font-semibold mt-4 font-helvetica">About</h3>
            <p className="text-sm mb-4 font-helvetica">{jobDetail.about}</p>
            {/* Duties Section with Helvetica font */}
            <h3 className="text-2xl font-semibold mt-4 font-helvetica">Characteristic Duties and Responsibilities</h3>
            <ul className="list-disc ml-5 mb-4 text-sm font-helvetica">
              {jobDetail.duties.map((duty, i) => (
                <li key={i} className="transition-colors hover:text-blue-400 font-helvetica">{duty}</li>
              ))}
            </ul>
            {/* Required Experience & Qualifications Section with Helvetica font */}
            <h3 className="text-2xl font-semibold mt-4 font-helvetica">Required Experience & Qualifications</h3>
            <ul className="list-disc ml-5 mb-4 text-sm font-helvetica">
              {jobDetail.required.map((req, i) => (
                <li key={i} className="transition-colors hover:text-blue-400 font-helvetica">{req}</li>
              ))}
            </ul>
            {/* Preferred Experience & Qualifications Section with Helvetica font */}
            <h3 className="text-2xl font-semibold mt-4 font-helvetica">Preferred Experience & Qualifications</h3>
            <ul className="list-disc ml-5 mb-4 text-sm font-helvetica">
              {jobDetail.preferred.map((pref, i) => (
                <li key={i} className="transition-colors hover:text-blue-400 font-helvetica">{pref}</li>
              ))}
            </ul>
            {/* How to Apply Section with Helvetica font */}
            <h3 className="text-2xl font-semibold mt-4 font-helvetica">How to Apply</h3>
            <p className="text-lg mb-4 font-helvetica">Submit your updated CVs to <a href="mailto:hr@esggp.org" className=" text-[#00b0f0]">hr@esggp.org</a>.</p>
            <button className="mt-2 px-4 py-2 bg-gradient-to-r from-blue-200 to-[#00b0f0] hover:from-blue-600 hover:to-[#00b0f0] text-white rounded-lg transition-colors duration-300 ease-in-out shadow-md hover:shadow-lg font-helvetica">
              <a href="mailto:hr@esggp.org">Apply Now</a>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Career;
