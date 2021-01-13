import styles from "./nav.module.scss";

const navTree = [
  {
    label: "Dashboard",
    icon: "MdDashboard"
  },
  {
    label: "My Class",
    icon: "IoMdBookmarks"
  }
];

const Navigation = () => {
  return (
    <nav className={styles.wrapper}>
      <ul></ul>
    </nav>
  );
};

export default Navigation;
