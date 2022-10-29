import React from "react";

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <div>
        <a className={styles["brand-link"]}>TMC Virajpet</a>
      </div>
      <nav className={styles["main-nav"]}>
        <ul className={styles["nav-list"]}>
          <li className={styles["nav-list__item"]}>
            <a className={styles["nav-link"]}>Dashboard</a>
          </li>
          <li className={styles["nav-list__item"]}>
            <a className={styles["nav-link"]}>Revenue Assets</a>
          </li>
          <li className={styles["nav-list__item"]}>
            <a className={styles["nav-link"]}> Collection</a>
          </li>
          <li className={styles["nav-list__item"]}>
            <a className={styles["nav-link"]}>Schemes and works</a>
          </li>
          <li className={styles["nav-list__item"]}>
            <a className={styles["nav-link"]}>Misc</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
