import Image from "next/image";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link";


export default function page() {
  return(
    <div className="flex flex-col items-center justify-center h-full w-full overflow-hidden">
      <section
        id="hero"
        className="flex w-full flex-col items-center justify-center gap-2 py-10 px-5"
      >
        <Image
          src={"/assets/icons/mascot004.png"}
          width={200}
          height={200}
          loading="lazy"
          alt="lock-icon"
        />

        <Card className="w-full max-w-sm rounded-xl shadow-none pt-0">
      <CardHeader className="bg-muted rounded-xl border-b px-6 py-4">
        <CardTitle className="font-lora text-stone-700 text-xl">Create account</CardTitle>
        <CardDescription>
          Already have an account? Login.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                required
                className="shadow-none"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required className="shadow-none" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Confirm Password</Label>
              <Input id="confirm-password" type="password" required className="shadow-none" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          Sign Up
        </Button>
      </CardFooter>
    </Card>
      </section>
      <p className="mb-10 text-xs text-muted-foreground font-sans">
        By signing up, you agree to our <Link href={"/legal/terms"} className="underline font-bold">Terms of Service</Link> and <Link href={"/legal/privacy"} className="underline font-bold">Privacy Policy</Link>.
      </p>
    </div>
  );
}
