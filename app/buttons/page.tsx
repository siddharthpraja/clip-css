import CopyButton from "@/components/Copycode";
import { buttons } from "@/Data/Buttons";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";


const Buttons = () => {
  return (
    <div className="h-full overflow-hidden">
      <Link
        href={"./"}
        className="border px-2 w-max mx-2 flex gap-2 items-center hover:bg-black hover:text-white py-1 rounded-lg my-2"
      >
        <BiArrowBack /> Back
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 px-2 gap-2">
        {buttons.map((button, index) => (
          <div
            key={index}
            className="h-full relative flex justify-center flex-col items-center py-8 border rounded-lg"
          >
            {/* Render the button components directly */}
            <div className="h-max">{button.component}</div>

            {/* Link to button description page */}
            <div className="absolute top-4 right-4">
              <CopyButton code={button.code || button.description} />
            </div>
            <Link
              className="border px-2 w-max py-1 mt-4 rounded-lg"
              href={`/buttons/test`}
            >
              {button.description}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Buttons;
