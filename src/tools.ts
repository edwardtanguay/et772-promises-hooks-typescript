import { Skill } from "./types";

export const getSkills = async (): Skill[] => {
	const response = await fetch('https://edwardtanguay.vercel.app/share/skills.json');
	const skills = await response.json();
	console.log(222, skills);
	return skills;
};
