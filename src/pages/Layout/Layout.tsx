import { Card } from '@/components/Card/Card';
import styles from './styles.module.scss';

export const Layout = () => {
	return (
		<>
			<div className={styles.container}>
				<h1>Карточки</h1>

				<Card />
			</div>
		</>
	);
};
