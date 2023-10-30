import Image from "next/image";
import Button from "@/components/Button";

const Hero = () => {
  return (
    <div className="mb-12">
      <Image
        src={"/images/image-web-3-mobile.jpg"}
        width={375}
        height={100}
        alt="Web-3 Image"
        className="mt-8"
      />
      <h1 className="text-4xl font-black tracking-tight leading-9 max-w-[250px] mt-5">
        The Bright Future of Web 3.0?
      </h1>
      <p className="text-grayish-blue-900 leading-6 my-6">
        We dive into the next evolution of the web that claims to put the power
        of the platforms back into the hands of the people. But is it really
        fulfilling its promise?
      </p>
      <Button text="READ MORE" />
    </div>
  );
};

export default Hero;
