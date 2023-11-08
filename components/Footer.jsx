import styles from "@/styles/footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Phuc Mai</div>
      <div className={styles.text}>© All rights reserved.</div>
    </div>
  );
};

export default Footer;