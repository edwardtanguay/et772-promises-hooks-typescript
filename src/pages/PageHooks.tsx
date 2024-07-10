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
	const {
		items: jobs,
		isLoading: jobsAreLoading,
		hasError: jobsHaveError,
		error: jobsError,
	} = useFetch<Job[]>(
		"https://edwardtanguay.vercel.app/share/jobs.json",
		true
	);

	return (
		<>
			<h2 className="appMessage">
			The useFetch hook simplifies fetching data from an API by managing the loading, error, and response states within a separate component.
			</h2>
			{skillsHaveError ? (
				<p className="text-red-800"> ERROR: Skills could not load: {skillsError} </p>
			) : (
				<p> There are {skillsAreLoading ? "(LOADING)" : skills.length}{" "} skills.  </p>
			)}

			{jobsHaveError ? (
				<p className="text-red-800"> ERROR: Jobs could not load: {jobsError} </p>
			) : (
				<>
					{jobsAreLoading ? ( <p>Jobs are loading...</p>) : ( <p>There are {jobs.length} jobs.</p>)}
				</>
			)}
		</>
	);
};
