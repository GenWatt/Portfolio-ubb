
import { Routes, Route, useLocation } from 'react-router-dom'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import { routes } from '../routes/routes';

function Router() {
    const location = useLocation();

    return (
        <div style={{ overflowX: 'hidden' }}>
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
        </div>
    )
}

export default Router