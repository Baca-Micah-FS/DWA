import react from "react";
import { Link } from "react-router";
import { FaPencil } from "react-icons/fa6";

const Header = (props) => {
  return (
    <header style={styles.header}>
      <a href="/" aria-label="Home" style={styles.logo}>
        <FaPencil style={styles.icon} />
        <h1
          style={{
            color: "#f7ede2",
            fontSize: "40px",
            margin: "17px",
          }}
        >
          Blogbuster
        </h1>
      </a>
      <nav style={styles.nav}>
        <a style={styles.link} href="/">
          Blog
        </a>
        <a style={styles.link} href="/about">
          About
        </a>
        <a style={styles.link} href="/tags">
          Tags
        </a>
      </nav>
    </header>
  );
};

export default Header;

const styles = {
  header: {
    backgroundColor: "#3b6064",
    height: "90px",
    display: "grid",
    gridTemplateColumns: "1fr auto",
    alignItems: "center",
    padding: "0 16px",
    boxSizing: "border-box",
  },
  logo: {
    display: "inline-flex",
    alignItems: "center",
    flexDirection: "row",
    justifySelf: "start",
    width: "max-content",
    textDecoration: "none",
    marginLeft: "15px",
    fontFamily: "system-ui, sans-serif",
    color: "#f7ede2",
  },

  icon: {
    color: "#f7ede2",
    width: "40px",
    height: "83px",
  },

  nav: {
    display: "flex",
    gap: "1rem",
    justifySelf: "end", //might not need
  },

  link: {
    color: "#f7ede2",
    textDecoration: "none",
    fontSize: "17px",
    fontWeight: "bold",
    marginRight: "20px",
  },
};
