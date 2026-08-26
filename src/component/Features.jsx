import mobileIllustration from '../assets/images/illustration-editor-mobile.svg'
import desktopIllustration from '../assets/images/illustration-editor-desktop.svg'
import { Container } from "./Container";

export const Features = () => {
  return (
    <section className="w-full relative overflow-hidden py-16">
      <Container>
        <h2 className="text-5xl text-gray-600 text-center mb-16">Designed for the future</h2>

        <div className="grid md:grid-cols-2 gap-3 items-center relative">
          <picture className="md:order-2 md:absolute md:max-w-150 md:-right-45">
            <source media="(max-width: 768px)" srcSet={mobileIllustration} />
            <source media="(min-width: 769px)" srcSet={desktopIllustration} />
            <img src={mobileIllustration} alt="Editor illustration" />
          </picture>

          <div className="flex flex-col justify-center gap-8 md:order-1">
            <div>
              <h3 className="text-blue-900 text-2xl mb-3">Introducing an extensible editor</h3>
              <p className="text-gray-800">Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.</p>
            </div>

            <div>
              <h3 className="text-blue-900 text-2xl mb-3">Robust content management</h3>
              <p className="text-gray-800">Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you're in full control.</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}