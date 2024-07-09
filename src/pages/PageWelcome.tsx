import { useEffect, useState } from "react";
import { Job, Skill } from "../types";
import * as tools from "../tools";

export const PageWelcome = () => {
	const [skills, setSkills] = useState<Skill[]>([]);
	const [jobs, setJobs] = useState<Job[]>([]);
	const [message, setMessage] = useState("");

	useEffect(() => {
		tools.getSkills((response) => {
			if (typeof response !== "string") {
				setSkills(response);
			} else {
				setMessage(`Error fetching skills: ${response}`);
			}
		});
	}, []);

	useEffect(() => {
		(async () => {
			try {
				const _jobs = await tools.getJobs();
				setJobs(_jobs);
			} catch (err: unknown) {
				setMessage(`Error fetching jobs: ${(err as Error).message}`);
			}
		})();
	}, []);

	return (
		<>
			{message.trim() !== "" && (
				<h2 className="bg-red-400 p-2 rounded w-fit mb-3">{message}</h2>
			)}
			<p>There are {skills.length} skills:</p>
			<p>There are {jobs.length} jobs:</p>
		</>
	);
};
