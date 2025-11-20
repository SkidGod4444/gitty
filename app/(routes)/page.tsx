import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full overflow-hidden">
      <section
        id="hero"
        className="flex w-full border-b flex-col items-center justify-center gap-6 py-10 px-5"
      >
        <Image
          src={"/assets/icons/mascot003.png"}
          width={200}
          height={200}
          loading="lazy"
          alt="lock-icon"
        />
        <h1 className="text-4xl font-lora leading-tight text-center">
          Share Private Repos, Securely & Effortlessly
        </h1>
        <p className="text-center text-muted-foreground max-w-xl">
          Give access to your private repositories—no need to make them public.
          With Gitty, you control who can view your code. Share securely with
          collaborators, recruiters, or friends and never compromise on privacy.
        </p>
        <div className="flex flex-row items-center justify-between gap-5">
          <Button variant={"outline"} asChild>
            <Link href={"/pricing"}>Custom Pricing</Link>
          </Button>
          <Button asChild>
            <Link href={"/auth"}>Get Started</Link>
          </Button>
        </div>
      </section>
      <section
        id="bento-cards"
        className="flex flex-col md:flex-row w-full overflow-hidden min-h-[240px]"
      >
        <div className="flex-1 gap-3 flex flex-col items-start justify-center border-r px-5 py-5 shadow-inner shadow-black/10">
          <span className="flex text-xs font-lora font-semibold italic uppercase">
            Transactional Emails
          </span>
          <span className="flex flex-col font-lora text-muted-foreground text-2xl leading-tight">
            Fast and reliable
            <span className="text-primary">email API for developers.</span>
          </span>
          <p className="text-sm text-foreground/70">
            Send personalized transactional emails with ease using our robust
            API. Ensure timely delivery and high engagement rates for your
            critical communications.
          </p>
          <Button>Learn More</Button>
        </div>
        <div className="flex-1 gap-3 flex flex-col items-start justify-center border-r px-5 py-5 shadow-inner shadow-black/10">
          <span className="flex text-xs font-lora font-semibold italic uppercase">
            Transactional Emails
          </span>
          <span className="flex flex-col font-lora text-muted-foreground text-2xl leading-tight">
            Fast and reliable
            <span className="text-primary">email API for developers.</span>
          </span>
          <p className="text-sm text-foreground/70">
            Send personalized transactional emails with ease using our robust
            API. Ensure timely delivery and high engagement rates for your
            critical communications.
          </p>
          <Button>Learn More</Button>
        </div>
      </section>
    </div>
  );
}
