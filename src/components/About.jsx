import ButtonDark from "./ButtonDark";
import ButtonWhite from "./ButtonWhite";

function About() {
  return (
    <section className="py-14">
      <div className="container px-5 flex justify-center items-center flex-wrap gap-7 md:gap-96 mx-auto">
        <div className="col">
          <h2 className="text-[#212529] text-3xl md:text-4xl font-bold">About Me</h2>
        </div>
        <div class="col">
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin <br /> tristique elit nec malesuada tincidunt. Pellentesque lobortis <br /> metus quis ipsum mattis, vitae laoreet est
            posuere. Mauris <br /> bibendum eros massa, sit amet tempor sem lobortis non.
          </p>
          <ButtonDark content="Hire Me" />
          <ButtonWhite content="View CV" className="m-2" />
        </div>
      </div>
    </section>
  );
}
export default About;
