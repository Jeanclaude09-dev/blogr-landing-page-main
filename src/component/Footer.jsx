export const Footer = () => {
  return (<footer className="bg-gray-950 text-white">

    <div className="max-w-6xl mx-auto flex">
      <div><img src="/images/logo.svg" alt="blogr logo" /></div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3>Product</h3>
          <ul>
            <li>Overview</li>
            <li>Pricing</li>
            <li>Marketplace</li>
            <li>Features</li>
            <li>Integrations</li>
          </ul>
        </div>

        <div>
          <h3>Company</h3>
          <ul>
            <li>About</li>
            <li>Team</li>
            <li>Blog</li>
            <li>Careers</li>
          </ul>
        </div>

        <div>
          <h3>Connect</h3>
          <ul>
            <li>Contact</li>
            <li>Newsletter</li>
            <li>LinkedIn</li>
          </ul>
        </div>
      </div>
    </div>
  </footer>)
}