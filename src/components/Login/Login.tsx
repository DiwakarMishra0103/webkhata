import React, { useEffect, useState } from "react";
import "./Login.css";
import logo from "../../assets/logo.png";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
interface activeImgType {
  img1: string;
  img2: string;
  img3: string;
}

const Login = () => {
  const [mode, setMode] = useState<string>();
  const [activeImg, setActiveImg] = useState({
    img1: "show",
    img2: "",
    img3: "",
  });

  const bannerChange = () => {
    if (activeImg.img1 === "show") {
      setActiveImg({ ...activeImg, img1: "", img2: "show" });
    } else if (activeImg.img2 === "show") {
      setActiveImg({ ...activeImg, img3: "show", img2: "" });
    } else if (activeImg.img3 === "show") {
      setActiveImg({ ...activeImg, img1: "show", img3: "" });
    }
  };

  useEffect(() => {
    let intervalId = setInterval(bannerChange, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <main className={mode ? mode : ""}>
      <div className="box">
        <div className="inner-box">
          <div className="forms-wrap">
            <form
              action="index.html"
              autoComplete="off"
              className="sign-in-form"
            >
              <div className="logo">
                <img src={logo} alt="easyclassName" />
                <h4>KHATA</h4>
              </div>

              <div className="heading">
                <h2>Welcome Back</h2>
                <h6>Not registred yet?</h6>
                <a
                  href="#"
                  className="toggle"
                  onClick={() => setMode("sign-up-mode")}
                >
                  Sign up
                </a>
              </div>

              <div className="actual-form">
                <div className="input-wrap">
                  <input
                    type="text"
                    className="input-field"
                    autoComplete="off"
                    required
                  />
                  <label>Name</label>
                </div>

                <div className="input-wrap">
                  <input
                    type="password"
                    className="input-field"
                    autoComplete="off"
                    required
                  />
                  <label>Password</label>
                </div>

                <input type="submit" value="Sign In" className="sign-btn" />

                <p className="text">
                  Forgotten your password or you login datails?
                  <a href="#">Get help</a> signing in
                </p>
              </div>
            </form>

            <form
              action="index.html"
              autoComplete="off"
              className="sign-up-form"
            >
              <div className="logo">
                <img src={logo} alt="easyclassName" />
                <h4>Khata</h4>
              </div>

              <div className="heading">
                <h2>Get Started</h2>
                <h6>Already have an account?</h6>
                <a href="#" className="toggle" onClick={() => setMode("")}>
                  Sign in
                </a>
              </div>

              <div className="actual-form">
                <div className="input-wrap">
                  <input
                    type="text"
                    className="input-field"
                    autoComplete="off"
                    required
                  />
                  <label>Name</label>
                </div>

                <div className="input-wrap">
                  <input
                    type="email"
                    className="input-field"
                    autoComplete="off"
                    required
                  />
                  <label>Email</label>
                </div>

                <div className="input-wrap">
                  <input
                    type="password"
                    className="input-field"
                    autoComplete="off"
                    required
                  />
                  <label>Password</label>
                </div>

                <input type="submit" value="Sign Up" className="sign-btn" />

                <p className="text">
                  By signing up, I agree to the
                  <a href="#">Terms of Services</a> and
                  <a href="#">Privacy Policy</a>
                </p>
              </div>
            </form>
          </div>

          <div className="carousel">
            <div className="images-wrapper">
              <img
                src={image1}
                className={`image img-1 ${activeImg ? activeImg.img1 : ""}`}
                alt=""
              />
              <img
                src={image2}
                className={`image img-2 ${activeImg ? activeImg.img2 : ""}`}
                alt=""
              />
              <img
                src={image3}
                className={`image img-3 ${activeImg ? activeImg.img3 : ""}`}
                alt=""
              />
            </div>

            <div className="text-slider">
              <div className="text-wrap">
                <div className="text-group">
                  <h2 className={activeImg.img1 ? "animate1" : "hide"}>
                    Create your own courses
                  </h2>
                  <h2 className={activeImg.img2 ? "animate2" : "hide"}>
                    Customize as you like
                  </h2>
                  <h2 className={activeImg.img3 ? "animate3" : "hide"}>
                    Invite students to your className
                  </h2>
                </div>
              </div>

              <div className="bullets">
                <span
                  className={activeImg.img1 ? "active" : ""}
                  data-value="1"
                  onClick={() =>
                    setActiveImg({ img1: "show", img2: "", img3: "" })
                  }
                ></span>
                <span
                  className={activeImg.img2 ? "active" : ""}
                  data-value="2"
                  onClick={() =>
                    setActiveImg({ img1: "", img2: "show", img3: "" })
                  }
                ></span>
                <span
                  className={activeImg.img3 ? "active" : ""}
                  data-value="3"
                  onClick={() =>
                    setActiveImg({ img1: "", img2: "", img3: "show" })
                  }
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
