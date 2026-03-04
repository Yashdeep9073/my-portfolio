import { PORTFOLIO_DATA } from "@/constants";

const Footer = () => (
  <footer className="border-t border-border py-8 px-6 text-center">
    <p className="font-mono text-xs text-muted-foreground">
      {PORTFOLIO_DATA.footer.text} • © {new Date().getFullYear()}
    </p>
  </footer>
);

export default Footer;
