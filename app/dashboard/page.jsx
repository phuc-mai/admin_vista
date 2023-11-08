import Card from "@/components/Card";
import Chart from "@/components/Chart";
import Transactions from "@/components/Transactions";
import Rightbar from "@/components/Rightbar";
import styles from "@/styles/dashboard.module.css";
import { cardData } from "@/constant";

const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          {cardData.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>
  );
};

export default Dashboard;
