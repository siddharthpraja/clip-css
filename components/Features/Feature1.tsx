import { FaStar, FaSquare } from "react-icons/fa";
import { BsOctagonFill } from "react-icons/bs";
import { IoTriangle } from "react-icons/io5";

interface IconItem {
  id: number;
  icon: React.ComponentType<{ className?: string }>;
  bgColor: string;
  text: string;
  iconColor: string;
  iconAlt: string;
  imgSrc: string;
}

const iconData: IconItem[] = [
  {
    id: 1,
    icon: FaStar,
    bgColor: "bg-indigo-500 dark:bg-indigo-800",
    text: "Hear what you send",
    iconColor: "text-pink-400 dark:text-pink-700",
    iconAlt: "star",
    imgSrc: "/money.svg",
  },
  {
    id: 2,
    icon: FaSquare,
    bgColor: "bg-purple-500 dark:bg-purple-800",
    text: "Set alarm on trades",
    iconColor: "text-green-400 dark:text-green-500 rotate-45",
    iconAlt: "square",
    imgSrc: "/alarm.svg",
  },
  {
    id: 3,
    icon: BsOctagonFill,
    bgColor: "bg-yellow-300 dark:bg-yellow-500",
    text: "Always find best deals",
    iconColor: "text-fuchsia-500",
    iconAlt: "octagon",
    imgSrc: "/magnifier.svg",
  },
  {
    id: 4,
    icon: IoTriangle,
    bgColor: "bg-green-300 dark:bg-green-600",
    text: "Keep your money safe",
    iconColor: "text-orange-400 dark:text-orange-500",
    iconAlt: "triangle",
    imgSrc: "/suitcase.svg",
  },
];

const Feature1: React.FC = () => {
  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-4 gap-4">
      {iconData.map(
        ({ id, icon: Icon, bgColor, text, iconColor, iconAlt, imgSrc }) => (
          <div
            key={id}
            className={`${bgColor} h-64 rounded-[50px] relative group flex items-center overflow-hidden`}
          >
            <Icon
              className={`w-full h-52 ${iconColor} group-hover:scale-[4] duration-500 rounded-[50px]`}
            />
            <div className="group-hover:flex duration-500 hidden">
              <h1 className="text-4xl w-1/2 absolute top-0 left-5 font-serif py-8 p-4">
                {text}
              </h1>
              {/* Add coin images */}
              <img
                src={"/coin.svg"}
                alt={iconAlt}
                className="w-10 h-10 absolute top-10 right-10"
              />
              <img
                src={"/coin.svg"}
                alt={iconAlt}
                className="w-10 h-10 absolute top-16 right-16"
              />
              <img
                src={"/coin.svg"}
                alt={iconAlt}
                className="w-10 h-10 absolute top-4 right-14"
              />
              {/* Each block-specific image (money, alarm, magnifier, suitcase) */}
              <img
                src={imgSrc}
                alt={iconAlt}
                className="absolute bottom-0 right-0 w-40"
              />
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Feature1;
