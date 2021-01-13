import styles from "./nav.module.scss";

const Navigation = () => {
  return (
    <nav className={styles.wrapper}>
      <ul>
        <li> Dashboard </li>
        <li> My Class </li>
        <li> Instructors </li>
        <li> Courses </li>
        <li> Group Chat </li>
        <li> Settings </li>
      </ul>
    </nav>
  );
};

export default Navigation;
