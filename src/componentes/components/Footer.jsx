import { Copyright } from "lucide-react";
import "./footer.css";

function Footer() {
  return (
    <section className="footer-section">
      <div className="footer-autoria">
        <Copyright size={16} />
        <p>glhrmdev. 2025.</p>
      </div>
      <div className="footer-declaracao">
        <p>Todos os direitos reservados.</p>
      </div>
    </section>
  );
}

export default Footer;
