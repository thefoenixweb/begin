import {
    Links,
    Meta,
    Outlet,
    //Routes,
    //Route,
    
    Scripts,
    ScrollRestoration,
    isRouteErrorResponse,
    useRouteError,
} from '@remix-run/react';
import { ErrorComponent } from '~/components/error-component/error-component';
import '~/styles/index.scss';
import { HomePage } from '~/components/home-page/home-page';

 
import styles from './root.module.scss';
import { Browser } from '~/components/browser/browser';
import { MemoryRouter } from 'react-router';
import {Routes, Route} from 'react-router-dom';
//import {Links} from 'react-router-dom';

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <Meta />
                <Links />
            </head>
            <body>
                {children}
                 <Outlet />
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}

export default function App() {
    return (
        <div className={styles.div1}>
        <MemoryRouter>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/browser" element={<Browser />} />
            </Routes>
        </MemoryRouter>
        </div>
        
    );
}

export function ErrorBoundary() {
    const error = useRouteError();
    const { title, message } = getErrorDetails(error);

    return <ErrorComponent title={title} message={message} />;
}

function getErrorDetails(error: unknown) {
    let title: string;
    let message: string | undefined;

    if (isRouteErrorResponse(error)) {
        if (error.status === 404) {
            title = 'Page Not Found';
            message = "Looks like the page you're trying to visit doesn't exist";
        } else {
            title = `${error.status} - ${error.statusText}`;
            message = error.data?.message ?? '';
        }
    } else {
        title = 'Unknown error ocurred';
    }

    return { title, message };
}
