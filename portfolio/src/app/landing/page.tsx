"use client";

import { motion } from "framer-motion";
import VantaBackground from "~/app/components/animation";
import Card from "~/app/components/card";
import ParticleBackground from "~/app/components/particles";
import ProjectsSection from "~/app/components/project-section";
import Typewriter from "~/app/components/typewritter-text";
import WorkExperience from "~/app/components/work-experience";
import { env } from "~/app/env";

const Landing = () => {
	return (
		<div className="flex size-full flex-col items-center justify-center gap-60 pb-60 md:px-24">
			<ParticleBackground />

			<section className="relative flex min-h-svh w-full flex-row items-center justify-between gap-4 overflow-x-hidden">
				<motion.div
					className="flex flex-col justify-center gap-6 p-2"
					initial={{ opacity: 0, x: -100 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
				>
					<motion.h1
						className="font-bold text-6xl"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						Tadeo Artía
					</motion.h1>

					<motion.h2
						className="bg-gradient-to-r from-[#a855f7] via-purple-600 to-purple-800 bg-clip-text pb-3 font-bold text-6xl text-transparent"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.4 }}
					>
						Software Engineer
					</motion.h2>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.6 }}
					>
						<Typewriter
							texts={[
								"I would love to work with you!",
								"We could be a great team <3",
							]}
							className="font-semibold text-4xl"
						/>
					</motion.div>

					<motion.p
						className="text-gray-400 text-xl"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.8 }}
					>
						Looking forward to creating your next amazing webpage!
					</motion.p>

					<motion.div
						className="flex flex-row gap-4"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 1.0 }}
					>
						<motion.button
							type="button"
							className="h-12 rounded-lg bg-gradient-to-r from-[#a855f7] via-purple-600 to-purple-800 px-12 font-bold text-white text-xl"
							whileHover={{
								scale: 1.05,
								boxShadow: "0 10px 25px rgba(168, 85, 247, 0.3)",
							}}
							whileTap={{ scale: 0.95 }}
							transition={{ duration: 0.2 }}
						>
							Download CV
						</motion.button>

						<motion.button
							type="button"
							className="h-12 rounded-lg border-3 border-[#a855f7] px-12 font-bold text-white text-xl"
							whileHover={{ scale: 1.05, borderColor: "#8b5cf6" }}
							whileTap={{ scale: 0.95 }}
							transition={{ duration: 0.2 }}
							onClick={() =>
								window.open(
									`mailto:${env.NEXT_PUBLIC_MAIL_TO}?subject=Contact from Portfolio&body=Hello Tadeo, I would like to get in touch with you!`,
								)
							}
						>
							Contact Me!
						</motion.button>
					</motion.div>
				</motion.div>

				<VantaBackground />
			</section>

			<motion.div
				className="flex w-full flex-col items-center gap-8 self-center"
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				viewport={{ once: true, margin: "-100px" }}
			>
				<motion.h2
					className="bg-gradient-to-r from-[#a855f7] via-purple-600 to-purple-800 bg-clip-text pb-3 font-bold text-6xl text-transparent"
					initial={{ opacity: 0, scale: 0.9 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					viewport={{ once: true }}
				>
					About Me
				</motion.h2>

				<motion.p
					className="max-w-3xl text-balance text-center font-semibold text-2xl text-gray-400"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					viewport={{ once: true }}
				>
					Hello, I'm <span className="text-white">Tadeo Artía</span> passionate
					about building smart and scalable web & mobile applications. I've
					completed a full-stack development course and constantly explore new
					technologies to refine my skills. Focused on continuous learning, I
					aim to transition into the IT industry by 2027 and eventually move
					towards AI and data science.
				</motion.p>

				<motion.div
					className="grid w-full grid-cols-3 gap-8 px-8 pt-8"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.6 }}
					viewport={{ once: true }}
				>
					{[0, 1, 2].map((index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
							viewport={{ once: true }}
						>
							<Card />
						</motion.div>
					))}
				</motion.div>
			</motion.div>

			{/* Projects Section */}
			<motion.div
				className="w-full"
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				viewport={{ once: true, margin: "-100px" }}
			>
				<ProjectsSection />
			</motion.div>

			{/* Work Experience Section */}
			<motion.div
				className="w-full"
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				viewport={{ once: true, margin: "-100px" }}
			>
				<WorkExperience />
			</motion.div>
		</div>
	);
};

export default Landing;
