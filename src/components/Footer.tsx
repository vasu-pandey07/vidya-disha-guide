import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold">VD</span>
              </div>
              <span className="text-lg font-semibold text-foreground">Vidya Disha</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-md">
              Government of India's official career guidance platform. Helping students make informed decisions about their education and career paths.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/quiz" className="text-muted-foreground hover:text-primary">Aptitude Quiz</Link></li>
              <li><Link to="/career-mapping" className="text-muted-foreground hover:text-primary">Career Mapping</Link></li>
              <li><Link to="/colleges" className="text-muted-foreground hover:text-primary">College Directory</Link></li>
              <li><Link to="/dashboard" className="text-muted-foreground hover:text-primary">Dashboard</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-3">Contact</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Email: info@vidyadisha.gov.in</p>
              <p>Phone: 1800-XXX-XXXX</p>
              <p>Help Desk: Mon-Fri 9AM-6PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2024 Government of India. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link>
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</Link>
              <Link to="/accessibility" className="text-sm text-muted-foreground hover:text-primary">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;