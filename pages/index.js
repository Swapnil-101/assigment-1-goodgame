import styled from "styled-components";
import { useAuth } from "../src/context/AuthContext.js";
import { useRouter } from "next/router";

function Home() {
  const { isAuthenticated, login } = useAuth();
  const router = useRouter();

  const handleLogin = () => {
    login();
  };

  return (
    <div>
      {isAuthenticated ? (
        <>
          <p style={{ fontSize: "24px", fontWeight: "bold" }}>
            Welcome, you are authenticated!
          </p>
          <button
            style={{
              backgroundColor: "#5d39c1",
              color: "#fff",
              borderRadius: "4px",
              padding: "10px 20px",
              fontSize: "16px",
              cursor: "pointer",
              border: "none",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              transition: "background-color 0.3s ease",
            }}
            onClick={() => router.push("/beerlist")}
          >
            Bear list View
          </button>
        </>
      ) : (
        <>
          <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>
            You are not authenticated.
          </h1>

          <button
            onClick={handleLogin}
            style={{
              backgroundColor: "#3498db",
              color: "#fff",
              borderRadius: "4px",
              padding: "10px 20px",
              fontSize: "16px",
              cursor: "pointer",
              border: "none",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              transition: "background-color 0.3s ease",
            }}
          >
            Login
          </button>
        </>
      )}
    </div>
  );
}

export default Home;
