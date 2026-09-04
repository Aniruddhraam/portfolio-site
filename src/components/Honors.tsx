import React from "react"
import Section from "./Section"
import { portfolioData } from "../data/portfolioData"
import { Award, BookOpen, ExternalLink } from "lucide-react"

const PublicationCard: React.FC<{ pub: any }> = ({ pub }) => {
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
				cursor: pub.url ? "pointer" : "default",
			}}
			onMouseEnter={(e) => {
				if (pub.url) {
					e.currentTarget.style.transform = "translateY(-4px)"
					e.currentTarget.style.borderColor = "var(--accent-color)"
				}
			}}
			onMouseLeave={(e) => {
				if (pub.url) {
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
					marginBottom: "16px",
				}}
			>
				<span
					style={{
						fontSize: "12px",
						padding: "4px 10px",
						backgroundColor: "rgba(41, 151, 255, 0.12)",
						borderRadius: "12px",
						color: "var(--accent-color)",
						fontWeight: 600,
					}}
				>
					{pub.type}
				</span>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						gap: "8px",
					}}
				>
					<span
						style={{
							fontSize: "13px",
							color: "var(--text-secondary)",
							fontWeight: 500,
						}}
					>
						{pub.year}
					</span>
					{pub.url && (
						<ExternalLink
							size={16}
							color="var(--text-secondary)"
						/>
					)}
				</div>
			</div>

			<h3
				style={{
					fontSize: "20px",
					marginBottom: "12px",
					lineHeight: 1.4,
				}}
			>
				{pub.title}
			</h3>

			<p
				style={{
					fontSize: "14px",
					color: "var(--accent-color)",
					marginBottom: "4px",
					fontWeight: 500,
				}}
			>
				{pub.venue}
			</p>

			<p
				style={{
					fontSize: "13px",
					color: "var(--text-secondary)",
					marginBottom: "16px",
					fontStyle: "italic",
				}}
			>
				{pub.authors}
			</p>

			<p
				style={{
					fontSize: "14px",
					color: "var(--text-secondary)",
					lineHeight: 1.5,
					marginTop: "auto",
				}}
			>
				{pub.description}
			</p>
		</div>
	)

	return pub.url ? (
		<a
			href={pub.url}
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

const Honors: React.FC = () => {
	const { publications, honors } = portfolioData.honorsAndPublications

	return (
		<Section id="honors">
			{/* Research & Publications */}
			<div style={{ marginBottom: "80px" }}>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						gap: "12px",
						marginBottom: "40px",
					}}
				>
					<BookOpen size={28} color="var(--accent-color)" />
					<h2
						className="section-title"
						style={{ textAlign: "left", marginBottom: 0 }}
					>
						Research & Publications.
					</h2>
				</div>

				<div
					style={{
						display: "grid",
						gridTemplateColumns:
							"repeat(auto-fill, minmax(340px, 1fr))",
						gap: "32px",
					}}
				>
					{publications.map((pub) => (
						<PublicationCard key={pub.id} pub={pub} />
					))}
				</div>
			</div>

			{/* Honors & Awards */}
			<div>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						gap: "12px",
						marginBottom: "40px",
					}}
				>
					<Award size={28} color="var(--accent-color)" />
					<h2
						className="section-title"
						style={{ textAlign: "left", marginBottom: 0 }}
					>
						Honors & Competitive Achievements.
					</h2>
				</div>

				<div
					style={{
						display: "grid",
						gridTemplateColumns:
							"repeat(auto-fill, minmax(340px, 1fr))",
						gap: "32px",
					}}
				>
					{honors.map((honor) => (
						<div
							key={honor.id}
							style={{
								backgroundColor: "var(--bg-secondary)",
								borderRadius: "24px",
								padding: "32px",
								display: "flex",
								flexDirection: "column",
								border: "1px solid var(--border-color)",
								transition:
									"transform 0.3s ease, border-color 0.3s ease",
							}}
							onMouseEnter={(e) => {
								e.currentTarget.style.transform = "translateY(-4px)"
								e.currentTarget.style.borderColor =
									"var(--accent-color)"
							}}
							onMouseLeave={(e) => {
								e.currentTarget.style.transform = "none"
								e.currentTarget.style.borderColor =
									"var(--border-color)"
							}}
						>
							<div
								style={{
									display: "flex",
									justifyContent: "space-between",
									alignItems: "center",
									marginBottom: "16px",
								}}
							>
								<span
									style={{
										fontSize: "13px",
										color: "var(--accent-color)",
										fontWeight: 600,
									}}
								>
									{honor.issuer}
								</span>
								<span
									style={{
										fontSize: "13px",
										color: "var(--text-secondary)",
										fontWeight: 500,
									}}
								>
									{honor.year}
								</span>
							</div>

							<h3
								style={{
									fontSize: "20px",
									marginBottom: "16px",
									lineHeight: 1.3,
								}}
							>
								{honor.title}
							</h3>

							<p
								style={{
									fontSize: "14px",
									color: "var(--text-secondary)",
									lineHeight: 1.5,
								}}
							>
								{honor.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</Section>
	)
}

export default Honors
