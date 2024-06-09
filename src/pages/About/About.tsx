import styles from './About.module.scss';
import { FilmInfo } from '@components/FilmInfo/FilmInfo.tsx';
import { CommentList } from '@components/CommentList/CommentList.tsx';
import { useFetchFilmInfo } from '@hooks/useFetchFilmInfo.ts';
import { useParams } from 'react-router-dom';

export const About = () => {
	const { id } = useParams();

	const { filmInfo, loading, error } = useFetchFilmInfo(id as string);

	if (loading) {
		return <p>Loading...</p>;
	}

	if (error) {
		return <p>Error: {error}</p>;
	}

	return (
		<>
			<div className={styles.container}>
				<h1 className={styles.title}>ВЫБРАННОЕ ВИДЕО</h1>
				<FilmInfo {...filmInfo} />
				<CommentList id={id as string} />
			</div>
		</>
	);
};
