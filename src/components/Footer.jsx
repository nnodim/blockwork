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
    <footer className="font-mono" style={{ backgroundImage: `url(${bgImg})`, backgroundSize: "cover" }}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-0 px-4 lg:p-10 w-full max-w-6xl mx-auto text-center">
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
        <div className="flex flex-col items-center gap-4 col-span-full lg:col-span-1">
          <img className="w-10 h-10" src={callCalling} alt="" />
          <p>We&apos;re available to assist you during business hours.</p>
          <p>(123) 456-7890</p>
        </div>
      </div>
      <div className="p-10 w-full max-w-6xl mx-auto text-center">
        <div className="flex flex-col md:flex-row gap-4 w-full justify-between items-center">
          <img src={logo} alt="" />
          <ul className="flex gap-4 flex-wrap lg:flex-nowrap  items-center justify-center">
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
        <hr className="my-10 border border-[#333333]" />
        <div className="flex gap-4 mx-auto w-fit flex-wrap lg:flex-nowrap items-center justify-center">
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
