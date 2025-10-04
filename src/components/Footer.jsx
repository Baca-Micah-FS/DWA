import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";

const Footer = (props) => {
  return (
    <footer style={styles.footer}>
      <div style={styles.leftSide}>
        <div style={styles.blog}>
          <FaPencil size={22} />
          <span style={styles.brand}>BlogBuster ©</span>
        </div>
        <div style={styles.logo}>
          <div>Blogs by Micah</div>
        </div>
      </div>

      <div style={styles.social}>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.iconLink}
        >
          <FaInstagram size={20} />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.iconLink}
        >
          <FaFacebook size={20} />
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.iconLink}
        >
          <FaYoutube size={20} />
        </a>
      </div>
      {/* </div> */}
    </footer>
  );
};

export default Footer;

const styles = {
  footer: {
    backgroundColor: "#3b6064",
    color: "white",
    width: "100%",
    padding: "24px 28px",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    gap: "16rem",
    height: "99px",
  },
  leftSide: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
  blog: {
    display: "flex",
    alignItems: "center",
  },

  brand: {
    fontWeight: "bold",
    fontSize: "20px",
    marginLeft: "10px",
  },

  logo: {
    fontSize: "14px",
    lineHeight: "19px",
    marginLeft: "33px",
  },

  social: {
    display: "flex",
    alignItems: "center",
    marginLeft: "30rem",
  },

  iconLink: {
    color: "white",
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    margin: "0 1rem",
  },
};
