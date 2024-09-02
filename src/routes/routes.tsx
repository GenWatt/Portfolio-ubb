import { RouteObject } from "react-router-dom";
import ProfilePage from "../pages/ProfilePage";
import ContactPage from "../pages/ContactPage";
import ProjectsPage from "../pages/ProjectsPage";
import EducationPage from "../pages/EducationPage";
import ResumePage from "../pages/ResumePage";
import TechStackPage from "../pages/TechStackPage";
import GamePage from "../pages/GamePage";

export const routes: RouteObject[] = [
    {
        path: '/profile',
        element: <ProfilePage />,
    }, {
        path: '/contact',
        element: <ContactPage />,
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
    },
    {
        path: 'game',
        element: <GamePage />
    }
]