import { Container } from "./Container"

export const Footer = () => {

  const links = [
    {
      id: 0,
      link: "Product",
      options: [
        { id: 0, label: "Overview" },
        { id: 1, label: "Pricing" },
        { id: 2, label: "Marketplace" },
        { id: 3, label: "Features" },
        { id: 4, label: "Integrations" }]
    },
    {
      id: 1,
      link: "Company",
      options: [
        { id: 0, label: "About" },
        { id: 1, label: "Team" },
        { id: 2, label: "Blog" },
        { id: 3, label: "Careers" }]
    },
    {
      id: 2,
      link: "Connect",
      options: [
        { id: 0, label: "Contact" },
        { id: 1, label: "Newsletter" },
        { id: 2, label: "LinkedIn" }
      ]
    }
  ];
  return (
    <footer className="w-full bg-gray-950 text-white rounded-tr-[45px]">
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-14">
          <div className="col-span-1">
            <img src="/images/logo.svg" alt="blogr logo" />
          </div>
          {links.map((link) => (
            <div key={link.id}>
              <h3 className="font-bold mb-5">{link.link}</h3>
              <ul className="flex flex-col gap-2">
                {link.options.map((option) => (
                  <li key={option.id} className="text-sm cursor-pointer text-white/40 hover:text-white transition-colors">{option.label}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </footer>
  )
}