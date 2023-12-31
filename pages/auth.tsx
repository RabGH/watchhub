import Image from "next/image";

import Input from "@/components/input";

const Auth = () => {
  return (
    <div className="homeImage relative h-full w-full bg-no-repeat bg-center bg-fixed bg-[url('images/hero.jpg')] bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <Image width={200} height={48} src="/images/logo.png" alt="Logo" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">Sign in</h2>
            <div className="flex flex-col ga-4">
              <Input />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
