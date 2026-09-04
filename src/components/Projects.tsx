import React from "react"
import Section from "./Section"
import { portfolioData } from "../data/portfolioData"
import { FolderGit2, ExternalLink } from "lucide-react"

const GithubIcon: React.FC<{ size?: number }> = ({ size = 20 }) => (
	<svg
		width={size}
		height={size}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
		<path d="M9 18c-4.51 2-5-2-7-2" />
	</svg>
)

const ProjectCard = ({ project }: { project: any }) => {
	const CardContent = (
		<div
			style={{
				backgroundColor: "var(--bg-secondary)",
				borderRadius: "24px",
				padding: "32px",
				display: "flex",
				flexDirection: "column",
				border: "1px solid var(--border-color)",
				transition: "transform 0.3s ease, border-color 0.3s ease",
				height: "100%",
				cursor: project.url ? "pointer" : "default",
			}}
			onMouseEnter={(e) => {
				if (project.url) {
					e.currentTarget.style.transform = "translateY(-8px)"
					e.currentTarget.style.borderColor = "var(--accent-color)"
				}
			}}
			onMouseLeave={(e) => {
				if (project.url) {
					e.currentTarget.style.transform = "none"
					e.currentTarget.style.borderColor = "var(--border-color)"
				}
			}}
		>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					marginBottom: "24px",
				}}
			>
				<FolderGit2 size={32} color="var(--accent-color)" />
				<div
					style={{
						display: "flex",
						alignItems: "center",
						gap: "12px",
					}}
				>
					<div
						style={{
							fontSize: "12px",
							color: "var(--text-secondary)",
							fontWeight: 600,
							letterSpacing: "0.05em",
						}}
					>
						{project.date}
					</div>
					{project.url && (
						<ExternalLink size={16} color="var(--text-secondary)" />
					)}
				</div>
			</div>

			<h3
				style={{
					fontSize: "24px",
					marginBottom: "16px",
					lineHeight: 1.3,
				}}
			>
				{project.name}
			</h3>

			<p
				style={{
					color: "var(--text-secondary)",
					fontSize: "15px",
					marginBottom: "20px",
					lineHeight: 1.5,
				}}
			>
				{project.description}
			</p>

			{project.points && project.points.length > 0 && (
				<ul
					style={{
						listStyleType: "none",
						padding: 0,
						margin: "0 0 24px 0",
						display: "flex",
						flexDirection: "column",
						gap: "8px",
					}}
				>
					{project.points.map((point: string, i: number) => (
						<li
							key={i}
							style={{
								color: "var(--text-secondary)",
								fontSize: "14px",
								lineHeight: 1.4,
								display: "flex",
								gap: "8px",
							}}
						>
							<span style={{ color: "var(--accent-color)" }}>
								•
							</span>{" "}
							{point}
						</li>
					))}
				</ul>
			)}

			<div
				style={{
					display: "flex",
					flexWrap: "wrap",
					gap: "8px",
					marginTop: "auto",
				}}
			>
				{project.stack.map((tech: string) => (
					<span
						key={tech}
						style={{
							fontSize: "12px",
							padding: "4px 12px",
							backgroundColor: "rgba(255,255,255,0.05)",
							borderRadius: "12px",
							color: "var(--text-primary)",
						}}
					>
						{tech}
					</span>
				))}
			</div>
		</div>
	)

	return project.url ? (
		<a
			href={project.url}
			target="_blank"
			rel="noreferrer"
			style={{
				textDecoration: "none",
				color: "inherit",
				display: "block",
				height: "100%",
			}}
		>
			{CardContent}
		</a>
	) : (
		<div style={{ height: "100%" }}>{CardContent}</div>
	)
}

const Projects: React.FC = () => {
	return (
		<Section id="projects">
			<div style={{ marginBottom: "80px" }}>
				<h2
					className="section-title"
					style={{ textAlign: "left", marginBottom: "40px" }}
				>
					Open Source Libraries.
				</h2>
				<div
					style={{
						display: "grid",
						gridTemplateColumns:
							"repeat(auto-fill, minmax(340px, 1fr))",
						gap: "32px",
					}}
				>
					{portfolioData.openSource.map((project) => (
						<ProjectCard key={project.id} project={project} />
					))}
				</div>
			</div>

			<div>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						gap: "14px",
						marginBottom: "40px",
					}}
				>
					<h2
						className="section-title"
						style={{ textAlign: "left", marginBottom: 0 }}
					>
						Selected Work.
					</h2>
					<a
						href="https://github.com/Aniruddhraam"
						target="_blank"
						rel="noreferrer"
						title="View all repositories on GitHub"
						aria-label="View all repositories on GitHub"
						style={{
							display: "inline-flex",
							alignItems: "center",
							justifyContent: "center",
							color: "var(--text-secondary)",
							padding: "8px",
							borderRadius: "50%",
							backgroundColor: "rgba(255, 255, 255, 0.05)",
							border: "1px solid var(--border-color)",
							transition: "all 0.2s ease",
						}}
						onMouseEnter={(e) => {
							e.currentTarget.style.color = "var(--text-primary)"
							e.currentTarget.style.borderColor = "var(--accent-color)"
							e.currentTarget.style.transform = "scale(1.1)"
						}}
						onMouseLeave={(e) => {
							e.currentTarget.style.color = "var(--text-secondary)"
							e.currentTarget.style.borderColor = "var(--border-color)"
							e.currentTarget.style.transform = "none"
						}}
					>
						<GithubIcon size={20} />
					</a>
				</div>
				<div
					style={{
						display: "grid",
						gridTemplateColumns:
							"repeat(auto-fill, minmax(340px, 1fr))",
						gap: "32px",
					}}
				>
					{portfolioData.projects.map((project) => (
						<ProjectCard key={project.id} project={project} />
					))}
				</div>
			</div>
		</Section>
	)
}

export default Projects
