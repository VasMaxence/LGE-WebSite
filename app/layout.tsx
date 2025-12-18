import '@once-ui-system/core/css/styles.css';
import '@once-ui-system/core/css/tokens.css';

import "./globals.scss";
import { DataThemeProvider, IconProvider, LayoutProvider, ThemeProvider, ToastProvider } from "@once-ui-system/core";
import localFont from "next/font/local";
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: "Quiz Master - Buzzer comme à la télé",
  description: "Buzzer comme à la télé avec Quiz Master ! Défiez vos amis et vivez l'ambiance des jeux télévisés directement depuis votre salon.",
  icons: {
    apple: [
      {
        rel: "apple-icon",
        sizes: "57x57",
        type: "image/png",
        url: "/favicon/apple-icon-57x57.png",
      },
      {
        rel: "apple-icon",
        sizes: "60x60",
        type: "image/png",
        url: "/favicon/apple-icon-60x60.png",
      },
      {
        rel: "apple-icon",
        sizes: "72x72",
        type: "image/png",
        url: "/favicon/apple-icon-72x72.png",
      },
      {
        rel: "apple-icon",
        sizes: "76x76",
        type: "image/png",
        url: "/favicon/apple-icon-76x76.png",
      },
      {
        rel: "apple-icon",
        sizes: "114x114",
        type: "image/png",
        url: "/favicon/apple-icon-114x114.png",
      },
      {
        rel: "apple-icon",
        sizes: "120x120",
        type: "image/png",
        url: "/favicon/apple-icon-120x120.png",
      },
      {
        rel: "apple-icon",
        sizes: "144x144",
        type: "image/png",
        url: "/favicon/apple-icon-144x144.png",
      },
      {
        rel: "apple-icon",
        sizes: "152x152",
        type: "image/png",
        url: "/favicon/apple-icon-152x152.png",
      },
      {
        rel: "apple-icon",
        sizes: "180x180",
        type: "image/png",
        url: "/favicon/apple-icon-180x180.png",
      },
    ],
    shortcut: [
      {
        rel: "shortcut icon",
        sizes: "16x16",
        type: "image/png",
        url: "/favicon/favicon-16x16.png",
      },
      {
        rel: "shortcut icon",
        sizes: "32x32",
        type: "image/png",
        url: "/favicon/favicon-32x32.png",
      },
      {
        rel: "shortcut icon",
        sizes: "96x96",
        type: "image/png",
        url: "/favicon/favicon-96x96.png",
      },
      {
        rel: "shortcut icon",
        sizes: "144x144",
        type: "image/png",
        url: "/favicon/android-icon-144x144.png",
      },
      {
        rel: "shortcut icon",
        sizes: "192x192",
        type: "image/png",
        url: "/favicon/android-icon-192x192.png",
      },
    ],
    icon: [
      {
        rel: "icon",
        type: "image/ico",
        url: "/favicon/favicon.ico",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/favicon/favicon-16x16.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "96x96",
        url: "/favicon/favicon-96x96.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "144x144",
        url: "/favicon/android-icon-144x144.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        url: "/favicon/android-icon-192x192.png",
      },
    ],
  },
  applicationName: "Quiz master",
  authors: {
    url: "https://quizmaster.fr",
    name: "Quiz Master",
  },
  generator: "Quiz Master",
  keywords: [
    "quiz master",
    "Quiz",
    "Quiz Game",
    "Quiz Room",
    "Salle de quiz",
    "quiz nice",
    "salle de quiz nice",
    "Activité indoor",
    "Activité intérieur",
    "Activité indoor Nice",
    "Activité intérieur Nice",
    "Quiz Room Nice",
    "Quiz Nice",
    "IQuiz Nice",
    "Quiz Côté d'azur",
    "Quiz Game Nice",
  ],
  referrer: "origin",
  publisher: "Quiz Master",
  robots: "index, follow",
  twitter: {
    card: "summary",
    site: "@quizmaster",
    creator: "@quizmaster",
  },
  openGraph: {
    title: "Quiz Master | Buzzer comme à la télé",
    description: "Buzzer comme à la télé avec Quiz Master ! Défiez vos amis et vivez l'ambiance des jeux télévisés directement depuis votre salon.",
    url: "https://quizmaster.fr",
    siteName: "Quiz Master",
    locale: "fr_FR",
    type: "website",
  },
};

const myFont = localFont({
  src: [
    {
      path: "../public/fonts/Satoshi-Regular.otf",
      weight: "normal",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi-Bold.otf",
      weight: "bold",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Super-Joyful.ttf",
      weight: "normal",
      style: "normal",
    },
  ],
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html
        lang="fr"
        suppressHydrationWarning
        className={myFont.className}
      >
        <head>
          {/* Google Ads tag */}
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=AW-17809416383"
            strategy="afterInteractive"
          />

          <Script id="google-ads" strategy="afterInteractive">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11544006040');
          `}
          </Script>

          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function () {
                  try {
                    const root = document.documentElement;

                    const defaultTheme = 'system';
                    root.setAttribute('data-neutral', 'gray');
                    root.setAttribute('data-brand', 'blue');
                    root.setAttribute('data-accent', 'indigo');
                    root.setAttribute('data-solid', 'contrast');
                    root.setAttribute('data-solid-style', 'flat');
                    root.setAttribute('data-border', 'playful');
                    root.setAttribute('data-surface', 'filled');
                    root.setAttribute('data-transition', 'all');
                    root.setAttribute('data-scaling', '100');
                    root.setAttribute('data-viz-style', 'categorical');

                    const resolveTheme = (themeValue) => {
                      if (!themeValue || themeValue === 'system') {
                        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                      }
                      return themeValue;
                    };

                    const theme = localStorage.getItem('data-theme');
                    const resolvedTheme = resolveTheme(theme);
                    root.setAttribute('data-theme', resolvedTheme);

                    const styleKeys = ['neutral', 'brand', 'accent', 'solid', 'solid-style', 'viz-style', 'border', 'surface', 'transition', 'scaling'];
                    styleKeys.forEach(key => {
                      const value = localStorage.getItem('data-' + key);
                      if (value) {
                        root.setAttribute('data-' + key, value);
                      }
                    });
                  } catch (e) {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  }
                })();
              `,
            }}
          />
        </head>
        <LayoutProvider>
          <ThemeProvider>
            <DataThemeProvider>
              <ToastProvider>
                <IconProvider>
                  <body style={{ height: "100vh", width: "100%", margin: 0, padding: 0 }}>
                    {children}
                  </body>
                </IconProvider>
              </ToastProvider>
            </DataThemeProvider>
          </ThemeProvider>
        </LayoutProvider>
      </html>
    </>
  );
}
