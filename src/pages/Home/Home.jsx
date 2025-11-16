import { useLocation , Link } from "react-router-dom";


export default function Home() {
     const location = useLocation();
  const user = location.state;
  return (
    <div className="container col-md-12"    >
      <h1>Home</h1>

      <br />
       {user ? (
        <>
          <p>Welcome: {user.userName}</p>
        </>
      ) : (
        <p>No user data received</p>
      )}
      <Link to="/invoice/list">Invoice</Link>
    </div>
  );
}
