import {
	ButtonHTMLAttributes,
	DetailedHTMLProps,
	MouseEvent,
	ReactNode,
} from 'react';

export type TIconButton = 'button' | 'reset' | 'submit';

export interface IIconButtonProps
	extends DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	icon: ReactNode;
	iconFill?: ReactNode;
	subtitle?: string;
	className?: string;
	isDisabled?: boolean;
	onClick?: (event: MouseEvent) => void;
	// typeIcon?: IconType;
}
