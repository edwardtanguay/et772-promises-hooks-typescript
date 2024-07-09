import { Skill } from "./types";

// export const getSkills = async (): Skill[] => {
// 	const response = await fetch('https://edwardtanguay.vercel.app/share/skills.json');
// 	const skills = await response.json();
// 	console.log(222, skills);
// 	return skills;
// };

export const getSkills = (callback: (skills: Skill[]) => void): void => {
	(async () => {
		const response = await fetch(
			"https://edwardtanguay.vercel.app/share/skills.json"
		);
		const skills = await response.json();
		callback(skills)
	})();
};
