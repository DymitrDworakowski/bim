import { ReactComponent as EmailIcon } from "../icons/emailIcon.svg";
import { ReactComponent as LinkedinIcon } from "../icons/linkedin.svg";
import { ReactComponent as PhoneIcon } from "../icons/phone.svg"; // якщо є svg телефону

function Footer() {
  return (
    <footer className="flex flex-col md:flex-row flex-wrap gap-5 bg-gray-800 p-8 justify-center md:justify-between items-center text-white text-sm">
      
      <div className="flex flex-col md:flex-row gap-5 items-center">
        <a
          href="tel:+48123456789"
          className="flex items-center gap-2 hover:text-orange-400"
        >
          <PhoneIcon className="w-6 h-6" />
          +48 000 000 000
        </a>

        <a
          href="mailto:kontakt@bimup.pl"
          className="flex items-center gap-2 hover:text-orange-400"
        >
          <EmailIcon className="w-6 h-6" />
          kontakt@bimup.pl
        </a>

        <a
          href="https://www.linkedin.com/company/bimup"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-orange-400"
        >
          <LinkedinIcon className="w-6 h-6" />
          LinkedIn
        </a>
      </div>

      <div className="flex flex-col items-center md:items-end text-gray-400">
        <p>© 2025 BIM. All rights reserved.</p>
        <span className="italic">Created by Dymitr Dworakowski</span>
      </div>
    </footer>
  );
}

export default Footer;
