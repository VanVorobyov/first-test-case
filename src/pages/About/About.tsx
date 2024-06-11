import styles from './About.module.scss';
import { FilmInfo } from '@components/FilmInfo/FilmInfo.tsx';
import { CommentList } from '@components/CommentList/CommentList.tsx';
import { useFetchFilmInfo } from '@hooks/useFetchFilmInfo.ts';
import { Link, useParams } from 'react-router-dom';
import { Form } from '@components/Form/Form.tsx';

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
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<h1 className={styles.title}>ВЫБРАННОЕ ВИДЕО</h1>
				<Link className={styles.link} to={'/'}>
					все ВИДЕО
				</Link>
			</div>
			<div className={styles.comment_wrapper}>
				<FilmInfo {...filmInfo} />
				<CommentList id={id as string} />
				<Form id={id as string} />
			</div>
		</div>
	);
};
