import Link from "next/link";

const Home = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center h-full">
      <div className="w-2/3">
        <h1 className="text-2xl  onload delay-100 font-serif md:text-4xl lg:text-6xl xl:text-6xl my-4 md:my-6">
          Elevate Your Web-Designs <br /> with Clip-CSS.
        </h1>
        

        {/* Hero Description */}
        <p className="lg:w-3/4 onload delay-300 duration-500 my-4 text-xs md:text-xs xl:text-sm text-wrap">
          Clip-CSS simplifies web development by offering reusable utility
          classes and custom clips for styling. Whether you're building a
          website from scratch or optimizing an existing one, Clip-CSS provides
          the flexibility you need.
        </p>
      </div>
      <h1 className="w-2/3 border-y border-orange-500 font-bold text-center p-2 rounded-xl">
        Available Tamplates
      </h1>

      <Link
        href={"/buttons"}
        className="w-1/2  hover:border-orange-500 border-y text-center p-2 rounded-xl"
      >
        Buttons
      </Link>
      <Link
        href={"/navbars"}
        className="w-1/2 border-y  hover:border-orange-500 text-center p-2 rounded-xl"
      >
        Navbars
      </Link>
      <Link
        href={"/heros"}
        className="w-1/2 border-y  hover:border-orange-500 text-center p-2 rounded-xl"
      >
        Hero Sections
      </Link>
      <Link
        href={"/features"}
        className="w-1/2 border-y  hover:border-orange-500 text-center p-2 rounded-xl"
      >
        Features
      </Link>

    </div>
  );
};

export default Home;
