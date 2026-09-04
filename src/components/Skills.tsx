import React from "react"
import Section from "./Section"
import { portfolioData } from "../data/portfolioData"

interface SkillCategoryProps {
	title: string
	skills: string[]
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => (
	<div style={{ marginBottom: "40px" }}>
		<h3
			style={{
				fontSize: "20px",
				color: "var(--text-secondary)",
				marginBottom: "24px",
				fontWeight: 500,
			}}
		>
			{title}
		</h3>
		<div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
			{skills.map((skill) => (
				<div
					key={skill}
					style={{
						padding: "12px 24px",
						backgroundColor: "var(--bg-secondary)",
						borderRadius: "100px",
						fontSize: "16px",
						fontWeight: 500,
						border: "1px solid var(--border-color)",
						color: "var(--text-primary)",
						transition: "all 0.3s ease",
					}}
					onMouseEnter={(e) => {
						e.currentTarget.style.borderColor =
							"var(--accent-color)"
						e.currentTarget.style.color = "var(--accent-color)"
					}}
					onMouseLeave={(e) => {
						e.currentTarget.style.borderColor =
							"var(--border-color)"
						e.currentTarget.style.color = "var(--text-primary)"
					}}
				>
					{skill}
				</div>
			))}
		</div>
	</div>
)

const Skills: React.FC = () => {
	const { languages, ml_ai, systems_infra } = portfolioData.skills

	return (
		<Section id="skills">
			<h2 className="section-title">Toolkit.</h2>
			<div style={{ maxWidth: "900px", margin: "0 auto" }}>
				<SkillCategory title="Languages" skills={languages} />
				<SkillCategory title="Machine Learning & AI" skills={ml_ai} />
				<SkillCategory
					title="Systems & Infrastructure"
					skills={systems_infra}
				/>
			</div>
		</Section>
	)
}

export default Skills
