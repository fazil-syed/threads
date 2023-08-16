"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebarLinks } from "./../../constants/index";
function Bottombar() {
  const pathname = usePathname();
  return (
    <section className="bottombar">
      <div className="bottombar_container ">
        {sidebarLinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;
          return (
            <div>
              <Link
                href={link.route}
                key={link.label}
                className={`bottombar_link ${isActive && "bg-purple-500"}`}
              >
                <Image
                  src={link.imgURL}
                  alt={link.label}
                  width={24}
                  height={24}
                />
                <p className="text-subtle-medium text-light-1 max-sm:hidden">
                  {link.label.split(/\s+/)[0]}
                </p>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
export default Bottombar;
