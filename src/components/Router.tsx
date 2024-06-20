
import { Routes, Route, useLocation } from 'react-router-dom'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import { routes } from '../routes/routes';
import { useLayoutEffect, useState } from 'react';

function Router() {
    const location = useLocation();
    const [footerHeight, setFooterHeight] = useState(0);

    useLayoutEffect(() => {
        const footer = document.getElementById('Footer');
        if (footer) {
            setFooterHeight(footer.clientHeight);
        }
    }, []);

    return (
        <div style={{ overflowX: 'hidden', paddingBottom: footerHeight }}>
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