"use client"

import Link from "next/link";
import styles from "@/styles/menuLink.module.css";
import { usePathname } from "next/navigation";

const MenuLinks = ({ item }) => {
  const pathname = usePathname()

  return (
    <Link href={item.path} className={`${styles.container} ${pathname === item.path && styles.active}`}>
      {item.icon}
      {item.title}
    </Link>
  );
};

export default MenuLinks;
