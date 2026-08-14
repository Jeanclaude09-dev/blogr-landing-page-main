import mobileIllustration from '../assets/images/illustration-editor-mobile.svg'
import desktopIllustration from '../assets/images/illustration-editor-desktop.svg'

export const Features = () => {
  return (
    <section className="relative grid place-items-center overflow-hidden">

      <div className="lg:max-w-6xl grid place-items-center" >
        <h2 className="text-5xl text-gray-600 top-0 text-center">Designed for the future</h2>

        {/* Grid */}
        <section className="grid md:grid-cols-2 gap-3 justify-center">
          {/* Illustration */}

          <picture className="md:order-2 md:absolute md:max-w-150 md:-right-45 ">
            <source media="(max-width: 768px)" srcSet={mobileIllustration} />
            <source media="(min-width: 769px)" srcSet={desktopIllustration} className="" />
            <img src={mobileIllustration} alt="Editor illustration" />
          </picture>

          {/* Text */}
          <div className="flex flex-col justify-center gap-8 md:order-1">
            <div className="">
              <h3 className="text-blue-900 text-2xl mb-3">Introducing an extensible editor</h3>
              <p className="text-gray-800 ">Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content.
                The editor supports management of multiple blogs and allows easy manipulation of embeds such as images,
                videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or
                change the looks of a blog.</p>
            </div>

            <div className="">
              <h3 className="text-blue-900 text-2xl mb-3">Robust content management</h3>
              <p className="text-gray-800 ">  Flexible content management enables users to easily move through posts. Increase the usability of your blog
                by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.
              </p>
            </div>
          </div>

        </section>
      </div>
    </section>
  )
}