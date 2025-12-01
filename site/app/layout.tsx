import '@once-ui-system/core/css/styles.css';
import '@once-ui-system/core/css/tokens.css';

import "./globals.scss";
import { Column, DataThemeProvider, IconProvider, LayoutProvider, ThemeProvider, ToastProvider } from "@once-ui-system/core";
import localFont from "next/font/local";

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
      <Column
        as="html"
        lang="fr"
        suppressHydrationWarning
        className={myFont.className}
      >
        <head>
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
                  <Column as="body" fillWidth margin="0" padding="0" style={{ height: "100vh" }}>
                    {children}
                  </Column>
                </IconProvider>
              </ToastProvider>
            </DataThemeProvider>
          </ThemeProvider>
        </LayoutProvider>
      </Column>
    </>
  );
}
