import NextAuth from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';

import authConfig  from './auth.config';

// @ts-ignore
globalThis.prisma ??= new PrismaClient()

export const { handlers: {GET, POST}, auth, signIn, signOut, unstable_update } = NextAuth({
    // @ts-ignore
    adapter: PrismaAdapter(globalThis.prisma),
    ...authConfig
});


