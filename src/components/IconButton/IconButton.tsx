import clsx from 'clsx';
import type { FC } from 'react';
import { memo, useState } from 'react'; // import type { IconType } from 'uikit'; // Optional import you might need
import styles from './IconButton.module.scss';
import { IIconButtonProps } from '@components/IconButton/types.ts';

export const IconButton: FC<IIconButtonProps> = memo(
	({
		icon,
		iconFill,
		subtitle,
		className,
		isDisabled = false,
		onClick,
		type = 'button',
		...rest
	}) => {
		const [isActive, setIsActive] = useState(false);

		const handleClick = () => {
			iconFill && setIsActive((prev) => !prev);
			onClick;
		};

		return (
			<button
				className={clsx(styles.iconbutton, className, {
					[styles.iconbutton_short]: subtitle,
				})}
				disabled={isDisabled}
				onClick={handleClick}
				type={type}
				{...rest}
			>
				<div className={styles.iconbutton_box}>
					{isActive ? iconFill : icon}
					{subtitle && (
						<span className={styles.iconbutton_subtitle}>{subtitle}</span>
					)}
				</div>
			</button>
		);
	}
);
