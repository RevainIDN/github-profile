import '../styles/RepositoryCard.css'

interface RepositoryUserFiltered {
	name: string;
	description: string | null;
	forks: number;
	stargazers_count: number;
	updated_at: string;
	html_url: string;
}

interface RepositoryUserProps {
	userRepository: RepositoryUserFiltered[] | null;
}

export default function RepositoryCard({ userRepository }: RepositoryUserProps) {
	const formatDate = (date: string) => {
		const updateDate = new Date(date);
		const currentDate = new Date();
		const diffTime = currentDate.getTime() - updateDate.getTime();
		const diffDays = Math.floor(diffTime / (1000 * 3600 * 24));

		if (diffDays === 0) {
			return "Updated today";
		} else if (diffDays === 1) {
			return "Updated 1 day ago";
		} else {
			return `Updated ${diffDays} days ago`;
		}
	}

	return (
		<>
			{userRepository ? (
				userRepository.map((repository, index) => (
					<a href={repository.html_url} target="_blank" rel="noopener noreferrer">
						<div key={index} className='repository-cont'>
							<h1 className='repository-name'>{repository.name}</h1>
							<p className='repository-desc'>{repository.description}</p>
							<div className='repository-statistics'>
								<div className='repository-statistic'>
									<img className='repository-statistic-icon' src="Nesting.svg" alt="" />
									<p className='repository-count'>{repository.forks}</p>
								</div>
								<div className='repository-statistic'>
									<img className='repository-statistic-icon' src="Star.svg" alt="" />
									<p className='repository-count'>{repository.stargazers_count}</p>
								</div>
								<div className='repository-update'>{formatDate(repository.updated_at)}</div>
							</div>
						</div>
					</a>
				))
			) : (
				<p>Repositories were not found</p>
			)}
		</>
	)
}