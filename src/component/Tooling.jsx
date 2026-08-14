import illustrationDesktop from "../assets/images/illustration-laptop-desktop.svg"
import illustrationMobile from "../assets/images/illustration-laptop-mobile.svg"

export const Tooling = () => {
  return <section className="grid place-items-center">

    <section className="max-w-6xl flex items-center">

      <div>
        <picture>
          <source media="(max-width: 768px)" srcSet={illustrationDesktop} />
          <source media="(min-width: 769px)" srcSet={illustrationMobile} className="" />
          <img src={illustrationMobile} />
        </picture>
      </div>
      <div>
        <h3>Free, open, simple</h3>
        <p>Blogr is a free and open source application backed by a large community of helpful developers. It supports
          features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools,
          and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.</p>

        <h3>Powerful tooling</h3>
        <p>Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
          capable of producing even the most complicated sites.</p>
      </div>


    </section>
  </section>
}