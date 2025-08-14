"use client"
import { SessionProvider } from "next-auth/react";
import { useEffect } from 'react';
import "./globals.css";

export default function RootLayout({ children }) {
    useEffect(() => {
        require('bootstrap/dist/js/bootstrap.min.js');
    }, []);

    return (
        <html lang="fr" className="no-js">
            <head>
                 {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NJBHZG95');
            `,
          }}
        />
        {/* End Google Tag Manager */}
                <link rel='icon' type='image/png' href='../favicon.ico' />
            </head>
            <body suppressHydrationWarning={true}>
                {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NJBHZG95"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
                <SessionProvider>{children}</SessionProvider>
            </body>
        </html>
    );
}