import React from "react"
import { portfolioData } from "../data/portfolioData"
import { motion } from "framer-motion"

const Hero: React.FC = () => {
	const { name, title, interests, location } = portfolioData.about

	return (
		<section
			className="hero-section"
			style={{
				height: "100vh",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				textAlign: "center",
				padding: "0 24px",
				position: "relative",
				overflow: "hidden",
			}}
		>
			{/* Subtle background glow */}
			<div
				style={{
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					width: "600px",
					height: "600px",
					background:
						"radial-gradient(circle, rgba(41, 151, 255, 0.15) 0%, rgba(0,0,0,0) 70%)",
					zIndex: 0,
					pointerEvents: "none",
				}}
			/>

			<motion.div
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					duration: 1,
					ease: [0.16, 1, 0.3, 1],
					delay: 0.2,
				}}
				style={{ zIndex: 1 }}
			>
				<h2
					style={{
						fontSize: "24px",
						fontWeight: 500,
						color: "var(--text-secondary)",
						marginBottom: "16px",
						letterSpacing: "0.05em",
					}}
				>
					{title}
				</h2>
				<h1
					style={{
						fontSize: "clamp(48px, 8vw, 96px)",
						fontWeight: 700,
						letterSpacing: "-0.04em",
						lineHeight: 1.1,
						marginBottom: "24px",
						backgroundImage:
							"linear-gradient(180deg, #fff 0%, #a1a1a6 100%)",
						WebkitBackgroundClip: "text",
						WebkitTextFillColor: "transparent",
					}}
				>
					{name}
				</h1>
				<p
					style={{
						fontSize: "20px",
						color: "var(--text-secondary)",
						maxWidth: "600px",
						margin: "0 auto 32px",
						lineHeight: 1.6,
					}}
				>
					{interests}
				</p>
				<div
					style={{
						color: "var(--text-secondary)",
						fontSize: "14px",
						letterSpacing: "0.05em",
					}}
				>
					BASED IN {location.toUpperCase()}
				</div>
			</motion.div>
		</section>
	)
}

export default Hero
