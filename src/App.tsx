import React, { useEffect } from "react"
import Hero from "./components/Hero"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Honors from "./components/Honors"
import Skills from "./components/Skills"

const App: React.FC = () => {
	useEffect(() => {
		// Add smooth scrolling behavior for the whole page
		document.documentElement.style.scrollBehavior = "smooth"
		return () => {
			document.documentElement.style.scrollBehavior = "auto"
		}
	}, [])

	return (
		<div style={{ backgroundColor: "var(--bg-color)" }}>
			{/* Navbar could be added here in the future if needed */}
			<main>
				<Hero />
				<Experience />
				<Projects />
				<Honors />
				<Skills />
			</main>

			<footer
				style={{
					padding: "60px 24px",
					textAlign: "center",
					borderTop: "1px solid var(--border-color)",
					color: "var(--text-secondary)",
					fontSize: "14px",
				}}
			>
				<div className="container">
					<p>
						© {new Date().getFullYear()} AniruddhRaam Srinivasan.
						All rights reserved.
					</p>
					<div
						style={{
							marginTop: "16px",
							display: "flex",
							justifyContent: "center",
							gap: "24px",
						}}
					>
						<a href="mailto:aniruddhraam07@gmail.com">Contact</a>
						<a
							href="https://github.com/Aniruddhraam"
							target="_blank"
							rel="noreferrer"
						>
							GitHub
						</a>
						<a
							href="https://www.linkedin.com/in/aniruddhraam-srinivasan/"
							target="_blank"
							rel="noreferrer"
						>
							LinkedIn
						</a>
					</div>
				</div>
			</footer>
		</div>
	)
}

export default App
