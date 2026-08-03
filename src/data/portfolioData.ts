export const portfolioData = {
  about: {
    name: "AniruddhRaam Srinivasan",
    title: "Backend & Systems Engineer / AI Researcher",
    email: "aniruddhraam07@gmail.com",
    phone: "+91 7338735357",
    location: "Bengaluru, Karnataka, India",
    interests: "Structural bioinformatics, mixed-solvent molecular dynamics, multi-agent AI systems, edge-deployable computer vision, high-concurrency B2B software architecture."
  },
  skills: {
    languages: ["Python", "Java", "Go", "C", "JavaScript", "SQL", "Jack"],
    ml_ai: ["LLMs (Ollama, Llama 3.1, Gemini)", "YOLOv11", "ONNX", "MLOps", "Scikit-learn", "OpenAI Whisper", "Pandas", "NumPy"],
    systems_infra: ["React.js", "Node.js", "Flask", "PostgreSQL", "Docker", "Azure DevOps", "Linux (Fedora, KDE Plasma)"]
  },
  experience: [
    {
      id: "iiit-research",
      role: "Research Apprentice",
      company: "IIIT Hyderabad",
      date: "Jan 2026 - Apr 2026",
      points: [
        "Spearheaded advanced bioinformatics research focused on the discovery of novel cryptic pockets for targeted cancer therapeutics.",
        "Executed and analyzed Mixed-Solvent Molecular Dynamics (MSMD) simulations utilizing GROMACS to identify hidden binding sites."
      ]
    },
    {
      id: "edeasy-ai",
      role: "AI Engineer Intern",
      company: "EdEasy",
      date: "Dec 2025 - Jan 2026",
      points: [
        "Designed complete end-to-end integration of AI endpoints (utilizing Gemini API) to process educational videos, providing automated summaries.",
        "Implemented real-time dynamic question customization for students with AI-based response analysis."
      ]
    }
  ],
  projects: [
    {
      id: "amrita-portal",
      name: "Amrita Project Portal",
      stack: ["React", "Node.js", "PostgreSQL", "Docker"],
      date: "Aug 2025 - Present",
      metrics: { status: "UP", latency: "45ms", uptime: "99.9%" },
      description: "Full-stack portal with secure PostgreSQL in Docker, supporting 2000+ students and 200+ faculty daily.",
      points: [
        "Engineered a project lifecycle module with secure JWT-based authentication, granular role-based authorization.",
        "Python/Flask API utilizing Regex for cumulative SGPA and CGPA parsing, and student grading support."
      ]
    },
    {
      id: "agentic-cognitive",
      name: "Agentic Cognitive Load Monitoring System",
      stack: ["Python", "Audio Processing", "AI Agents"],
      date: "2026",
      metrics: { status: "UP", latency: "110ms", uptime: "98.5%" },
      description: "Real-time stress monitoring system for aviation pilots, utilizing AI agents to analyze voice acoustics.",
      points: [
        "Engineered AI agents to analyze critical voice acoustic components including jitter and shimmer.",
        "Designed automated cognitive load evaluation metrics to provide instantaneous feedback."
      ]
    },
    {
      id: "linux-shell",
      name: "Linux Shell Replica",
      stack: ["C", "Linux System Calls"],
      date: "Dec 2025 - Feb 2026",
      metrics: { status: "UP", latency: "2ms", uptime: "100%" },
      description: "Fully functional Linux shell replica in C, implementing native system calls.",
      points: [
        "Implemented process management, execution, and I/O handling using fork, execvp, and piping."
      ]
    },
    {
      id: "iot-air-quality",
      name: "Level-5 IoT Air Quality Monitoring System",
      stack: ["ESP32", "MQ135", "PM2.5", "JSON"],
      date: "Apr 2026",
      metrics: { status: "UP", latency: "85ms", uptime: "99.2%" },
      description: "Hardware-based air quality monitoring architecture with a structured JSON data pipeline streaming telemetry to the cloud.",
      points: []
    }
  ]
};
