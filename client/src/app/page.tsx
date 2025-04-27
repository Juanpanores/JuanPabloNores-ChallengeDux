import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/SideBar/Sidebar";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className={styles.page}>
        
      </div>
    </>
  );
}
