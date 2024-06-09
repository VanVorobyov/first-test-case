import styles from './styles.module.scss';
import { FilmInfo } from '@components/FilmInfo/FilmInfo.tsx';
import { IFilmInfo } from '@components/FilmInfo/types.ts';

export const Layout = () => {
	const data: IFilmInfo = {
		id: 5,
		title: 'Наименование видео',
		image: 'https://picsum.photos/id/5/232/342',
		genre: ['Приключения'],
		production: {
			year: '2021',
			country: 'Россия',
		},
		labels: {
			fullhd: true,
			subtitles: true,
			age_restrictions: '18+',
		},
	};

	return (
		<>
			<div className={styles.container}>
				ВЫБРАННОЕ ВИДЕО
				<FilmInfo {...data} />
			</div>
		</>
	);
};
