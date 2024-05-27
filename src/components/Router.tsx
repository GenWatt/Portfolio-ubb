import { useState } from 'react'
import { Routes, Route, useLocation, NavLink } from 'react-router-dom'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import { routes } from '../routes/routes';

function Router() {
    const location = useLocation();

    return (
        <>
            <SwitchTransition>
                <CSSTransition
                    key={location.pathname}
                    classNames="fade"
                    timeout={300}
                >
                    <Routes location={location}>
                        {routes.map(({ path, element }) => (
                            <Route key={path} path={path} element={element} />
                        ))}
                    </Routes>
                </CSSTransition>
            </SwitchTransition>
        </>
    )
}

export default Router