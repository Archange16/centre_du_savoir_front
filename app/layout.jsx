"use client"
import { useEffect } from 'react';
import "./globals.css";

export default function RootLayout({ children }) {
    useEffect(() => {
        require('bootstrap/dist/js/bootstrap.min.js');
    }, []);

    return (
        <html lang="fr" className="no-js">
            <head>
                <link rel='icon' type='image/png' href='../favicon.ico' />
            </head>
            <body suppressHydrationWarning={true}>
                {children}
            </body>
        </html>
    );
}