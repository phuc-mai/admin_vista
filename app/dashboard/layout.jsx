import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import styles from "@/styles/dashboard.module.css";
import Footer from "@/components/Footer";

const layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />
      </div>
      
      <div className={styles.content}>
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default layout;
