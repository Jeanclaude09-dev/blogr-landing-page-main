import illustrationPhone from "../assets/images/illustration-phones.svg"
import { Container } from "./Container";

export const Infrastructure = () => {
  return (
    <section className="w-full bg-gray-800 min-h-72 text-white relative rounded-bl-[100px] rounded-tr-[100px] ">

      <img
        src={illustrationPhone}
        alt="illustration phone"
        className="absolute -top-32 left-0 md:left-8 max-w-xs md:max-w-md"
      />

      <Container className="grid md:grid-cols-2 items-center py-16 relative">

        <div />
        <div>
          <h3 className="text-2xl mb-3">State of the Art Infrastructure</h3>
          <p className="text-white/70">
            With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
          </p>
        </div>
      </Container>
    </section>
  )
}