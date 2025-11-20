import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer id="footer" className="flex flex-col w-full border-t text-center mt-auto">
      <section id="footer-top" className="flex flex-col border-b md:flex-row items-center justify-center bg-white p-5 gap-6">
        <Image
          src={"/assets/icons/mascot001.png"}
          width={120}
          height={120}
          loading="lazy"
          alt="gitty-mascot"
        />
        <div className="flex md:items-start flex-col">
          <span className="text-2xl font-lora">
            Ready to Share Your Code? Start Free Today!
          </span>
          <p className="font-sans mt-2 text-muted-foreground font-normal text-center md:text-start whitespace-normal leading-tight">
            Join thousands of developers who trust Gitty to showcase their work safely. 
            No credit card required—get started in seconds and experience the future of code collaboration.
          </p>
        </div>
        <Button asChild>
          <Link href={"/auth"}>
            Get Started
            </Link>
          </Button>
      </section>
      <section
        id="footer-bottom"
        className="flex flex-col md:flex-row items-center justify-between gap-6 p-5"
      >
      <div className="flex flex-col w-full md:max-w-sm text-center items-center md:items-start md:text-start">
      <Link
          href="/"
          className="flex items-center space-x-2 select-none cursor-pointer"
        >
          <div className="relative overflow-hidden rounded">
            <Image
              src="/assets/gitty-logo.png"
              alt="logo"
              className="object-center object-cover"
              width={60}
              height={60}
              priority
            />
          </div>
          <span className="text-2xl font-lora font-semibold italic">Gitty</span>
        </Link>
        <p className="text-sm text-muted-foreground">
        Send transactional and marketing emails with AutoSend—clean API for developers, simple campaign tools for marketers.
        </p>
        <span className="font-lora mt-2 text-muted-foreground">
          Built with ❤️ by {" "}
          <Link
            href={
              "https://l.devwtf.in/x?utm_source=gitty&utm_medium=footer&utm_campaign=brand"
            }
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
          <span className="font-semibold italic text-primary">
            Saidev Dhal
          </span>
          </Link>
        </span>
      </div>
       <div className="flex flex-col items-center md:items-end text-center md:text-right mt-4 md:mt-0 w-full md:w-auto">
       <span className="text-[54px] md:text-[80px] font-regular font-lora opacity-20 leading-[1.2] md:leading-[1.4] slashed-zero">
          000,365
        </span>
        <p className="text-sm font-lora italic text-muted-foreground">
            Private Repositories Shared Securely
          </p>
       </div>
      </section>
    </footer>
  );
}

