import React from "react"
import Section from "./Section"
import { portfolioData } from "../data/portfolioData"
import { Briefcase } from "lucide-react"

const Experience: React.FC = () => {
	return (
		<Section id="experience">
			<h2 className="section-title">Experience.</h2>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					gap: "48px",
					maxWidth: "800px",
					margin: "0 auto",
				}}
			>
				{portfolioData.experience.map((exp) => (
					<div
						key={exp.id}
						style={{
							display: "flex",
							gap: "24px",
							padding: "32px",
							backgroundColor: "var(--bg-secondary)",
							borderRadius: "24px",
							border: "1px solid var(--border-color)",
							transition:
								"transform 0.3s ease, background-color 0.3s ease",
							cursor: "default",
						}}
						onMouseEnter={(e) =>
							(e.currentTarget.style.backgroundColor = "#1a1a1c")
						}
						onMouseLeave={(e) =>
							(e.currentTarget.style.backgroundColor =
								"var(--bg-secondary)")
						}
					>
						<div
							style={{
								width: "48px",
								height: "48px",
								borderRadius: "12px",
								backgroundColor: "rgba(41, 151, 255, 0.1)",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								flexShrink: 0,
							}}
						>
							<Briefcase size={24} color="var(--accent-color)" />
						</div>
						<div>
							<div
								style={{
									display: "flex",
									justifyContent: "space-between",
									alignItems: "flex-start",
									flexWrap: "wrap",
									gap: "8px",
									marginBottom: "8px",
								}}
							>
								<h3 style={{ fontSize: "24px", margin: 0 }}>
									{exp.role}
								</h3>
								<span
									style={{
										color: "var(--text-secondary)",
										fontSize: "14px",
										fontWeight: 500,
										padding: "4px 12px",
										backgroundColor: "var(--bg-color)",
										borderRadius: "20px",
									}}
								>
									{exp.date}
								</span>
							</div>
							<h4
								style={{
									fontSize: "18px",
									color: "var(--accent-color)",
									fontWeight: 500,
									marginBottom: "16px",
								}}
							>
								{exp.company}
							</h4>
							<ul
								style={{
									listStyleType: "none",
									padding: 0,
									margin: 0,
									display: "flex",
									flexDirection: "column",
									gap: "12px",
								}}
							>
								{exp.points.map((point, index) => (
									<li
										key={index}
										style={{
											color: "var(--text-secondary)",
											fontSize: "16px",
											lineHeight: 1.5,
											display: "flex",
											gap: "12px",
										}}
									>
										<span
											style={{
												color: "var(--accent-color)",
											}}
										>
											•
										</span>{" "}
										{point}
									</li>
								))}
							</ul>
						</div>
					</div>
				))}
			</div>
		</Section>
	)
}

export default Experience
