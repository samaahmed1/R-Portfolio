import ButtonWhite from "./ButtonWhite";

function Contact() {
  return (
    <section className="py-14 bg-[#DEE2E6]">
      <div className="container px-5 mx-auto">
        <h2 className="text-[#212529] text-3xl md:text-4xl font-bold text-center">Contact</h2>
        <div className="info flex justify-center flex-wrap gap-4">
          <div className="form">
            <h3 className="text-[#212529] text-lg mb-1 font-bold">Send Me Message</h3>
            <form action="post">
              <div className="input flex gap-2">
                <input className="bg-[#212529] text-white outline-none inline-block rounded-md w-full pr-28 pl-1" type="email" name="email" placeholder="Email" />
                <input className="bg-[#212529] text-white outline-none inline-block rounded-md w-full p-1 pr-28" type="text" name="name" placeholder="Name" />
              </div>
              <textarea className="bg-[#212529] text-white outline-none block w-full mt-3 rounded-md px-1 pb-8 pr-28" name="message" placeholder="Message"></textarea>
              <ButtonWhite content="Send" className="border-none bg-white font-semibold"/>
            </form>
          </div>
          <div className="social-media flex flex-col gap-2 justify-center">
            <h3 className="text-[#212529] text-lg mb-1 font-bold">Social Media</h3>
            <span className="flex gap-2 font-medium">
              <img src="/icons/whatsapp.png" alt="whatsapp" />
              089522231231
            </span>
            <span className="flex gap-2 font-medium">
              <img src="/icons/instagram.png" alt="instagram" />
              <a href="index.html">satriawan.ridho</a>
            </span>
            <span className="flex gap-2 font-medium">
              <img src="/icons/facebook.png" alt="facebook" />
              <a href="index.html">Ridho Satriawan</a>
            </span>
            <span className="flex gap-2 font-medium">
              <img src="/icons/linkedin.png" alt="linkedin" />
              <a href="index.html">Ridho Satriawan</a>
            </span>
            <span className="flex gap-2 font-medium">
              <img src="/icons/github.webp" alt="github" />
              <a href="index.html">RidhoSatriawan</a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contact;
