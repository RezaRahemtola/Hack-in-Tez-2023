import GameItem from './GameItem';

export default function GameList() {
	const games = [
		{
			image: 'https://cdn.akamai.steamstatic.com/steam/apps/1361210/capsule_616x353.jpg?t=1685354565',
			title: 'Darkside',
			description:
				"Reprenez la ville de Tertium aux hordes d'ennemis assoiffés de sang dans ce jeu de tir intense et brutal. Warhammer 40,000: Darktide est la nouvelle expérience de coopération par l'équipe primée à l'origine de la série Vermintide. Avec la chute de Tertium, les parias s'élèveront.",
			price: 27.99,
		},
		{
			image: 'https://cdn.akamai.steamstatic.com/steam/apps/1361210/capsule_616x353.jpg?t=1685354565',
			title: 'Darkside',
			description:
				"Reprenez la ville de Tertium aux hordes d'ennemis assoiffés de sang dans ce jeu de tir intense et brutal. Warhammer 40,000: Darktide est la nouvelle expérience de coopération par l'équipe primée à l'origine de la série Vermintide. Avec la chute de Tertium, les parias s'élèveront.",
			price: 27.99,
		},
		{
			image: 'https://cdn.akamai.steamstatic.com/steam/apps/1361210/capsule_616x353.jpg?t=1685354565',
			title: 'Darkside',
			description:
				"Reprenez la ville de Tertium aux hordes d'ennemis assoiffés de sang dans ce jeu de tir intense et brutal. Warhammer 40,000: Darktide est la nouvelle expérience de coopération par l'équipe primée à l'origine de la série Vermintide. Avec la chute de Tertium, les parias s'élèveront.",
			price: 27.99,
		},
		{
			image: 'https://cdn.akamai.steamstatic.com/steam/apps/1361210/capsule_616x353.jpg?t=1685354565',
			title: 'Darkside',
			description:
				"Reprenez la ville de Tertium aux hordes d'ennemis assoiffés de sang dans ce jeu de tir intense et brutal. Warhammer 40,000: Darktide est la nouvelle expérience de coopération par l'équipe primée à l'origine de la série Vermintide. Avec la chute de Tertium, les parias s'élèveront.",
			price: 27.99,
		},
	];

	return (
		<div className='flex content-center justify-center'>
			<div className='grid grid-cols-3'>
				{games.map((game, idx) => (
					<GameItem key={idx} {...game} />
				))}
			</div>
		</div>
	);
}
