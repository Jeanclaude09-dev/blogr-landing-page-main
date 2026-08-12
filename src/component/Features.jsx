import mobileIllustration from '../assets/images/illustration-editor-mobile.svg'
import desktopIllustration from '../assets/images/illustration-editor-desktop.svg'

export const Features = () => {
  return (
    <section className="px-4 md:px-8 lg:px-16 py-8 md:py-16 lg:py-24">
      <h2>Designed for the future</h2>

      {/* Grid */}
      <section className="grid md:grid-cols-2 gap-8 my-8">
        {/* Illustration */}

        <picture className=" md:order-2">
          <source media="(max-width: 768px)" srcSet={mobileIllustration} />
          <source media="(min-width: 769px)" srcSet={desktopIllustration} />
          <img src={mobileIllustration} alt="Editor illustration" />
        </picture>

        {/* Text */}
        <div className="flex flex-col justify-center gap-4 md:order-1">
          <div>
            <h3>Introducing an extensible editor</h3>
            <p>Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content.
              The editor supports management of multiple blogs and allows easy manipulation of embeds such as images,
              videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or
              change the looks of a blog.</p>
          </div>

          <div>
            <h3>Robust content management</h3>
            <p>  Flexible content management enables users to easily move through posts. Increase the usability of your blog
              by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.
            </p>
          </div>
        </div>

      </section>
    </section>
  )
}