import Image from "next/image";
import { MdLogout } from "react-icons/md";

import styles from "@/styles/sidebar.module.css";
import { menuItems } from "@/constant";
import MenuLinks from "./MenuLinks";

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          className={styles.userImage}
          src="/noavatar.png"
          alt="profile photo"
          width="50"
          height="50"
        />
        <div className={styles.userDetail}>
          <span className={styles.username}>Phuc Mai</span>
          <span className={styles.userTitle}>Administrator</span>
        </div>
      </div>

      <ul className={styles.list}>
        {menuItems.map((category) => (
          <li key={category.title}>
            <span className={styles.category}>{category.title}</span>
            {category.list.map((item) => (
              <MenuLinks item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>

      <button className={styles.logout}>
        <MdLogout />
        Log Out
      </button>
    </div>
  );
};

export default Sidebar;
