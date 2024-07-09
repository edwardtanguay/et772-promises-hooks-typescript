interface IProps {
	children: React.ReactNode;
	total: number
}
export const WaitUntilLoaded = ({ children, total }: IProps) => {
	if (total > 0) {
		return <>{children}</>;
	} else {
		return <p>Loading...</p>;
	}
};
