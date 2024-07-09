import { Employee, Job, Skill } from "./types";

const loadWaitingInSecondsSkills = 3;
const loadWaitingInSecondsJobs = 2;
const loadWaitingInSecondsEmployees = 4;

export const getSkills = (
	callback: (skills: Skill[] | string) => void
): void => {
	(async () => {
		try {
			const response = await fetch(
				"https://edwardtanguay.vercel.app/share/skills.json"
			);
			const skills = await response.json();
			setTimeout(() => {
				callback(skills);
			}, loadWaitingInSecondsSkills * 1000);
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
				setTimeout(() => {
					resolve(jobs);
				}, loadWaitingInSecondsJobs * 1000);
			} catch (err) {
				reject(err);
			}
		})();
	});
};

export const getEmployees = async (): Promise<Employee[]> => {
	return new Promise((resolve, reject) => {
		(async () => {
			try {
				const response = await fetch(
					"https://edwardtanguay.vercel.app/share/employees.json"
				);
				const employees = await response.json();
				setTimeout(() => {
					resolve(employees);
				}, loadWaitingInSecondsEmployees * 1000);
			} catch (err) {
				reject(err);
			}
		})();
	});
};
