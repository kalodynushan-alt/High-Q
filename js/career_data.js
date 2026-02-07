window.careerData = {
    domains: [
        {
            id: "pure-science",
            icon: "🔬",
            name: "Pure Science",
            description: "Explore careers in fundamental scientific disciplines that form the basis of our understanding of the natural world.",
            subdomains: [
                {
                    id: "physics",
                    name: "Physics",
                    description: "Study of matter, energy, and the interaction between them.",
                    careerOptions: ["Research Scientist", "Space Scientist", "Scientific Officer", "Professor", "Data Analyst", "Medical Physicist", "Astrophysicist", "Nuclear Scientist", "Optics Engineer"],
                    educationPath: {
                        undergraduate: { name: "B.Sc. Physics / Astrophysics / Integrated M.Sc. Physics", duration: "3-5 years", institutions: ["St. Stephen’s College, Delhi", "Loyola College, Chennai", "Hindu College, Delhi", "Fergusson College, Pune", "IISER Pune", "IISc Bangalore"] },
                        postgraduate: { name: "M.Sc. Physics / Astrophysics", duration: "2 years", institutions: ["IIT Bombay", "JNU Delhi", "BHU Varanasi", "University of Delhi", "IISER Pune", "TIFR Mumbai"] },
                        advanced: { name: "Ph.D. in Physics / Astrophysics", duration: "3-5 years", institutions: ["IISc Bangalore", "TIFR Mumbai", "IIT Delhi", "IISER Pune", "Indian Institute of Astrophysics, Bangalore"] }
                    }
                },
                {
                    id: "chemistry",
                    name: "Chemistry",
                    description: "Study of substances, their properties, structure, and the changes they undergo.",
                    careerOptions: ["Analytical Chemist", "Research Chemist", "Pharmacologist", "Chemical Scientist", "Forensic Expert", "Polymer Scientist", "Environmental Chemist", "Materials Scientist", "Biochemist"],
                    educationPath: {
                        undergraduate: { name: "B.Sc. Chemistry / Integrated M.Sc. Chemistry", duration: "3-5 years", institutions: ["St. Stephen’s College, Delhi", "Presidency College, Kolkata", "Christ University, Bangalore", "Loyola College, Chennai", "IISER Bhopal", "IISER Mohali"] },
                        postgraduate: { name: "M.Sc. Chemistry", duration: "2 years", institutions: ["IIT Madras", "JNU Delhi", "BHU Varanasi", "University of Delhi"] },
                        advanced: { name: "Ph.D. in Chemistry", duration: "3-5 years", institutions: ["IISc Bangalore", "TIFR Mumbai", "IIT Kanpur", "JNU Delhi"] }
                    }
                },
                {
                    id: "mathematics",
                    name: "Mathematics",
                    description: "Study of numbers, quantity, structure, space, and change.",
                    careerOptions: ["Mathematician", "Data Scientist", "Actuary", "Operations Research Analyst", "Quantitative Analyst", "Cryptographer", "Statistician"],
                    educationPath: {
                        undergraduate: { name: "B.Sc. Mathematics / Statistics", duration: "3-5 years", institutions: ["Hindu College, Delhi", "St. Stephen’s College, Delhi", "CMI", "ISI Kolkata", "IISER Pune"] },
                        postgraduate: { name: "M.Sc. Mathematics / Statistics", duration: "2 years", institutions: ["IIT Bombay", "JNU Delhi", "CMI", "ISI Kolkata"] },
                        advanced: { name: "Ph.D. in Mathematics / Statistics", duration: "3-5 years", institutions: ["TIFR Mumbai", "IIT Delhi", "ISI Bangalore", "CMI"] }
                    }
                },
                {
                    id: "biology",
                    name: "Biology",
                    description: "Study of living organisms, their interactions, and their environment.",
                    careerOptions: ["Biologist", "Microbiologist", "Biotechnologist", "Zoologist", "Botanist", "Environmental Scientist", "Geneticist"],
                    educationPath: {
                        undergraduate: { name: "B.Sc. Biology / Microbiology / Biotechnology", duration: "3-5 years", institutions: ["St. Xavier’s College, Mumbai", "Christ University, Bangalore", "Loyola College, Chennai", "IISER TVM"] },
                        postgraduate: { name: "M.Sc. Biology / Microbiology / Biotechnology", duration: "2 years", institutions: ["JNU Delhi", "BHU Varanasi", "University of Delhi", "IISER Pune"] },
                        advanced: { name: "Ph.D. in Biological Sciences", duration: "3-5 years", institutions: ["NCBS Bangalore", "IISc Bangalore", "TIFR Mumbai", "JNU Delhi"] }
                    }
                },
                {
                    id: "geology",
                    name: "Geology",
                    description: "Study of Earth's structure, composition, processes, and resource exploration.",
                    careerOptions: ["Geologist", "Environmental Consultant", "Mining Geologist", "Petroleum Geologist", "Geophysicist", "Seismologist"],
                    educationPath: {
                        undergraduate: { name: "B.Sc. Geology / Exploration Geophysics", duration: "3-4 years", institutions: ["Presidency College, Kolkata", "Fergusson College, Pune", "St. Xavier’s College, Mumbai"] },
                        postgraduate: { name: "M.Sc. Geology / Exploration Geophysics", duration: "2 years", institutions: ["IIT Kharagpur", "BHU Varanasi", "JNU Delhi"] },
                        advanced: { name: "Ph.D. in Geology / Exploration Geophysics", duration: "3-5 years", institutions: ["IIT Bombay", "IISc Bangalore", "JNU Delhi"] }
                    }
                },
                {
                    id: "interdisciplinary-sciences",
                    name: "Interdisciplinary Sciences",
                    description: "Integration of multiple scientific disciplines to address complex problems, including biochemistry, biomedical science, forensic science, and food science.",
                    careerOptions: ["Research Scientist", "Data Scientist", "Environmental Consultant", "Forensic Scientist", "Biomedical Scientist", "Food Scientist"],
                    educationPath: {
                        undergraduate: { name: "B.Sc. Biochemistry / Biomedical Science / Forensic Science / Food Science", duration: "3-5 years", institutions: ["St. Stephen’s College, Delhi", "Loyola College, Chennai", "Madras Christian College, Chennai"] },
                        postgraduate: { name: "M.Sc. Biochemistry / Biomedical Science / Forensic Science / Food Science", duration: "2 years", institutions: ["JNU Delhi", "BHU Varanasi", "University of Delhi"] },
                        advanced: { name: "Ph.D. in Biochemistry / Biomedical Science / Forensic Science", duration: "3-5 years", institutions: ["IISc Bangalore", "NCBS Bangalore", "TIFR Mumbai"] }
                    }
                }
            ]
        },
        {
            id: "engineering-technology",
            icon: "🔧",
            name: "Engineering & Technology",
            description: "Innovation, machines, coding, and design.",
            subdomains: [
                {
                    id: "mechanical",
                    name: "Mechanical Engineering",
                    description: "Machines, vehicles, and mechanical systems.",
                    careerOptions: ["Automotive Engineer", "Robotics Engineer", "Mechanical Design Engineer", "Manufacturing Engineer"],
                    educationPath: {
                        undergraduate: { name: "B.Tech / B.E. Mechanical", duration: "4 years", institutions: ["IIT Bombay", "NIT Calicut", "BITS Pilani", "VIT Vellore"] },
                        postgraduate: { name: "M.Tech Mechanical", duration: "2 years", institutions: ["IIT Madras", "IIT Delhi", "NIT Calicut"] },
                        advanced: { name: "Ph.D. Mechanical Engineering", duration: "3-5 years", institutions: ["IISc Bangalore", "IIT Bombay"] }
                    }
                },
                {
                    id: "computer-science",
                    name: "Computer Science / IT",
                    description: "Software, data, and computational systems.",
                    careerOptions: ["Software Developer", "Data Analyst", "Cybersecurity Specialist", "Cloud Architect"],
                    educationPath: {
                        undergraduate: { name: "B.Tech CS / BCA", duration: "3-4 years", institutions: ["IIT Bombay", "NIT Calicut", "IIIT Hyderabad", "BITS Pilani"] },
                        postgraduate: { name: "M.Tech CS / MCA", duration: "2 years", institutions: ["IIT Madras", "IIT Delhi", "NIT Calicut"] },
                        advanced: { name: "Ph.D. Computer Science", duration: "3-5 years", institutions: ["IISc Bangalore", "IIT Bombay", "IIIT Hyderabad"] }
                    }
                },
                {
                    id: "civil",
                    name: "Civil Engineering",
                    description: "Infrastructure, buildings, and construction.",
                    careerOptions: ["Site Engineer", "Structural Analyst", "Construction Manager"],
                    educationPath: {
                        undergraduate: { name: "B.Tech Civil", duration: "4 years", institutions: ["IIT Madras", "NIT Calicut", "GEC Thrissur"] },
                        postgraduate: { name: "M.Tech Civil", duration: "2 years", institutions: ["IIT Delhi", "IIT Bombay"] },
                        advanced: { name: "Ph.D. Civil Engineering", duration: "3-5 years", institutions: ["IISc Bangalore", "IIT Madras"] }
                    }
                },
                {
                    id: "electronics",
                    name: "Electronics & Communication",
                    description: "Electronic devices, signals, and communication.",
                    careerOptions: ["Embedded Systems Engineer", "Telecom Engineer", "VLSI Designer"],
                    educationPath: {
                        undergraduate: { name: "B.Tech ECE", duration: "4 years", institutions: ["IIT Bombay", "NIT Calicut", "BITS Pilani"] },
                        postgraduate: { name: "M.Tech ECE", duration: "2 years", institutions: ["IIT Madras", "IIT Delhi"] },
                        advanced: { name: "Ph.D. ECE", duration: "3-5 years", institutions: ["IISc Bangalore", "IIT Bombay"] }
                    }
                },
                {
                    id: "electrical",
                    name: "Electrical Engineering",
                    description: "Study of circuits, power systems, and electrical equipment.",
                    careerOptions: ["Power Engineer", "Control Systems Engineer", "Electrical Design Engineer", "Renewable Energy Specialist"],
                    educationPath: {
                        undergraduate: { name: "B.Tech / B.E. Electrical", duration: "4 years", institutions: ["IIT Delhi", "NIT Calicut", "IIST Thiruvananthapuram"] },
                        postgraduate: { name: "M.Tech Electrical", duration: "2 years", institutions: ["IIT Kanpur", "IIT Bombay"] },
                        advanced: { name: "Ph.D. Electrical Engineering", duration: "3-5 years", institutions: ["IISc Bangalore", "IIT Delhi"] }
                    }
                },
                {
                    id: "chemical",
                    name: "Chemical Engineering",
                    description: "Study of chemical processes and materials.",
                    careerOptions: ["Process Engineer", "R&D Chemist", "Petrochemical Engineer", "Environmental Engineer"],
                    educationPath: {
                        undergraduate: { name: "B.Tech Chemical", duration: "4 years", institutions: ["IIT Madras", "NIT Calicut", "VIT Vellore"] },
                        postgraduate: { name: "M.Tech Chemical", duration: "2 years", institutions: ["IIT Bombay", "IIT Delhi"] },
                        advanced: { name: "Ph.D. Chemical Engineering", duration: "3-5 years", institutions: ["IISc Bangalore", "IIT Madras"] }
                    }
                },
                {
                    id: "ai-robotics",
                    name: "AI / Robotics",
                    description: "Study of artificial intelligence, machine learning, and robotic systems.",
                    careerOptions: ["AI Engineer", "Robotics Expert", "Machine Learning Engineer"],
                    educationPath: {
                        undergraduate: { name: "B.Tech AI / Robotics", duration: "4 years", institutions: ["IIT Hyderabad", "IIIT Hyderabad", "NIT Calicut"] },
                        postgraduate: { name: "M.Tech AI / Robotics", duration: "2 years", institutions: ["IIT Madras", "IIT Delhi", "IIIT Bangalore"] },
                        advanced: { name: "Ph.D. AI / Robotics", duration: "3-5 years", institutions: ["IISc Bangalore", "IIT Bombay", "IIIT Hyderabad"] }
                    }
                },
                {
                    id: "design-technology",
                    name: "Design with Technology Focus",
                    description: "Study of design integrated with technology, focusing on user experience and product innovation.",
                    careerOptions: ["Product Designer", "UI/UX Designer", "Industrial Designer"],
                    educationPath: {
                        undergraduate: { name: "B.Des / B.Tech Design", duration: "4 years", institutions: ["NID Ahmedabad", "IIT Bombay", "VIT Vellore"] },
                        postgraduate: { name: "M.Des", duration: "2 years", institutions: ["NID Ahmedabad", "IIT Delhi"] },
                        advanced: { name: "Ph.D. Design", duration: "3-5 years", institutions: ["IIT Bombay", "NID Ahmedabad"] }
                    }
                },
                {
                    id: "iti-apprenticeship",
                    name: "ITI and Apprenticeship",
                    description: "Vocational training and apprenticeships leading to industry jobs.",
                    careerOptions: ["Technician", "Machinist", "Electrician", "Maintenance Engineer"],
                    educationPath: {
                        undergraduate: { name: "ITI Courses", duration: "1-2 years", institutions: ["Government ITIs"] },
                        postgraduate: { name: "Diploma", duration: "2-3 years", institutions: ["Polytechnics"] },
                        advanced: { name: "Lateral Entry to B.Tech", duration: "3 years", institutions: ["Engineering Colleges"] }
                    }
                }
            ]
        },
        {
            id: "medicine",
            icon: "🏥",
            name: "Medicine",
            description: "Healthcare, diagnosis, treatment, and research.",
            subdomains: [
                {
                    id: "mbbs",
                    name: "MBBS",
                    description: "Bachelor of Medicine and Bachelor of Surgery.",
                    careerOptions: ["Clinical Practitioner", "Medical Officer", "Research Scientist", "Surgeon"],
                    educationPath: {
                        undergraduate: { name: "MBBS", duration: "5.5 years", institutions: ["AIIMS New Delhi", "CMC Vellore", "JIPMER", "GMC Trivandrum"] },
                        postgraduate: { name: "MD/MS", duration: "3 years", institutions: ["AIIMS", "PGIMER", "CMC Vellore"] },
                        advanced: { name: "DM/MCh", duration: "2-5 years", institutions: ["AIIMS", "PGIMER", "SCTIMST"] }
                    }
                },
                {
                    id: "bds",
                    name: "BDS (Dental)",
                    description: "Dental surgery and oral health.",
                    careerOptions: ["Dentist", "Oral Surgeon", "Orthodontist"],
                    educationPath: {
                        undergraduate: { name: "BDS", duration: "5 years", institutions: ["Manipal College of Dental Sciences", "Maulana Azad Dental College"] },
                        postgraduate: { name: "MDS", duration: "3 years", institutions: ["Manipal", "AIIMS"] },
                        advanced: { name: "Ph.D. Dental Sciences", duration: "3-5 years", institutions: ["AIIMS", "Manipal"] }
                    }
                },
                {
                    id: "nursing",
                    name: "Nursing",
                    description: "Patient care and community health.",
                    careerOptions: ["Staff Nurse", "Specialty Nurse", "Nursing Superintendent"],
                    educationPath: {
                        undergraduate: { name: "B.Sc. Nursing", duration: "4 years", institutions: ["AIIMS", "CMC Vellore", "Manipal"] },
                        postgraduate: { name: "M.Sc. Nursing", duration: "2 years", institutions: ["AIIMS", "CMC Vellore"] },
                        advanced: { name: "Ph.D. Nursing", duration: "3-5 years", institutions: ["AIIMS", "Manipal"] }
                    }
                },
                {
                    id: "pharmacy",
                    name: "Pharmacy",
                    description: "Drug development and pharmaceutical care.",
                    careerOptions: ["Pharmacist", "Clinical Researcher", "Drug Inspector"],
                    educationPath: {
                        undergraduate: { name: "B.Pharm / PharmD", duration: "4-6 years", institutions: ["Manipal", "Jamia Hamdard", "BITS Pilani"] },
                        postgraduate: { name: "M.Pharm", duration: "2 years", institutions: ["NIPER", "Jamia Hamdard"] },
                        advanced: { name: "Ph.D. Pharmaceutical Sciences", duration: "3-5 years", institutions: ["NIPER", "Jamia Hamdard"] }
                    }
                },
                {
                    id: "allied_health_diploma",
                    name: "Diploma courses after Class 10th",
                    description: "Short-term diploma and certificate courses in healthcare fields.",
                    careerOptions: ["Nursing Assistant", "Medical Lab Technician", "Radiology Technician", "Operation Theatre Assistant"],
                    educationPath: {
                        afterClass10: { name: "Diploma/Certificate", duration: "1-3 years", institutions: ["Medical Colleges", "Hospitals"] }
                    }
                },
                {
                    id: "bams",
                    name: "BAMS (Ayurveda)",
                    description: "Bachelor of Ayurvedic Medicine and Surgery.",
                    careerOptions: ["Ayurvedic Practitioner", "Medical Officer", "Researcher"],
                    educationPath: {
                        undergraduate: { name: "BAMS", duration: "5.5 years", institutions: ["BHU Varanasi", "NIA Jaipur"] },
                        postgraduate: { name: "MD/MS Ayurveda", duration: "3 years", institutions: ["BHU", "NIA"] },
                        advanced: { name: "Ph.D. Ayurveda", duration: "3-5 years", institutions: ["BHU", "NIA"] }
                    }
                },
                {
                    id: "bhms",
                    name: "BHMS (Homeopathy)",
                    description: "Bachelor of Homeopathic Medicine and Surgery.",
                    careerOptions: ["Homeopath", "Medical Officer", "Researcher"],
                    educationPath: {
                        undergraduate: { name: "BHMS", duration: "5.5 years", institutions: ["NIH Kolkata", "Nehru Homeopathic College Delhi"] },
                        postgraduate: { name: "MD Homeopathy", duration: "3 years", institutions: ["NIH Kolkata"] },
                        advanced: { name: "Ph.D. Homeopathy", duration: "3-5 years", institutions: ["NIH Kolkata"] }
                    }
                },
                {
                    id: "bums",
                    name: "BUMS (Unani)",
                    description: "Bachelor of Unani Medicine and Surgery.",
                    careerOptions: ["Unani Practitioner", "Medical Officer", "Researcher"],
                    educationPath: {
                        undergraduate: { name: "BUMS", duration: "5.5 years", institutions: ["AMU Aligarh", "Jamia Hamdard"] },
                        postgraduate: { name: "MD Unani", duration: "3 years", institutions: ["AMU", "Jamia Hamdard"] },
                        advanced: { name: "Ph.D. Unani", duration: "3-5 years", institutions: ["Jamia Hamdard"] }
                    }
                },
                {
                    id: "physiotherapy",
                    name: "Physiotherapy",
                    description: "Physical therapy and rehabilitation.",
                    careerOptions: ["Physiotherapist", "Sports Physiotherapist", "Rehabilitation Specialist"],
                    educationPath: {
                        undergraduate: { name: "BPT", duration: "4.5 years", institutions: ["CMC Vellore", "Manipal", "Jamia Millia Islamia"] },
                        postgraduate: { name: "MPT", duration: "2 years", institutions: ["Manipal", "Jamia Millia Islamia"] },
                        advanced: { name: "Ph.D. Physiotherapy", duration: "3-5 years", institutions: ["Manipal"] }
                    }
                },
                {
                    id: "occupational-therapy",
                    name: "Occupational Therapy",
                    description: "Therapy to help people engage in everyday activities.",
                    careerOptions: ["Occupational Therapist", "Special Needs Therapist"],
                    educationPath: {
                        undergraduate: { name: "BOT", duration: "4.5 years", institutions: ["AIIMS Delhi", "Manipal"] },
                        postgraduate: { name: "MOT", duration: "2 years", institutions: ["AIIMS Delhi", "Manipal"] },
                        advanced: { name: "Ph.D. Occupational Therapy", duration: "3-5 years", institutions: ["Manipal"] }
                    }
                },
                {
                    id: "allied-health-sciences",
                    name: "Allied Health Sciences",
                    description: "Various health professions distinct from medicine and nursing.",
                    careerOptions: ["Medical Lab Technologist", "Radiographer", "Optometrist", "Cardiac Technologist"],
                    educationPath: {
                        undergraduate: { name: "B.Sc. MLT / MIT / Optometry", duration: "3-4 years", institutions: ["AIIMS", "CMC Vellore", "Manipal"] },
                        postgraduate: { name: "M.Sc. Allied Health", duration: "2 years", institutions: ["AIIMS", "Manipal"] },
                        advanced: { name: "Ph.D. Allied Health", duration: "3-5 years", institutions: ["AIIMS", "Manipal"] }
                    }
                },
                {
                    id: "public-health",
                    name: "Public Health",
                    description: "Science of protecting and improving the health of people and their communities.",
                    careerOptions: ["Epidemiologist", "Public Health Officer", "Health Administrator"],
                    educationPath: {
                        undergraduate: { name: "BPH (Bachelor of Public Health)", duration: "3-4 years", institutions: ["Manipal"] },
                        postgraduate: { name: "MPH", duration: "2 years", institutions: ["TISS", "AIIMS", "JNU"] },
                        advanced: { name: "Ph.D. Public Health", duration: "3-5 years", institutions: ["TISS", "AIIMS"] }
                    }
                },
                {
                    id: "research-medical-sciences",
                    name: "Research & Basic Medical Sciences",
                    description: "Career in medical research and basic sciences.",
                    careerOptions: ["Biomedical Scientist", "Research Fellow", "Academician"],
                    educationPath: {
                        undergraduate: { name: "B.Sc. Biomedical Science", duration: "3 years", institutions: ["Delhi University"] },
                        postgraduate: { name: "M.Sc. Medical Biochemistry / Microbiology", duration: "2 years", institutions: ["AIIMS", "JIPMER"] },
                        advanced: { name: "Ph.D.", duration: "3-5 years", institutions: ["AIIMS", "IISc", "NCBS"] }
                    }
                }
            ]
        },
        {
            id: "intl_licensing_paths",
            icon: "🌏",
            name: "International Licensing Exams",
            description: "Pathways for medical practice in USA, UK, Australia, etc.",
            subdomains: [
                {
                    id: "usmle",
                    name: "USMLE (USA)",
                    description: "United States Medical Licensing Examination.",
                    careerOptions: ["Medical Resident in USA", "Licensed Physician in USA"],
                    educationPath: {
                        undergraduate: { name: "MBBS", duration: "5.5 years", institutions: ["MCI/NMC Recognized Colleges"] },
                        postgraduate: { name: "USMLE Steps 1, 2, 3", duration: "Exam Process", institutions: ["ECFMG"] },
                        advanced: { name: "Residency Match", duration: "3-7 years", institutions: ["US Hospitals"] }
                    }
                },
                {
                    id: "plab",
                    name: "PLAB (UK)",
                    description: "Professional and Linguistic Assessments Board test.",
                    careerOptions: ["NHS Junior Doctor", "GP Trainee"],
                    educationPath: {
                        undergraduate: { name: "MBBS", duration: "5.5 years", institutions: ["MCI/NMC Recognized Colleges"] },
                        postgraduate: { name: "PLAB 1 & 2", duration: "Exam Process", institutions: ["GMC UK"] },
                        advanced: { name: "Foundation Programme / Specialty Training", duration: "2-8 years", institutions: ["NHS Hospitals"] }
                    }
                },
                {
                    id: "amc",
                    name: "AMC (Australia)",
                    description: "Australian Medical Council exams.",
                    careerOptions: ["Medical Officer in Australia", "GP in Australia"],
                    educationPath: {
                        undergraduate: { name: "MBBS", duration: "5.5 years", institutions: ["MCI/NMC Recognized Colleges"] },
                        postgraduate: { name: "AMC MCQ & Clinical", duration: "Exam Process", institutions: ["AMC"] },
                        advanced: { name: "Internship / Residency", duration: "1-4 years", institutions: ["Australian Hospitals"] }
                    }
                }
            ]
        },
        {
            id: "commerce-management",
            icon: "💰",
            name: "Commerce & Management",
            description: "Trade, finance, business, economics, and entrepreneurship.",
            subdomains: [
                {
                    id: "finance",
                    name: "Numbers & Finance",
                    description: "Financial analysis, accounting, and investment.",
                    careerOptions: ["Chartered Accountant", "Financial Analyst", "Investment Banker", "Tax Consultant", "Auditor", "Actuary", "Cost Accountant"],
                    educationPath: {
                        undergraduate: { name: "B.Com / BBA Finance / B.Com (Hons)", duration: "3 years", institutions: ["SRCC Delhi", "Christ University, Bangalore", "Loyola College, Chennai", "St. Xavier's, Mumbai", "NMIMS Mumbai"] },
                        postgraduate: { name: "M.Com / MBA Finance / CA / CFA", duration: "2-3 years", institutions: ["IIM Ahmedabad", "IIM Bangalore", "ICAI", "CFA Institute", "Delhi School of Economics"] },
                        advanced: { name: "Ph.D. in Finance / Fellowship", duration: "3-5 years", institutions: ["IIMs", "ISB Hyderabad", "FMS Delhi"] }
                    }
                },
                {
                    id: "business-leadership",
                    name: "Business & Leadership",
                    description: "Management, entrepreneurship, strategy, and operations.",
                    careerOptions: ["Business Manager", "Entrepreneur", "Marketing Manager", "HR Manager", "Operations Manager", "Supply Chain Manager", "Consultant"],
                    educationPath: {
                        undergraduate: { name: "BBA / BMS / IPM (Integrated Programme in Management)", duration: "3-5 years", institutions: ["IIM Indore (IPM)", "IIM Rohtak (IPM)", "Shaheed Sukhdev, Delhi", "Christ University", "NMIMS Mumbai"] },
                        postgraduate: { name: "MBA (Marketing/HR/Ops/Strategy)", duration: "2 years", institutions: ["IIM Ahmedabad", "IIM Bangalore", "IIM Calcutta", "XLRI Jamshedpur", "FMS Delhi", "SPJIMR Mumbai"] },
                        advanced: { name: "Ph.D. in Management / Executive MBA", duration: "1-5 years", institutions: ["IIMs", "ISB Hyderabad", "XLRI"] }
                    }
                },
                {
                    id: "law",
                    name: "Law",
                    description: "Legal systems, justice, corporate law, and advocacy.",
                    careerOptions: ["Corporate Lawyer", "Litigator", "Judge", "Legal Consultant", "Public Prosecutor", "Solicitor", "Legal Analyst"],
                    educationPath: {
                        undergraduate: { name: "BA LLB (Hons) / BBA LLB (Hons) - 5 Year Integrated", duration: "5 years", institutions: ["NLSIU Bangalore", "NALSAR Hyderabad", "NLU Delhi", "WBNUJS Kolkata", "NLU Jodhpur"] },
                        postgraduate: { name: "LLM (Master of Laws)", duration: "1 year", institutions: ["NLUs", "Delhi University", "Indian Law Institute"] },
                        advanced: { name: "Ph.D. in Law", duration: "3-5 years", institutions: ["NLUs", "Delhi University", "JNU Delhi"] }
                    }
                },
                {
                    id: "banking-insurance",
                    name: "Banking & Insurance",
                    description: "Banking operations, insurance underwriting, and risk management.",
                    careerOptions: ["Bank PO", "Insurance Underwriter", "Risk Manager", "Loan Officer", "Actuary"],
                    educationPath: {
                        undergraduate: { name: "B.Com / BBA (Banking & Insurance)", duration: "3 years", institutions: ["Symbiosis Pune", "Manipal University", "Amity University"] },
                        postgraduate: { name: "MBA (Banking & Insurance) / PGDM in Banking", duration: "2 years", institutions: ["NIBM Pune", "Manipal School of Banking", "NIA Pune"] },
                        advanced: { name: "Ph.D. / Fellowships", duration: "3-5 years", institutions: ["NIBM Pune", "University Departments"] }
                    }
                },
                {
                    id: "technology-commerce",
                    name: "Technology + Commerce",
                    description: "Intersection of business and technology, including fintech and business analytics.",
                    careerOptions: ["Business Analyst", "Fintech Specialist", "E-commerce Manager", "Product Manager"],
                    educationPath: {
                        undergraduate: { name: "B.Com (Computers) / BBA (Business Analytics)", duration: "3 years", institutions: ["Christ University", "Loyola Chennai", "Symbiosis Pune"] },
                        postgraduate: { name: "MBA (Business Analytics) / M.Sc. Data Science", duration: "2 years", institutions: ["IIM Bangalore", "IIM Calcutta", "ISB Hyderabad", "Great Lakes Chennai"] },
                        advanced: { name: "Ph.D. in Business Analytics", duration: "3-5 years", institutions: ["IIMs", "IITs (Management Dept)"] }
                    }
                },
                {
                    id: "emerging-careers",
                    name: "Emerging Careers",
                    description: "New and evolving roles in the business world.",
                    careerOptions: ["Sustainability Manager", "Social Entrepreneur", "Gig Economy Manager"],
                    educationPath: {
                        undergraduate: { name: "BBA (Entrepreneurship / Sustainability)", duration: "3 years", institutions: ["Azim Premji University", "TISS", "EDII Gandhinagar"] },
                        postgraduate: { name: "MBA (Sustainability / Social Entrepreneurship)", duration: "2 years", institutions: ["TISS Mumbai", "IIFM Bhopal", "XIMB Bhubaneswar"] },
                        advanced: { name: "Fellowship Programs", duration: "1-2 years", institutions: ["Various"] }
                    }
                }
            ]
        },
        {
            id: "social-science-humanities",
            icon: "👥",
            name: "Social Sciences & Humanities",
            description: "Society, culture, history, human behavior, and liberal arts.",
            subdomains: [
                {
                    id: "psychology",
                    name: "Psychology",
                    description: "Human behavior and mental processes.",
                    careerOptions: ["Clinical Psychologist", "Counselor", "Organizational Psychologist", "Industrial Psychologist", "Sports Psychologist", "Forensic Psychologist"],
                    educationPath: {
                        undergraduate: { name: "BA / B.Sc. Psychology", duration: "3 years", institutions: ["Lady Shri Ram College, Delhi", "TISS (Integrated)", "Christ University, Bangalore", "Fergusson College, Pune", "Ambedkar University, Delhi"] },
                        postgraduate: { name: "MA / M.Sc. Psychology (Clinical / Counseling / Industrial)", duration: "2 years", institutions: ["Delhi University", "TISS Mumbai", "NIMHANS Bangalore", "Tata Institute of Social Sciences"] },
                        advanced: { name: "M.Phil / Ph.D. in Clinical Psychology / Psychology", duration: "2-5 years", institutions: ["NIMHANS Bangalore", "CIP Ranchi", "IHBAS Delhi", "TISS Mumbai"] }
                    }
                },
                {
                    id: "economics",
                    name: "Economics",
                    description: "Production, distribution, and consumption of wealth.",
                    careerOptions: ["Economist", "Policy Analyst", "Data Analyst", "Risk Manager", "Development Economist", "Financial Consultant"],
                    educationPath: {
                        undergraduate: { name: "BA Economics (Hons)", duration: "3 years", institutions: ["SRCC Delhi", "St. Stephen's College, Delhi", "Presidency College, Kolkata", "Loyola College, Chennai", "Madras School of Economics"] },
                        postgraduate: { name: "MA / M.Sc. Economics", duration: "2 years", institutions: ["Delhi School of Economics", "JNU Delhi", "IGIDR Mumbai", "ISI Kolkata", "Madras School of Economics"] },
                        advanced: { name: "Ph.D. in Economics", duration: "3-5 years", institutions: ["Delhi School of Economics", "ISI Kolkata", "IIMs", "IGIDR Mumbai"] }
                    }
                },
                {
                    id: "civil-services",
                    name: "Civil Services",
                    description: "Public administration and governance.",
                    careerOptions: ["IAS Officer", "IPS Officer", "IFS Officer", "IRS Officer"],
                    educationPath: {
                        undergraduate: { name: "Bachelor's Degree in Any Discipline", duration: "3-4 years", institutions: ["Any Recognized University"] },
                        postgraduate: { name: "UPSC CSE Preparation", duration: "1-2 years", institutions: ["Self-study / Coaching Centers"] },
                        advanced: { name: "Training at LBSNAA / SVPNPA", duration: "1-2 years", institutions: ["LBSNAA Mussoorie", "SVPNPA Hyderabad"] }
                    }
                },
                {
                    id: "mass-comm",
                    name: "Journalism & Mass Comm",
                    description: "Media, communication, and storytelling.",
                    careerOptions: ["Journalist", "News Anchor", "Editor", "Public Relations Specialist", "Content Writer", "Digital Media Specialist"],
                    educationPath: {
                        undergraduate: { name: "BA Journalism / BJMC", duration: "3 years", institutions: ["Delhi College of Arts and Commerce", "Christ University", "Symbiosis Institute of Media & Communication, Pune", "Manipal Institute of Communication"] },
                        postgraduate: { name: "MA Mass Communication / PG Diploma in Journalism", duration: "1-2 years", institutions: ["IIMC New Delhi", "AJK MCRC Jamia Millia Islamia", "Asian College of Journalism, Chennai", "Symbiosis Pune"] },
                        advanced: { name: "Ph.D. in Media Studies", duration: "3-5 years", institutions: ["Jamia Millia Islamia", "JNU Delhi", "University of Hyderabad"] }
                    }
                },
                {
                    id: "social-sciences-general",
                    name: "Social Sciences (Sociology, Pol Science, History)",
                    description: "Study of society, politics, and history.",
                    careerOptions: ["Sociologist", "Political Analyst", "Historian", "Archivist", "Social Researcher"],
                    educationPath: {
                        undergraduate: { name: "BA (Hons) Sociology / Political Science / History", duration: "3 years", institutions: ["St. Stephen's Delhi", "Hindu College Delhi", "Presidency Kolkata", "JNU (Language courses)"] },
                        postgraduate: { name: "MA Sociology / Political Science / History", duration: "2 years", institutions: ["JNU Delhi", "Delhi University", "University of Hyderabad"] },
                        advanced: { name: "Ph.D.", duration: "3-5 years", institutions: ["JNU Delhi", "Delhi University", "TISS"] }
                    }
                },
                {
                    id: "humanities-programs",
                    name: "Humanities & Liberal Arts",
                    description: "Interdisciplinary study of humanities subjects.",
                    careerOptions: ["Writer", "Editor", "Curator", "Arts Manager"],
                    educationPath: {
                        undergraduate: { name: "BA Liberal Arts", duration: "3-4 years", institutions: ["Ashoka University", "Flame University", "Krea University", "Symbiosis Pune"] },
                        postgraduate: { name: "MA Liberal Arts / Humanities", duration: "2 years", institutions: ["IIT Madras (HSEE)", "Ashoka University"] },
                        advanced: { name: "Ph.D.", duration: "3-5 years", institutions: ["IITs (Humanities Dept)", "Ashoka University"] }
                    }
                },
                {
                    id: "social-work",
                    name: "Social Work",
                    description: "Professional social work and community development.",
                    careerOptions: ["Social Worker", "NGO Manager", "CSR Specialist"],
                    educationPath: {
                        undergraduate: { name: "BSW", duration: "3 years", institutions: ["TISS (Integrated)", "Rajagiri College of Social Sciences", "Madras School of Social Work"] },
                        postgraduate: { name: "MSW", duration: "2 years", institutions: ["TISS Mumbai", "Delhi School of Social Work", "Rajagiri College"] },
                        advanced: { name: "Ph.D. Social Work", duration: "3-5 years", institutions: ["TISS Mumbai", "Delhi University"] }
                    }
                },
                {
                    id: "arts-design-vocational",
                    name: "Arts, Design & Vocational",
                    description: "Creative arts, design, and vocational skills.",
                    careerOptions: ["Graphic Designer", "Fashion Designer", "Animator", "Interior Designer"],
                    educationPath: {
                        undergraduate: { name: "B.Des / BFA", duration: "4 years", institutions: ["NID", "NIFT", "College of Art Delhi", "JJ School of Art Mumbai"] },
                        postgraduate: { name: "M.Des / MFA", duration: "2 years", institutions: ["NID", "NIFT", "IDC IIT Bombay"] },
                        advanced: { name: "Ph.D.", duration: "3-5 years", institutions: ["IDC IIT Bombay", "NID"] }
                    }
                }
            ]
        },
        {
            id: "short-term-career-programs",
            icon: "💼",
            name: "Short-Term Career Programs",
            description: "Skill-based programs for quick entry into industries.",
            subdomains: [
                {
                    id: "digital-marketing",
                    name: "Digital Marketing",
                    description: "SEO, social media marketing, and content strategy.",
                    careerOptions: ["Digital Marketer", "SEO Specialist", "Social Media Manager", "Content Marketer", "PPC Specialist"],
                    educationPath: {
                        undergraduate: { name: "Certification (3-6 months)", duration: "3-6 months", institutions: ["Google Garage", "HubSpot Academy", "NIELIT", "Udemy", "Coursera"] },
                        postgraduate: { name: "Advanced Diploma in Digital Marketing", duration: "6-12 months", institutions: ["IIMs (Executive Programs)", "UpGrad", "Simplilearn", "Digital Vidya"] },
                        advanced: { name: "Specialized Workshops", duration: "Varies", institutions: ["Industry Experts"] }
                    }
                },
                {
                    id: "web-dev",
                    name: "Web Development",
                    description: "Building websites and web applications.",
                    careerOptions: ["Frontend Developer", "Backend Developer", "Full Stack Developer", "Web Designer", "UI Developer"],
                    educationPath: {
                        undergraduate: { name: "Bootcamps / Certifications", duration: "6 months", institutions: ["FreeCodeCamp", "Codecademy", "Udemy", "Coursera", "Brototype"] },
                        postgraduate: { name: "Advanced Full Stack Course", duration: "6-12 months", institutions: ["Scaler Academy", "Masai School", "Newton School", "UpGrad"] },
                        advanced: { name: "System Design Workshops", duration: "Varies", institutions: ["Various"] }
                    }
                },
                {
                    id: "data-science",
                    name: "Data Science & Analytics",
                    description: "Analyzing data to extract insights and drive decision making.",
                    careerOptions: ["Data Analyst", "Data Scientist", "Business Intelligence Analyst"],
                    educationPath: {
                        undergraduate: { name: "B.Sc. Data Science / Certifications", duration: "3 years / 6 months", institutions: ["IIT Madras (Online Degree)", "Coursera (IBM/Google certificates)"] },
                        postgraduate: { name: "M.Sc. Data Science / PG Diploma", duration: "1-2 years", institutions: ["IIIT Bangalore", "Great Lakes", "ISB"] },
                        advanced: { name: "-", duration: "-", institutions: ["-"] }
                    }
                },
                {
                    id: "graphic-design",
                    name: "Graphic Design & Multimedia",
                    description: "Visual communication using text, photography, and illustration.",
                    careerOptions: ["Graphic Designer", "Video Editor", "Motion Graphics Artist"],
                    educationPath: {
                        undergraduate: { name: "Diploma in Graphic Design", duration: "1 year", institutions: ["Arena Animation", "MAAC", "NID (Short courses)"] },
                        postgraduate: { name: "Advanced Diploma", duration: "1 year", institutions: ["NID", "Srishti"] },
                        advanced: { name: "-", duration: "-", institutions: ["-"] }
                    }
                },
                {
                    id: "logistics-supply-chain",
                    name: "Logistics & Supply Chain",
                    description: "Management of the flow of goods and services.",
                    careerOptions: ["Logistics Manager", "Supply Chain Analyst", "Inventory Manager"],
                    educationPath: {
                        undergraduate: { name: "Diploma in Logistics", duration: "6-12 months", institutions: ["CII Institute of Logistics", "Safexpress"] },
                        postgraduate: { name: "PG Diploma in Supply Chain", duration: "1 year", institutions: ["IIMM", "Symbiosis (Distance)"] },
                        advanced: { name: "-", duration: "-", institutions: ["-"] }
                    }
                }
            ]
        },
        {
            id: "islamic-studies",
            icon: "🕌",
            name: "Islamic Studies",
            description: "Programs combining Islamic scholarship with modern education.",
            subdomains: [
                {
                    id: "al-azhar",
                    name: "Al-Azhar University (Egypt)",
                    description: "Global leader in Sunni Islamic scholarship.",
                    careerOptions: ["Islamic Scholar", "Mufti", "Academic", "Medical/Engineering Professional (with Islamic background)"],
                    educationPath: {
                        undergraduate: { name: "Theology / Sharia / Medicine / Engineering", duration: "4-6 years", institutions: ["Al-Azhar University, Cairo"] },
                        postgraduate: { name: "Master’s in Islamic Studies / Secular Fields", duration: "2-3 years", institutions: ["Al-Azhar University"] },
                        advanced: { name: "Ph.D.", duration: "3-5 years", institutions: ["Al-Azhar University"] }
                    }
                },
                {
                    id: "iium",
                    name: "IIUM (Malaysia)",
                    description: "International Islamic University Malaysia.",
                    careerOptions: ["Islamic Banker", "Lawyer", "Educator", "Engineer"],
                    educationPath: {
                        undergraduate: { name: "Islamic Revealed Knowledge / Law / Engineering", duration: "4 years", institutions: ["IIUM Kuala Lumpur"] },
                        postgraduate: { name: "Master’s", duration: "2 years", institutions: ["IIUM"] },
                        advanced: { name: "Ph.D.", duration: "3-5 years", institutions: ["IIUM"] }
                    }
                },
                {
                    id: "madinah-university",
                    name: "Islamic University of Madinah",
                    description: "Prestigious university in Saudi Arabia focusing on Islamic sciences.",
                    careerOptions: ["Islamic Scholar", "Da'ee (Preacher)", "Academic"],
                    educationPath: {
                        undergraduate: { name: "BA in Sharia / Quran / Hadith", duration: "4 years", institutions: ["Islamic University of Madinah"] },
                        postgraduate: { name: "MA", duration: "2-3 years", institutions: ["Islamic University of Madinah"] },
                        advanced: { name: "Ph.D.", duration: "3-5 years", institutions: ["Islamic University of Madinah"] }
                    }
                },
                {
                    id: "darul-uloom",
                    name: "Darul Uloom Deoband / Nadwa",
                    description: "Traditional Islamic seminaries in India.",
                    careerOptions: ["Imam", "Teacher", "Mufti", "Writer"],
                    educationPath: {
                        undergraduate: { name: "Alim Course", duration: "5-6 years", institutions: ["Darul Uloom Deoband", "Nadwatul Ulama Lucknow"] },
                        postgraduate: { name: "Fazil / Ifta", duration: "2 years", institutions: ["Deoband", "Nadwa"] },
                        advanced: { name: "-", duration: "-", institutions: ["-"] }
                    }
                }
            ]
        },
        {
            id: "competitive-exams-science",
            icon: "🏆",
            name: "Competitive Exams (Science)",
            description: "Competitive exams including Engineering, Medical, and other professional courses.",
            subdomains: [
                {
                    id: "engineering-entrance-exams",
                    name: "Engineering Entrance Exams",
                    description: "Exams for admission to undergraduate engineering programs in IITs, NITs, and other institutes.",
                    careerOptions: ["Engineer", "Research Scientist", "Technical Consultant", "PSU Officer"],
                    educationPath: {
                        undergraduate: { name: "JEE Main, JEE Advanced, BITSAT, VITEEE, GATE", duration: "Exam", institutions: ["National Testing Agency (JEE Main)", "IITs (JEE Advanced, GATE)", "BITS Pilani (BITSAT)", "VIT Vellore (VITEEE)"] },
                        postgraduate: { name: "Further Competitive Exams (e.g., GATE for M.Tech)", duration: "1 day", institutions: ["IITs", "IISc Bangalore"] },
                        advanced: { name: "Specialized Certifications / Industry Entrance Tests", duration: "Varies", institutions: ["Various Technical Boards"] }
                    }
                },
                {
                    id: "medical-entrance-exams",
                    name: "Medical Entrance Exams",
                    description: "Exams for MBBS, BDS, and postgraduate medical courses.",
                    careerOptions: ["Doctor", "Surgeon", "Medical Researcher", "Dentist"],
                    educationPath: {
                        undergraduate: { name: "NEET UG, NEET PG", duration: "Exam", institutions: ["National Testing Agency"] },
                        postgraduate: { name: "Further Medical Entrance Exams (e.g., NEET PG)", duration: "Exam", institutions: ["National Testing Agency"] },
                        advanced: { name: "Specialized Medical Certifications", duration: "Varies", institutions: ["Medical Council of India"] }
                    }
                },
                {
                    id: "law-entrance-exams",
                    name: "Law Entrance Exams",
                    description: "Exams for undergraduate and postgraduate law programs at NLUs and other law schools.",
                    careerOptions: ["Lawyer", "Judge", "Legal Consultant", "Corporate Counsel"],
                    educationPath: {
                        undergraduate: { name: "CLAT, AILET, LSAT India, Delhi University LLB Entrance Exam", duration: "Exam", institutions: ["Consortium of NLUs (CLAT)", "NLU Delhi (AILET)", "Pearson VUE (LSAT India)", "University of Delhi"] },
                        postgraduate: { name: "Further Law Entrance Exams (e.g., CLAT PG)", duration: "1 day", institutions: ["Consortium of NLUs"] },
                        advanced: { name: "Specialized Legal Certifications", duration: "Varies", institutions: ["Bar Council of India"] }
                    }
                },
                {
                    id: "management-entrance-exams",
                    name: "Management Entrance Exams",
                    description: "Exams for MBA and PGDM programs at IIMs and other B-schools.",
                    careerOptions: ["Business Manager", "Consultant", "Entrepreneur", "Financial Analyst"],
                    educationPath: {
                        undergraduate: { name: "CAT, CMAT, IIFT, XAT", duration: "Exam", institutions: ["IIMs (CAT)", "National Testing Agency (CMAT)", "IIFT (IIFT)", "XLRI Jamshedpur (XAT)"] },
                        postgraduate: { name: "Further Management Entrance Exams", duration: "1 day", institutions: ["IIMs", "AICTE"] },
                        advanced: { name: "Executive MBA / Specialized Certifications", duration: "Varies", institutions: ["IIMs", "Private B-Schools"] }
                    }
                },
                {
                    id: "civil-services-government-jobs",
                    name: "Civil Services and Government Jobs",
                    description: "Exams for IAS, IPS, banking, and other government roles.",
                    careerOptions: ["Civil Servant", "Bank Officer", "Government Auditor", "Policy Analyst"],
                    educationPath: {
                        undergraduate: { name: "UPSC CSE, UPSC IES/ISS, UPSC ESE, SSC CGL, SSC CHSL, IBPS PO/Clerk, SBI PO/Clerk, RBI Grade B, NABARD Grade A/B, FCI", duration: "Exam", institutions: ["UPSC", "Staff Selection Commission", "Institute of Banking Personnel Selection", "State Bank of India", "Reserve Bank of India", "NABARD"] },
                        postgraduate: { name: "Further Government Recruitment Exams", duration: "1-2 days", institutions: ["UPSC", "SSC"] },
                        advanced: { name: "Departmental Promotions / Certifications", duration: "Varies", institutions: ["Government of India"] }
                    }
                },
                {
                    id: "defense-paramilitary",
                    name: "Defense and Paramilitary",
                    description: "Exams for officer roles in Army, Navy, Air Force, and paramilitary forces.",
                    careerOptions: ["Army Officer", "Navy Officer", "Air Force Pilot", "Paramilitary Officer"],
                    educationPath: {
                        undergraduate: { name: "UPSC CDS, UPSC NDA, AFCAT, CAPF AC", duration: "Exam", institutions: ["UPSC", "Indian Air Force"] },
                        postgraduate: { name: "Further Defense Recruitment Exams", duration: "1-2 days", institutions: ["UPSC"] },
                        advanced: { name: "Specialized Defense Certifications", duration: "Varies", institutions: ["Ministry of Defence"] }
                    }
                },
                {
                    id: "teaching-research",
                    name: "Teaching and Research",
                    description: "Exams for teaching positions and research fellowships.",
                    careerOptions: ["Professor", "School Teacher", "Researcher", "Academic Advisor"],
                    educationPath: {
                        undergraduate: { name: "UGC NET, CTET, NTSE, KVPY", duration: "Exam", institutions: ["National Testing Agency (UGC NET, CTET)", "NCERT (NTSE)", "IISc Bangalore (KVPY)"] },
                        postgraduate: { name: "Further Teaching/Research Exams", duration: "1 day", institutions: ["NTA", "NCERT"] },
                        advanced: { name: "Research Fellowships / Certifications", duration: "Varies", institutions: ["UGC", "CSIR"] }
                    }
                },
                {
                    id: "design-architecture",
                    name: "Design and Architecture",
                    description: "Exams for architecture and design programs.",
                    careerOptions: ["Architect", "Fashion Designer", "Product Designer", "Interior Designer"],
                    educationPath: {
                        undergraduate: { name: "NATA, NIFT, NID DAT", duration: "Exam", institutions: ["Council of Architecture (NATA)", "National Institute of Fashion Technology (NIFT)", "National Institute of Design (NID)"] },
                        postgraduate: { name: "Further Design/Architecture Exams", duration: "1 day", institutions: ["NIFT", "NID"] },
                        advanced: { name: "Specialized Design Certifications", duration: "Varies", institutions: ["NIFT", "NID"] }
                    }
                },
                {
                    id: "professional-scholarship-exams",
                    name: "Professional & Scholarship Exams",
                    description: "Exams for professional qualifications (e.g., CA) and scholarships.",
                    careerOptions: ["Chartered Accountant", "Hotel Manager", "Film Director", "Scholar"],
                    educationPath: {
                        undergraduate: { name: "CA Foundation, CUET, NCHM JEE, FTII JET, Olympiads, NMMSS", duration: "Exam", institutions: ["ICAI", "National Testing Agency", "NCHM", "FTII", "Various Boards"] },
                        postgraduate: { name: "Further Professional Exams", duration: "Exam", institutions: ["ICAI", "NTA"] },
                        advanced: { name: "Advanced Professional Certifications", duration: "Varies", institutions: ["ICAI", "Various Boards"] }
                    }
                },
                {
                    id: "international-language-exams",
                    name: "International & Language Proficiency",
                    description: "Exams for study abroad and English proficiency.",
                    careerOptions: ["International Student", "Academic Researcher", "Professional Abroad"],
                    educationPath: {
                        undergraduate: { name: "SAT, GRE, TOEFL, IELTS", duration: "Exam", institutions: ["College Board", "ETS", "British Council/IDP"] },
                        postgraduate: { name: "Further International Exams", duration: "Exam", institutions: ["ETS", "College Board"] },
                        advanced: { name: "Specialized Language Certifications", duration: "Varies", institutions: ["ETS", "British Council"] }
                    }
                }
            ]
        },
        {
            id: "competitive-exams-general",
            icon: "🏆",
            name: "Competitive Exams (General)",
            description: "Competitive exams for Law, Management, Civil Services, and other professional courses.",
            subdomains: [
                {
                    id: "law-entrance-exams",
                    name: "Law Entrance Exams",
                    description: "Exams for undergraduate and postgraduate law programs at NLUs and other law schools.",
                    careerOptions: ["Lawyer", "Judge", "Legal Consultant", "Corporate Counsel"],
                    educationPath: {
                        undergraduate: { name: "CLAT, AILET, LSAT India, Delhi University LLB Entrance Exam", duration: "Exam", institutions: ["Consortium of NLUs (CLAT)", "NLU Delhi (AILET)", "Pearson VUE (LSAT India)", "University of Delhi"] },
                        postgraduate: { name: "Further Law Entrance Exams (e.g., CLAT PG)", duration: "1 day", institutions: ["Consortium of NLUs"] },
                        advanced: { name: "Specialized Legal Certifications", duration: "Varies", institutions: ["Bar Council of India"] }
                    }
                },
                {
                    id: "management-entrance-exams",
                    name: "Management Entrance Exams",
                    description: "Exams for MBA and PGDM programs at IIMs and other B-schools.",
                    careerOptions: ["Business Manager", "Consultant", "Entrepreneur", "Financial Analyst"],
                    educationPath: {
                        undergraduate: { name: "CAT, CMAT, IIFT, XAT", duration: "Exam", institutions: ["IIMs (CAT)", "National Testing Agency (CMAT)", "IIFT (IIFT)", "XLRI Jamshedpur (XAT)"] },
                        postgraduate: { name: "Further Management Entrance Exams", duration: "1 day", institutions: ["IIMs", "AICTE"] },
                        advanced: { name: "Executive MBA / Specialized Certifications", duration: "Varies", institutions: ["IIMs", "Private B-Schools"] }
                    }
                },
                {
                    id: "civil-services-government-jobs",
                    name: "Civil Services and Government Jobs",
                    description: "Exams for IAS, IPS, banking, and other government roles.",
                    careerOptions: ["Civil Servant", "Bank Officer", "Government Auditor", "Policy Analyst"],
                    educationPath: {
                        undergraduate: { name: "UPSC CSE, UPSC IES/ISS, UPSC ESE, SSC CGL, SSC CHSL, IBPS PO/Clerk, SBI PO/Clerk, RBI Grade B, NABARD Grade A/B, FCI", duration: "Exam", institutions: ["UPSC", "Staff Selection Commission", "Institute of Banking Personnel Selection", "State Bank of India", "Reserve Bank of India", "NABARD"] },
                        postgraduate: { name: "Further Government Recruitment Exams", duration: "1-2 days", institutions: ["UPSC", "SSC"] },
                        advanced: { name: "Departmental Promotions / Certifications", duration: "Varies", institutions: ["Government of India"] }
                    }
                },
                {
                    id: "defense-paramilitary",
                    name: "Defense and Paramilitary",
                    description: "Exams for officer roles in Army, Navy, Air Force, and paramilitary forces.",
                    careerOptions: ["Army Officer", "Navy Officer", "Air Force Pilot", "Paramilitary Officer"],
                    educationPath: {
                        undergraduate: { name: "UPSC CDS, UPSC NDA, AFCAT, CAPF AC", duration: "Exam", institutions: ["UPSC", "Indian Air Force"] },
                        postgraduate: { name: "Further Defense Recruitment Exams", duration: "1-2 days", institutions: ["UPSC"] },
                        advanced: { name: "Specialized Defense Certifications", duration: "Varies", institutions: ["Ministry of Defence"] }
                    }
                },
                {
                    id: "teaching-research",
                    name: "Teaching and Research",
                    description: "Exams for teaching positions and research fellowships.",
                    careerOptions: ["Professor", "School Teacher", "Researcher", "Academic Advisor"],
                    educationPath: {
                        undergraduate: { name: "UGC NET, CTET, NTSE, KVPY", duration: "Exam", institutions: ["National Testing Agency (UGC NET, CTET)", "NCERT (NTSE)", "IISc Bangalore (KVPY)"] },
                        postgraduate: { name: "Further Teaching/Research Exams", duration: "1 day", institutions: ["NTA", "NCERT"] },
                        advanced: { name: "Research Fellowships / Certifications", duration: "Varies", institutions: ["UGC", "CSIR"] }
                    }
                },
                {
                    id: "design-architecture",
                    name: "Design and Architecture",
                    description: "Exams for architecture and design programs.",
                    careerOptions: ["Architect", "Fashion Designer", "Product Designer", "Interior Designer"],
                    educationPath: {
                        undergraduate: { name: "NATA, NIFT, NID DAT", duration: "Exam", institutions: ["Council of Architecture (NATA)", "National Institute of Fashion Technology (NIFT)", "National Institute of Design (NID)"] },
                        postgraduate: { name: "Further Design/Architecture Exams", duration: "1 day", institutions: ["NIFT", "NID"] },
                        advanced: { name: "Specialized Design Certifications", duration: "Varies", institutions: ["NIFT", "NID"] }
                    }
                },
                {
                    id: "professional-scholarship-exams",
                    name: "Professional & Scholarship Exams",
                    description: "Exams for professional qualifications (e.g., CA) and scholarships.",
                    careerOptions: ["Chartered Accountant", "Hotel Manager", "Film Director", "Scholar"],
                    educationPath: {
                        undergraduate: { name: "CA Foundation, CUET, NCHM JEE, FTII JET, Olympiads, NMMSS", duration: "Exam", institutions: ["ICAI", "National Testing Agency", "NCHM", "FTII", "Various Boards"] },
                        postgraduate: { name: "Further Professional Exams", duration: "Exam", institutions: ["ICAI", "NTA"] },
                        advanced: { name: "Advanced Professional Certifications", duration: "Varies", institutions: ["ICAI", "Various Boards"] }
                    }
                },
                {
                    id: "international-language-exams",
                    name: "International & Language Proficiency",
                    description: "Exams for study abroad and English proficiency.",
                    careerOptions: ["International Student", "Academic Researcher", "Professional Abroad"],
                    educationPath: {
                        undergraduate: { name: "SAT, GRE, TOEFL, IELTS", duration: "Exam", institutions: ["College Board", "ETS", "British Council/IDP"] },
                        postgraduate: { name: "Further International Exams", duration: "Exam", institutions: ["ETS", "College Board"] },
                        advanced: { name: "Specialized Language Certifications", duration: "Varies", institutions: ["ETS", "British Council"] }
                    }
                }
            ]
        },
        {
            id: "education",
            icon: "🏫",
            name: "Education",
            description: "Teaching and educational administration.",
            subdomains: [
                {
                    id: "teacher-training",
                    name: "Teacher Education",
                    description: "Training to become a qualified educator.",
                    careerOptions: ["School Teacher", "Professor", "Education Administrator", "Special Educator"],
                    educationPath: {
                        undergraduate: { name: "B.Ed / D.El.Ed / B.El.Ed", duration: "2-4 years", institutions: ["Regional Institutes of Education (NCERT)", "Government Training Colleges", "Delhi University"] },
                        postgraduate: { name: "M.Ed / MA Education", duration: "2 years", institutions: ["Universities", "TISS", "Azim Premji University"] },
                        advanced: { name: "Ph.D. Education / UGC NET", duration: "3-5 years", institutions: ["Universities", "UGC"] }
                    }
                }
            ]
        },
        {
            id: "vocational",
            icon: "🛠️",
            name: "Vocational & Technical",
            description: "Skill-based technical education.",
            subdomains: [
                {
                    id: "polytechnic",
                    name: "Polytechnic (Diploma)",
                    description: "3-year engineering diploma courses.",
                    careerOptions: ["Junior Engineer", "Technical Supervisor", "Draftsman"],
                    educationPath: {
                        undergraduate: { name: "Diploma in Engineering (Civil, Mech, Elec, CS, etc.)", duration: "3 years", institutions: ["Government Polytechnics", "Self-financing Polytechnics"] },
                        postgraduate: { name: "B.Tech (Lateral Entry)", duration: "3 years", institutions: ["Engineering Colleges"] },
                        advanced: { name: "-", duration: "-", institutions: ["-"] }
                    }
                },
                {
                    id: "iti",
                    name: "ITI (Industrial Training)",
                    description: "Skill training for trades.",
                    careerOptions: ["Technician", "Mechanic", "Electrician", "Fitter"],
                    educationPath: {
                        undergraduate: { name: "ITI Trade Certificate (Fitter, Electrician, COPA, etc.)", duration: "1-2 years", institutions: ["Government ITIs", "Private ITIs"] },
                        postgraduate: { name: "Apprenticeship / Polytechnic (Lateral)", duration: "1-2 years", institutions: ["Industry / Polytechnics"] },
                        advanced: { name: "-", duration: "-", institutions: ["-"] }
                    }
                }
            ]
        }
    ]
};
