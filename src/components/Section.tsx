import React, { type ReactNode, useRef } from "react"
import { motion, useInView } from "framer-motion"

interface SectionProps {
	children: ReactNode
	id?: string
	className?: string
}

const Section: React.FC<SectionProps> = ({ children, id, className = "" }) => {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true, margin: "-100px" })

	return (
		<section id={id} className={`section ${className}`}>
			<motion.div
				ref={ref}
				initial={{ y: 50, opacity: 0 }}
				animate={
					isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }
				}
				transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} // Apple-like ease out cubic
			>
				<div className="container">{children}</div>
			</motion.div>
		</section>
	)
}

export default Section
