import Link from "next/link";
import { JSX, SVGProps } from "react";
import { OWNER_NAME, SITE_NAME } from "../config/constants";

export default function Footer() {
  return (
    <footer className="bg-muted py-4">
      <div className="container flex flex-col p-4 gap-2 ">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <MountainIcon className="h-6 w-6" />
          <span className="text-md font-bold">{SITE_NAME}</span>
        </Link>
        <p className="text-muted-foreground text-sm ">
          maaş işlemlerinizde size yardımcı olacak güvenilir bir platformdur.
          Sitemiz üzerinden maaşınızın ne zaman yatacağını takip edebilir,
          brütten nete ve netten brüte maaş çevirimi yapabilir ve gelir-gider
          hesaplamalarınızı kolayca gerçekleştirebilirsiniz.
        </p>
      </div>
      <div className="flex flex-col gap-4 items-center justify-center">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 {SITE_NAME} by {OWNER_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function MountainIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
