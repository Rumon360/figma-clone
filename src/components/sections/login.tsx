import GoogleIcon from "../icons/google-icon";
import Input from "../input";

const Login = () => {
  return (
    <section className="py-[6.4rem] md:py-[8rem] lg:py-[12rem]">
      <div className="text-center mx-auto px-[3.2rem] max-w-[42.2rem]">
        <h2 className="font-semibold leading-[1.2] tracking-[-0.02em] text-[2.6rem] md:text-[3.2rem] lg:text-[3.6rem]">
          Try Figma for free
        </h2>
      </div>
      <form className="text-center px-[3.2rem] flex flex-col w-full max-w-[40rem] text-[1.6rem] mx-auto">
        <button className="h-[4.8rem] mt-[7rem] leading-[2.4rem] px-[2rem] text-black border-[3px] border-black rounded-[0.8rem] bg-white transition-transform hover:translate-y-[-2px] ease-in-out">
          <div className="flex items-center justify-center">
            <span className="h-[1.8rem] w-[1.8rem] mr-[1.2rem] inline-block">
              <GoogleIcon />
            </span>
            <p className="whitespace-nowrap overflow-hidden font-semibold">
              Continue with Google
            </p>
          </div>
        </button>
        <span className="block h-[6rem] w-full text-[1.6rem] leading-[6rem] text-black">
          or
        </span>
        <Input
          id="email"
          placeholder="Email"
          autoComplete="off"
          name="email"
          type="email"
          key="email"
        />
        <div className="h-[1.6rem]" />
        <Input
          id="password"
          placeholder="Password"
          autoComplete="current-password"
          name="password"
          type="password"
          key="password"
        />
        <div className="h-[1.6rem]" />
        <div className="h-[1.6rem]" />
        <button className="transition-transform ease-in-out hover:translate-y-[-2px] text-[1.8rem] tracking-wider bg-black text-white cursor-pointer whitespace-nowrap h-[4.8rem] px-[2rem] overflow-hidden font-semibold leading-[2.4rem] rounded-[0.8rem]">
          Create account
        </button>
        <div className="h-[1.6rem]" />
        <div>
          <span className="mx-auto max-w-[25rem] text-[#00000099] text-[1.2rem] text-center">
            By clicking "Create account" or "Continue with Google", you agree to
            the{" "}
            <a className="text-[#5551ff] cursor-pointer" href="#">
              Figma TOS
            </a>{" "}
            and{" "}
            <a className="text-[#5551ff] cursor-pointer" href="#">
              Privacy Policy
            </a>
            .
          </span>
          <div className="h-[1.6rem]" />
        </div>
        <div className="w-full ">
          <div className="flex justify-center items-center text-inherit">
            <a href="#" className="text-[#5551ff] cursor-pointer text-[1.6rem]">
              Use single sign-on
            </a>
          </div>
          <div className="h-[1.6rem]" />
          <div className="flex justify-center items-center text-[1.6rem] text-[#00000099]">
            <p>Already have an account?</p>
            <a href="#" className="text-[#5551ff] cursor-pointer ml-[0.4rem]">
              Log in
            </a>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Login;
