import { Leaf, Linkedin, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  const links = [
    { label: "About", href: "#" },
    { label: "Whitepaper", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Privacy", href: "#" }
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Vision */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <Leaf className="w-8 h-8 text-primary mr-3" />
              <span className="text-xl font-bold text-foreground">WallStreet Eon</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Building a regenerative financial ecosystem where nature's wisdom meets quantum technology.
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-foreground mb-6">Explore</h3>
            <nav className="space-y-3">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-foreground mb-6">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-card rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">
            © 2025 WallStreet Eon. Built for a regenerative future.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;