import { resourcesLinks, platformLinks, communityLinks } from "../constants"

const Footer = () => {
  return (
    <footer className="border-t py-10 mt-20 border-neutral-700">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="text-md font-semibold mb-4">
          <h3 className="mb-3 ">Resourses</h3>
          <ul className="space-y-2">
            {resourcesLinks.map((link, index )=> (
              <li key={index}>
                <a className="font-normal text-neutral-400 hover:text-white" href={link.href}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-md font-semibold mb-4">
          <h3 className="mb-3 ">Platform</h3>
          <ul className="space-y-2">
            {platformLinks.map((link, index )=> (
              <li key={index}>
                <a className="font-normal text-neutral-400 hover:text-white" href={link.href}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-md font-semibold mb-4">
          <h3 className="mb-3 ">Community</h3>
          <ul className="space-y-2">
            {communityLinks.map((link, index )=> (
              <li key={index}>
                <a className="font-normal text-neutral-400 hover:text-white" href={link.href}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer