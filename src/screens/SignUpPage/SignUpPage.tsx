import { Zap } from "lucide-react";
import styles from "./signup.module.css";
import GmailIcon from "../../components/icons/GmailIcon";
import FacebookIcon from "../../components/icons/FacebookIcon";
import AppleIcon from "../../components/icons/AppleIcon";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../api";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleCreateAccount = async () => {
    if (!name || !email || !password) {
      toast.error("Please fill all fields!");
      return;
    }
    try {
      await api.post("/api/auth/signup", {
        name,
        email,
        password,
      });
      navigate("/home");
    } catch (error: any) {
      const message =
        error?.response?.data?.details?.[0] ||
        error?.response?.data?.error ||
        error?.message ||
        "Something went wrong. Please try again.";

      toast.error(message);
    }
  };
  return (
    <div className={styles.main}>
      <div className={styles.userInfo}>
        <Zap color="#fc8051" fill="#fc8051" size={24} />
        <div className={styles.heading}>Create an account</div>
        <div className={styles.para}>
          Start exploring and utilizing all the resources that will help you
          elevate every design you make
        </div>
        <div className={styles.inputHeading}>
          Name
          <input
            placeholder="Your name"
            className={styles.inputBox}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className={styles.inputHeading}>
          Email
          <input
            placeholder="Your Email"
            className={styles.inputBox}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className={styles.inputHeading}>
          Password
          <input
            placeholder="Enter your password"
            className={styles.inputBox}
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className={styles.button} onClick={handleCreateAccount}>
          Create account
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div className={styles.border}></div>
          OR
          <div className={styles.border}></div>
        </div>
        <div className={styles.buttonContainer}>
          <div
            className={styles.actionButtons}
            onClick={() => {
              window.location.href = "https://www.gmail.com";
            }}
          >
            <GmailIcon size={32} />
          </div>
          <div
            className={styles.actionButtons}
            onClick={() => {
              window.location.href = "https://www.facebook.com";
            }}
          >
            <FacebookIcon size={32} />
          </div>
          <div
            className={styles.actionButtons}
            onClick={() => {
              window.location.href = "https://www.apple.com";
            }}
          >
            <AppleIcon size={32} />
          </div>
        </div>
        <div
          className={styles.para}
          style={{ display: "flex", justifyContent: "center" }}
        >
          Already have an account? &nbsp;
          <div
            style={{
              color: "#fc8051",
              textDecoration: "underline",
              cursor: "pointer",
            }}
            onClick={() => {
              navigate("/login");
            }}
          >
            Log In
          </div>
        </div>
      </div>
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          alignSelf: "stretch",
          borderRadius: "18px",
          flex: "1",
        }}
      >
        <img
          src="/content.png"
          style={{
            objectFit: "cover",
            height: "100%",
            width: "100%",
            position: "absolute",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "10px",
            left: "10px",
            right: "10px",
            display: "flex",
            flexDirection: "column",
            gap: "18px",
          }}
        >
          <div style={{ display: "flex", gap: "12px" }}>
            <div className={styles.pills}>Community of designers</div>
            <div className={styles.pills}>Creative resources</div>
          </div>
          <div className={styles.contentBox}>
            <div className={styles.content}>
              I was able to reduce the time taken to present high-level designs
              by 35% using the platform.
            </div>
            <div className={styles.contentFooter}>Sara Bright</div>
            <div className={styles.contentFooter} style={{ fontSize: "12px" }}>
              Freelancer Designer
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
