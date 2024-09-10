import {
  bgImg,
  callCalling,
  insta,
  location,
  logo,
  sms,
  whatsApp,
  x,
  youTube,
} from "@/assets";

export default function Footer() {
  return (
    <footer className="font-mono" style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="flex gap-10 p-10 w-full max-w-6xl mx-auto text-center">
        <div className="flex flex-col items-center gap-4">
          <img className="w-10 h-10" src={sms} alt="" />
          <p>Feel free to reach out to us with any questions or inquiries.</p>
          <p>hello@freed.io</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <img className="w-10 h-10" src={location} alt="" />
          <p>Visit our office for a personal consultation or meeting.</p>
          <p>123 Main St, Anytown, Nigeria</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <img className="w-10 h-10" src={callCalling} alt="" />
          <p>We&apos;re available to assist you during business hours.</p>
          <p>(123) 456-7890</p>
        </div>
      </div>
      <div className="p-10 w-full max-w-6xl mx-auto text-center">
        <div className="flex gap-4 w-full justify-between items-center">
          <img src={logo} alt="" />
          <ul className="flex gap-4">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">How it works</a>
            </li>
            <li>
              <a href="#">Faq</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <ul className="flex gap-4">
            <li>
              <a href="">
                <img className="w-10 h-10" src={insta} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img className="w-10 h-10" src={youTube} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img className="w-10 h-10" src={x} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img className="w-10 h-10" src={whatsApp} alt="" />
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-10" />
        <div className="flex gap-4 mx-auto w-fit">
          <p>© 2024 Freed. All rights reserved.</p>
          <ul className="flex gap-4">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
