import { Button } from "@/components/ui/button";
export default function LandingSignUp() {
  return (
    <section className="w-full bg-primary py-12">
      <div className="container grid items-center justify-center gap-6 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter text-primary-foreground md:text-4xl/tight">
            Maaşını ve alım gücünü daha detaylı incele!
          </h2>
          <p className="mx-auto max-w-[600px] text-primary-foreground md:text-xl/relaxed lg:text-base/relaxed ">
            Üye olarak daha detaylı bilgilere ve maaşını gelir ve giderlerinle
            birlikte takip edip alım gücünü hesaplayabilirsin.
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-2">
          <Button
            type="submit"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
          >
            Maaş Takip'e katılmak için tıklayın
          </Button>
          {/* <p className="text-xs text-gray-400">
            By signing up, you agree to our{" "}
            <Link
              href="#"
              className="underline underline-offset-2"
              prefetch={false}
            >
              Terms &amp; Conditions
            </Link>
          </p> */}
        </div>
      </div>
    </section>
  );
}
