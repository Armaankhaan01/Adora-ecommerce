import { footerLinks } from "@/constants/data";
import Container from "./Container";
import Logo from "./Logo";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-black/10 bg-shop_light_bg py-10">
      <Container className="grid gap-8 md:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-3 text-sm text-dark-text">
            Premium fashion essentials for everyday confidence.
          </p>
          <SocialMedia className="mt-4" />
        </div>

        <div>
          <h4 className="mb-3 font-semibold text-shop_dark_green">Company</h4>
          <ul className="space-y-2 text-sm text-dark-text">
            {footerLinks.company.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-3 font-semibold text-shop_dark_green">Support</h4>
          <ul className="space-y-2 text-sm text-dark-text">
            {footerLinks.support.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-3 font-semibold text-shop_dark_green">Legal</h4>
          <ul className="space-y-2 text-sm text-dark-text">
            {footerLinks.legal.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
