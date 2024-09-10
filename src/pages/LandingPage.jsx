import { bgImg, featureImg, heroImg, iMac, ipad, logoWhite, trade } from "@/assets";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

export const LandingPage = () => {
  return (
    <main className="flex flex-col gap-48 my-20 font-mono">
      <section className="flex flex-col mx-auto max-w-7xl items-center justify-center gap-10">
        <div className="flex flex-col gap-6 justify-center items-center text-center">
          <h1 className="text-7xl font-bold leading-[88px] w-full max-w-[988px]">
            Welcome To <span className="text-[#6A0572]">BlockWork</span>, the
            Future Of Freelancing
          </h1>
          <p className="text-xl w-full max-w-3xl">
            Join our decentralized platform and experience the benefits of
            blockchain technology in the freelance industry.
          </p>
        </div>
        <div className="flex gap-2">
          <Button className="text-white">Get Started</Button>
          <Button variant="outline">Learn More</Button>
        </div>
        <img src={heroImg} alt="" />
      </section>
      <section className="relative mx-auto max-w-7xl w-full flex justify-between items-center">
        <div className="flex flex-col gap-7 max-w-[750px]">
          <p>About</p>
          <h2 className="text-5xl font-bold leading-[64px]">
            Experience a Decentralized Marketplace for Transparent and{" "}
            <span className="text-primary">Fair Freelancing</span>
          </h2>
          <p className="text-xl w-full max-w-3xl">
            BlockWork is a decentralized marketplace ensures transparency and
            fairness by eliminating intermediaries and providing a secure
            environment for freelancers and clients to collaborate.
          </p>
          <ul className="flex flex-col gap-4">
            <li className="flex gap-4 text-xl items-center">
              <img src={trade} alt="" />
              <span>Transparent Transactions</span>
            </li>
            <li className="flex gap-4 text-xl items-center">
              <img src={trade} alt="" />
              <span>Fair and Equitable Environment</span>
            </li>
            <li className="flex gap-4 text-xl items-center">
              <img src={trade} alt="" />
              <span>Elemination of third parties</span>
            </li>
          </ul>
        </div>
        <div className="">
          <img src={ipad} alt="" />
        </div>
      </section>
      <section className="relative mx-auto max-w-7xl w-full flex gap-10 flex-row-reverse justify-between items-center">
        <div className="flex flex-col gap-7 max-w-[750px]">
          <p>Feature</p>
          <h2 className="text-5xl font-bold leading-[64px]">
            Unlock Global Opportunities with Cryptocurrency Payments on
            BlockWork
          </h2>
          <p className="text-xl w-full max-w-3xl">
            BlockWork empowers freelancers worldwide by enabling cryptocurrency
            payments, providing access to the freelance economy without banking
            limitations.
          </p>
          <ul className="flex flex-col gap-4">
            <li className="flex gap-4 text-xl items-center">
              <img src={trade} alt="" />
              <span>Seamless Cryptocurrency Transactions</span>
            </li>
            <li className="flex gap-4 text-xl items-center">
              <img src={trade} alt="" />
              <span>Borderless Payment Solutions for Freelancers</span>
            </li>
            <li className="flex gap-4 text-xl items-center">
              <img src={trade} alt="" />
              <span>Financial Freedom with Cryptocurrency Payments</span>
            </li>
          </ul>
          <div className="flex gap-2">
            <Button className="text-white h-auto px-10 rounded-xl">
              Sign Up
            </Button>
            <Button variant="link">
              <span>Learn More</span>
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
        <div className="">
          <img src={featureImg} alt="" />
        </div>
      </section>
      <section className="w-full mx-auto max-w-7xl gap-24 flex justify-between">
        <div className="flex flex-col gap-4 justify-between">
          <h2 className="text-4xl font-bold leading-[50px]">
            Intuitive Dashboards for Freelancers and Clients
          </h2>
          <div className="flex gap-2">
            <Button className="text-white h-auto px-10 rounded-xl">
              Sign Up
            </Button>
            <Button variant="link">
              <span>Learn More</span>
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full max-w-3xl">
          <p className="text-xl">
            Freed provides comprehensive user dashboards that offer insights
            into job statuses, financials, communications, and more. These
            intuitive dashboards enhance user experience and productivity.
          </p>
          <div className="flex gap-10">
            <div className="flex flex-col gap-4">
              <h6 className="font-bold text-xl">Overview</h6>
              <p className="text-xl">
                Get a clear overview of your ongoing projects, earnings, and
                communication history.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h6 className="font-bold text-xl">Financials</h6>
              <p className="text-xl">
                Track your earnings, invoices, and payments in one centralized
                location.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="relative">
        <div className="pb-36 w-full flex gap-10 flex-row-reverse justify-between items-center mx-auto max-w-7xl">
          <img src={bgImg} alt="" className="w-full absolute bottom-0 -z-10" />
          <div className="flex flex-col gap-7 max-w-[750px]">
            <h2 className="text-5xl font-bold leading-[64px]">
              Expand Your Skills with Freed&#39;s Learning Opportunities
            </h2>
            <p className="text-xl w-full max-w-3xl">
              At Freed, we believe in continuous growth and learning. That&#39;s
              why we offer a range of resources and workshops to help you
              enhance your skills and stay ahead in your freelance career.
            </p>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-4 text-xl items-center">
                <img src={trade} alt="" />
                <span>Access to Expert-led Workshops</span>
              </li>
              <li className="flex gap-4 text-xl items-center">
                <img src={trade} alt="" />
                <span>Interactive Learning Resources</span>
              </li>
              <li className="flex gap-4 text-xl items-center">
                <img src={trade} alt="" />
                <span>Community Forums for Knowledge Sharing</span>
              </li>
            </ul>
            <div className="flex gap-2">
              <Button className="text-white h-auto px-10 rounded-xl">
                Sign Up
              </Button>
              <Button variant="link">
                <span>Learn More</span>
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="">
            <img src={iMac} alt="" />
          </div>
        </div>
      </section>
      <section className="w-full gap-24 flex justify-center items-center max-w-7xl mx-auto">
        <div className="border-[#8E44AD] border w-full flex items-center gap-8">
          <div className="flex flex-col gap-4 justify-between pl-4">
            <h2 className="text-4xl font-semibold leading-[50px]">
              Join the Freed Community Today
            </h2>
            <p className="text-xl">
              Discover a new way to freelance and connect with clients globally.
            </p>
            <div className="flex gap-2">
              <Button className="text-white">Get Started</Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
          <div className="w-full max-w-[632px] bg-primary flex justify-center items-center py-20">
            <img src={logoWhite} alt="" />
          </div>
        </div>
      </section>
      <section className="bg-primary py-28">
        <div className="flex flex-col gap-8 items-center w-full max-w-3xl mx-auto text-white">
          <h2 className="text-5xl font-bold leading-[64px] text-center">
            Stay Informed with Our Newsletter
          </h2>
          <p className="text-xl">
            Subscribe to receive updates, industry insights, and valuable tips.
          </p>
          <form className="flex gap-4 w-full">
            <Input placeholder="Enter your email address" className="w-full h-[72px] text-xl" />
            <Button className="text-white bg-[#8E44AD] px-10 text-base h-auto">Subscribe</Button>
          </form>
        </div>
      </section>
    </main>
  );
};
