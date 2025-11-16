import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div style={styles.container}>
      <h1 style={styles.code}>404</h1>
      <h2 style={styles.text}>Page Not Found</h2>
      <p style={styles.subText}>
        The page you're looking for doesn’t exist or has been moved.
      </p>

      <Link to="/home" style={styles.button}>
        Go Back Home
      </Link>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "80px",
    fontFamily: "Arial, sans-serif",
  },
  code: {
    fontSize: "80px",
    fontWeight: "bold",
    color: "#ff4d4f",
  },
  text: {
    fontSize: "32px",
    marginBottom: "10px",
  },
  subText: {
    color: "#777",
    fontSize: "16px",
    marginBottom: "30px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#0078ff",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "6px",
    fontSize: "16px",
  },
};

export default NotFound;
