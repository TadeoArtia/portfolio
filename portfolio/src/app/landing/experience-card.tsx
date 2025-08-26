import { motion } from "framer-motion";
import type React from "react";
import type { JSX } from "react";

export type ExperienceType = {
	id: number;
	company: string;
	role: string;
	period: string;
	icon: JSX.Element;
	items: string[];
	primary: string;
	secondary: string;
};

const ExperienceCard = ({ experience }: { experience: ExperienceType }) => {
	return (
		<motion.div
			key={experience.id}
			className="group relative"
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, delay: experience.id * 0.2 }}
			viewport={{ once: true }}
		>
			<motion.div
				className="relative overflow-hidden rounded-2xl p-8"
				style={{
					borderColor: experience.secondary,
				}}
				whileHover={{
					scale: 1.02,
					boxShadow: "0 25px 50px rgba(168, 85, 247, 0.25)",
					filter: "brightness(1.2) saturate(1.1)",
				}}
				transition={{ duration: 0.3 }}
			>
				{/* Animated background gradient */}
				<motion.div
					className="absolute inset-0 opacity-30"
					style={{
						background: `linear-gradient(to right, ${experience.primary}, ${experience.secondary})`,
					}}
					initial={{ scale: 0, rotate: -45 }}
					whileInView={{ scale: 1, rotate: 0 }}
					transition={{ duration: 0.8, delay: experience.id * 0.1 }}
					viewport={{ once: true }}
				/>

				<div className="relative z-10">
					<div className="mb-6 flex flex-col lg:flex-row lg:items-center lg:justify-between">
						<div className="mb-4 flex items-center gap-4 lg:mb-0">
							<motion.div
								className="rounded-full p-4 shadow-lg"
								style={{
									background: `linear-gradient(to right, ${experience.primary}, ${experience.secondary})`,
								}}
								whileHover={{ rotate: 360, scale: 1.1 }}
								transition={{ duration: 0.6 }}
							>
								{experience.icon}
							</motion.div>

							<div>
								<motion.h2
									className="mb-1 font-bold text-3xl text-white"
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{
										duration: 0.5,
										delay: experience.id * 0.1 + 0.3,
									}}
									viewport={{ once: true }}
								>
									{experience.company}
								</motion.h2>

								<motion.p
									className="text-lg text-white italic"
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{
										duration: 0.5,
										delay: experience.id * 0.1 + 0.4,
									}}
									viewport={{ once: true }}
								>
									{experience.role}
								</motion.p>
							</div>
						</div>

						<motion.span
							className="rounded-full px-4 py-2 font-semibold text-sm text-white shadow-lg"
							style={{
								background: `linear-gradient(to right, ${experience.primary}, ${experience.secondary})`,
							}}
							initial={{ opacity: 0, scale: 0.8 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5, delay: experience.id * 0.1 + 0.5 }}
							viewport={{ once: true }}
						>
							{experience.period}
						</motion.span>
					</div>

					<motion.div
						className="grid gap-4"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.6, delay: experience.id * 0.1 + 0.6 }}
						viewport={{ once: true }}
					>
						{experience.items.map((item, itemIndex) => (
							<motion.div
								key={item}
								className="group/item flex items-start gap-3"
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{
									duration: 0.4,
									delay: itemIndex * 0.1 + 0.7 + itemIndex * 0.1,
								}}
								viewport={{ once: true }}
							>
								<motion.div
									className="mt-3 h-2 w-2 flex-shrink-0 rounded-full"
									style={{
										background: `linear-gradient(to right, ${experience.primary}, ${experience.secondary})`,
									}}
									whileHover={{ scale: 1.5 }}
									transition={{ duration: 0.2 }}
								/>

								<motion.p
									className="text-gray-300 text-lg leading-relaxed transition-colors duration-300 group-hover/item:text-white"
									whileHover={{ x: 5 }}
									transition={{ duration: 0.2 }}
								>
									{item}
								</motion.p>
							</motion.div>
						))}
					</motion.div>
				</div>
			</motion.div>
		</motion.div>
	);
};

export default ExperienceCard;
