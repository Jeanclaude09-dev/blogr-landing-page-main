import illustrationDesktop from "../assets/images/illustration-laptop-desktop.svg";
import illustrationMobile from "../assets/images/illustration-laptop-mobile.svg";
import { SplitSection } from "./SplitSection";

export const Tooling = () => {
  const toolingData = [
    {
      heading: "Free, open, simple",
      text: "Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.",
    },
    {
      heading: "Powerful tooling",
      text: "Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.",
    },
  ];

  return (
    <SplitSection
      mobileImage={illustrationMobile}
      desktopImage={illustrationDesktop}
      imageAlt="Laptop illustration"
      contentBlocks={toolingData}
      imagePosition="left"
      sectionClasses="overflow-hidden md:py-45"
      imageClasses="md:absolute md:-left-90"
    />
  );
};
