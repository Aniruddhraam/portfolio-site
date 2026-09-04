export const portfolioData = {
	about: {
		name: "AniruddhRaam Srinivasan",
		title: "Software Engineer | Systems, Backend & AI",
		email: "aniruddhraam07@gmail.com",
		phone: "+91 7338735357",
		location: "Bengaluru, Karnataka, India",
		interests:
			"Software engineer specializing in low-latency systems, scalable backend architectures, and machine learning. Experienced in engineering high-performance Go and x86-64 services, full-stack production platforms, and vision/agentic AI pipelines.",
	},
	skills: {
		languages: [
			"Go",
			"C",
			"x86-64 Assembly",
			"Python",
			"Java",
			"SQL",
			"JavaScript",
			"Jack (Nand2Tetris)",
		],
		ml_ai: [
			"PyTorch",
			"RT-DETR (Transformer)",
			"YOLOv11 / YOLOv8",
			"ONNX",
			"Scikit-learn",
			"OpenAI Whisper",
			"Pandas & NumPy",
			"LLMs (Gemini, Ollama)",
		],
		systems_infra: [
			"Linux / POSIX",
			"Docker",
			"PostgreSQL 18",
			"Nginx",
			"systemd",
			"React.js",
			"OpenMP & MPI",
			"Git & Azure DevOps",
		],
	},
	experience: [
		{
			id: "iiit-research",
			role: "Research Apprentice",
			company: "IIIT Hyderabad",
			date: "Jan 2026 - Apr 2026",
			points: [
				"Spearheaded advanced bioinformatics research focused on the discovery of novel cryptic pockets for targeted cancer therapeutics.",
				"Executed and analyzed Mixed-Solvent Molecular Dynamics (MSMD) simulations utilizing GROMACS to identify hidden binding sites.",
			],
		},
		{
			id: "edeasy-ai",
			role: "AI Engineer Intern",
			company: "EdEasy",
			date: "Dec 2025 - Jan 2026",
			points: [
				"Designed complete end-to-end integration of AI endpoints (utilizing Gemini API) to process educational videos, providing automated summaries.",
				"Implemented real-time dynamic question customization for students with AI-based response analysis.",
			],
		},
	],
	openSource: [
		{
			id: "agilehash",
			name: "AgileHash",
			stack: [
				"Go",
				"x86-64 ASM",
				"AMD64",
				"SMHasher3",
				"Systems Programming",
			],
			date: "2026",
			url: "https://pkg.go.dev/github.com/Aniruddhraam/agilehash",
			description:
				"A blazingly faster version of the Nicoshev/rapidhash algorithm, optimized for latency and faster throughput performance for smaller keys specifically.",
			points: [
				"Hand-optimized AMD64 Plan 9 Assembly (accum_amd64.s) keeping 7 parallel 64-bit accumulators in CPU registers with 224-byte unrolled loop processing and RIP-relative addressing.",
				"Certified 100% SMHasher3 quality pass grade with sub-1.8ns branchless evaluation for small keys (<=16B) and native 3.33ns single-pass 128-bit dual finalization.",
				"Zero-heap-allocation streaming Hasher engineered for high-throughput in-memory caches, benchmarked and integrated into BigCache.",
			],
		},
	],
	projects: [
		{
			id: "amrita-portal",
			name: "Amrita Project Portal",
			stack: [
				"Go (Golang)",
				"React",
				"PostgreSQL 18",
				"Docker",
				"Nginx",
				"systemd",
			],
			date: "Aug 2025 - Present",
			url: "", // Private repository
			description:
				"Production full-stack university project portal deployed on-premise, serving 2,000+ students and 200+ faculty members daily.",
			points: [
				"Engineered high-concurrency Go REST backend with JWT authentication and granular role-based authorization for multi-stage Final Year Project workflows.",
				"Configured containerized PostgreSQL 18 with Docker, orchestrated Linux systemd services behind an Nginx reverse proxy, and integrated Python-based academic parsing.",
			],
		},
		{
			id: "traffic-coordinator",
			name: "Multi-Agent Traffic & Emergency Response Coordinator",
			stack: [
				"PyTorch",
				"RT-DETR (Transformer)",
				"YOLOv11",
				"Multi-Agent Systems",
				"FastAPI",
				"WebSockets",
			],
			date: "2026",
			url: "",
			description:
				"Distributed multi-agent intelligent traffic coordination platform combining transformer and CNN computer vision models for automated accident detection and dynamic emergency signal preemption.",
			points: [
				"Fine-tuned the RT-DETR-L (Real-Time Detection Transformer) alongside YOLOv11-Nano on custom accident datasets utilizing GIoU loss and two-phase learning rate schedules.",
				"Architected asynchronous multi-agent coordination pipeline across incident detection, traffic flow optimization, and medical response dispatching.",
				"Engineered FastAPI backend with bidirectional WebSockets for sub-second telemetry broadcast and dynamic intersection green corridor routing.",
			],
		},
		{
			id: "post-quantum-messenger",
			name: "Safe-Chat: Post-Quantum Encrypted Messaging Protocol",
			stack: [
				"Go",
				"MiniQUIC (UDP)",
				"Post-Quantum (KEM / Kyber)",
				"Double Ratchet",
				"X3DH",
			],
			date: "2026",
			url: "",
			description:
				"End-to-end encrypted messaging system featuring a custom UDP transport protocol ('MiniQUIC') and runtime-switchable classical/post-quantum cryptography.",
			points: [
				"Engineered MiniQUIC, a reliable UDP transport layer supporting stream multiplexing, frame packetization, ACKs, retransmissions, and flow control windows.",
				"Implemented forward secrecy via X3DH authenticated key exchange and Double Ratchet, with a hybrid post-quantum KEM mode protecting against Harvest Now, Decrypt Later attacks.",
				"Architected zero-knowledge opaque relay server with an asynchronous Prekey HTTP API and real-time WebSocket telemetry dashboard.",
			],
		},
		{
			id: "linux-shell",
			name: "Linux Shell Replica",
			stack: ["C", "POSIX APIs", "Linux Internals", "IPC & Process Control"],
			date: "Dec 2025 - Feb 2026",
			url: "",
			description:
				"Functional UNIX shell replica implemented in C utilizing native POSIX system calls for process isolation and pipeline management.",
			points: [
				"Engineered process lifecycle management using fork(), execvp(), and waitpid() with support for foreground/background execution.",
				"Implemented IPC pipelines with pipe() chaining, I/O redirection (stdin/stdout via dup2), and POSIX signal handling (SIGINT/SIGTSTP).",
			],
		},
		{
			id: "iot-air-quality",
			name: "IoT Air Quality Monitoring System",
			stack: [
				"ESP32",
				"C++ / Arduino",
				"DHT22 & MQ-135",
				"EPA AQI Standards",
				"ThingSpeak IoT",
			],
			date: "2026",
			url: "",
			description:
				"ESP32-based environmental monitoring device calculating EPA-standard Air Quality Index (AQI) with real-time cloud telemetry and local alert mechanisms.",
			points: [
				"Programmed an ESP32 firmware pipeline in C++ integrating DHT22, MQ-135, and optical PM2.5 sensors with dynamic humidity compensation on gas readings.",
				"Implemented real-time EPA-standard AQI classification with local buzzer alarms for hazardous thresholds (AQI > 150) and cloud telemetry streaming to ThingSpeak.",
			],
		},
	],
	honorsAndPublications: {
		publications: [
			{
				id: "inverse-design",
				title:
					"Generative Models for the Inverse Design and Band Gap Prediction of Semiconductor Materials",
				venue: "Procedia Computer Science, Elsevier",
				year: "2026",
				authors: "Srinivasan, A., et al.",
				type: "Journal Article",
				url: "https://www.sciencedirect.com/science/article/pii/S1877050926021502",
				description:
					"Engineered hybrid generative framework (GMM/PMF) synthesizing 5,000 physically consistent semiconductor materials with an optimized XGBoost and Neural Network pipeline for accelerated band gap prediction.",
			},
			{
				id: "multi-agent-traffic-paper",
				title:
					"Edge-Enabled Multi-Agent Traffic Management System Using YOLO-Based Accident Detection and Adaptive Signal Control",
				venue: "Manuscript in Publishing Pipeline",
				year: "2026",
				authors: "Srinivasan, A., Madhulika, S., Venugopalan, M.",
				type: "Research Paper",
				description:
					"Designed decentralized multi-agent coordination architecture leveraging edge computer vision for real-time collision detection and automated emergency vehicle signal preemption.",
			},
		],
		honors: [
			{
				id: "university-award",
				title: "University Award for High-Impact Digital Solutions",
				issuer: "Amrita Vishwa Vidyapeetham",
				year: "2026",
				description:
					"Awarded for architecting and operating the campus-wide project repository portal supporting 2,000+ students and 200+ faculty daily.",
			},
			{
				id: "novo-nordisk",
				title: "National Finalist (Top 6)",
				issuer: "Novo Nordisk Hackathon",
				year: "2025",
				description:
					"Selected as one of 6 national finalist teams across India for architecting a secure-first on-premise healthcare API prototype with open-source models.",
			},
		],
	},
}
