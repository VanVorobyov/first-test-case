import styles from './styles.module.scss';
import { Button } from '@components/Button/Button.tsx';

export const Layout = () => {
	return (
		<>
			<div className={styles.container}>
				Наши фильмы
				<Button
					title="смотреть"
					isSecondary
					width={'limited'}
					subtitle="осталось смотреть 7 дней"
					onClick={() => {
						console.log(`кнопка нажата --> `);
					}}
				/>
			</div>
		</>
	);
};
