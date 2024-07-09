import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import "./index.scss";
import { PagePromises } from "./pages/PagePromises.tsx";
import { PageAbout } from "./pages/PageAbout.tsx";
import { Page404 } from "./pages/Page404.tsx";
import { PagePromiseAll } from "./pages/PagePromiseAll.tsx";
import { PagePromiseAllSettled } from "./pages/PagePromiseAllSettled.tsx";
import { PagePromiseRace } from "./pages/PagePromiseRace.tsx";
import { PagePromiseAny } from "./pages/PagePromiseAny.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		errorElement: <Page404 />,
		element: <App />,
		children: [
			{
				path: "/promises",
				element: <PagePromises />,
			},
			{
				path: "promise-all",
				element: <PagePromiseAll />,
			},
			{
				path: "promise-all-settled",
				element: <PagePromiseAllSettled />,
			},
			{
				path: "promise-race",
				element: <PagePromiseRace />,
			},
			{
				path: "promise-any",
				element: <PagePromiseAny />,
			},
			{
				path: "about",
				element: <PageAbout />,
			},
			{
				path: "/",
				element: <Navigate to="/promises" replace />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<RouterProvider router={router} />
);
