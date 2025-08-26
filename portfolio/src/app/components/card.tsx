"use client";

import { motion } from "framer-motion";
import { Code } from "lucide-react";

const Card = () => {
	return (
		<motion.div
			className="flex flex-col gap-8 rounded-lg bg-purple-800/20 p-8"
			whileHover={{
				scale: 1.05,
				boxShadow: "0 20px 40px rgba(168, 85, 247, 0.2)",
				backgroundColor: "rgba(168, 85, 247, 0.1)",
			}}
			transition={{ duration: 0.3 }}
		>
			<div className="flex flex-row items-center justify-between">
				<motion.div
					className="flex items-center justify-center rounded-full bg-gray-400 p-4"
					whileHover={{ rotate: 360 }}
					transition={{ duration: 0.6 }}
				>
					<Code />
				</motion.div>

				<motion.p
					className="font-bold text-2xl"
					initial={{ scale: 0 }}
					whileInView={{ scale: 1 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					viewport={{ once: true }}
				>
					4
				</motion.p>
			</div>

			<motion.div
				className="flex flex-col gap-2"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.3 }}
				viewport={{ once: true }}
			>
				<p>Total projects</p>
				<p>Description es esta que es mas larga</p>
			</motion.div>
		</motion.div>
	);
};

export default Card;
