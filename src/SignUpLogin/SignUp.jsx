import React from "react";
import { Anchor, Button, Checkbox, PasswordInput, rem, TextInput } from '@mantine/core';
import { IconAt, IconLock } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="w-1/2 px-20 flex flex-col justify-center gap-3 ">
      <div className="text-3xl font-semibold mb-6">Create Account</div>
      <TextInput
      label="Full Name"
      placeholder="Your Name"
      withAsterisk
      />
     <TextInput
     leftSectionPointerEvents="none"
     leftSection={<IconAt style={{width: rem(16), height: rem(16)}}/>}
     label="Your email"
     placeholder="Your email"
     withAsterisk
     />
     <PasswordInput withAsterisk
     leftSection={<IconLock style={{width: rem(18), height: rem(18)}}/>}
     label="Password" placeholder="Password"
     />
     <PasswordInput withAsterisk
     leftSection={<IconLock style={{width: rem(18), height: rem(18)}}/>}
     label="Confirm Password" placeholder="Confirm Password"
     />
     <Checkbox 
     autoContrast
     label={<>
     I accept{' '}<Anchor>terms & condition</Anchor>
     </>}
     />
     <Button autoContrast variant="filled">SignUp</Button>
     <div className="mx-auto">Have an account? <Link to="/login" className="text-bright-sun-400 underline">Login</Link></div>
    </div>
  );
};

export default SignUp;
