import { Anchor, Button, Checkbox, PasswordInput, rem, TextInput } from '@mantine/core'
import { IconAt, IconLock } from '@tabler/icons-react'
import { useState } from 'react'
import { loginValidation } from "../Services/FormValidation";
import { Link } from 'react-router-dom'
import { loginUser } from '../Services/UserService'
import { useNavigate } from 'react-router-dom';
import { notifications } from '@mantine/notifications';
import { IconX, IconCheck } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import ResetPassword from './ResetPassword';
const form={
 
  email:"",
  password:""
}
const Login = () => {
const [data, setData] = useState(form);
  const [formError, setFormError] = useState(form);
  const [opened,{open, close}] = useDisclosure(false);
   const navigate = useNavigate();
    const handleChange=(event)=>{
      setFormError({...formError, [event.target.name]:""})
       setData({...data,[event.target.name]:event.target.value})
    }

    const handleSubmit=()=> {
        let valid = true;
    const newFormError = {};
    for (let key in data) {
      if (key !== "confirmPassword")
        newFormError[key] = loginValidation(key, data[key]);
      else if (data[key] !== data["password"])
      if (newFormError[key]) valid = false;
    }
    setFormError(newFormError);
    if(valid){
      loginUser(data).then((res)=>{
        console.log(res);
         notifications.show({
            title: "Login Successful",
            message: "Redirecting to Home page...",
            withCloseButton: true,
            icon: <IconCheck style={{ width: "90%", height: "90%" }} />,
            color: "teal",
            withBorder: true,
            className: "!border-green-500",
          });
          setTimeout(() => {
            navigate("/");
          }, 4000);
      }).catch((err)=>{
         notifications.show({
            title: "Login Failed",
            message: err.response.data.errorMessage,
            withCloseButton: true,
            icon: <IconX style={{ width: "90%", height: "90%" }} />,
            color: "red",
            withBorder: true,
            className: "!border-red-500",
          });
      });
      }
    }
  return (
    <>

      <div className="w-1/2 px-20 flex flex-col justify-center gap-3 ">
      <div className="text-3xl font-semibold mb-6">Login </div>
  
     <TextInput
      name="email"
      rror={formError.email}
     value={data.email}
     onChange={handleChange}
     leftSectionPointerEvents="none"
     leftSection={<IconAt style={{width: rem(16), height: rem(16)}}/>}
     label="Your email"
     placeholder="Your email"
     withAsterisk
    
     />
     <PasswordInput withAsterisk
     value={data.password}
     name="password"
     onChange={handleChange}
     leftSection={<IconLock style={{width: rem(18), height: rem(18)}}/>}
     label="Password" placeholder="Password"
      error={formError.password}
     />
     
     <Button onClick={handleSubmit} autoContrast variant="filled">Login</Button>
     <div className="mx-auto">Don't have an account?  <span
          onClick={() => {
            navigate("/signup");
            setData(form);
            setFormError(form);
          }}
          className="text-bright-sun-400 underline hover:underline cursor-pointer"
        >
          SignUp
        </span></div>
        <div onClick={open} className='text-bright-sun-400 hover:underline cursor-pointer text-center'>Forget Password</div>
    </div>
    <ResetPassword opened={opened} close={close}/>
        </>
  )
}

export default Login
