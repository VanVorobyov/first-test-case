import styles from './Home.module.scss';
import { CardList } from '@/components/CardList/CardList';

export const Home = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>НАШИ ВИДЕО</h1>
			<CardList />
		</div>
	);
};
