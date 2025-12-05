import type { LinksFunction, MetaFunction } from '@remix-run/node';
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from '@remix-run/react';

import styles from './styles/tailwind.css';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: styles },
  {
    rel: 'preconnect',
    href: 'https://fonts.googleapis.com'
  },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous'
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap'
  }
];

export const meta: MetaFunction = () => [
  { title: 'joinville.dev — Comunidade de devs em Joinville' },
  {
    name: 'description',
    content:
      'Comunidade para devs em Joinville que organiza encontros e eventos como nodejs.joinville.dev e fullstackin.joinville.dev.'
  }
];

export default function App() {
  return (
    <html lang="pt-BR" className="h-full">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-full bg-background text-foreground font-joinville">
        <div className="min-h-screen flex flex-col">
          <Outlet />
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}


