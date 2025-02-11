import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import { notShowOnMobile, routes } from '../routes/routes';
import { Suspense, useEffect, useLayoutEffect, useState } from 'react';
import useHelper from '../features/shared/hooks/useHelper';
import Loader from '../features/shared/components/Loader';

function Router() {
    const location = useLocation();
    const [footerHeight, setFooterHeight] = useState(0);
    const { isMobile } = useHelper();
    const navigate = useNavigate();

    useLayoutEffect(() => {
        const footer = document.getElementById('Footer');
        if (footer) {
            setFooterHeight(footer.clientHeight);
        }
    }, []);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const redirect = urlParams.get('redirect');
        if (redirect) {
            navigate(redirect, { replace: true });
        }
    }, [navigate]);

    const renderRoutes = routes.filter(({ path }) => path && notShowOnMobile.includes(path) ? !isMobile : true);

    return (
        <div style={{ overflowX: 'hidden', paddingBottom: footerHeight }}>
            <SwitchTransition>
                <CSSTransition
                    key={location.pathname}
                    classNames="fade"
                    timeout={300}
                >
                    <Suspense fallback={<Loader />}>
                        <Routes location={location}>
                            {renderRoutes.map(({ path, element }) => (
                                <Route key={path} path={path} element={element} />
                            ))}
                        </Routes>
                    </Suspense>
                </CSSTransition>
            </SwitchTransition>
        </div>
    )
}

export default Router