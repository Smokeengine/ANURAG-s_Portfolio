export const myProjects = [
  {
    id: 1,
    title: "Production RAG Inference System",
    description:
      "A production-grade Retrieval-Augmented Generation system built over a 1,700+ document knowledge base, featuring advanced retrieval strategies, automated quality evaluation, and optimized inference pipelines achieving sub-200ms median query latency.",
    subDescription: [
      "Achieved 175ms median and 328ms average query latency by implementing BM25 re-ranking, MMR diversification, and controlled top-k retrieval with batch embedding at 128 chunks per batch, eliminating redundant vectorization via content hashing.",
      "Built hybrid retrieval pipeline using Ollama, Mistral, and ChromaDB with configurable re-ranking strategies, enabling flexible document ingestion and real-time semantic search across large knowledge bases.",
      "Instrumented retrieval quality using RAGAS evaluation metrics including context recall, faithfulness, and answer relevancy, establishing automated regression baselines to detect pipeline degradation across document and model updates.",
      "Designed modular architecture supporting document versioning, incremental indexing, and multi-format ingestion, enabling seamless scaling of the knowledge base without full re-vectorization.",
    ],
    href: "https://github.com/Smokeengine/rag-chatbot",
    logo: "",
    image: "/assets/projects/rag.png",
    tags: [
      { id: 1, name: "Python", path: "/assets/projects/icons8-python.svg" },
      { id: 2, name: "Ollama", path: "/assets/projects/ollama.svg" },
      { id: 3, name: "ChromaDB", path: "/assets/projects/chromadb.svg" },
      { id: 4, name: "FastAPI", path: "/assets/projects/fastapi.svg" },
      { id: 5, name: "Docker", path: "/assets/projects/docker.svg" },
    ],
  },
  {
    id: 2,
    title: "LLM Evaluation Infrastructure",
    description:
      "A cross-model LLM benchmarking framework evaluating GPT-3.5, GPT-4, and Claude across zero-shot and few-shot prompting strategies over 2,400 samples, quantifying quality improvements and surfacing latency-accuracy trade-offs across model versions.",
    subDescription: [
      "Designed and executed a 2,400-sample evaluation framework benchmarking GPT-3.5, GPT-4, and Claude, quantifying a 21.49% average BLEU improvement via few-shot prompting and surfacing latency-quality trade-offs across models.",
      "Built automated regression testing harness integrating OpenAI and Anthropic APIs with BERTScore, BLEU, and SentenceBERT scoring, enabling reproducible benchmarking and quality drift detection across model versions.",
      "Implemented structured few-shot prompt engineering pipeline with configurable shot counts and example selection strategies, enabling systematic comparison of prompting strategies at scale.",
      "Designed evaluation reporting system with statistical aggregation across prompt types and models, producing interpretable latency-quality trade-off visualizations for model selection decisions.",
    ],
    href: "https://github.com/Smokeengine/Evaluating-Code-Summarization-using-LLMs",
    logo: "",
    image: "/assets/projects/llmeval.png",
    tags: [
      { id: 1, name: "Python", path: "/assets/projects/icons8-python.svg" },
      { id: 2, name: "OpenAI", path: "/assets/projects/openai.svg" },
      { id: 3, name: "Pandas", path: "/assets/projects/pandas.svg" },
      { id: 4, name: "Scikit-Learn", path: "/assets/projects/scikitlearn.svg" },
      { id: 5, name: "Numpy", path: "/assets/projects/numpy.svg" },
    ],
  },
  {
    id: 3,
    title: "CollabCode — Real-Time Collaborative Editor",
    description:
      "A real-time collaborative code editor supporting simultaneous multi-user editing with conflict-free synchronization, live cursor tracking, and a full-featured Monaco-based IDE experience, deployed on Railway and Vercel.",
    subDescription: [
      "Implemented conflict-free real-time collaboration using Yjs CRDTs and Socket.io, enabling multiple users to edit code simultaneously with automatic merge resolution and sub-100ms sync latency.",
      "Integrated Monaco Editor with full IDE features including syntax highlighting, IntelliSense, and multi-language support, resolving a circular update loop between onDidChangeContent and yText.observe using suppressRef and docReady guards.",
      "Built real-time presence system with live cursor tracking, user avatars, and active session indicators, providing full awareness of collaborator activity across editing sessions.",
      "Deployed backend on Railway and frontend on Vercel with environment-based configuration, WebSocket connection management, and graceful reconnection handling for production reliability.",
    ],
    href: "https://code-collab-gilt.vercel.app/login",
    logo: "",
    image: "/assets/projects/collabcode.png",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "NodeJs", path: "/assets/nodejs-icon.svg" },
      { id: 3, name: "Socket.io", path: "/assets/projects/socketio.svg" },
      { id: 4, name: "MongoDB", path: "/assets/mongodb-icon.svg" },
      { id: 5, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
  {
    id: 4,
    title: "Multimodal Emotion Recognition System",
    description:
      "A multimodal deep learning system that recognizes human emotions from both facial images and speech audio, combining VGG16 transfer learning and MFCC-based neural networks into a unified Streamlit application with live webcam and audio input.",
    subDescription: [
      "Built facial emotion recognition model using VGG16 transfer learning with TensorFlow, achieving 94% classification accuracy across 7 emotion classes through fine-tuning on labeled facial expression datasets.",
      "Developed speech emotion recognition pipeline using MFCC feature extraction and a deep neural network, achieving 85% accuracy on audio samples with real-time inference support for uploaded audio files.",
      "Designed unified Streamlit application fusing predictions from both modalities, enabling simultaneous emotion analysis from live webcam feed and audio file input with confidence score visualization.",
      "Implemented modular model architecture separating facial and audio pipelines, allowing independent retraining and evaluation of each modality without affecting the combined inference system.",
    ],
    href: "https://github.com/Smokeengine/MultiModal-Emotion-Recognition-System",
    logo: "",
    image: "/assets/projects/emotion.png",
    tags: [
      { id: 1, name: "Python", path: "/assets/projects/icons8-python.svg" },
      { id: 2, name: "TensorFlow", path: "/assets/projects/tensorflow.svg" },
      { id: 3, name: "Keras", path: "/assets/projects/keras.svg" },
      { id: 4, name: "OpenCV", path: "/assets/projects/opencv.svg" },
      { id: 5, name: "Scikit-Learn", path: "/assets/projects/scikitlearn.svg" },
    ],
  },
  {
    id: 5,
    title: "Career Compass",
    description:
      "A comprehensive full-stack job listing platform connecting job seekers with employers, featuring advanced filtering, cloud-based media storage, JWT authentication, and real-time application tracking across a responsive React frontend.",
    subDescription: [
      "Built scalable backend API using Node.js and Express.js with MongoDB, implementing JWT authentication, rate limiting, XSS protection, and data sanitization middleware for enterprise-level security.",
      "Developed responsive React frontend with Redux Toolkit for state management, React Router for navigation, and Tailwind CSS, ensuring optimal user experience across all devices.",
      "Implemented comprehensive job management system with advanced filtering, search functionality, and real-time application tracking using Axios and React Hook Form for optimized form handling.",
      "Integrated Amazon S3 for cloud-based media storage, bcrypt password hashing, role-based access control, and Mongoose schema validation for complete profile and company logo management.",
    ],
    href: "https://career-compasss.netlify.app/user-auth",
    logo: "",
    image: "/assets/projects/Career.png",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "NodeJs", path: "/assets/nodejs-icon.svg" },
      { id: 3, name: "ExpressJs", path: "/assets/expressjs-icon.svg" },
      { id: 4, name: "MongoDB", path: "/assets/mongodb-icon.svg" },
      { id: 5, name: "Amazon S3", path: "/assets/icons8-amazon-s3.svg" },
      { id: 6, name: "Redux", path: "/assets/projects/redux.svg" },
      { id: 7, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
];

export const mySocials = [
  {
    name: "Github",
    href: "https://github.com/Smokeengine",
    icon: "/assets/socials/github.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/anurag-vemula/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/smokeengine_x/",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
 {
    title: "AI | ML Engineer ",
    job: "Morgan Stanley",
    date: "Oct 2025 - Present",
    contents: [
      "Reduced inference latency by 40% across fraud scoring pipelines processing 15M+ daily transactions by optimizing distributed Spark workloads, improving feature pipeline efficiency, and eliminating upstream data bottlenecks under high-throughput conditions.",
"Built and operated scalable ML pipelines for real-time transaction scoring using Kubernetes, Docker, and SageMaker, enabling reliable training, batch inference, and deployment across multi-service production environments.",
"Improved system reliability and reduced manual review load by 34% by enhancing model calibration and thresholding strategies for highly imbalanced fraud datasets, increasing downstream decision efficiency.",
"Designed and implemented distributed data ingestion and processing workflows using Kafka and Spark, ensuring high availability, fault tolerance, and consistent throughput for large-scale financial data streams.",
"Reduced deployment and rollback time by 45% by introducing containerized, versioned ML pipelines with MLflow, enabling reproducible releases and safer production rollouts.",
"Improved observability across fraud scoring systems by implementing end-to-end monitoring for data drift, prediction quality, and pipeline health using CloudWatch and SQL-based diagnostics, reducing time-to-detect production issues."
      ],
  },
  {
    title: "Machine Learning Engineer",
    job: "Persistent Systems",
    date: "May 2021 - Nov 2023",
    contents: [
     " Designed machine learning and NLP solutions using Python, Scikit-learn, TensorFlow, NLTK, and FastAPI to automate customer support ticket classification and resolution workflows.",
"Implemented end-to-end ML pipelines for data preprocessing, feature extraction, model training, validation, and deployment using Azure ML, Docker, Git, Jenkins, and Kubernetes platforms.",
"Boosted ticket categorization accuracy by 31% through supervised learning models, text vectorization techniques, and deep learning-based intent recognition implementations for enterprise customer support automation workflows.",
"Integrated RESTful APIs and microservices with enterprise applications to support real-time chatbot responses, recommendation systems, and automated incident management operations.",
"Streamlined model training performance by 45% using distributed computing, GPU acceleration, parallel processing techniques, efficient data pipeline orchestration strategies across large-scale enterprise machine learning environments.",
"Coordinated with cross-functional development teams in Agile and Scrum environments while maintaining version control, CI/CD pipelines, testing, and production deployment activities.",
"Processed more than 8M+ enterprise support records using SQL, MongoDB, Apache Spark, and cloud-based analytics services to improve prediction quality and operational efficiency."
      ],
  },
  
];
export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];
