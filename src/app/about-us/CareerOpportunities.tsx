"use client";
import { ChevronRight } from 'lucide-react';
import { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import Link from 'next/link';
import HiringModelClass from '../../model/HiringmodelReknew';

// Helper to wrap the class as a React component
const HiringModel = (props) => {
    const instance = useRef(null);
    if (!instance.current) {
        instance.current = new HiringModelClass(props);
    }
    // Update props on every render
    instance.current.props = props;
    return instance.current.render();
};

const CareerOpportunities = ({ openHiringModal }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [selectedJobb, setSelectedJobb] = useState(null);
    const [isModalOpenn, setIsModalOpenn] = useState(false);
    const [isHiringModalOpen, setIsHiringModalOpen] = useState(false);

    useEffect(() => {
        const checkTheme = () => {
            const isDark =
                document.documentElement.classList.contains('dark') ||
                document.body.classList.contains('dark') ||
                localStorage.getItem('theme') === 'dark';
            setIsDarkMode(isDark);
        };

        checkTheme();

        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    checkTheme();
                }
            });
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class'],
        });

        observer.observe(document.body, {
            attributes: true,
            attributeFilter: ['class'],
        });

        const handleStorageChange = (e) => {
            if (e.key === 'theme') {
                checkTheme();
            }
        };

        window.addEventListener('storage', handleStorageChange);
        window.addEventListener('themeChanged', checkTheme);

        return () => {
            observer.disconnect();
            window.removeEventListener('storage', handleStorageChange);
            window.removeEventListener('themeChanged', checkTheme);
        };
    }, []);

    const JobModal = ({ job, onClose }) => {
        // Add effect to disable body scrolling when modal is open
        useEffect(() => {
            if (job) {
                document.body.style.overflow = 'hidden';
            }
            
            return () => {
                document.body.style.overflow = 'auto';
            };
        }, [job]);

        const handleClose = () => {
            onClose();
        };
        
        if (!job) return null;
        return (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-[9999] flex justify-center items-center p-4 animate-fadeIn">
                <div className={`rounded-xl shadow-2xl w-full max-w-7xl h-[90vh] flex flex-col animate-scaleIn${isDarkMode ? " bg-gray-800" : " bg-white"}`}>
                    {/* Header */}
                    <div className={`border-b p-4 flex justify-between items-center flex-shrink-0${isDarkMode ? " border-gray-700" : " border-gray-100"}`}>
                        <h2 className={`text-2xl font-bold${isDarkMode ? " text-gray-100" : " text-gray-900"}`}>{job.title}</h2>
                        <button onClick={handleClose} className={`p-2 rounded-full transition-colors${isDarkMode ? " hover:bg-gray-700" : " hover:bg-gray-100"}`} aria-label="Close modal">
                            <X className={`w-6 h-6${isDarkMode ? " text-gray-400" : " text-gray-600"}`} />
                        </button>
                    </div>

                    {/* Scrollable content */}
                    <div className={`p-6 whitespace-pre-line overflow-y-auto flex-1 max-h-[calc(90vh-150px)]${isDarkMode ? " text-gray-300" : " text-gray-900"}`} data-lenis-prevent>
                        <div className="mb-6 flex flex-col sm:flex-row sm:items-center gap-4">
                            <div className="px-3 py-1.5 bg-[#FF512F] text-white rounded-full text-sm font-medium">{job.location}</div>
                            <div className="px-3 py-1.5 bg-[#FF512F] text-white rounded-full text-sm font-medium">{job.type}</div>
                        </div>

                        <div className="prose prose-blue max-w-none">
                            {job.description.split('\n').map((paragraph, index) => (
                                <p key={index} className={paragraph.trim() === '' ? 'my-4' : ''}>
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>

                    {/* Footer */}
                    <div className={`border-t p-4 flex justify-end flex-shrink-0${isDarkMode ? " border-gray-700" : " border-gray-100"}`}>
                        <Link
                            href={job.applyLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-2.5 bg-[#FF512F] text-white rounded-md hover:bg-[#FF512F]/80 transition-colors duration-200 font-medium">
                            Apply for this position
                        </Link>
                    </div>
                </div>
            </div>
        );
    };

    const JobCard = ({ title, location, type, delay = 0, onViewDetails, applyLink }) => {
        return (
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(255, 81, 47, 0.1)' }}
                className={`rounded-lg border p-6 transition-all duration-300${isDarkMode ? " bg-gray-800 border-gray-700 hover:border-[#FF512F]/30" : " bg-white border-gray-200 hover:border-[#FF512F]/30"}`}>
                <h5 className={`font-semibold text-lg mb-2${isDarkMode ? " text-gray-100" : " text-[#374151]"}`}>{title}</h5>
                <div className="flex flex-col gap-2 mb-4">
                    <div className={`flex items-center text-sm${isDarkMode ? " text-gray-400" : " text-gray-500"}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {location}
                    </div>
                    <div className={`flex items-center text-sm${isDarkMode ? " text-gray-400" : " text-gray-500"}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {type}
                    </div>
                </div>
                <span
                    onClick={onViewDetails}
                    className="text-sm cursor-pointer font-medium text-[#FF512F] hover:text-[#FF8A63] flex items-center transition-colors duration-200">
                    Learn More
                    <ChevronRight className="ml-1 w-4 h-4" />
                </span>
            </motion.div>
        );
    };

    const openHiringModalHandler = useCallback(() => {
        setIsHiringModalOpen(true);
    }, []);

    const closeHiringModalHandler = useCallback(() => {
        setIsHiringModalOpen(false);
    }, []);

    const handleViewDetailss = (job) => {
        setSelectedJobb(job);
        setIsModalOpenn(true);
    };
    const closeModal = () => {
        setIsModalOpenn(false);
        setSelectedJobb(null);
    };
    return (
        <section className={`relative py-32 overflow-hidden`}>
            <div className="container mx-auto px-6 relative">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center${isDarkMode ? " text-white" : " text-gray-900"}`}>
                            Bring your brilliance.
                            <span className="relative inline-block mx-2">
                                <span className="relative z-10 text-[#FF512F]">Build what&apos;s next.</span>
                                <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5c30-5 70-5 100 0" stroke="#FF512F" strokeWidth="2" fill="none" className="transition-all duration-300" />
                                </svg>
                            </span>
                        </h2>
                        <p className={`text-base md:text-lg max-w-5xl mx-auto${isDarkMode ? " text-gray-400" : " text-gray-600"}`}>
                            ReKnew seeks curious minds, problem solvers, and engineers who want to work with cutting-edge technology. The company believes in
                            work-life balance for the team and fosters pride and belonging as they create value for customers.
                        </p>
                    </div>

                    {/* Job Listings */}
                    <div className="mb-12 max-w-7xl">
                        <div>
                            <h3 className="text-lg font-bold mb-8 text-center">
                                <span className="bg-gradient-to-r from-[#FF512F] to-[#FF8A63] bg-clip-text text-transparent">Current Openings</span>
                            </h3>

                            {/* Engineering Department */}
                            <div className="mb-10">
                                <h4 className={`text-lg font-semibold mb-4 border-b pb-2${isDarkMode ? " text-gray-200 border-gray-700" : " text-[#374151] border-gray-200"}`}>
                                    Engineering & Data
                                </h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {[
                                        // {
                                        //     title: 'AI/ML Engineer',
                                        //     location: 'Hyderabad / IND',
                                        //     type: 'Full-time',
                                        //     applyLink: 'https://www.linkedin.com/company/reknew-business-solutions?trk=public_jobs_topcard-org-name'
                                        // },
                                        // {
                                        //     title: 'Gen AI - Agent Engineer',
                                        //     location: 'Hyderabad / IND',
                                        //     type: 'Full-time',
                                        //     applyLink: 'https://www.linkedin.com/company/reknew-business-solutions?trk=public_jobs_topcard-org-name'
                                        // },
                                        // {
                                        //     title: 'Data & AI Solutions Delivery Lead',
                                        //     location: 'Dallas / United States',
                                        //     type: 'Full-time',
                                        //     applyLink:
                                        //         'https://www.linkedin.com/jobs/search/?currentJobId=4228050954&f_C=107208988&geoId=92000000&origin=COMPANY_PAGE_JOBS_CLUSTER_EXPANSION&originToLandingJobPostings=4228908238%2C4228050985%2C4228050954%2C4227362486%2C4228913006&position=3&pageNum=0'
                                        // }

                                        {
                                            title: ' AI/ML Engineer',
                                            location: 'Remote / IND',
                                            type: 'Full-time',
                                            description: `
ReKnew Overview
We are ReKnew! Our mission is to help Enterprises revitalize their core business and organization by positioning themselves for the new world of AI. ReKnew is a startup founded by practitioners, surrounded by advisors and built on decades of experience in Enterprise technology, data, analytics, AI, digital and automation across industries. We are looking for top talent to join us in this mission. 

Description
We’re seeking a hands-on AI/ML Engineer with deep expertise in large language models, retrieval-augmented generation (RAG), and cloud-native ML development on AWS. You'll be a key driver in building scalable, intelligent learning systems powered by cutting-edge AI and robust AWS infrastructure.
If you’re passionate about combining NLP, deep learning, and real-world application at scale—this is the role for you.

Core Skills & Technologies

LLM Ecosystem & APIs
• OpenAI, Anthropic, Cohere
• Hugging Face Transformers
• LangChain, LlamaIndex (RAG orchestration)

Vector Databases & Indexing
• FAISS, Pinecone, Weaviate

AWS-Native & ML Tooling
• Amazon SageMaker (training, deployment, pipelines)
• AWS Lambda (event-driven workflows)
• Amazon Bedrock (foundation model access)
• Amazon S3 (data lakes, model storage)
• AWS Step Functions (workflow orchestration)
• AWS API Gateway & IAM (secure ML endpoints)
• CloudWatch, Athena, DynamoDB (monitoring, analytics, structured storage)

Languages & ML Frameworks
• Python (primary), PyTorch, TensorFlow
• NLP, RAG systems, embeddings, prompt engineering

What You’ll Do

• Model Development & Tuning
  o Fine-tune and deploy LLMs and custom models using AWS SageMaker
  o Build RAG pipelines with LlamaIndex/LangChain and vector search engines

• Scalable AI Infrastructure
  o Architect distributed model training and inference pipelines on AWS
  o Design secure, efficient ML APIs with Lambda, API Gateway, and IAM

• Product Integration
  o Embed intelligent systems (tutoring agents, recommendation engines) into learning platforms using Bedrock, SageMaker, and AWS-hosted endpoints

• Rapid Experimentation
  o Prototype multimodal and few-shot learning workflows using AWS services
  o Automate experimentation and A/B testing with Step Functions and SageMaker Pipelines

• Data & Impact Analysis
  o Leverage S3, Athena, and CloudWatch to define metrics and continuously optimize AI performance

• Cross-Team Collaboration
  o Work closely with educators, designers, and engineers to deliver AI features that enhance student learning

Who You Are
• Deeply Technical: Strong foundation in machine learning, deep learning, and NLP/LLMs
• AWS-Fluent: Extensive experience with AWS ML services (especially SageMaker, Lambda, and Bedrock)
• Product-Minded: You care about user experience and turning ML into real-world value
• Startup-Savvy: Comfortable with ambiguity, fast iterations, and wearing many hats
• Mission-Aligned: Passionate about education, human learning, and AI for good

Bonus Points
• Hands-on experience fine-tuning LLMs or building agentic systems using AWS
• Open-source contributions in AI/ML or NLP communities
• Familiarity with AWS security best practices (IAM, VPC, private endpoints)
`,
                                            applyLink: 'https://www.linkedin.com/company/reknew-business-solutions?trk=public_jobs_topcard-org-name'
                                        },
                                        {
                                            title: 'Gen AI/ Agent Engineer',
                                            location: 'Remote / IND',
                                            type: 'Full-time',
                                            description: `
ReKnew is a cutting-edge startup on a mission to help enterprises revitalize their core business functions through transformative AI. Founded by experienced practitioners and guided by expert advisors, we specialize in leveraging decades of enterprise experience in technology, data, analytics, automation, and AI.

As a key member of our Gen AI team, you'll help architect and build intelligent, scalable, AI-powered agents that enhance workflows across sales, customer success, HR, finance, and more.

What You’ll Do:
- Build scalable and interoperable Gen AI agents to automate and reimagine enterprise workflows.
- Rapidly prototype and validate AI solutions, transitioning POCs into production-ready systems.
- Design systems that handle variability in generative AI outputs with robust guardrails.
- Collaborate on prompt engineering through iteration and cross-functional insights.
- Research and incorporate the latest in LLM and Gen AI technologies.
- Drive innovation by proposing new product features based on emerging AI capabilities.

Core Skills & Technologies:
- Strong programming experience with Python and/or JavaScript/TypeScript.
- Familiarity with deep learning frameworks such as PyTorch, TensorFlow, or JAX.
- Knowledge of NLP, embeddings, and text processing.
- Hands-on experience with prompt engineering and model fine-tuning.
- Solid data engineering and system design skills.

Agent-Specific Expertise:
- Understanding of agent architecture and memory systems.
- Integration with tools, APIs, and data sources.
- Planning algorithms and multi-agent collaboration.
- Human/automated feedback loop design and evaluation frameworks.

Specialized Knowledge:
- Reinforcement Learning (including RLHF), RAG pipelines.
- Deployment: APIs, containerization, and serving infrastructure.
- LLMOps: Monitoring, updating, and managing LLMs in production.
- Experience with vector databases and similarity search.

Who You Are:
- A seasoned software engineer with a strong Python background.
- Skilled in building 0–1 Gen AI products and agentic workflows.
- Experienced in evaluation frameworks and human-in-the-loop feedback.
- A prompt engineering expert with a passion for experimentation and iteration.
- A Gen AI advocate who understands and leverages the unique strengths of LLMs.
- An effective communicator who collaborates well with technical and non-technical stakeholders.

Join us at ReKnew to shape the future of enterprise AI.
`,
                                            applyLink: 'https://www.linkedin.com/company/reknew-business-solutions?trk=public_jobs_topcard-org-name'
                                        },
                                        {
                                            title: 'Data & AI Solutions Delivery Lead',
                                            location: 'Remote / United States',
                                            type: 'Full-time',
                                            description: `
**ReKnew Overview**

We are ReKnew! Our mission is to help Enterprises revitalize their core business and organization by positioning themselves for the new world of AI.  
ReKnew is a startup founded by practitioners, surrounded by advisors and built on decades of experience in Enterprise technology, data, analytics, AI, digital and automation across industries. We are looking for top talent to join us in this mission.

**Description**

We are seeking Solutions Delivery Leads (AI & Data) with a strong background in AI, data engineering, and cloud technologies, combined with a proven track record in project delivery and client engagements. This is an exciting opportunity to join a startup focused on partnering with enterprises to revitalize their business and play a critical role in the expansion of our AI, Data, and Analytics practice.

**Key Responsibilities**
- Lead AI & Data initiatives by collaborating with senior client stakeholders and strategic partners across industries such as Retail, Banking and Financial Services Industry, Health Care and Life Sciences.
  - Drive pipeline growth, respond to RFPs, and develop innovative AI-enabled data solutions.
  - Conduct assessments, workshops and capability presentations.
  - Shape AI-powered cloud and data transformation programs.
- Architect AI-driven Data Solutions using modern cloud and big data technologies built on Enterprise Architecture principles.
  - Design enterprise-scale AI systems using advanced ML/AI frameworks and cloud-native services.
  - Design intelligent data platforms enabling predictive analytics, real-time insights, and autonomous operations.
- Standardize and Accelerate AI Delivery Frameworks
  - Design reusable frameworks for data ingestion, transformation, feature engineering, and model deployment using Spark, Kafka, and other streaming tools.
  - Develop architecture patterns and blueprints for Generative AI / Agentic solutions using cloud services and frameworks such as Langgraph, MCP and A2A.
  - Define architectural best practices for hybrid environments (on-prem/cloud) leveraging platforms like Azure Synapse, Databricks, AWS Sagemaker, or Google Vertex AI.
- Drive Scalable AI Data Infrastructure
  - Design data architecture and infrastructure optimized for AI, leveraging cloud services, data warehouses (Snowflake, Databricks, etc.), data movement (AWS Glue, etc.) and transformation tools (dbt, etc.).
  - Design integrated data management solutions built on data maturity principles, AI governance requirements and optimized for cohesive end user experience.
- Engage with Senior Tech Stakeholders
  - Understand enterprise goals, identify AI and automation opportunities, and propose cutting-edge solutions using a blend of data engineering and AI/ML/GenAI/Agents.

**Skills & Attributes for Success**
- **Deep AI/ML & Data Engineering Knowledge**
  - Strong understanding of AI/ML lifecycle, MLOps, and related tools (e.g., MLFlow, Kubeflow, Airflow).
  - Experience integrating ML models into data pipelines at scale.
  - Experience designing and deploying GenAI / LLM solutions.
  - Experience designing and deploying Agentic solutions including Multi-Agent architectures, Model Context Protocol (MCP), agentic tool use and integration with front-end and back-end systems and workflows.
- **Cloud and Big Data Expertise**
  - Proven architecture experience across AWS, Azure, and GCP, with proficiency in services such as SageMaker, Azure ML, BigQuery, and more.
  - Deep knowledge of data platforms such as Snowflake and/or Hadoop ecosystem, Spark (Streaming & SQL), and distributed computing.
- **Real-Time and Batch Processing Capabilities**
  - Expertise in building real-time analytics and streaming solutions using Apache Kafka, Spark Streaming, Apache Flink.
  - Experience with NoSQL systems (e.g., Cassandra, MongoDB) and workflow engines like Apache Oozie.
- **Data Security and Governance**
  - Strong knowledge in implementing data security at rest and in motion, encryption standards, access controls, and compliance.
- **Performance Engineering**
  - Skilled in benchmarking performance for Enterprise AI applications, optimizing for speed, scale, and cost.
- **Client Engagement and Delivery Leadership**
  - Ability to bridge the gap between business needs and technical solutions, ensuring alignment on architecture, scalability, security, and outcomes.

This role is ideal for professionals looking to blend their technical depth in AI/data engineering with strategic leadership in client delivery and solutioning.  
If you're passionate about building intelligent data platforms that enable Enterprise-wide transformation, we’d love to hear from you!
  `,
                                            applyLink:
                                                'https://www.linkedin.com/jobs/search/?currentJobId=4228050954&f_C=107208988&geoId=92000000&origin=COMPANY_PAGE_JOBS_CLUSTER_EXPANSION&originToLandingJobPostings=4228908238%2C4228050985%2C4228050954%2C4227362486%2C4228913006&position=3&pageNum=0'
                                        }
                                    ].map((job, index) => (
                                        <JobCard
                                            key={index}
                                            title={job.title}
                                            location={job.location}
                                            type={job.type}
                                            delay={index * 0.1}
                                            applyLink={job.applyLink}
                                            onViewDetails={() => handleViewDetailss(job)}
                                        />
                                    ))}
                                </div>
                                <JobModal onClose={closeModal} job={selectedJobb} />
                            </div>
                        </div>
                    </div>

                    <div className="max-w-7xl mx-auto mt-2">
                        <div className={`bg-gradient-to-r rounded-xl p-3 border border-[#FF512F]/20${isDarkMode ? " from-[#FF512F]/20 to-[#FF8A63]/20" : " from-[#FF512F]/10 to-[#FF8A63]/10"}`}>
                            <h3 className={`text-lg md:text-xl lg:text-2xl font-semibold text-center${isDarkMode ? " text-[#FF512F]" : " text-[#FF512F]"}`}>
                                Don&apos;t see a perfect fit
                            </h3>
                            <p className={`text-base md:text-lg lg:text-xl mt-4 text-center${isDarkMode ? " text-gray-300" : " text-gray-900"}`}>
                                If you are an engineer at heart and have deep work ethic, share your GitHub link.
                                <br></br>
                            </p>
                            <div className="flex justify-center mt-4">
                                <button
                                    className="relative w-fit mx-auto group inline-flex items-center justify-center px-6 py-3 overflow-hidden rounded-lg bg-gradient-to-r from-[#FF512F] to-[#FF8A63] hover:from-[#FF8A63] hover:to-[#FF512F] transition-all duration-300 ease-out hover:scale-105 transform"
                                    onClick={openHiringModalHandler}
                                >
                                    <span className="relative flex justify-center items-center text-base font-semibold text-white tracking-wide">
                                        Join Our Team
                                        <ChevronRight className="ml-2 w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* HiringModel Modal */}
                    <HiringModel
                        isOpen={isHiringModalOpen}
                        onClose={closeHiringModalHandler}
                        isDarkMode={isDarkMode}
                    />
                </div>
            </div>
        </section>
    );
};

export default CareerOpportunities;
