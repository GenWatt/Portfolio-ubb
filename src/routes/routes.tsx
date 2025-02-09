import React from "react";
import { Navigate, RouteObject } from "react-router-dom";

const ProfilePage = React.lazy(() => import("../pages/ProfilePage"));
const ContactPage = React.lazy(() => import("../pages/ContactPage"));
const ProjectsPage = React.lazy(() => import("../pages/ProjectsPage"));
const EducationPage = React.lazy(() => import("../pages/EducationPage"));
const ResumePage = React.lazy(() => import("../pages/ResumePage"));
const TechStackPage = React.lazy(() => import("../pages/TechStackPage"));
const GamePage = React.lazy(() => import("../pages/GamePage"));

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
        path: '/game',
        element: <GamePage />
    },
    {
        path: '*',
        element: <Navigate to="/profile" replace />
    }
]

export const notShowOnMobile = ['/game']