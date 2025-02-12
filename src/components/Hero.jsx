import { SpacemanCanvas } from ".";
import Position from "./Position";

const Hero = ({ scrollContainer }) => {
  return (
    <section className="parallax">
      <div className="parallax__content absolute top-[30vh] sm:top-[6vh] lg:top-[16vh] w-full mx-auto lg:pl-[38vh] lg:pr-[30vh] xl:pl-96 xl:pr-72 2xl:px-40 3xl:px-60 flex flex-col lg:flex-row items-start z-10">
        <div className="flex-1 lg:mb-20">
          <h1 className="font-medium text-white text-[40px] xs:text-[50px] sm:text-[68px] md:text-[80px] lg:text-[80px] 2xl:text-[100px] leading-[100px] 2xl:leading-[100px]">
            Per-Emil Johansson
          </h1>
          <Position />
        </div>
        <div 
          className="hidden xl:block absolute xl:top-[125%] 2xl:top-[160%] 3xl:top-[200%] xl:left-[65%] 2xl:left-[67%] 3xl:left-[70%]"
        >
          <div className="font-bold text-[18px] sm:text-[28px] md:text-[34px] 2xl:text-[46px] sm:leading-[38px] md:leading-[48px] 2xl:leading-[60px] streaky-glow max-w-sm 2xl:max-w-lg text-white text-left">
            I love crafting <br /> captivating experiences for the digital world to savor.
          </div>
        </div>

      </div>

      <img className="parallax__stars" src="./parallax/1Stars.svg" alt="" />
      <img className="parallax__planets" src="./parallax/2Planets.svg" alt="" />
      <img className="parallax__mountain1" src="./parallax/3Mountain.svg" alt="" />
      <img className="parallax__mountain2" src="./parallax/4Mountain.svg" alt="" />
      <img className="parallax__crater" src="./parallax/5Crater.svg" alt="" />
      <img className="parallax__sun" src="./parallax/6Sun.svg" alt="" />

      <SpacemanCanvas scrollContainer={scrollContainer} />
    </section>
  );
};

export default Hero;
