'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

import { clsx } from 'clsx';

interface Props {
	path: string;
	icon: JSX.Element;
	title: string;
	subTitle: string;
}

export const SidebarMenuItems: FC<Props> = ({
	icon,
	path,
	subTitle,
	title,
}) => {
	const currentPath = usePathname();
	const isActiveLink = currentPath === path;

	return (
		<Link
			href={path}
			className={clsx(
				'w-full px-2 my-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3  hover:bg-white/5 transition ease-linear duration-150 rounded-md',
				{
					'bg-green-800': isActiveLink,
				}
			)}
		>
			<div>{icon}</div>
			<div className='flex flex-col'>
				<span className='text-lg font-bold leading-5 text-white'>{title}</span>
				<span className='text-sm text-white/50 hidden md:block'>
					{subTitle}
				</span>
			</div>
		</Link>
	);
};
