import { useFetch } from "../hooks/useFetch";
import { Skill, Job } from "../types";

export const PageHooks = () => {
	const {
		items: skills,
		isLoading: skillsAreLoading,
		hasError: skillsHaveError,
		error: skillsError,
	} = useFetch<Skill[]>(
		"https://edwardtanguay.vercel.app/share/skills.json",
		true
	);
	const { items: jobs, isLoading: jobsAreLoading } = useFetch<Job[]>(
		"nnnhttps://edwardtanguay.vercel.app/share/jobs.json",
		true
	);

	return (
		<>
			{skillsHaveError ? (
				<p className="text-red-800">ERROR: Skills could not load: {skillsError}</p>
			) : (
				<p>
					There are{" "}
					{skillsAreLoading ? "(LOADING)" : skills.length} skills.
				</p>
			)}
			{jobsAreLoading ? (
				<p>Jobs are loading...</p>
			) : (
				<p>There are {jobs.length} jobs.</p>
			)}
		</>
	);
};
