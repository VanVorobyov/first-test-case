import styles from './styles.module.scss';

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
	return <main className={styles.container}>{children}</main>;
};
