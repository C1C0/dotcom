import Link from "next/link";
import Icon from "./Icon";

export interface FeatureItem {
  slug: string;
  icon: Icon.LucideIcon;
  title: string;
  description: string;
}

export const FEATURE_LIST: FeatureItem[] = [
  {
    slug: "privacy-first",
    icon: Icon.Shield,
    title: "Privacy First",
    description: "Keep your own data by yourself. All data generated at runtime is saved in the SQLite database file.",
  },
  {
    slug: "plain-text",
    icon: Icon.Edit3,
    title: "Plain text with Markdown",
    description: "All content will be saved as plain text, not HTML. And lots of useful markdown syntax are supported.",
  },
  {
    slug: "lightweight",
    icon: Icon.Compass,
    title: "Lightweight but Powerful",
    description: "Using Go + React.js + SQLite architecture, the overall package is very lightweight.",
  },
  {
    slug: "customizable",
    icon: Icon.Sliders,
    title: "Customizable",
    description: "You can customize the server name, icon, description, custom system style and execution script, etc.",
  },
  {
    slug: "open-source",
    icon: Icon.Github,
    title: "Open Source Completely",
    description: "memos believes that open source is the future, and all code is already open source in GitHub.",
  },
  {
    slug: "free-forever",
    icon: Icon.Smile,
    title: "Free Forever",
    description: "All features are free forever and will never be charged in any form or content.",
  },
];

const FeatureMatrix = () => {
  return (
    <>
      <div className="w-full my-8 flex flex-col justify-center items-center">
        <h2 className="text-xl text-center text-gray-500 font-mono mb-4">
          <span className="text-2xl mr-2">✨</span>Features
        </h2>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 sm:px-10">
        {FEATURE_LIST.map((featureItem) => (
          <Link
            key={featureItem.title}
            href={`/feature/${featureItem.slug}`}
            className="w-full flex flex-col justify-start items-start p-6 rounded-2xl hover:shadow"
          >
            <featureItem.icon strokeWidth="1" className="h-8 w-auto" />
            <span className="relative text-base sm:text-xl mb-2 mt-4">
              <span>{featureItem.title}</span>
            </span>
            <p className="text-sm sm:text-base text-gray-500">{featureItem.description}</p>
          </Link>
        ))}
      </div>
    </>
  );
};

export default FeatureMatrix;
