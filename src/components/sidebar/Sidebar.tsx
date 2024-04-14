import Image from 'next/image';
import Link from 'next/link';

import { SidebarMenuItems } from './SidebarMenuItems';
import { Icons } from '../Icons';

const menuItems = [
	{
		path: '/dashboard/inicio',
		icon: <Icons.dashboard className='h-8 w-8' />,
		title: 'Dashboard',
		subTitle: 'Visualización',
	},
	{
		path: '/dashboard/productos',
		icon: <Icons.product className='h-8 w-8' />,
		title: 'Productos',
		subTitle: 'Stock de productos',
	},
	{
		path: '/dashboard/usuarios',
		icon: <Icons.users className='h-8 w-8' />,
		title: 'Usuarios',
		subTitle: 'Datos de clientes',
	},
	{
		path: '/dashboard/proveedores',
		icon: <Icons.suppliers className='h-8 w-8' />,
		title: 'Proveedores',
		subTitle: 'Datos de proveedores',
	},
];

export const Sidebar = () => {
	return (
		<div
			style={{ width: '350px' }}
			id='menu'
			className='bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 overflow-y-scroll'
		>
			<div
				id='logo'
				className='my-4 px-6'
			>
				<h1 className='text-center text-lg md:text-2xl font-bold text-green-800'>
					V<span className='text-slate-600'>A</span>
				</h1>
				<p className='text-slate-500 text-sm text-center'>
					Veterinaria Arachana
				</p>
			</div>
			<div
				id='profile'
				className='px-6 py-10 flex flex-col items-center justify-center'
			>
				<Link
					href='#'
					className='inline-flex space-x-2 items-center'
				>
					<span>
						<Image
							className='rounded-full w-8 h-8'
							src='https://images.unsplash.com/photo-1542909168-82c3e7fdca5c'
							alt='user avatar'
							width={50}
							height={50}
						/>
					</span>
					<span className='text-sm md:text-base font-bold'>
						Martin Ferreira
					</span>
				</Link>
				<p className='text-slate-500'>Admin</p>
			</div>
			<nav
				id='nav'
				className='w-full px-6'
			>
				{menuItems.map(({ icon, path, subTitle, title }, idx) => (
					<SidebarMenuItems
						key={idx}
						path={path}
						icon={icon}
						title={title}
						subTitle={subTitle}
					/>
				))}
			</nav>
		</div>
	);
};
