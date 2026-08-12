import illustrationPhone from "../assets/images/illustration-phones.svg"

export const Infrastructure = () => {
  return <section className="bg-gray-800 min-h-72 text-white grid md:grid-col-2 relative rounded-bl-[100px] rounded-tr-[100px]">
    <img src={illustrationPhone} alt="illustration phone" className="absolute -top-48" />

    <div className="" />
    <div>
      <h3>State of the Art Infrastructure</h3>
      <p>
        With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity.
        This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
      </p>
    </div>

  </section>
}