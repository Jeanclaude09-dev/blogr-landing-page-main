import illustrationPhone from "../assets/images/illustration-phones.svg";
import { Container } from "./Container";

export const Infrastructure = () => {
  return (
    <section className="w-full bg-linear-to-r from-purple-950 via-purple-900 to-purple-900 min-h-72 text-white relative rounded-bl-[100px] rounded-tr-[100px] mt-10 md:mt-16">
      <img
        src={illustrationPhone}
        alt="illustration phone"
        className="absolute z-2 -top-24 left-0 md:left-25 max-w-xs md:max-w-md"
      />

      <Container className="grid md:grid-cols-2 items-center py-16 relative overflow-hidden">
        <img
          src="/images/bg-pattern-circles.svg"
          aria-hidden="true"
          className="absolute md:-top-100 md:-left-15 max-w-xs md:max-w-180"
        />

        <div />
        <div>
          <h3 className="text-3xl font-bold mb-5">
            State of the Art Infrastructure
          </h3>
          <p className="text-white/70 text-xl">
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
        </div>
      </Container>
    </section>
  );
};
