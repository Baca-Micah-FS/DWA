export default function BlogCard() {
  return (
    <section style={styles.wrap}>
      <h1 style={styles.title}>Latest Posts</h1>
      <div style={styles.box}>
        <article>
          <h1 style={styles.postTitle}>Is Your Job Being Threatened By AI?</h1>

          <div style={styles.paragraph}>
            <p>October 1, 2025</p>
            <p>|</p>
            <p>Estimated Read 10min</p>
          </div>
          <p>
            As the rise in AI usage advances many devopleres are worried about
            the replacement of jobs in the tech industry
          </p>
          <br></br>
          <div>
            <button type="button" style={styles.tag}>
              #AI
            </button>
          </div>
        </article>
      </div>
    </section>
  );
}

const styles = {
  // container for both the title and the box
  wrap: {
    width: "45%",
    margin: "80px  auto", // centers on the page
  },
  // h1 above the blog box
  title: {
    margin: "6px 15px 30px",
    fontSize: "25px",
    color: "#22333b",
  },
  // bordered “blog box”
  box: {
    backgroundColor: "#ccccbf",
    border: "3px solid #22333b",
    height: "300px",
    boxSizing: "border-box",
    padding: "30px 30px 0",
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
    fontSize: "40px",
    margin: "0",
  },

  tag: {
    display: "inline-flex",
    alignItems: "center",
    padding: "6px 20px", //change padding to make longer or taller
    borderRadius: 9999,
    border: "1px solid #304e51",
    background: "rgba(59,96,100,.12)",
    color: "#3b6064",
    fontSize: "14px",
    fontWeight: "bold",
    lineHeight: 1,
    cursor: "pointer",
  },
};
