import { useFetch } from "../hooks/useFetch";
import { Skill, Job } from "../types";

export const PageHooks = () => {
	const { items: skills, isLoading: isLoadingSkills } = useFetch<Skill[]>(
		"https://edwardtanguay.vercel.app/share/skills.json",
		true
	);
	const { items: jobs, isLoading: isLoadingJobs } = useFetch<Job[]>(
		"https://edwardtanguay.vercel.app/share/jobs.json",
		true
	);

	return (
		<>
			<p>There are {isLoadingSkills ? "(LOADING...)" : skills.length} skills.</p>
			{isLoadingJobs ? (
				<p>Jobs are loading...</p>
			) : (
				<p>There are {jobs.length} jobs.</p>
			)}
		</>
	);
};
