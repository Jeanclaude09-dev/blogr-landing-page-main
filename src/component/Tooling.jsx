import illustrationDesktop from "../assets/images/illustration-laptop-desktop.svg"
import illustrationMobile from "../assets/images/illustration-laptop-mobile.svg"
import { Container } from "./Container";

export const Tooling = () => {
  return (
    <section className="w-full py-16 relative">
      <Container className="grid md:grid-cols-2 gap-8 items-center">

        <picture className="">
          <source media="(max-width: 768px)" srcSet={illustrationMobile} />
          <source media="(min-width: 769px)" srcSet={illustrationDesktop} />
          <img src={illustrationMobile} alt="laptop illustration" />
        </picture>
        <div className="flex flex-col gap-6">
          <div>
            <h3 className="text-blue-900 text-2xl mb-3">Free, open, simple</h3>
            <p className="text-gray-800">Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.</p>
          </div>

          <div>
            <h3 className="text-blue-900 text-2xl mb-3">Powerful tooling</h3>
            <p className="text-gray-800">Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.</p>
          </div>
        </div>
      </Container>
    </section>
  )
}