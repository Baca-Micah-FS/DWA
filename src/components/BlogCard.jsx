const BlogCard = (props) => {
  return (
    <div style={styles.blog}>
      <h1>Is Your Job Being Threatened By AI?</h1>
      <article></article>
    </div>
  );
};

export default BlogCard;

const styles = {
  blog: {
    display: "flex",
    justifyContent: "center",
    width: "50%",
    height: "400px",
    border: "3px solid black",
    margin: "80px",
  },
};
