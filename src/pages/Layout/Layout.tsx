import styles from './styles.module.scss';
import { FilmInfo } from '@components/FilmInfo/FilmInfo.tsx';
import { IFilmInfo } from '@components/FilmInfo/types.ts';
import { Comment } from '@components/Comment/Comment.tsx';
import { IComment } from '@components/Comment/types.ts';

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

	const dataComment: IComment[] = [
		{
			id: 1634,
			author: 'Дмитрий Назаров',
			description: 'Поэт, народный артист, телеведущий',
			comment:
				'Я очень рад, что наконец выходит сериал, потому что в прокрустово ложе прокатного фильма эту громадину, которую написал Иванов, конечно, не всунуть и все, что мы наснимали. Многих линий в фильме просто нет и они в сериале появятся. Это будет действительно объемное такое 3D-зрелище.',
		},
		{
			id: 1635,
			author: 'Евгений Назаров',
			description: 'Поэт, народный артист, телеведущий',
			comment:
				'На роль Ремезова я согласился сразу, очень люблю исторический жанр. Фильм «Тобол» повествует о высоких победах, о таланте, о больших возможностях России преодолевать и совершать. Семен Ремезов — настоящий герой в Тобольске, его все очень любят, рассказывают легенды о нем.',
			image:
				'https://sun9-49.userapi.com/impf/c841436/v841436749/6b453/0AX8DDYY2r0.jpg?size=604x402&quality=96&sign=9229e573f0b564dd929b04d09a1733f7&type=album',
		},
	];

	return (
		<>
			<div className={styles.container}>
				ВЫБРАННОЕ ВИДЕО
				<FilmInfo {...data} />
				{dataComment.map((dataComment) => (
					<Comment {...dataComment} key={dataComment.id} />
				))}
			</div>
		</>
	);
};
