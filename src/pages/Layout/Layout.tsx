import styles from './styles.module.scss';
import { Button } from '@components/Button/Button.tsx';
import { ButtonList } from '@components/ButtonList/ButtonList.tsx';

export const Layout = () => {
	return (
		<>
			<div className={styles.container}>
				Наши фильмы
				<Button
					title="СМОТРЕТЬ"
					width={'auto'}
					subtitle="осталось смотреть 7 дней"
					onClick={() => {
						console.log(`кнопка нажата --> `);
					}}
				/>
				<Button
					title="СМОТРЕТЬ за 1 ₽ без рекламы "
					isSecondary
					width={'auto'}
					onClick={() => {
						console.log(`кнопка нажата --> `);
					}}
				/>
				<ButtonList />
			</div>
		</>
	);
};
