import mobileIllustration from '../assets/images/illustration-editor-mobile.svg'
import desktopIllustration from '../assets/images/illustration-editor-desktop.svg'
import { SplitSection } from './SplitSection';

export const Features = () => {


  const featureData = [
    {
      heading: "Introducing an extensible editor",
      text: "Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.",
    },
    {
      heading: "Robust content management",
      text: "Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you're in full control.",
    },
  ];

  return (
    <SplitSection
      title="Designed for the future"
      mobileImage={mobileIllustration}
      desktopImage={desktopIllustration}
      imageAlt="Editor illustration"
      contentBlocks={featureData}
      imagePosition="right"
      sectionClasses="overflow-hidden py-16 md:py-40"
      imageClasses="md:absolute md:-right-80 lg:-right-90 md:w-[700px] lg:w-[900px]"
    />
  );
};
