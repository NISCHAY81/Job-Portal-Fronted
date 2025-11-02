
import { IconAnchor, IconArrowLeft } from "@tabler/icons-react";
import { useLocation} from "react-router-dom";
import Login from "../SignUpLogin/Login";
import SignUp from './../SignUpLogin/SignUp';
import { Button } from '@mantine/core';

const SignUpPage = () => {
    const location = useLocation();
  return (
    <div className="min-h-[90vh] font-['poppins'] overflow-hidden">
   
      <div className={`w-[100vw] h-[100vh] flex [&>*]:flex-shrink-0 transition-all ease-in-out duration-1000 ${location.pathname=='/signup'?'-translate-x-1/2':'translate-x-0'}`}>
        <Login/>
        <div className={`w-1/2 h-full bg-mine-shaft-900 transition-all ease-in-out duration-1000  flex items-center justify-center flex-col gap-5 ${location.pathname=="/signup"?"rounded-r-[200px]":"rounded-l-[200px]"}`}>
          <div className="flex gap-1 items-center text-bright-sun-400">
            <IconAnchor className="h-16 w-16" stroke={2.5} />
            <div className="text-6xl font-semibold">JobHook</div>
          </div>
          <div className="text-2xl text-mine-shaft-200 font-semibold">Find the made for you</div>
        </div>
      <SignUp/>
      </div>
    </div>
  );
};

export default SignUpPage;
