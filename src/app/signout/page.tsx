import { signOut } from '@/auth';

import Button from 'react-bootstrap/Button';

import Stack from 'react-bootstrap/Stack';

import Header from '../ui/header';
import BackButton from '../ui/back-button';

export default function SignOutPage() {
  return (
    <>
      <Header />

      <Stack gap={3}>
        <div>
          <h3 style={{alignContent: "center"}}>
            Are you <i>absolutely sure</i> you want to sign out?
          </h3>
        </div>
        <div>
          <form
            action={async (formData) => {
              'use server';
              await signOut();
            }}
          >
            <BackButton label="No" />
            <Button variant='danger' type='submit'>
              Logout
            </Button>
          </form>
        </div>
      </Stack>
    </>
  );
}
