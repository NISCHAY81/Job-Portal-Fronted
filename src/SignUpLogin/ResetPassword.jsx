import { Button, Modal, PinInput, rem, TextInput, Group, PasswordInput } from '@mantine/core'
import { IconAt, IconLock } from '@tabler/icons-react';
import { useState } from 'react'
import { changePass, sendOtp, verifyOtp } from '../Services/UserService';
import { signUpValidation } from '../Services/FormValidation';
import { errorNotification, successNotification } from '../Services/NotificationService';
import { useInterval } from '@mantine/hooks';

const ResetPassword = (props) => {
  const [otpSending, setOtpSending] = useState(false);
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const[verified, setVerified] = useState(false);
  const[password, setPassword] = useState("");
  const[passErr, setPassErr] = useState("");
  const[resendLoader, setResendLoader]= useState(false);
  const [seconds, setSeconds] = useState(60);
  const interval = useInterval(() => {
    if(seconds===0){
      setResendLoader(false);
      setSeconds(60);
      interval.stop();
    }else
    setSeconds((s) => s - 1)}, 
    1000);
  const handleSendOtp = () => {
    setOtpSending(true)
    sendOtp(email).then((res) => {
      console.log(res);
      successNotification("OTP sent Successfully", "Enter OTP to reset.")
      setOtpSent(true);
      setOtpSending(false)
      setResendLoader(true)
      interval.start();
    }).catch((err) => {
      console.log(err);
      setOtpSending(false)
      errorNotification("OTP sending Failed", err.response.data.errorMessage)
    })
  }

  const handleVerifyOtp = (otp) => {
   verifyOtp(email, otp).then((res)=>{
      console.log(res);
       successNotification("OTP Verified", "Enter new password to reset.")
      setVerified(true);
   }).catch((err)=>{
    console.log(err);
    errorNotification("OTP Verification Failed", err.response.data.errorMessage)
   })
  }

  const resendOtp=()=>{
    if(resendLoader)return;
  handleSendOtp();
  setResendLoader(true)
  }

  const changeEmail=()=>{
  setOtpSent(false);
  setResendLoader(false);
  setSeconds(60);
  setVerified(false);
  interval.stop();
  }

  const handleResetPassword=()=>{
   changePass(email, password).then((res)=>{
    console.log(res);
    successNotification("Password Changed", "Login with new password.")
    props.close(); 
   }).catch((err)=>{
    console.log(err);
    
    errorNotification("Password Reset Failed", err.response.data.errorMessage)
   })
  }

  return (
    <Modal
      opened={props.opened}
      onClose={props.close}
      title="Reset Password"
      centered
      radius="md"
      overlayProps={{ backgroundOpacity: 0.45, blur: 2 }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: rem(20) }}>
        <TextInput
          name="email"
          size='md'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          leftSectionPointerEvents="none"
          leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />}
          label="Your Email"
          placeholder="Your email"
          withAsterisk
          styles={{
            input: {
              borderRadius: rem(8),
              paddingRight: rem(90),
            },
            label: {
              fontWeight: 500,
              marginBottom: rem(6),
            }
          }}
          rightSection={
            <Button
              size='xs'
              disabled={email === "" || otpSent}
              className='mr-1'
              onClick={handleSendOtp}
              autoContrast
              variant="filled"
              loading={otpSending && !otpSent}
              style={{
                borderRadius: rem(6),
                fontSize: rem(12),
                padding: `${rem(4)} ${rem(10)}`
              }}
            >
              {otpSent ? 'Sent' : 'Send OTP'}
            </Button>
          }
          rightSectionWidth={100}
        />

        {otpSent && (
          <Group position="center" style={{ marginTop: rem(10) }}>
            <PinInput
            className='mx-auto'
              onComplete={handleVerifyOtp}
              length={6}
              size='md'
              gap="sm"
              type="number"
              styles={{
                input: {
                  borderRadius: rem(8),
                  width: rem(40),
                  height: rem(40),
                  textAlign: 'center',
                  fontSize: rem(18),
                },
              }}
            />
          </Group>
        )}
       { otpSent && !verified && <div className='flex gap-2'>
           <Button
           fullWidth
           color='brightSun.4'
              onClick={resendOtp}
              autoContrast
              variant="light"
              loading={otpSending}
              style={{
                borderRadius: rem(6),
                fontSize: rem(12),
                padding: `${rem(4)} ${rem(10)}`
              }}
            >
            {resendLoader? seconds: "Resend"}
            </Button>

             <Button
             fullWidth
              onClick={changeEmail}
              autoContrast
              variant="filled"
              style={{
                borderRadius: rem(6),
                fontSize: rem(12),
                padding: `${rem(4)} ${rem(10)}`
              }}
            >
             Change Email
            </Button>
        </div>}
        {verified && <PasswordInput withAsterisk
     value={password}
     name="password"
     onChange={(e)=>{setPassword(e.target.value); setPassErr(signUpValidation("password", e.target.value))}}
     leftSection={<IconLock style={{width: rem(18), height: rem(18)}}/>}
     label="Password" placeholder="Password"
      error={passErr}
     />}
     {verified && <Button onClick={handleResetPassword} autoContrast variant='filled'>
      Change 
      </Button>}
      </div>
    </Modal>
  )
}

export default ResetPassword
