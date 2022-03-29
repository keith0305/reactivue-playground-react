import type { ReactElement } from 'react'
import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Home = lazy(async () => import('./pages/home'))
const PageB = lazy(async () => import('./pages/pageB'))

export default function App(): ReactElement {
	return (
		<BrowserRouter>
			<Suspense fallback={<div className="text-center py-16">...</div>}>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/pageB' element={<PageB />} />
				</Routes>
			</Suspense>
		</BrowserRouter>
	)
}
