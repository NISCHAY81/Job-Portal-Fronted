import React, { useState } from "react";
import { Anchor, Button, Checkbox, Group,  LoadingOverlay,  PasswordInput, Radio, rem, TextInput } from "@mantine/core";
import { IconAt, IconCheck, IconLock, IconX } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../Services/UserService";
import { signUpValidation } from "../Services/FormValidation";
import { notifications } from "@mantine/notifications";

const form = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  accountType: "APPLICANT",
};

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(form);
  const [formError, setFormError] = useState(form);
  const navigate = useNavigate();

  const handleChange = (event) => {
    if (typeof event === "string") {
      setData({ ...data, accountType: event });
      return;
    }

    const name = event.target.name;
    const value = event.target.value;

    setData({ ...data, [name]: value });
    setFormError({ ...formError, [name]: signUpValidation(name, value) });

    if (name === "password" && data.confirmPassword !== "") {
      let err = "";
      if (data.confirmPassword !== value) err = "Passwords do not match";
      setFormError({
        ...formError,
        [name]: signUpValidation(name, value),
        confirmPassword: err,
      });
    } else {
      setFormError({ ...formError, confirmPassword: "" });
      setFormError({ ...formError, [name]: signUpValidation(name, value) });
    }

    if (name === "confirmPassword") {
      if (data.password !== value)
        setFormError({ ...formError, [name]: "Passwords do not match" });
      else setFormError({ ...formError, confirmPassword: "" });
    }
  };

  const handleSubmit = () => {
   
    let valid = true;
    const newFormError = {};
    for (let key in data) {
      if (key === "accountType") continue;
      if (key !== "confirmPassword")
        newFormError[key] = signUpValidation(key, data[key]);
      else if (data[key] !== data["password"])
        newFormError[key] = "Password do not match.";
      if (newFormError[key]) valid = false;
    }

    setFormError(newFormError);

    if (valid === true) {
      setLoading(true);
      registerUser(data)
        .then((res) => {
          console.log(res);
          setData(form);
          notifications.show({
            title: "Registered Successfully",
            message: "Redirecting to login page...",
            withCloseButton: true,
            icon: <IconCheck style={{ width: "90%", height: "90%" }} />,
            color: "teal",
            withBorder: true,
            className: "!border-green-500",
          });
          setTimeout(() => {
            setLoading(false);
            navigate("/login");
          }, 4000);
        })
        .catch((err) => {
          setLoading(false);
          notifications.show({
            title: "Registration Failed",
            message: err.response.data.errorMessage,
            withCloseButton: true,
            icon: <IconX style={{ width: "90%", height: "90%" }} />,
            color: "red",
            withBorder: true,
            className: "!border-red-500",
          });
        });
    }
  };

  return (
    <>
    <LoadingOverlay
              className="translate-x-1/2"
              visible={loading}
              zIndex={1000}
              overlayProps={{ radius: 'sm', blur: 2 }}
              loaderProps={{ color: 'brightSun.4', type: 'bars' }}
            />
    <div className="w-1/2 px-20 flex flex-col justify-center gap-3 ">
      <div className="text-3xl font-semibold mb-6">Create Account</div>

      <TextInput
        name="name"
        value={data.name}
        onChange={handleChange}
        label="Full Name"
        placeholder="Your Name"
        withAsterisk
        error={formError.name}
      />

      <TextInput
        name="email"
        value={data.email}
        onChange={handleChange}
        leftSectionPointerEvents="none"
        leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />}
        label="Your email"
        placeholder="Your email"
        withAsterisk
        error={formError.email}
      />

      <PasswordInput
        withAsterisk
        value={data.password}
        name="password"
        onChange={handleChange}
        leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} />}
        label="Password"
        placeholder="Password"
        error={formError.password}
      />

      <PasswordInput
        withAsterisk
        name="confirmPassword"
        value={data.confirmPassword}
        onChange={handleChange}
        leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} />}
        label="Confirm Password"
        placeholder="Confirm Password"
        error={formError.confirmPassword}
      />

      <Radio.Group
        value={data.accountType}
        onChange={handleChange}
        label="You are?"
        withAsterisk
      >
        <Group mt="xs">
          <Radio
            className="py-4 px-6 hover:bg-mine-shaft-900 has-[:checked]:bg-bright-sun-400/5 has-[:checked]:border-bright-sun-400 border border-mine-shaft-800 rounded-lg"
            autoContrast
            value="APPLICANT"
            label="Applicant"
          />
          <Radio
            className="py-4 px-6 hover:bg-mine-shaft-900 has-[:checked]:border-bright-sun-400 has-[:checked]:bg-bright-sun-400/5 border border-mine-shaft-800 rounded-lg"
            autoContrast
            value="EMPLOYER"
            label="Employer"
          />
        </Group>
      </Radio.Group>

      <Checkbox
        autoContrast
        label={
          <>
            I accept <Anchor>terms & condition</Anchor>
          </>
        }
      />

      <Button loading={loading} onClick={handleSubmit} autoContrast variant="filled">
        SignUp
      </Button>

      <div className="mx-auto">
        Have an account?{" "}
        <span
          onClick={() => {
            navigate("/login");
            setData(form);
            setFormError(form);
          }}
          className="text-bright-sun-400 underline hover:underline cursor-pointer"
        >
          Login
        </span>
      </div>
    </div>
    </>
  );
};

export default SignUp;
