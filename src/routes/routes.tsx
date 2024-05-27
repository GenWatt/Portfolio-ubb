import { RouteObject } from "react-router-dom";
import Profile from "../pages/Profile";
import ContactPage from "../pages/ContactPage";
import ProjectsPage from "../pages/ProjectsPage";

export const routes: RouteObject[] = [
    {
        path: '/profile',
        element: <Profile />,
        // children: [
        //     { path: 'about', element: <About /> },
        //     { path: 'dashboard', element: <Dashboard /> },
        //     { path: 'profile', element: <Profile /> }
        // ]
    }, {
        path: '/contact',
        element: <ContactPage />,
        // children: [
        //     { path: 'about', element: <About /> },
        //     { path: 'dashboard', element: <Dashboard /> },
        //     { path: 'profile', element: <Profile /> }
        // ]
    },
    {
        path: '/projects',
        element: <ProjectsPage />,
    }
]