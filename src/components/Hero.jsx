import ButtonDark from "./ButtonDark";

function Hero() {
  return (
    <section className="py-14 bg-[#DEE2E6]">
      <div className="container px-5 flex justify-center md:justify-between items-center gap-7 md:gap-0 flex-wrap mx-auto">
        <div className="col text-center md:text-start">
          <h1 className="text-[#212529] text-4xl md:text-6xl font-bold">
            Hello <br />
            I’m Ridho
          </h1>
          <p className="text-gray-600 text-xl mt-2">Freelancer Web Developer</p>
          <ButtonDark content="Hire Me" />
        </div>
        <div className="col">
          <img src="/images/user.webp" alt="" />
        </div>
      </div>
    </section>
  );
}
export default Hero;
