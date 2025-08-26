"use client";

import { motion } from "framer-motion";
import { experiences, volunteerings } from "~/app/landing/consts";
import ExperienceCard from "~/app/landing/experience-card";

const WorkExperience = () => {
	return (
		<div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6">
			{/* Main Experience Section */}
			<motion.div
				className="mb-16 text-center"
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				viewport={{ once: true }}
			>
				<motion.h1
					className="mb-4 bg-gradient-to-r from-[#a855f7] via-purple-600 to-purple-800 bg-clip-text pb-3 font-bold text-6xl text-transparent"
					initial={{ opacity: 0, scale: 0.9 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					viewport={{ once: true }}
				>
					Experience
				</motion.h1>

				<motion.div
					className="mx-auto h-1 w-32 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
					initial={{ width: 0 }}
					whileInView={{ width: 128 }}
					transition={{ duration: 0.8, delay: 0.4 }}
					viewport={{ once: true }}
				/>
			</motion.div>

			{/* Experience Cards */}
			<div className="mb-20 flex flex-col gap-8">
				{experiences.map((experience) => (
					<ExperienceCard experience={experience} key={experience.id} />
				))}
			</div>

			{/* Volunteering Section */}
			<motion.div
				className="mb-12 text-center"
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				viewport={{ once: true }}
			>
				<motion.h2
					className="mb-4 bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text pb-3 font-bold text-5xl text-transparent"
					initial={{ opacity: 0, scale: 0.9 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					viewport={{ once: true }}
				>
					Volunteering Experience
				</motion.h2>

				<motion.div
					className="mx-auto h-1 w-28 rounded-full bg-gradient-to-r from-pink-500 to-rose-500"
					initial={{ width: 0 }}
					whileInView={{ width: 112 }}
					transition={{ duration: 0.8, delay: 0.4 }}
					viewport={{ once: true }}
				/>
			</motion.div>

			{/* Experience Cards */}
			<div className="mb-20 flex flex-col gap-8">
				{volunteerings.map((volunteering) => (
					<ExperienceCard experience={volunteering} key={volunteering.id} />
				))}
			</div>
		</div>
	);
};

export default WorkExperience;
