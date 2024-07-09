import { Job, Skill } from "./types";

export const getSkills = (
	callback: (skills: Skill[] | string) => void
): void => {
	(async () => {
		try {
			const response = await fetch(
				"https://nnnedwardtanguay.vercel.app/share/skills.json"
			);
			const skills = await response.json();
			callback(skills);
		} catch (err: unknown) {
			callback((err as Error).message as string);
		}
	})();
};

export const getJobs = async (): Promise<Job[]> => {
	return new Promise((resolve, reject) => {
		(async () => {
			try {
				const response = await fetch(
					"https://edwardtanguay.vercel.app/share/jobs.json"
				);
				const jobs = await response.json();
				resolve(jobs);
			} catch (err) {
				reject(err);
			}
		})();
	});
};
