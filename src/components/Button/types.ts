import { ButtonHTMLAttributes, DetailedHTMLProps, MouseEvent } from 'react';

export type TButton = 'button' | 'reset' | 'submit';

export interface IButtonProps
	extends DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	title?: string;
	subtitle?: string;
	className?: string;
	isDisabled?: boolean;
	isError?: boolean;
	width?: 'auto' | 'limited';
	isPrimary?: boolean;
	isSecondary?: boolean;
	onClick?: (event: MouseEvent) => void;
	type?: TButton;
	// typeIcon?: IconType;
}
