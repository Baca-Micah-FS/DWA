import react from "react";
import { Link } from "react-router";
import { FaPencil } from "react-icons/fa6";

const Header = (props) => {
  return (
    <header style={styles.header}>
      <Link to="/" aria-label="Home" style={styles.logo}>
        <FaPencil style={styles.icon} />
        <h1>BlogsByMic</h1>
      </Link>
      <div></div>
    </header>
  );
};

export default Header;

const styles = {
  header: {
    backgroundColor: "#F9F9F9",
    color: "black",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    // position: "sticky",
    // top: 0,
    // left: 0,
    // zIndex: 20,
    height: "100px",
  },
};
