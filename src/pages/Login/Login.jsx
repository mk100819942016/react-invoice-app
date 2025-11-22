import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import "./login.css";

export default function Login() {
    const { login } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [remember, setRemember] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const response = await fetch(
                "https://localhost/invoice-api/api/auth/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ email, password }),
                }
            );

            if (!response.ok) {
                throw new Error("Login failed");
            }

            const data = await response.json();
            // Suppose API returns: { token: "xxxx" }
            login({ email: email || "admin@example.com" }, data.token);
        } catch (err) {
            setError(err.message || "An error occurred");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-page">
            <div className="login-center">
                <div className="quote-box" aria-hidden>
                    <blockquote>“Invoices are the heartbeat of business — clarity pays.”</blockquote>
                    <cite>— Mini Invoice</cite>
                </div>

                <form onSubmit={handleLogin} className="login-card" aria-label="Login form">
                    <div className="logo">MI</div>
                    <h1 className="title">Sign in</h1>
                    <p className="subtitle">Welcome back — please enter your details.</p>

                    {error && <div className="error">{error}</div>}

                    <label className="visually-hidden" htmlFor="email">Email</label>
                    <div className="field">
                        <input
                            id="email"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            autoComplete="username"
                        />
                    </div>

                    <label className="visually-hidden" htmlFor="password">Password</label>
                    <div className="field">
                        <input
                            id="password"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            autoComplete="current-password"
                        />
                    </div>

                    <div className="row between">
                        <label className="remember">
                            <input type="checkbox" checked={remember} onChange={() => setRemember((r) => !r)} />
                            <span>Remember me</span>
                        </label>

                        <a className="forgot" href="#">Forgot?</a>
                    </div>

                    <button className="submit" type="submit" disabled={loading}>
                        {loading ? "Signing in..." : "Sign in"}
                    </button>

                    <div className="footer-note">
                        <span>Don't have an account?</span>
                        <a href="#">Contact admin</a>
                    </div>
                </form>
            </div>
        </div>
    );
}