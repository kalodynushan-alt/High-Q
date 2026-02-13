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
                    description: "Study of numbers, quantity, structure, space, and change, including statistical analysis.",
                    careerOptions: ["Mathematician", "Data Scientist", "Actuary", "Operations Research Analyst", "Quantitative Analyst", "Cryptographer", "Statistician", "Mathematical Modeler", "Academic Researcher", "Biostatistician"],
                    educationPath: {
                        undergraduate: { name: "B.Sc. Mathematics / Statistics / Integrated M.Sc. Mathematics", duration: "3-5 years", institutions: ["Hindu College, Delhi", "St. Stephen’s College, Delhi", "Chennai Mathematical Institute", "Indian Statistical Institute, Kolkata", "IISER Pune", "NISER Bhubaneswar"] },
                        postgraduate: { name: "M.Sc. Mathematics / Statistics", duration: "2 years", institutions: ["IIT Bombay", "JNU Delhi", "CMI Chennai", "ISI Kolkata", "IIT Kanpur", "BHU Varanasi"] },
                        advanced: { name: "Ph.D. in Mathematics / Statistics", duration: "3-5 years", institutions: ["TIFR Mumbai", "IIT Delhi", "ISI Bangalore", "CMI Chennai", "IIT Bombay", "JNU Delhi"] }
                    }
                },
                {
                    id: "biology",
                    name: "Biology",
                    description: "Study of living organisms, their interactions, and their environment, encompassing microbiology, biotechnology, zoology, botany, and environmental science.",
                    careerOptions: ["Biologist", "Microbiologist", "Biotechnologist", "Zoologist", "Botanist", "Environmental Scientist", "Wildlife Biologist", "Geneticist", "Bioinformatician", "Plant Scientist", "Marine Biologist", "Academic Researcher", "Conservation Scientist"],
                    educationPath: {
                        undergraduate: { name: "B.Sc. Biology / Microbiology / Biotechnology / Zoology / Botany / Environmental Science / Integrated M.Sc. Biology", duration: "3-5 years", institutions: ["St. Xavier’s College, Mumbai", "Christ University, Bangalore", "Loyola College, Chennai", "Hindu College, Delhi", "IISER Thiruvananthapuram", "IISER Bhopal"] },
                        postgraduate: { name: "M.Sc. Biology / Microbiology / Biotechnology / Zoology / Botany / Environmental Science", duration: "2 years", institutions: ["JNU Delhi", "BHU Varanasi", "University of Delhi", "IISER Thiruvananthapuram", "IIT Bombay", "IISER Pune"] },
                        advanced: { name: "Ph.D. in Biological Sciences / Biotechnology / Environmental Science", duration: "3-5 years", institutions: ["NCBS Bangalore", "IISc Bangalore", "TIFR Mumbai", "JNU Delhi", "IIT Delhi", "NEERI Nagpur"] }
                    }
                },
                {
                    id: "geology",
                    name: "Geology",
                    description: "Study of Earth's structure, composition, processes, and resource exploration.",
                    careerOptions: ["Geologist", "Environmental Consultant", "Mining Geologist", "Petroleum Geologist", "Geophysicist", "Seismologist", "Oil and Gas Exploration Scientist", "Academic Researcher", "Geoscientist"],
                    educationPath: {
                        undergraduate: { name: "B.Sc. Geology / Exploration Geophysics", duration: "3-4 years", institutions: ["Presidency College, Kolkata", "Fergusson College, Pune", "St. Xavier’s College, Mumbai", "Hansraj College, Delhi", "IIT Kharagpur"] },
                        postgraduate: { name: "M.Sc. Geology / Exploration Geophysics", duration: "2 years", institutions: ["IIT Kharagpur", "BHU Varanasi", "JNU Delhi", "University of Pune", "IIT Bombay"] },
                        advanced: { name: "Ph.D. in Geology / Exploration Geophysics", duration: "3-5 years", institutions: ["IIT Bombay", "IISc Bangalore", "JNU Delhi", "TIFR Mumbai", "IIT Kharagpur"] }
                    }
                },
                {
                    id: "interdisciplinary-sciences",
                    name: "Interdisciplinary Sciences",
                    description: "Integration of multiple scientific disciplines to address complex problems, including biochemistry, biomedical science, forensic science, and food science.",
                    careerOptions: ["Research Scientist", "Data Scientist", "Environmental Consultant", "Professor", "Science Policy Advisor", "Forensic Scientist", "Biomedical Scientist", "Food Scientist", "Biochemist", "Medical Researcher", "Clinical Diagnostics Specialist", "Quality Control Specialist"],
                    educationPath: {
                        undergraduate: { name: "B.Sc. Biochemistry / Biomedical Science / Forensic Science / Food Science / BS Research / Integrated M.Sc. Interdisciplinary Sciences", duration: "3-5 years", institutions: ["St. Stephen’s College, Delhi", "Loyola College, Chennai", "Madras Christian College, Chennai", "Christ University, Bangalore", "IISc Bangalore", "IISER Pune"] },
                        postgraduate: { name: "M.Sc. Biochemistry / Biomedical Science / Forensic Science / Food Science / Interdisciplinary Sciences", duration: "2 years", institutions: ["JNU Delhi", "BHU Varanasi", "University of Delhi", "IISER Kolkata", "CFTRI Mysore", "Gujarat Forensic Sciences University"] },
                        advanced: { name: "Ph.D. in Biochemistry / Biomedical Science / Forensic Science / Food Science / Interdisciplinary Sciences", duration: "3-5 years", institutions: ["IISc Bangalore", "NCBS Bangalore", "TIFR Mumbai", "JNU Delhi", "CFTRI Mysore", "Gujarat Forensic Sciences University"] }
                    }
                }
            ]
        },
        {
            id: "engineering-technology",
            icon: "🔧",
            name: "Engineering & Technology",
            description: "Curious about how things work? Good at Math & Science? Love solving problems & building things? Interested in innovation, machines, coding, or design? You are an engineer inside!",
            subdomains: [
                {
                    id: "mechanical",
                    name: "Mechanical Engineering",
                    description: "Study of machines, vehicles, and mechanical systems.",
                    careerOptions: ["Automotive Engineer", "Robotics Engineer", "Mechanical Design Engineer", "Manufacturing Engineer"],
                    educationPath: {
                        undergraduate: { name: "B.Tech / B.E. in Mechanical Engineering / Polytechnic Diploma (Mechanical)", duration: "3-4 years", institutions: ["IIT Bombay", "NIT Calicut", "BITS Pilani", "VIT Vellore", "College of Engineering Trivandrum", "TKM College of Engineering, Kollam"] },
                        postgraduate: { name: "M.Tech in Mechanical Engineering", duration: "2 years", institutions: ["IIT Madras", "IIT Delhi", "NIT Calicut", "CUSAT Kochi"] },
                        advanced: { name: "Ph.D. in Mechanical Engineering", duration: "3-5 years", institutions: ["IISc Bangalore", "IIT Bombay", "IIT Palakkad", "NIT Calicut"] }
                    }
                },
                {
                    id: "civil",
                    name: "Civil Engineering",
                    description: "Study of infrastructure, buildings, and construction systems.",
                    careerOptions: ["Site Engineer", "Structural Analyst", "Construction Manager", "Urban Planner"],
                    educationPath: {
                        undergraduate: { name: "B.Tech / B.E. in Civil Engineering / Polytechnic Diploma (Civil)", duration: "3-4 years", institutions: ["IIT Madras", "NIT Calicut", "Government Engineering College, Thrissur", "SRM University", "Manipal Institute of Technology", "Rajagiri School of Engineering & Technology"] },
                        postgraduate: { name: "M.Tech in Civil Engineering", duration: "2 years", institutions: ["IIT Delhi", "IIT Bombay", "NIT Calicut", "CUSAT Kochi"] },
                        advanced: { name: "Ph.D. in Civil Engineering", duration: "3-5 years", institutions: ["IISc Bangalore", "IIT Madras", "IIT Palakkad", "NIT Calicut"] }
                    }
                },
                {
                    id: "electrical",
                    name: "Electrical Engineering",
                    description: "Study of circuits, power systems, and electrical equipment.",
                    careerOptions: ["Power Engineer", "Control Systems Engineer", "Electrical Design Engineer", "Renewable Energy Specialist"],
                    educationPath: {
                        undergraduate: { name: "B.Tech / B.E. in Electrical Engineering / Polytechnic Diploma (Electrical)", duration: "3-4 years", institutions: ["IIT Delhi", "NIT Calicut", "IIST Thiruvananthapuram", "VIT Vellore", "Mar Athanasius College of Engineering, Kothamangalam", "Saintgits College of Engineering"] },
                        postgraduate: { name: "M.Tech in Electrical Engineering", duration: "2 years", institutions: ["IIT Kanpur", "IIT Bombay", "NIT Calicut", "CUSAT Kochi"] },
                        advanced: { name: "Ph.D. in Electrical Engineering", duration: "3-5 years", institutions: ["IISc Bangalore", "IIT Delhi", "IIT Palakkad", "NIT Calicut"] }
                    }
                },
                {
                    id: "electronics-communication",
                    name: "Electronics & Communication Engineering",
                    description: "Study of electronic devices, signals, and communication systems.",
                    careerOptions: ["Embedded Systems Engineer", "Telecom Engineer", "VLSI Designer", "Signal Processing Engineer"],
                    educationPath: {
                        undergraduate: { name: "B.Tech / B.E. in Electronics & Communication Engineering / Polytechnic Diploma (Electronics)", duration: "3-4 years", institutions: ["IIT Bombay", "NIT Calicut", "BITS Pilani", "College of Engineering Trivandrum", "TKM College of Engineering, Kollam", "Rajagiri School of Engineering & Technology"] },
                        postgraduate: { name: "M.Tech in Electronics & Communication Engineering", duration: "2 years", institutions: ["IIT Madras", "IIT Delhi", "NIT Calicut", "CUSAT Kochi"] },
                        advanced: { name: "Ph.D. in Electronics & Communication Engineering", duration: "3-5 years", institutions: ["IISc Bangalore", "IIT Bombay", "IIT Palakkad", "NIT Calicut"] }
                    }
                },
                {
                    id: "computer-science",
                    name: "Computer Science / IT",
                    description: "Study of software, data, and computational systems.",
                    careerOptions: ["Software Developer", "Data Analyst", "Cybersecurity Specialist", "Cloud Architect"],
                    educationPath: {
                        undergraduate: { name: "B.Tech / B.E. in Computer Science / IT / B.C.A / B.Sc. Computer Science", duration: "3-4 years", institutions: ["IIT Bombay", "NIT Calicut", "IIIT Hyderabad", "BITS Pilani", "CUSAT Kochi", "Saintgits College of Engineering"], specializations: ["Software Engineering", "Data Science", "Cybersecurity"] },
                        postgraduate: { name: "M.Tech / MS in Computer Science / MCA", duration: "2 years", institutions: ["IIT Madras", "IIT Delhi", "NIT Calicut", "IIIT Bangalore"], specializations: ["Machine Learning", "Data Analytics", "Cloud Computing"] },
                        advanced: { name: "Ph.D. in Computer Science", duration: "3-5 years", institutions: ["IISc Bangalore", "IIT Bombay", "IIT Palakkad", "IIIT Hyderabad"], researchAreas: ["Artificial Intelligence", "Distributed Systems", "Cybersecurity"] }
                    }
                },
                {
                    id: "chemical",
                    name: "Chemical Engineering",
                    description: "Study of chemical processes and materials.",
                    careerOptions: ["Process Engineer", "R&D Chemist", "Petrochemical Engineer", "Environmental Engineer"],
                    educationPath: {
                        undergraduate: { name: "B.Tech / B.E. in Chemical Engineering / Polytechnic Diploma (Chemical)", duration: "3-4 years", institutions: ["IIT Madras", "NIT Calicut", "VIT Vellore", "Manipal Institute of Technology", "Government Engineering College, Thrissur", "TKM College of Engineering, Kollam"] },
                        postgraduate: { name: "M.Tech in Chemical Engineering", duration: "2 years", institutions: ["IIT Bombay", "IIT Delhi", "NIT Calicut", "CUSAT Kochi"] },
                        advanced: { name: "Ph.D. in Chemical Engineering", duration: "3-5 years", institutions: ["IISc Bangalore", "IIT Madras", "IIT Palakkad", "NIT Calicut"] }
                    }
                },
                {
                    id: "ai-robotics",
                    name: "AI / Robotics",
                    description: "Study of artificial intelligence, machine learning, and robotic systems.",
                    careerOptions: ["AI Engineer", "Robotics Expert", "Machine Learning Engineer", "Automation Specialist"],
                    educationPath: {
                        undergraduate: { name: "B.Tech / B.E. in AI / Robotics / Computer Science / B.Sc. Computer Science", duration: "3-4 years", institutions: ["IIT Bombay", "NIT Calicut", "IIIT Hyderabad", "IIST Thiruvananthapuram", "CUSAT Kochi", "Rajagiri School of Engineering & Technology"], specializations: ["Artificial Intelligence", "Robotics", "Machine Learning"] },
                        postgraduate: { name: "M.Tech in AI / Robotics / Machine Learning", duration: "2 years", institutions: ["IIT Madras", "IIT Delhi", "NIT Calicut", "IIIT Bangalore"], specializations: ["Deep Learning", "Robotics", "Computer Vision"] },
                        advanced: { name: "Ph.D. in AI / Robotics", duration: "3-5 years", institutions: ["IISc Bangalore", "IIT Bombay", "IIT Palakkad", "IIIT Hyderabad"], researchAreas: ["Natural Language Processing", "Autonomous Systems", "Reinforcement Learning"] }
                    }
                },
                {
                    id: "design-technology",
                    name: "Design with Technology Focus",
                    description: "Study of design integrated with technology, focusing on user experience and product innovation.",
                    careerOptions: ["Product Designer", "UI/UX Designer", "Industrial Designer", "Interaction Designer"],
                    educationPath: {
                        undergraduate: { name: "B.Des. (Design with Tech Focus) / B.Tech in Design Engineering", duration: "4 years", institutions: ["NID Ahmedabad", "IIT Bombay", "VIT Vellore", "CUSAT Kochi", "Saintgits College of Engineering", "Mar Athanasius College of Engineering, Kothamangalam"] },
                        postgraduate: { name: "M.Des. in Design", duration: "2 years", institutions: ["NID Ahmedabad", "IIT Delhi", "NIT Calicut", "CUSAT Kochi"] },
                        advanced: { name: "Ph.D. in Design", duration: "3-5 years", institutions: ["IIT Bombay", "NID Ahmedabad", "IIT Palakkad", "NIT Calicut"] }
                    }
                },
                {
                    id: "iti-apprenticeship",
                    name: "ITI and Apprenticeship",
                    description: "Vocational training and apprenticeships leading to industry jobs in engineering and technology.",
                    careerOptions: ["Technician", "Machinist", "Electrician", "Maintenance Engineer"],
                    educationPath: {
                        undergraduate: { name: "ITI Courses (e.g., Fitter, Electrician, Welder) + Apprenticeship", duration: "1-2 years", institutions: ["Government ITI, Calicut", "Government ITI, Thiruvananthapuram", "Government ITI, Kochi", "Private ITIs in Kerala"] },
                        postgraduate: { name: "Diploma in Engineering (via Lateral Entry) / Advanced Certifications", duration: "2-3 years", institutions: ["Government Polytechnic College, Calicut", "Government Polytechnic College, Thrissur", "CUSAT Kochi"] },
                        advanced: { name: "B.Tech (via Lateral Entry) / Industry Certifications", duration: "3-4 years", institutions: ["College of Engineering Trivandrum", "NIT Calicut", "CUSAT Kochi", "Government Engineering College, Thrissur"] }
                    }
                }
            ]
        },
        {
            id: "medicine",
            icon: "🏥",
            name: "Medicine",
            description: "- Fascinated by the human body and health? Strong in Biology and Chemistry? Passionate about helping people and caring for others? Interested in healing, diagnosis, treatment, or healthcare technology? Have the patience and dedication required for long-term study and practice? Then a career in the Medical Field is for YOU!",
            subdomains: [
                {
                    id: "allied_health_diploma",
                    name: "Diploma courses after Class 10th ",
                    description: "Short-term diploma and certificate courses in healthcare fields that prepare students for support roles in medical services, diagnostics, and emergency care.",
                    careerOptions: ["Nursing Assistant", "Medical Laboratory Technician", "Radiology Technician", "Operation Theatre Assistant", "Optometry Assistant", "Dental Hygienist", "Emergency Medical Technician", "ECG/X-ray Technician"],
                    educationPath: {
                        afterClass10: { name: "Diploma/Certificate in Allied Health Sciences", duration: "1-3 years", institutions: ["Christian Medical College, Vellore", "Tata Memorial Hospital, Mumbai", "Amrita Institute of Medical Sciences, Kochi", "St. John's Medical College, Bangalore"] }
                    }
                },
                {
                    id: "mbbs",
                    name: "MBBS",
                    description: "Bachelor of Medicine and Bachelor of Surgery, the primary medical degree for clinical practice, research, and specialized medicine.",
                    careerOptions: ["Clinical Practitioner", "Government Medical Officer", "Research Scientist", "Academic Faculty"],
                    educationPath: {
                        undergraduate: { name: "MBBS", duration: "5.5 years", institutions: ["AIIMS New Delhi", "CMC Vellore", "JIPMER Puducherry", "Maulana Azad Medical College, Delhi", "Government Medical College, (Thiruvananthapuram, Kottayam, Kozhikode)"] },
                        postgraduate: { name: "MD/MS/DNB", duration: "3 years", institutions: ["AIIMS New Delhi", "PGIMER Chandigarh", "CMC Vellore", "Kasturba Medical College, Manipal"] },
                        advanced: { name: "DM/MCh / Ph.D. in Medical Sciences / MBA/MHA/MPH", duration: "2-5 years", institutions: ["AIIMS New Delhi", "PGIMER Chandigarh", "SCTIMST Trivandrum", "CMC Vellore", "IISc Bangalore", "IIM Ahmedabad"] }
                    }
                },
                {
                    id: "bds",
                    name: "BDS",
                    description: "Bachelor of Dental Surgery, focusing on dental care, surgery, and oral health.",
                    careerOptions: ["Private Dental Practitioner", "Hospital Consultant", "Academic Faculty"],
                    educationPath: {
                        undergraduate: { name: "BDS", duration: "5 years", institutions: ["Manipal College of Dental Sciences", "Maulana Azad Institute of Dental Sciences, Delhi", "Government Dental College, Mumbai", "Christian Dental College, Ludhiana"] },
                        postgraduate: { name: "MDS", duration: "3 years", institutions: ["Manipal College of Dental Sciences", "AIIMS New Delhi", "Government Dental College, Chennai", "Maulana Azad Institute of Dental Sciences, Delhi"] },
                        advanced: { name: "Ph.D. in Dental Sciences / MPH in Dental Public Health", duration: "2-5 years", institutions: ["AIIMS New Delhi", "JNU Delhi", "Manipal University", "TISS Mumbai"] }
                    }
                },
                {
                    id: "bams",
                    name: "BAMS",
                    description: "Bachelor of Ayurvedic Medicine and Surgery, focusing on traditional Indian medicine and holistic healthcare.",
                    careerOptions: ["Ayurvedic Practitioner", "Panchakarma Therapist", "Integrative Medicine Consultant"],
                    educationPath: {
                        undergraduate: { name: "BAMS", duration: "5.5 years", institutions: ["Banaras Hindu University, Varanasi", "Government Ayurvedic College, Nagpur", "National Institute of Ayurveda, Jaipur", "SDM College of Ayurveda, Udupi"] },
                        postgraduate: { name: "MD/MS in Ayurveda", duration: "3 years", institutions: ["BHU Varanasi", "National Institute of Ayurveda, Jaipur", "Government Ayurvedic College, Bangalore"] },
                        advanced: { name: "Ph.D. in Ayurveda", duration: "3-5 years", institutions: ["BHU Varanasi", "JNU Delhi", "CCRAS Research Institutes"] }
                    }
                },
                {
                    id: "bhms",
                    name: "BHMS",
                    description: "Bachelor of Homeopathic Medicine and Surgery, focusing on homeopathic treatment and pharmacology.",
                    careerOptions: ["Homeopathic Consultant", "Researcher in Homeopathic Pharmacology", "Teaching Faculty"],
                    educationPath: {
                        undergraduate: { name: "BHMS", duration: "5.5 years", institutions: ["National Institute of Homeopathy, Kolkata", "Nehru Homeopathic Medical College, Delhi", "JSPS Government Homeopathic College, Hyderabad", "Bakson Homeopathy Medical College, Noida"] },
                        postgraduate: { name: "MD in Homeopathy", duration: "3 years", institutions: ["National Institute of Homeopathy, Kolkata", "Nehru Homeopathic Medical College, Delhi"] },
                        advanced: { name: "Ph.D. in Homeopathic Sciences", duration: "3-5 years", institutions: ["JNU Delhi", "CCRH Research Institutes", "National Institute of Homeopathy, Kolkata"] }
                    }
                },
                {
                    id: "bums",
                    name: "BUMS",
                    description: "Bachelor of Unani Medicine and Surgery, focusing on traditional Unani medicine and herbal pharmacology.",
                    careerOptions: ["Unani Practitioner", "Integrative Medicine Consultant"],
                    educationPath: {
                        undergraduate: { name: "BUMS", duration: "5.5 years", institutions: ["Aligarh Muslim University, Aligarh", "Jamia Hamdard, New Delhi", "Government Nizamia Tibbiya College, Hyderabad", "Ajmal Khan Tibbiya College, Aligarh"] },
                        postgraduate: { name: "MD in Unani", duration: "3 years", institutions: ["Aligarh Muslim University, Aligarh", "Jamia Hamdard, New Delhi"] },
                        advanced: { name: "Ph.D. in Unani Medicine", duration: "3-5 years", institutions: ["Jamia Hamdard, New Delhi", "CCRUN Research Institutes", "JNU Delhi"] }
                    }
                },
                {
                    id: "nursing",
                    name: "Nursing",
                    description: "Training in patient care, specialty nursing, and community health nursing.",
                    careerOptions: ["Staff Nurse", "Charge Nurse", "Specialty Nurse (ICU, OT, ER)", "Community Health Nurse"],
                    educationPath: {
                        undergraduate: { name: "B.Sc. Nursing / Post-Basic B.Sc. Nursing", duration: "2-4 years", institutions: ["AIIMS New Delhi", "CMC Vellore", "JIPMER Puducherry", "Manipal College of Nursing", "IGNOU"] },
                        postgraduate: { name: "M.Sc. Nursing", duration: "2 years", institutions: ["AIIMS New Delhi", "CMC Vellore", "PGIMER Chandigarh", "Manipal College of Nursing"] },
                        advanced: { name: "Ph.D. in Nursing / MBA/MHA", duration: "2-5 years", institutions: ["AIIMS New Delhi", "CMC Vellore", "Manipal University", "TISS Mumbai", "IIM Ahmedabad"] }
                    }
                },
                {
                    id: "physiotherapy",
                    name: "Physiotherapy",
                    description: "Rehabilitation and physical therapy for injury recovery and mobility improvement.",
                    careerOptions: ["Physiotherapist", "Community Physiotherapist", "Sports Physiotherapist"],
                    educationPath: {
                        undergraduate: { name: "BPT", duration: "4.5 years", institutions: ["CMC Vellore", "Manipal College of Health Professions", "Jamia Millia Islamia, New Delhi", "SRM Institute, Chennai"] },
                        postgraduate: { name: "MPT", duration: "2 years", institutions: ["CMC Vellore", "Manipal College of Health Professions", "Jamia Millia Islamia, New Delhi"] },
                        advanced: { name: "Ph.D. in Physiotherapy", duration: "3-5 years", institutions: ["Manipal University", "Jamia Millia Islamia, New Delhi", "CMF’s College of Physiotherapy, Pune"] }
                    }
                },
                {
                    id: "occupational-therapy",
                    name: "Occupational Therapy",
                    description: "Therapy to improve daily living and work skills in patients with physical or mental challenges.",
                    careerOptions: ["Occupational Therapist", "Special Education Therapist", "Community Health Therapist"],
                    educationPath: {
                        undergraduate: { name: "BOT", duration: "4.5 years", institutions: ["AIIMS New Delhi", "Manipal College of Health Professions", "Jamia Millia Islamia, New Delhi", "Seth GS Medical College, Mumbai"] },
                        postgraduate: { name: "M.O.T.", duration: "2 years", institutions: ["AIIMS New Delhi", "Manipal College of Health Professions", "Jamia Millia Islamia, New Delhi"] },
                        advanced: { name: "Ph.D. in Occupational Therapy", duration: "3-5 years", institutions: ["Manipal University", "Jamia Millia Islamia, New Delhi", "AIIMS New Delhi"] }
                    }
                },
                {
                    id: "pharmacy",
                    name: "Pharmacy",
                    description: "Study of drug development, dispensing, and pharmaceutical care.",
                    careerOptions: ["Hospital Pharmacist", "Clinical Pharmacist", "Regulatory Affairs Specialist", "Pharmaceutical Researcher"],
                    educationPath: {
                        undergraduate: { name: "B.Pharm / PharmD", duration: "4-6 years", institutions: ["Manipal College of Pharmaceutical Sciences", "Jamia Hamdard, New Delhi", "JSS College of Pharmacy, Mysore", "BITS Pilani", "SRM Institute, Chennai"] },
                        postgraduate: { name: "M.Pharm", duration: "2 years", institutions: ["Manipal College of Pharmaceutical Sciences", "Jamia Hamdard, New Delhi", "NIPER Mohali", "JSS College of Pharmacy, Mysore"] },
                        advanced: { name: "Ph.D. in Pharmaceutical Sciences / MBA in Pharmaceutical Management", duration: "2-5 years", institutions: ["NIPER Mohali", "Jamia Hamdard, New Delhi", "Manipal University", "NMIMS Mumbai"] }
                    }
                },
                {
                    id: "allied-health-sciences",
                    name: "Allied Health Sciences",
                    description: "Technical and diagnostic support roles in healthcare, including lab technology, radiography, and emergency care.",
                    careerOptions: ["Medical Lab Technologist", "Radiographer", "Anaesthesia Technologist", "Cardiovascular Technologist", "Emergency Medical Technician"],
                    educationPath: {
                        undergraduate: { name: "B.Sc. Medical Lab Technology / Radiography & Imaging Technology / Anaesthesia Technology / Cardiovascular Technology", duration: "3-4 years", institutions: ["AIIMS New Delhi", "CMC Vellore", "Manipal College of Health Professions", "JIPMER Puducherry", "SRM Institute, Chennai"] },
                        postgraduate: { name: "M.Sc. Medical Lab Technology / Radiography / Anaesthesia Technology / Cardiovascular Technology", duration: "2 years", institutions: ["AIIMS New Delhi", "CMC Vellore", "Manipal University"] },
                        advanced: { name: "Ph.D. in Allied Health Sciences / MBA in Hospital Administration", duration: "2-5 years", institutions: ["Manipal University", "AIIMS New Delhi", "JNU Delhi", "TISS Mumbai", "IIM Ahmedabad"] }
                    }
                },
                {
                    id: "public-health",
                    name: "Public Health & Health Management",
                    description: "Study of population health, epidemiology, and healthcare management.",
                    careerOptions: ["Public Health Specialist", "Epidemiologist", "Health Program Manager", "Policy Analyst", "Community Health Coordinator"],
                    educationPath: {
                        undergraduate: { name: "B.Sc. Public Health", duration: "3-4 years", institutions: ["Manipal University", "SRM Institute, Chennai", "Amity University, Noida", "Christ University, Bangalore"] },
                        postgraduate: { name: "Master of Public Health (MPH) / Master of Health Administration (MHA)", duration: "2 years", institutions: ["TISS Mumbai", "JNU Delhi", "Manipal University", "AIIMS New Delhi", "FMS Delhi"] },
                        advanced: { name: "Ph.D. in Public Health / MBA in Healthcare Management", duration: "2-5 years", institutions: ["TISS Mumbai", "JNU Delhi", "AIIMS New Delhi", "IIM Ahmedabad"] }
                    }
                },
                {
                    id: "research-medical-sciences",
                    name: "Research & Basic Medical Sciences",
                    description: "Research in fundamental medical sciences like anatomy, biochemistry, and genetics.",
                    careerOptions: ["Medical Research Scientist", "Clinical Trials Researcher", "Teaching Faculty"],
                    educationPath: {
                        undergraduate: { name: "B.Sc. Medical Sciences", duration: "3-4 years", institutions: ["AIIMS New Delhi", "JNU Delhi", "BHU Varanasi", "Manipal University"] },
                        postgraduate: { name: "M.Sc. Medical Sciences", duration: "2 years", institutions: ["AIIMS New Delhi", "JNU Delhi", "BHU Varanasi", "Manipal University"] },
                        advanced: { name: "Ph.D. in Medical Sciences / Integrated Ph.D. Programs", duration: "3-6 years", institutions: ["IISc Bangalore", "TIFR Mumbai", "JNU Delhi", "AIIMS New Delhi"] }
                    }
                }
            ]
        },
        {
            id: "intl_licensing_paths",
            icon: "🌏",
            name: "International Licensing Exams",
            description: "Planning to practice Medicine abroad? Explore the licensing pathways for USA, UK, Australia, and other countries.",
            subdomains: [
                {
                    id: "usmle",
                    name: "USMLE (USA)",
                    description: "United States Medical Licensing Examination for practicing medicine in the USA.",
                    careerOptions: ["Medical Resident in USA", "Licensed Physician in USA"],
                    educationPath: {
                        undergraduate: { name: "MBBS", duration: "5.5 years", institutions: ["MCI/NMC Recognized Medical Colleges"] },
                        postgraduate: { name: "USMLE Steps 1, 2 (CK), 3", duration: "Exam Process", institutions: ["ECFMG (Educational Commission for Foreign Medical Graduates)"] },
                        advanced: { name: "Residency Match", duration: "3-7 years", institutions: ["US Hospitals (ACGME Accredited)"] }
                    }
                },
                {
                    id: "plab",
                    name: "PLAB / UKMLA (UK)",
                    description: "Professional and Linguistic Assessments Board test (transitioning to UKMLA) for practicing medicine in the UK.",
                    careerOptions: ["NHS Junior Doctor", "GP Trainee", "Specialist Doctor"],
                    educationPath: {
                        undergraduate: { name: "MBBS", duration: "5.5 years", institutions: ["MCI/NMC Recognized Medical Colleges"] },
                        postgraduate: { name: "PLAB 1 & 2 / UKMLA", duration: "Exam Process", institutions: ["General Medical Council (GMC) UK"] },
                        advanced: { name: "Foundation Programme / Specialty Training", duration: "2-8 years", institutions: ["NHS Hospitals"] }
                    }
                },
                {
                    id: "amc",
                    name: "AMC (Australia)",
                    description: "Australian Medical Council exams for practicing medicine in Australia.",
                    careerOptions: ["Medical Officer in Australia", "General Practitioner in Australia"],
                    educationPath: {
                        undergraduate: { name: "MBBS", duration: "5.5 years", institutions: ["MCI/NMC Recognized Medical Colleges"] },
                        postgraduate: { name: "AMC MCQ & Clinical Exams", duration: "Exam Process", institutions: ["Australian Medical Council"] },
                        advanced: { name: "Internship / Residency (Standard Pathway)", duration: "1-4 years", institutions: ["Australian Hospitals"] }
                    }
                },
                {
                    id: "mccqe",
                    name: "MCCQE (Canada)",
                    description: "Medical Council of Canada Qualifying Examination for practicing medicine in Canada.",
                    careerOptions: ["Medical Resident in Canada", "Licensed Physician in Canada"],
                    educationPath: {
                        undergraduate: { name: "MBBS", duration: "5.5 years", institutions: ["MCI/NMC Recognized Medical Colleges"] },
                        postgraduate: { name: "MCCQE Part 1 & NAC OSCE", duration: "Exam Process", institutions: ["Medical Council of Canada"] },
                        advanced: { name: "Residency Match (CaRMS)", duration: "2-5 years", institutions: ["Canadian Hospitals"] }
                    }
                },
                {
                    id: "dha-haad-moh",
                    name: "DHA / HAAD / MOH (UAE)",
                    description: "Licensing exams for practicing medicine in Dubai, Abu Dhabi, and other UAE emirates.",
                    careerOptions: ["General Practitioner in UAE", "Specialist Doctor in UAE"],
                    educationPath: {
                        undergraduate: { name: "MBBS + Internship + 1-2 Years Experience", duration: "5.5 years + Exp", institutions: ["MCI/NMC Recognized Medical Colleges"] },
                        postgraduate: { name: "DHA / HAAD / MOH Exam", duration: "Exam Process", institutions: ["Dubai Health Authority / Department of Health Abu Dhabi / Ministry of Health"] },
                        advanced: { name: "Specialist License", duration: "Varies", institutions: ["UAE Hospitals"] }
                    }
                }
            ]
        },
        {
            id: "commerce-management",
            icon: "💰",
            name: "Commerce & Management",
            description: "Do you have a knack for business? Good with numbers and money? Interested in how the economy works? Want to lead teams or start your own company? A career in Commerce & Management is waiting for you!",
            subdomains: [
                {
                    id: "chartered-accountancy",
                    name: "Chartered Accountancy (CA)",
                    description: "A prestigious professional course regulated by ICAI, focusing on accounting, auditing, taxation, and financial management.",
                    careerOptions: ["Statutory Auditor", "Internal Auditor", "Tax Consultant", "Finance Manager", "CFO (Chief Financial Officer)", "Forensic Auditor"],
                    educationPath: {
                        undergraduate: { 
                            name: "CA Foundation > CA Intermediate > Articleship > CA Final", 
                            duration: "4-5 years (including training)", 
                            institutions: ["Institute of Chartered Accountants of India (ICAI)"] 
                        },
                        postgraduate: { 
                            name: "ACA (Associate Member) -> FCA (Fellow Member)", 
                            duration: "Post-Qualification Experience", 
                            institutions: ["ICAI"] 
                        },
                        advanced: { 
                            name: "Post-Qualification Courses (ISA, International Taxation) / Ph.D.", 
                            duration: "Varies", 
                            institutions: ["ICAI", "IIMs", "Universities"] 
                        }
                    }
                },
                {
                    id: "company-secretary",
                    name: "Company Secretary (CS)",
                    description: "A professional course regulated by ICSI, focusing on corporate governance, company law, and secretarial practice.",
                    careerOptions: ["Company Secretary", "Corporate Governance Officer", "Legal Advisor", "Compliance Officer", "Corporate Planner"],
                    educationPath: {
                        undergraduate: { 
                            name: "CSEET (Entrance) > CS Executive > CS Professional > Practical Training", 
                            duration: "3-4 years", 
                            institutions: ["Institute of Company Secretaries of India (ICSI)"] 
                        },
                        postgraduate: { 
                            name: "ACS (Associate Member) -> FCS (Fellow Member)", 
                            duration: "Post-Qualification Experience", 
                            institutions: ["ICSI"] 
                        },
                        advanced: { 
                            name: "PMQ (Post Membership Qualification) / Ph.D. in Corporate Governance", 
                            duration: "Varies", 
                            institutions: ["ICSI", "National Law Universities"] 
                        }
                    }
                },
                {
                    id: "finance",
                    name: "Numbers & Finance",
                    description: "Focus on financial analysis, accounting, investment, and taxation.",
                    careerOptions: ["Chartered Accountant (CA)", "Financial Analyst", "Investment Banker", "Tax Consultant", "Auditor", "Actuary", "Cost Accountant", "Certified Public Accountant (CPA)"],
                    educationPath: {
                        undergraduate: { name: "B.Com / B.Com (Hons) / BBA Finance", duration: "3 years", institutions: ["SRCC Delhi", "Christ University, Bangalore", "Loyola College, Chennai", "St. Xavier's, Mumbai", "NMIMS Mumbai", "Rajagiri College, Kochi"] },
                        postgraduate: { name: "M.Com / MBA Finance / CA / CFA / ACCA", duration: "2-3 years", institutions: ["IIM Ahmedabad", "IIM Bangalore", "ICAI (CA)", "CFA Institute", "Delhi School of Economics"] },
                        advanced: { name: "Ph.D. in Finance / Fellowship", duration: "3-5 years", institutions: ["IIMs", "ISB Hyderabad", "FMS Delhi", "CUSAT Kochi"] }
                    }
                },
                {
                    id: "business-leadership",
                    name: "Business & Leadership",
                    description: "Focus on management, entrepreneurship, corporate strategy, and operations.",
                    careerOptions: ["Business Manager", "Entrepreneur", "Marketing Manager", "HR Manager", "Operations Manager", "Supply Chain Manager", "Management Consultant", "CEO/CXO"],
                    educationPath: {
                        undergraduate: { name: "BBA / BMS / IPM (Integrated Programme in Management)", duration: "3-5 years", institutions: ["IIM Indore (IPM)", "IIM Rohtak (IPM)", "Shaheed Sukhdev, Delhi", "Christ University", "NMIMS Mumbai", "Rajagiri Centre for Business Studies"] },
                        postgraduate: { name: "MBA (Marketing/HR/Ops/Strategy)", duration: "2 years", institutions: ["IIM Ahmedabad", "IIM Bangalore", "IIM Calcutta", "XLRI Jamshedpur", "FMS Delhi", "IIM Kozhikode", "SPJIMR Mumbai"] },
                        advanced: { name: "Ph.D. in Management / Executive MBA (For experienced professionals)", duration: "1-5 years", institutions: ["IIMs", "ISB Hyderabad", "XLRI", "Harvard Business School (for Exec MBA)"] }
                    }
                },
                {
                    id: "law",
                    name: "Law",
                    description: "Study of legal systems, justice, corporate law, advocacy, and rights.",
                    careerOptions: ["Corporate Lawyer", "Litigator (Advocate)", "Judge (Judiciary)", "Legal Consultant", "Public Prosecutor", "Solicitor", "Legal Analyst", "Cyber Law Expert"],
                    educationPath: {
                        undergraduate: { name: "BA LLB (Hons) / BBA LLB (Hons) - 5 Year Integrated", duration: "5 years", institutions: ["NLSIU Bangalore", "NALSAR Hyderabad", "NLU Delhi", "WBNUJS Kolkata", "NLU Jodhpur", "NUALS Kochi"] },
                        postgraduate: { name: "LLM (Master of Laws)", duration: "1 year", institutions: ["NLUs", "Delhi University", "Indian Law Institute", "CUSAT Kochi"] },
                        advanced: { name: "Ph.D. in Law", duration: "3-5 years", institutions: ["NLUs", "Delhi University", "JNU Delhi", "CUSAT Kochi"] }
                    }
                },
                {
                    id: "banking-insurance",
                    name: "Banking & Insurance",
                    description: "Focus on banking operations, insurance underwriting, and risk management.",
                    careerOptions: ["Bank PO (Probationary Officer)", "Insurance Underwriter", "Risk Manager", "Loan Officer", "Actuary", "Investment Banker"],
                    educationPath: {
                        undergraduate: { name: "B.Com / BBA (Banking & Insurance)", duration: "3 years", institutions: ["Symbiosis Pune", "Manipal University", "Amity University", "Sacred Heart College, Thevara"] },
                        postgraduate: { name: "MBA (Banking & Insurance) / PGDM in Banking", duration: "2 years", institutions: ["NIBM (National Institute of Bank Management) Pune", "Manipal School of Banking", "NIA (National Insurance Academy) Pune"] },
                        advanced: { name: "Ph.D. / Fellowships / FRM (Financial Risk Manager)", duration: "3-5 years", institutions: ["NIBM Pune", "University Departments", "GARP (for FRM)"] }
                    }
                },
                {
                    id: "technology-commerce",
                    name: "Technology + Commerce",
                    description: "Intersection of business and technology, including fintech, business analytics, and e-commerce.",
                    careerOptions: ["Business Analyst", "Fintech Specialist", "E-commerce Manager", "Product Manager", "Digital Marketing Manager"],
                    educationPath: {
                        undergraduate: { name: "B.Com (Computers) / BBA (Business Analytics)", duration: "3 years", institutions: ["Christ University", "Loyola Chennai", "Symbiosis Pune", "Rajagiri College"] },
                        postgraduate: { name: "MBA (Business Analytics) / M.Sc. Data Science", duration: "2 years", institutions: ["IIM Bangalore", "IIM Calcutta", "ISB Hyderabad", "Great Lakes Chennai", "SCMHRD Pune"] },
                        advanced: { name: "Ph.D. in Business Analytics", duration: "3-5 years", institutions: ["IIMs", "IITs (Management Dept)"] }
                    }
                },
                {
                    id: "emerging-careers",
                    name: "Emerging Careers",
                    description: "New and evolving roles in the business world focusing on sustainability and social impact.",
                    careerOptions: ["Sustainability Manager", "Social Entrepreneur", "Gig Economy Manager", "CSR Specialist", "Green Finance Specialist"],
                    educationPath: {
                        undergraduate: { name: "BBA (Entrepreneurship / Sustainability)", duration: "3 years", institutions: ["Azim Premji University", "TISS", "EDII Gandhinagar"] },
                        postgraduate: { name: "MBA (Sustainability / Social Entrepreneurship)", duration: "2 years", institutions: ["TISS Mumbai", "IIFM Bhopal", "XIMB Bhubaneswar", "Azim Premji University"] },
                        advanced: { name: "Fellowship Programs (e.g., Gandhi Fellowship, Teach for India)", duration: "1-2 years", institutions: ["Various"] }
                    }
                }
            ]
        },
        {
            id: "social-science-humanities",
            icon: "👥",
            name: "Social Sciences & Humanities",
            description: "Curious about human behavior, society, and culture? Love reading, writing, or debating? Interested in history, politics, or helping communities? A career in Social Sciences & Humanities is for you!",
            subdomains: [
                {
                    id: "psychology",
                    name: "Psychology",
                    description: "Study of human behavior, mind, and mental processes.",
                    careerOptions: ["Clinical Psychologist", "Counseling Psychologist", "Organizational Psychologist", "Sports Psychologist", "Forensic Psychologist", "School Counselor"],
                    educationPath: {
                        undergraduate: { name: "BA / B.Sc. Psychology", duration: "3 years", institutions: ["Lady Shri Ram College, Delhi", "TISS (Integrated BA-MA)", "Christ University, Bangalore", "Fergusson College, Pune", "Ambedkar University, Delhi", "Union Christian College, Aluva"] },
                        postgraduate: { name: "MA / M.Sc. Psychology (Clinical / Counseling / Industrial)", duration: "2 years", institutions: ["Delhi University", "TISS Mumbai", "NIMHANS Bangalore", "Tata Institute of Social Sciences", "CUSAT Kochi"] },
                        advanced: { name: "M.Phil / Ph.D. in Clinical Psychology / Psychology", duration: "2-5 years", institutions: ["NIMHANS Bangalore", "CIP Ranchi", "IHBAS Delhi", "TISS Mumbai", "University of Kerala"] }
                    }
                },
                {
                    id: "economics",
                    name: "Economics",
                    description: "Study of production, distribution, and consumption of wealth.",
                    careerOptions: ["Economist", "Policy Analyst", "Data Analyst", "Risk Manager", "Development Economist", "Financial Consultant"],
                    educationPath: {
                        undergraduate: { name: "BA Economics (Hons)", duration: "3 years", institutions: ["SRCC Delhi", "St. Stephen's College, Delhi", "Presidency College, Kolkata", "Loyola College, Chennai", "Madras School of Economics", "Sacred Heart College, Thevara"] },
                        postgraduate: { name: "MA / M.Sc. Economics", duration: "2 years", institutions: ["Delhi School of Economics", "JNU Delhi", "IGIDR Mumbai", "ISI Kolkata", "Madras School of Economics", "CUSAT Kochi"] },
                        advanced: { name: "Ph.D. in Economics", duration: "3-5 years", institutions: ["Delhi School of Economics", "ISI Kolkata", "IIMs", "IGIDR Mumbai", "CDS Trivandrum"] }
                    }
                },
                {
                    id: "civil-services",
                    name: "Civil Services",
                    description: "Careers in public administration, governance, and policy implementation.",
                    careerOptions: ["IAS Officer", "IPS Officer", "IFS Officer", "IRS Officer", "State Civil Services Officer"],
                    educationPath: {
                        undergraduate: { name: "Bachelor's Degree in Any Discipline", duration: "3-4 years", institutions: ["Any Recognized University"] },
                        postgraduate: { name: "UPSC CSE Preparation / State PSC Preparation", duration: "1-2 years", institutions: ["Self-study / Coaching Centers (Vajiram, Driscoll, etc.)"] },
                        advanced: { name: "Training at LBSNAA / SVPNPA / Foreign Service Institute", duration: "1-2 years", institutions: ["LBSNAA Mussoorie", "SVPNPA Hyderabad", "Sushma Swaraj Institute of Foreign Service, Delhi"] }
                    }
                },
                {
                    id: "mass-comm",
                    name: "Journalism & Mass Comm",
                    description: "Study of media, communication, storytelling, and public relations.",
                    careerOptions: ["Journalist", "News Anchor", "Editor", "Public Relations Specialist", "Content Writer", "Digital Media Specialist", "Filmmaker"],
                    educationPath: {
                        undergraduate: { name: "BA Journalism / BJMC / BMM", duration: "3 years", institutions: ["Delhi College of Arts and Commerce", "Christ University", "Symbiosis Institute of Media & Communication, Pune", "Manipal Institute of Communication", "Mar Ivanios College, Trivandrum"] },
                        postgraduate: { name: "MA Mass Communication / PG Diploma in Journalism", duration: "1-2 years", institutions: ["IIMC New Delhi", "AJK MCRC Jamia Millia Islamia", "Asian College of Journalism, Chennai", "Symbiosis Pune", "Kerala Media Academy"] },
                        advanced: { name: "Ph.D. in Media Studies", duration: "3-5 years", institutions: ["Jamia Millia Islamia", "JNU Delhi", "University of Hyderabad"] }
                    }
                },
                {
                    id: "social-sciences-general",
                    name: "Social Sciences (Sociology, Pol Science, History)",
                    description: "Study of society, politics, history, and human interactions.",
                    careerOptions: ["Sociologist", "Political Analyst", "Historian", "Archivist", "Social Researcher", "Museum Curator"],
                    educationPath: {
                        undergraduate: { name: "BA (Hons) Sociology / Political Science / History", duration: "3 years", institutions: ["St. Stephen's Delhi", "Hindu College Delhi", "Presidency Kolkata", "JNU (Language courses)", "Maharaja's College, Ernakulam"] },
                        postgraduate: { name: "MA Sociology / Political Science / History", duration: "2 years", institutions: ["JNU Delhi", "Delhi University", "University of Hyderabad", "Pondicherry University"] },
                        advanced: { name: "Ph.D.", duration: "3-5 years", institutions: ["JNU Delhi", "Delhi University", "TISS", "CSSS Calcutta"] }
                    }
                },
                {
                    id: "humanities-programs",
                    name: "Humanities & Liberal Arts",
                    description: "Interdisciplinary study of humanities subjects, critical thinking, and culture.",
                    careerOptions: ["Writer", "Editor", "Curator", "Arts Manager", "Policy Researcher"],
                    educationPath: {
                        undergraduate: { name: "BA Liberal Arts", duration: "3-4 years", institutions: ["Ashoka University", "Flame University", "Krea University", "Symbiosis Pune", "Chinmaya Vishwavidyapeeth, Kochi"] },
                        postgraduate: { name: "MA Liberal Arts / Humanities", duration: "2 years", institutions: ["IIT Madras (HSEE - Integrated MA)", "Ashoka University", "Manipal Center for Humanities"] },
                        advanced: { name: "Ph.D.", duration: "3-5 years", institutions: ["IITs (Humanities Dept)", "Ashoka University", "Manipal University"] }
                    }
                },
                {
                    id: "social-work",
                    name: "Social Work",
                    description: "Professional social work, community development, and social justice.",
                    careerOptions: ["Social Worker", "NGO Manager", "CSR Specialist", "Community Organizer", "Child Rights Activist"],
                    educationPath: {
                        undergraduate: { name: "BSW", duration: "3 years", institutions: ["TISS (Integrated BA in Social Work)", "Rajagiri College of Social Sciences, Kochi", "Madras School of Social Work"] },
                        postgraduate: { name: "MSW", duration: "2 years", institutions: ["TISS Mumbai", "Delhi School of Social Work", "Rajagiri College of Social Sciences", "Loyola College, Trivandrum"] },
                        advanced: { name: "Ph.D. Social Work", duration: "3-5 years", institutions: ["TISS Mumbai", "Delhi University", "Rajagiri College"] }
                    }
                },
                {
                    id: "arts-design-vocational",
                    name: "Arts, Design & Vocational",
                    description: "Creative arts, design, and applied vocational skills.",
                    careerOptions: ["Graphic Designer", "Fashion Designer", "Animator", "Interior Designer", "Fine Artist"],
                    educationPath: {
                        undergraduate: { name: "B.Des / BFA", duration: "4 years", institutions: ["NID", "NIFT", "College of Art Delhi", "JJ School of Art Mumbai", "College of Fine Arts, Trivandrum"] },
                        postgraduate: { name: "M.Des / MFA", duration: "2 years", institutions: ["NID", "NIFT", "IDC IIT Bombay", "RLV College, Tripunithura"] },
                        advanced: { name: "Ph.D.", duration: "3-5 years", institutions: ["IDC IIT Bombay", "NID", "NIFT"] }
                    }
                }
            ]
        },
        {
            id: "short-term-career-programs",
            icon: "💼",
            name: "Short-Term Career Programs",
            description: "Want to start earning quickly? Interested in skill-based jobs? Looking for a career switch? These programs get you job-ready in 6-12 months!",
            subdomains: [
                {
                    id: "digital-marketing",
                    name: "Digital Marketing",
                    description: "Learn SEO, social media marketing, content strategy, and paid advertising.",
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
                    description: "Learn to build websites and web applications using HTML, CSS, JavaScript, and more.",
                    careerOptions: ["Frontend Developer", "Backend Developer", "Full Stack Developer", "Web Designer", "UI Developer"],
                    educationPath: {
                        undergraduate: { name: "Bootcamps / Certifications", duration: "6 months", institutions: ["FreeCodeCamp", "Codecademy", "Udemy", "Coursera", "Brototype"] },
                        postgraduate: { name: "Advanced Full Stack Course", duration: "6-12 months", institutions: ["Scaler Academy", "Masai School", "Newton School", "UpGrad"] },
                        advanced: { name: "System Design Workshops", duration: "Varies", institutions: ["Various"] }
                    }
                },
                {
                    id: "data-science",
                    name: "Data Science & Analytics (Short Term)",
                    description: "Learn to analyze data to extract insights and drive decision making.",
                    careerOptions: ["Data Analyst", "Junior Data Scientist", "Business Intelligence Analyst"],
                    educationPath: {
                        undergraduate: { name: "Certification Programs", duration: "6 months", institutions: ["Coursera (Google/IBM certificates)", "Udacity", "DataCamp"] },
                        postgraduate: { name: "PG Diploma in Data Science", duration: "11 months", institutions: ["IIIT Bangalore (upGrad)", "Great Lakes (Great Learning)"] },
                        advanced: { name: "-", duration: "-", institutions: ["-"] }
                    }
                },
                {
                    id: "graphic-design",
                    name: "Graphic Design & Multimedia",
                    description: "Visual communication using text, photography, and illustration.",
                    careerOptions: ["Graphic Designer", "Video Editor", "Motion Graphics Artist"],
                    educationPath: {
                        undergraduate: { name: "Diploma in Graphic Design", duration: "1 year", institutions: ["Arena Animation", "MAAC", "NID (Short courses)", "Keltron"] },
                        postgraduate: { name: "Advanced Diploma", duration: "1 year", institutions: ["NID", "Srishti"] },
                        advanced: { name: "-", duration: "-", institutions: ["-"] }
                    }
                },
                {
                    id: "logistics-supply-chain",
                    name: "Logistics & Supply Chain Management",
                    description: "Management of the flow of goods and services.",
                    careerOptions: ["Logistics Coordinator", "Supply Chain Analyst", "Inventory Manager", "Warehouse Manager"],
                    educationPath: {
                        undergraduate: { name: "Diploma in Logistics", duration: "6-12 months", institutions: ["CII Institute of Logistics", "Safexpress", "Kerala Institute of Tourism and Travel Studies (KITTS)"] },
                        postgraduate: { name: "PG Diploma in Supply Chain", duration: "1 year", institutions: ["IIMM", "Symbiosis (Distance)", "Indian Institute of Logistics"] },
                        advanced: { name: "-", duration: "-", institutions: ["-"] }
                    }
                }
            ]
        },
        {
            id: "islamic-studies",
            icon: "🕌",
            name: "Islamic Studies",
            description: "Interested in combining traditional Islamic knowledge with modern education? Explore prestigious institutions and career paths in Islamic Studies.",
            subdomains: [
                {
                    id: "al-azhar",
                    name: "Al-Azhar University (Egypt)",
                    description: "Global leader in Sunni Islamic scholarship. Offers courses in Theology, Sharia, as well as Medicine and Engineering.",
                    careerOptions: ["Islamic Scholar", "Mufti", "Academic / Professor", "Medical/Engineering Professional (with Islamic background)", "Diplomat"],
                    educationPath: {
                        undergraduate: { name: "BA in Theology / Sharia / Medicine / Engineering", duration: "4-6 years", institutions: ["Al-Azhar University, Cairo"] },
                        postgraduate: { name: "MA in Islamic Studies / Secular Fields", duration: "2-3 years", institutions: ["Al-Azhar University"] },
                        advanced: { name: "Ph.D. in Islamic Studies / Specialized Fields", duration: "3-5 years", institutions: ["Al-Azhar University"] }
                    }
                },
                {
                    id: "iium",
                    name: "IIUM (Malaysia)",
                    description: "International Islamic University Malaysia. Integrates Islamic values with comprehensive professional education.",
                    careerOptions: ["Islamic Banker", "Lawyer (Sharia/Civil)", "Educator", "Engineer", "IT Professional"],
                    educationPath: {
                        undergraduate: { name: "Bachelor's in Islamic Revealed Knowledge / Law / Engineering / Economics", duration: "4 years", institutions: ["International Islamic University Malaysia (IIUM), Kuala Lumpur"] },
                        postgraduate: { name: "Master’s degree", duration: "2 years", institutions: ["IIUM"] },
                        advanced: { name: "Ph.D.", duration: "3-5 years", institutions: ["IIUM"] }
                    }
                },
                {
                    id: "madinah-university",
                    name: "Islamic University of Madinah",
                    description: "Prestigious university in Saudi Arabia focusing on Islamic sciences.",
                    careerOptions: ["Islamic Scholar", "Da'ee (Preacher)", "Academic", "Translator"],
                    educationPath: {
                        undergraduate: { name: "BA in Sharia / Quran / Hadith / Dawah", duration: "4 years", institutions: ["Islamic University of Madinah"] },
                        postgraduate: { name: "MA in Islamic Sciences", duration: "2-3 years", institutions: ["Islamic University of Madinah"] },
                        advanced: { name: "Ph.D.", duration: "3-5 years", institutions: ["Islamic University of Madinah"] }
                    }
                },
                {
                    id: "darul-uloom",
                    name: "Darul Uloom Deoband / Nadwa",
                    description: "Traditional Islamic seminaries in India renowned for classical Islamic education.",
                    careerOptions: ["Imam", "Teacher (Madrasa/School)", "Mufti", "Writer / Author", "Qadi"],
                    educationPath: {
                        undergraduate: { name: "Alim Course", duration: "5-6 years", institutions: ["Darul Uloom Deoband", "Nadwatul Ulama Lucknow", "Darul Huda Islamic University (Kerala)"] },
                        postgraduate: { name: "Fazil / Ifta (Specialization in Jurisprudence)", duration: "2 years", institutions: ["Deoband", "Nadwa", "Darul Huda"] },
                        advanced: { name: "-", duration: "-", institutions: ["-"] }
                    }
                }
            ]
        },
        {
            id: "various-competitive-exams-india",
            icon: "🏆",
            name: "Competitive Exams (India)",
            description: "Gateway to prestigious careers in Government, Engineering, Medicine, and Law via entrance exams.",
            subdomains: [
                {
                    id: "engineering-entrance-exams",
                    name: "Engineering Entrance Exams",
                    description: "Exams for admission to undergraduate engineering programs in IITs, NITs, and other premier institutes.",
                    careerOptions: ["Engineer", "Scientist", "Technocrat"],
                    educationPath: {
                        undergraduate: { name: "JEE Main, JEE Advanced, KEAM, BITSAT, VITEEE, GATE (PG)", duration: "Exam", institutions: ["NTA", "IITs", "CEE Kerala", "BITS", "VIT"] },
                        postgraduate: { name: "GATE / JAM", duration: "Exam", institutions: ["IITs", "IISc"] },
                        advanced: { name: "-", duration: "-", institutions: ["-"] }
                    }
                },
                {
                    id: "medical-entrance-exams",
                    name: "Medical Entrance Exams",
                    description: "Single entrance exam for MBBS, BDS, and other medical courses in India.",
                    careerOptions: ["Doctor", "Dentist", "Medical Specialist"],
                    educationPath: {
                        undergraduate: { name: "NEET UG", duration: "Exam", institutions: ["National Testing Agency (NTA)"] },
                        postgraduate: { name: "NEET PG / INI-CET", duration: "Exam", institutions: ["NBE", "AIIMS"] },
                        advanced: { name: "NEET SS (Super Specialty)", duration: "Exam", institutions: ["NBE"] }
                    }
                },
                {
                    id: "law-entrance-exams",
                    name: "Law Entrance Exams",
                    description: "Exams for admission to National Law Universities and other top law schools.",
                    careerOptions: ["Lawyer", "Judge", "Corporate Counsel"],
                    educationPath: {
                        undergraduate: { name: "CLAT, AILET, LSAT India, KLEE", duration: "Exam", institutions: ["Consortium of NLUs", "NLU Delhi", "CEE Kerala"] },
                        postgraduate: { name: "CLAT PG / AILET PG", duration: "Exam", institutions: ["NLUs"] },
                        advanced: { name: "-", duration: "-", institutions: ["-"] }
                    }
                },
                {
                    id: "management-entrance-exams",
                    name: "Management Entrance Exams",
                    description: "Exams for admission to MBA and PGDM programs in IIMs and top B-schools.",
                    careerOptions: ["Manager", "Consultant", "Entrepreneur"],
                    educationPath: {
                        undergraduate: { name: "IPMAT", duration: "Exam", institutions: ["IIM Indore", "IIM Rohtak"] },
                        postgraduate: { name: "CAT, XAT, CMAT, MAT, KMAT", duration: "Exam", institutions: ["IIMs", "XLRI", "NTA", "KMAT Kerala"] },
                        advanced: { name: "-", duration: "-", institutions: ["-"] }
                    }
                },
                {
                    id: "civil-services-government-jobs",
                    name: "Civil Services & Govt Jobs",
                    description: "Recruitment exams for administrative, police, and other government services.",
                    careerOptions: ["IAS/IPS Officer", "Bank Officer", "SSC Officer"],
                    educationPath: {
                        undergraduate: { name: "UPSC CSE, SSC CGL, IBPS PO, SBI PO, RBI Grade B, Kerala PSC", duration: "Exam", institutions: ["UPSC", "SSC", "IBPS", "Kerala PSC"] },
                        postgraduate: { name: "-", duration: "-", institutions: ["-"] },
                        advanced: { name: "-", duration: "-", institutions: ["-"] }
                    }
                },
                {
                    id: "defense-paramilitary",
                    name: "Defense Services Exams",
                    description: "Exams for joining the Indian Armed Forces and Paramilitary Tests.",
                    careerOptions: ["Army Officer", "Navy Officer", "Air Force Pilot"],
                    educationPath: {
                        undergraduate: { name: "NDA, CDS, AFCAT", duration: "Exam", institutions: ["UPSC", "Indian Air Force"] },
                        postgraduate: { name: "-", duration: "-", institutions: ["-"] },
                        advanced: { name: "-", duration: "-", institutions: ["-"] }
                    }
                },
                {
                    id: "teaching-research",
                    name: "Teaching & Research Exams",
                    description: "Exams for eligibility as Assistant Professor and Junior Research Fellowship.",
                    careerOptions: ["Professor", "Researcher", "School Teacher"],
                    educationPath: {
                        undergraduate: { name: "CTET, KTET", duration: "Exam", institutions: ["CBSE", "Pareeksha Bhavan Kerala"] },
                        postgraduate: { name: "UGC NET / CSIR NET / SET", duration: "Exam", institutions: ["NTA", "LBS Kerala"] },
                        advanced: { name: "-", duration: "-", institutions: ["-"] }
                    }
                },
                {
                    id: "design-architecture",
                    name: "Design & Architecture Exams",
                    description: "Entrance exams for Design and Architecture programs.",
                    careerOptions: ["Architect", "Designer"],
                    educationPath: {
                        undergraduate: { name: "NATA, JEE Main Paper 2, NID DAT, NIFT Entrance", duration: "Exam", institutions: ["Council of Architecture", "NTA", "NID", "NIFT"] },
                        postgraduate: { name: "CEED", duration: "Exam", institutions: ["IIT Bombay"] },
                        advanced: { name: "-", duration: "-", institutions: ["-"] }
                    }
                },
                {
                    id: "professional-scholarship-exams",
                    name: "Professional & Scholarship Exams",
                    description: "Various other competitive exams and scholarships.",
                    careerOptions: ["Professional", "Scholar"],
                    educationPath: {
                        undergraduate: { name: "CA Foundation, CS, CMA, CUET", duration: "Exam", institutions: ["ICAI", "ICSI", "ICMAI", "NTA"] },
                        postgraduate: { name: "-", duration: "-", institutions: ["-"] },
                        advanced: { name: "-", duration: "-", institutions: ["-"] }
                    }
                },
                {
                    id: "international-language-exams",
                    name: "Study Abroad / Language",
                    description: "Exams for studying abroad and language proficiency.",
                    careerOptions: ["International Student", "Immigrant"],
                    educationPath: {
                        undergraduate: { name: "SAT, IELTS, TOEFL, GRE, GMAT", duration: "Exam", institutions: ["College Board", "British Council/IDP", "ETS"] },
                        postgraduate: { name: "-", duration: "-", institutions: ["-"] },
                        advanced: { name: "-", duration: "-", institutions: ["-"] }
                    }
                }
            ]
        },
        {
            id: "education",
            icon: "🎓",
            name: "Education & Teaching",
            description: "Passionate about shaping young minds? Interested in pedagogy and educational leadership? A career in Education is noble and rewarding.",
            subdomains: [
                {
                    id: "teaching-school",
                    name: "School Teaching",
                    description: "Teaching at primary, secondary, or higher secondary levels.",
                    careerOptions: ["Primary Teacher", "High School Teacher", "Higher Secondary Teacher", "Principal"],
                    educationPath: {
                        undergraduate: { name: "B.Ed (Bachelor of Education) / D.El.Ed / Integrated B.Ed", duration: "2-4 years", institutions: ["Regional Institutes of Education (NCERT)", "Government Training Colleges", "Universities in Kerala"] },
                        postgraduate: { name: "M.Ed (Master of Education)", duration: "2 years", institutions: ["Central Universities", "Government Training Colleges"] },
                        advanced: { name: "Ph.D. in Education", duration: "3-5 years", institutions: ["Universities", "NCERT"] }
                    }
                },
                {
                    id: "special-education",
                    name: "Special Education",
                    description: "Teaching students with different needs and disabilities.",
                    careerOptions: ["Special Educator", "Rehabilitation Psychologist", "Educational Therapist"],
                    educationPath: {
                        undergraduate: { name: "B.Ed (Special Education)", duration: "2 years", institutions: ["Institutes recognized by RCI (Rehabilitation Council of India)"] },
                        postgraduate: { name: "M.Ed (Special Education)", duration: "2 years", institutions: ["RCI recognized institutes"] },
                        advanced: { name: "Ph.D. in Special Education", duration: "3-5 years", institutions: ["National Institutes"] }
                    }
                },
                {
                    id: "higher-education",
                    name: "Higher Education / Academia",
                    description: "Teaching and research at colleges and universities.",
                    careerOptions: ["Assistant Professor", "Lecturer", "Researcher", "Vice Chancellor"],
                    educationPath: {
                        undergraduate: { name: "Bachelor's Degree in Subject", duration: "3-4 years", institutions: ["Colleges/Universities"] },
                        postgraduate: { name: "Master's Degree + NET/SET", duration: "2 years", institutions: ["Universities"] },
                        advanced: { name: "Ph.D.", duration: "3-5 years", institutions: ["Universities/IITs/Research Institutes"] }
                    }
                }
            ]
        }
    ]
};
