import { AsideCard } from '@/components/AsideCard/AsideCard';
import styles from './styles.module.scss';

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
	return (
		<div className={styles.container}>
			<main>{children}</main>
			<aside className={styles.aside}>
				<AsideCard />;
			</aside>
		</div>
	);
};
