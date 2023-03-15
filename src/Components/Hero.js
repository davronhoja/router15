import RoundBtn from "./RoundBtn";

function Hero() {
  return (
    <div className="grid grid-cols-2 align-center gap-[38px] mt-[50px]">
      <HeroLeft />
      <HeroRight />
    </div>
  );
}

export default Hero;

function HeroLeft() {
  return (
    <div className="font-axiforma">
      <h1 className="text-[56px] font-light">
        A <span className="text-myPurple">unique</span> approach to learning
        foregn languages online
      </h1>
      <p className="mt-[18px] mb-[32px] font-light text-myGray">
        Learn at your own pace with lifetime access on mobile desktop
      </p>
      <RoundBtn isBgPurple={true} />
    </div>
  );
}

function HeroRight() {
  return (
    <div>
      <img src="/Imagelogo.png" />
    </div>
  );
}
