function Blog() {
  return (
    <section className="py-14">
      <div className="container px-5 mx-auto">
        <h2 className="text-[#212529] text-3xl md:text-4xl font-bold text-center">Blog</h2>
        <div className="blog-list flex flex-wrap gap-7 justify-center mt-4">
          <div className="blog flex">
            <div className="col w-[50%] bg-[#737373] p-4 rounded-tl-md rounded-bl-md"></div>
            <div className="col w-[50%] bg-[#DEE2E6] p-4 rounded-tr-md rounded-br-md">
              <h3 className="text-xl mb-1 font-medium">learn Javascript</h3>
              <p>Lorem ipsum dolor sit amet, consecte adipiscing elit. Proin tristique elit nec. lorem ipsum</p>
            </div>
          </div>
          <div className="blog flex">
            <div className="col w-[50%] bg-[#737373] p-4 rounded-tl-md rounded-bl-md"></div>
            <div className="col w-[50%] bg-[#DEE2E6]  p-4 rounded-tr-md rounded-br-md">
              <h3 className="text-xl mb-1 font-medium">learn Paython</h3>
              <p>Lorem ipsum dolor sit amet, consecte adipiscing elit. Proin tristique elit nec. lorem ipsum</p>
            </div>
          </div>
          <div className="blog flex">
            <div className="col w-[50%] bg-[#737373] p-4 rounded-tl-md rounded-bl-md"></div>
            <div className="col w-[50%] bg-[#DEE2E6]  p-4 rounded-tr-md rounded-br-md">
              <h3 className="text-xl mb-1 font-medium">learn Rust</h3>
              <p>Lorem ipsum dolor sit amet, consecte adipiscing elit. Proin tristique elit nec. lorem ipsum</p>
            </div>
          </div>
          <div className="blog flex">
            <div className="col w-[50%] bg-[#737373] p-4 rounded-tl-md rounded-bl-md"></div>
            <div className="col w-[50%] bg-[#DEE2E6]  p-4 rounded-tr-md rounded-br-md">
              <h3 className="text-xl mb-1 font-medium">learn UI</h3>
              <p>Lorem ipsum dolor sit amet, consecte adipiscing elit. Proin tristique elit nec. lorem ipsum</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Blog;
