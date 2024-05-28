import { RouteObject } from "react-router-dom";
import ProfilePage from "../pages/ProfilePage";
import ContactPage from "../pages/ContactPage";
import ProjectsPage from "../pages/ProjectsPage";
import EducationPage from "../pages/EducationPage";
import ResumePage from "../pages/ResumePage";
import TechStackPage from "../pages/TechStackPage";

export const routes: RouteObject[] = [
    {
        path: '/profile',
        element: <ProfilePage />,
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
    },
    {
        path: '/education',
        element: <EducationPage />
    },
    {
        path: '/resume',
        element: <ResumePage />
    },
    {
        path: '/stack',
        element: <TechStackPage />
    }
]