export default function BlogCard({
  href = "/AIpage",
  title = "Is Your Job Being Threatened By AI?",
  date = "October 1, 2025",
  readTime = "Estimated Read 10min",
  description = "As the rise in AI usage advances many devopleres are worried about the replacement of jobs in the tech industry",
  tag = "#AI",
  //   posts = "Latest Posts",
}) {
  return (
    <section style={styles.wrap}>
      {/* <h1 style={styles.title}>{posts}</h1> */}
      <div style={styles.box}>
        <a style={styles.AI} href={href}>
          <article style={styles.article}>
            <h1 style={styles.postTitle}>{title}</h1>

            <div style={styles.paragraph}>
              <p>{date}</p>
              <p>|</p>
              <p>{readTime}</p>
            </div>
            <p>{description}</p>
            <br></br>
            <div style={styles.footer}>
              <span style={styles.tag}>{tag}</span>
            </div>
          </article>
        </a>
      </div>
    </section>
  );
}

const styles = {
  //container
  wrap: {
    width: "45%",
    margin: "80px  auto", // center blog
  },

  title: {
    margin: "6px 15px 30px",
    fontSize: "25px",
    color: "#22333b",
  },
  // border blog
  box: {
    backgroundColor: "#ccccbf",
    border: "2px solid #22333b",
    borderRadius: "10px",
    boxShadow: "2px 2px 2px 2px #3b6064",
    // minHeight: "325px",
    boxSizing: "border-box",
    padding: "30px 30px 20px",
  },

  paragraph: {
    color: "#3b6064",
    display: "flex",
    gap: "1rem",
    fontWeight: "bold",
    fontSize: "18px",
  },

  postTitle: {
    color: "#3b6064",
    fontSize: "35px",
    margin: "0",
  },

  tag: {
    display: "inline-flex",
    alignItems: "center",
    padding: "6px 20px",
    borderRadius: 9999,
    border: "1px solid #304e51",
    background: "#3b60641f",
    color: "#3b6064",
    fontSize: "14px",
    fontWeight: "bold",
    lineHeight: 1,
    cursor: "pointer",
    marginTop: "12px",
  },

  AI: {
    textDecoration: "none",
    color: "inherit",
  },
};
