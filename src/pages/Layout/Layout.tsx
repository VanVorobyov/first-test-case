import styles from './styles.module.scss';
import { FilmInfo } from '@components/FilmInfo/FilmInfo.tsx';
import { CommentList } from '@components/CommentList/CommentList.tsx';
import { useFetchFilmInfo } from '@hooks/useFetchFilmInfo.ts';

export const Layout = () => {
	const { filmInfo, loading, error } = useFetchFilmInfo(1);

	if (loading) {
		return <p>Loading...</p>;
	}

	if (error) {
		return <p>Error: {error}</p>;
	}

	return (
		<>
			<div className={styles.container}>
				ВЫБРАННОЕ ВИДЕО
				<FilmInfo {...filmInfo} />
				<CommentList id={1} />
			</div>
		</>
	);
};
