import { IButtonProps } from '@components/Button/types.ts';
import clsx from 'clsx';
import type { FC } from 'react';
import { memo } from 'react'; // import type { IconType } from 'uikit';
import styles from './Button.module.scss';

export const Button: FC<IButtonProps> = memo(
	({
		title,
		subtitle,
		className,
		isDisabled = false,
		isError = false,
		isPrimary = true,
		isSecondary = false,
		width = 'auto',
		onClick,
		type = 'button',
		...rest
	}) => {
		return (
			<button
				className={clsx(styles.button, className, {
					[styles.button_error]: isError,
					[styles.button_primary]: isPrimary,
					[styles.button_secondary]: isSecondary,
					[styles.button_limited]: width === 'limited',
				})}
				disabled={isDisabled}
				onClick={onClick}
				type={type}
				{...rest}
			>
				<div className={styles.button_box}>
					<span className={styles.button_title}>{title}</span>
					{subtitle && (
						<span className={styles.button_subtitle}>{subtitle}</span>
					)}
				</div>
			</button>
		);
	}
);
