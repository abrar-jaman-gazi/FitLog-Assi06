import './globals.css';
import { AppShell } from './components/AppShell';
export const metadata = { title:'FitLog — Workout Library', description:'Train with intent. Log every set.' };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><AppShell>{children}</AppShell></body></html>}
