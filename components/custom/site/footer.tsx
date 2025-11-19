import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function SiteFooter() {
  return (
    <footer id="footer" className="flex flex-col w-full border-t text-center mt-auto">
      <div className="flex flex-col border-b md:flex-row items-center justify-center bg-white p-5 gap-6">
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
        <Button>
          Get Started
        </Button>
      </div>
      <div className="flex items-center justify-between p-5">
        <span className="text-sm text-muted-foreground">
          &copy; 2024 Gitty. All rights reserved.
        </span>
        <div className="flex gap-4">
          <a href="/privacy" className="text-sm text-muted-foreground hover:underline">
            Privacy Policy
          </a>
          <a href="/terms" className="text-sm text-muted-foreground hover:underline">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}

