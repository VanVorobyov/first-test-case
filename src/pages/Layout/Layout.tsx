import styles from './styles.module.scss';
import { CardList } from '@components/CardList/CardList.tsx';

export const Layout = () => {
	return (
		<>
			<div className={styles.container}>
				<h1>Карточки</h1>
				<CardList />
			</div>
		</>
	);
};
