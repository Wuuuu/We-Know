import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <Image
      className="hidden md:block cursor-pointer"
      src="/images/logo.png"
      alt="logo"
      width={50}
      height={50}
      // onClick={() => router.push("/")}
    />
  );
};

export default Logo;
