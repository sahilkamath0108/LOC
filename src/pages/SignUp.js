import { useCallback, useEffect } from "react";
import { Button, Icon } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onButtonContainedTextAndIcoClick = useCallback(() => {
    navigate("/signupcompany");
  }, [navigate]);

  const onButtonContainedTextAndIco1Click = useCallback(() => {
    navigate("/signupuser");
  }, [navigate]);

  return (
    <div className="signup">
      <img
        className="signup-child"
        alt=""
        src="/group-2.svg"
        data-animate-on-scroll
      />
      <img className="signup-item" alt="" src="/rectangle-5@2x.png" />
      <img className="signup-inner" alt="" src="/rectangle-6@2x.png" />
      <img
        className="group-icon"
        alt=""
        src="/group-1.svg"
        data-animate-on-scroll
      />
      <Button
        className="buttoncontained-text-and-ico"
        sx={{ width: 274 }}
        variant="contained"
        color="primary"
        endIcon={<Icon>arrow_forward_sharp</Icon>}
        onClick={onButtonContainedTextAndIcoClick}
      >
        SIGNUP AS COMPANY
      </Button>
      <Button
        className="buttoncontained-text-and-ico1"
        sx={{ width: 274 }}
        variant="contained"
        color="primary"
        endIcon={<Icon>arrow_forward_sharp</Icon>}
        onClick={onButtonContainedTextAndIco1Click}
      >
        SIGNUP AS USER
      </Button>
    </div>
  );
};

export default SignUp;
