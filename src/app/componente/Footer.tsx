import Image from "next/image";
import { Banner } from "./Footerbanner";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-600 mt-40">
      {/* Newsletter Section */}
      <Banner />
      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-32 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-20 text-center md:text-left">
          {/* Logo and About Section */}
          <div className="col-span-1">
            <h3 className="font-bold text-lg text-white">SHOP.CO</h3>
            <p className="text-sm mt-2">
              We have offers that suit your style and which you&#39;re proud to
              wear. From women to men.
            </p>
            <div className="flex justify-center md:justify-start gap-3 mt-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook"></i>
              </a>
            </div>
          </div>

          {/* Links Sections */}
          {[
            {
              title: "Company",
              links: ["About", "Features", "Works", "Career"],
            },
            {
              title: "Help",
              links: [
                "Customer Support",
                "Delivery Details",
                "Terms & Conditions",
                "Privacy Policy",
              ],
            },
            {
              title: "FAQ",
              links: ["Account", "Manage Deliveries", "Orders", "Payments"],
            },
            {
              title: "Resources",
              links: [
                "Free eBooks",
                "Development Tutorial",
                "How-to Blog",
                "YouTube Playlist",
              ],
            },
          ].map((section, idx) => (
            <div key={idx} className="col-span-1">
              <h3 className="font-bold text-lg text-white">{section.title}</h3>
              <ul className="mt-4 space-y-2 text-sm">
                {section.links.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="hover:underline text-gray-400">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
          <p>Shop.co © 2000-2023, All Rights Reserved</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
              alt="Visa"
              width={40}
              height={24}
            />
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
              alt="Mastercard"
              width={40}
              height={24}
            />
            <Image
              src="https://www.paypalobjects.com/webstatic/mktg/Logo/pp-logo-100px.png"
              alt="Paypal"
              width={60}
              height={24}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
