function Services() {
  return (
    <section className="py-14 bg-[#DEE2E6]">
      <div className="container px-5 flex justify-center md:justify-between items-center flex-col gap-7 md:gap-0 flex-wrap mx-auto">
        <h2 className="text-[#212529] text-3xl md:text-4xl font-bold">Services</h2>
        <p className="text-gray-600 text-lg mt-3 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          <br /> tristique elit nec malesuada tincidunt. Pellentesque lobortis.
        </p>
        <div className="services flex text-white gap-7 md:gap-24 flex-wrap justify-center">
          <div className="service w-64 bg-[#212529] p-8 text-center rounded-md">
            <img src="/icons/web-development.webp" alt="web development" className="mx-auto mb-2" />
            <h3>Web Development</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique elit nec</p>
          </div>
          <div className="service w-64 bg-[#212529] p-8 text-center rounded-md">
            <img src="/icons/web-design.webp" alt="web design" className="mx-auto mb-2" />
            <h3>Web Design</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique elit nec</p>
          </div>
          <div className="service w-64 bg-[#212529] p-8 text-center rounded-md">
            <img src="/icons/mobile.webp" alt="mobile" className="mx-auto mb-2" />
            <h3>App Design</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique elit nec</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Services;
