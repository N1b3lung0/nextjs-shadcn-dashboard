import Link from "next/link";
import { usePathname } from "next/navigation";
import { Package } from "lucide-react";

import { links } from "@/lib/data";

const NavigationLinks = () => {
  const pathname = usePathname();
  return (
    <>
      <Link href="#" className="flex items-center gap-2 text-lg font-semibold">
        <Package className="h-6 w-6" />
        <span className="sr-only">Acme Inc</span>
      </Link>
      {links.map((link, idx) => (
        <Link
          key={idx}
          href="#"
          className={`${
            pathname === link.path ? "text-foreground" : "text-muted-foreground"
          }  transition-colors hover:text-foreground`}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
};

export default NavigationLinks;
