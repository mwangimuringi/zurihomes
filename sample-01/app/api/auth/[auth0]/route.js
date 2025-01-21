import { handleAuth } from '@auth0/nextjs-auth0';
import Link from 'next/link';

<Link href="/api/auth/login">Login</Link>

export const GET = handleAuth();
