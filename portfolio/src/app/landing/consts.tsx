import {
	Code,
	Database,
	Globe,
	GraduationCap,
	Heart,
	Phone,
	Server,
	Zap,
} from "lucide-react";
import type { ProjectType } from "~/app/components/project-card";
import type { ExperienceType } from "./experience-card";

export const experiences: ExperienceType[] = [
	{
		id: 1,
		company: "Eagerworks",
		role: "Web Developer",
		period: "2024 - Present",
		icon: <Code className="h-6 w-6" />,
		primary: "#a855f7",
		secondary: "#ec4899",
		items: [
			"Developed full-stack applications using Next.js, including both frontend and backend integrations.",
			"Built and deployed machine learning models in Python for predictive analytics and data-driven solutions.",
		],
	},
	{
		id: 2,
		company: "2innovate",
		role: "PayCorr Team",
		period: "2022 - 2024",
		icon: <Server className="h-6 w-6" />,
		primary: "#9333ea",
		secondary: "#3b82f6",
		items: [
			"Developed multiple responsive web applications using Angular.",
			"Developed and maintained the backend of a banking application, ensuring secure and efficient transaction processing.",
			"Participated in meetings with clients to gather insights and requirements.",
			"Reviewed teammates' pull requests to ensure codebase quality and adherence to standards.",
			"Actively participated in deployment processes utilizing AWS and NGINX, ensuring the integration and performance of applications.",
			"Developed multiple native Android applications using Kotlin.",
		],
	},
	{
		id: 3,
		company: "Programming Professor",
		role: "ORT University",
		period: "2021 - 2022",
		icon: <GraduationCap className="h-6 w-6" />,
		primary: "#c084fc",
		secondary: "#6366f1",
		items: [
			"Provide online and on-campus lessons to students.",
			"Crafted comprehensive teaching materials and study resources tailored to meet the needs of students.",
			"Participated in extracurricular classes providing support to students.",
		],
	},
];

export const volunteerings: ExperienceType[] = [
	{
		id: 1,
		company: "MJS",
		role: "Colegio Nuestra Señora Del Rosario",
		period: "2015 - 2018",
		icon: <Heart className="h-6 w-6" />,
		primary: "#ec4899",
		secondary: "#f43f5e",
		items: [
			"Engaged in enriching activities with children from underprivileged backgrounds, including animation workshops and providing essential food support.",
		],
	},
];

// Add this to your existing consts.ts file
export const projects: ProjectType[] = [
	{
		id: 1,
		title: "HealthBlock",
		description: "Descentralized identity for Healthcare",
		technologies: [
			"React",
			"Node.js",
			"PostgreSQL",
			"Stripe",
			"Tailwind CSS",
			"Redux",
		],
		image: "/projects/healthblock/healthblock.png",
		githubUrl: "https://github.com/yourusername/ecommerce",
		liveUrl: "https://your-ecommerce-demo.com",
		period: "2024",
		icon: <Globe className="text-white" size={20} />,
		primary: "#9333ea",
		secondary: "#2563eb",
		featured: true,
	},
	{
		id: 2,
		title: "HealthBlock",
		description: "Descentralized identity for Healthcare",
		technologies: [
			"React",
			"Node.js",
			"PostgreSQL",
			"Stripe",
			"Tailwind CSS",
			"Redux",
		],
		image: "/projects/healthblock/healthblock.png",
		githubUrl: "https://github.com/yourusername/ecommerce",
		liveUrl: "https://your-ecommerce-demo.com",
		period: "2024",
		icon: <Globe className="text-white" size={20} />,
		primary: "#9333ea",
		secondary: "#2563eb",
		featured: true,
	},
	{
		id: 3,
		title: "HealthBlock",
		description: "Descentralized identity for Healthcare",
		technologies: [
			"React",
			"Node.js",
			"PostgreSQL",
			"Stripe",
			"Tailwind CSS",
			"Redux",
		],
		image: "/projects/healthblock/healthblock.png",
		githubUrl: "https://github.com/yourusername/ecommerce",
		liveUrl: "https://your-ecommerce-demo.com",
		period: "2024",
		icon: <Globe className="text-white" size={20} />,
		primary: "#9333ea",
		secondary: "#2563eb",
		featured: true,
	},
];
