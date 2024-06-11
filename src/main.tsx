import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/utils/normalize.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from '@/pages/Layout/Layout.tsx';
import { About } from '@/pages/About/About.tsx';
import { NoMatch } from '@/pages/NoMatch/NoMatch.tsx';
import { Home } from './pages/Home/Home';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/about/:id',
		element: <About />,
	},
	{
		path: '*',
		element: <NoMatch />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Layout>
			<RouterProvider router={router} />
		</Layout>
	</React.StrictMode>
);
