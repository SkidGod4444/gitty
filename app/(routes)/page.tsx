import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full overflow-hidden">
      <section id="hero" className="flex w-full border-b flex-col items-center justify-center gap-6 py-10 px-5">
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
          With Gitty, you control who can view your code. Share securely with collaborators, recruiters, or friends and never compromise on privacy.
        </p>
      </section>
    </div>
  );
}