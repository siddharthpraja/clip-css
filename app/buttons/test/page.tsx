// pages/index.tsx
import Link from "next/link";
import React from "react";
import { BiArrowBack } from "react-icons/bi";

const CodeEditor: React.FC = () => {
  return (
    <div className="text-center h-full overflow-hidden ">
      <Link
        href={"./"}
        className="border px-2 w-max mx-2 flex gap-2 items-center hover:bg-black hover:text-white py-1 rounded-lg my-2"
      >
        <BiArrowBack /> Back
      </Link>
      <h1 className="text-4xl font-semibold mb-6">
        Welcome to the Online Code Editor
      </h1>

      {/* Embed CodeSandbox using iframe */}
      <iframe
        src="https://codesandbox.io/embed/jvnxq3?view=editor+%2B+preview&module=%2Fsrc%2FApp.js&fontsize=12&hidenavigation=0&expanddevtools=1"
        title="async-cloud-jvnxq3"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        className="w-10/12 h-[70vh] mx-auto border rounded-xl "
      ></iframe>
    </div>
  );
};

export default CodeEditor;
