import styles from './ButtonList.module.scss';
import { IconButton } from '@components/IconButton/IconButton.tsx';
import { PlayIcon } from '@assets/PlayIcon/PlayIcon.tsx';
import { SaveIcon } from '@assets/SaveIcon/SaveIcon.tsx';
import { LikeIcon } from '@assets/LikeIcon/LikeIcon.tsx';
import { ShareIcon } from '@assets/ShareIcon/ShareIcon.tsx';
import { FillLikeIcon } from '@assets/FillLikeIcon/FillLikeIcon.tsx';
import { FillSaveIcon } from '@assets/FillSaveIcon/FillSaveIcon.tsx';

export const ButtonList = () => {
	return (
		<div className={styles.container}>
			<IconButton
				icon={<PlayIcon />}
				title="смотреть"
				subtitle="Трейлер"
				onClick={() => {
					console.log(`кнопка нажата --> `);
				}}
			/>
			<IconButton
				icon={<SaveIcon />}
				iconFill={<FillSaveIcon />}
				title="смотреть"
				onClick={() => {
					console.log(`кнопка нажата --> `);
				}}
			/>
			<IconButton
				icon={<LikeIcon />}
				iconFill={<FillLikeIcon />}
				title="смотреть"
				onClick={() => {
					console.log(`кнопка нажата --> `);
				}}
			/>
			<IconButton
				icon={<ShareIcon />}
				title="смотреть"
				onClick={() => {
					console.log(`кнопка нажата --> `);
				}}
			/>
		</div>
	);
};
