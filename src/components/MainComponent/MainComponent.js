import React from "react";
import classes from "./MainComponent.module.css";

const MainComponent = ({ header, dos, donts, dosDonts }) => {
  return (
    <div
      className="min-h-screen flex items-center justify-center w-full"
      style={{ background: "var(--mainBg)" }}
    >
      <div className={classes.wrapper}>
        <div className={classes.headingContainer}>
          <h3
            className={classes.subHeading}
            style={{ "--color": header.subHeadingColor }}
          >
            {header.subHeading}
          </h3>
          <h1
            className={classes.heading}
            style={{ "--color": header.headingColor }}
          >
            {header.heading}
          </h1>
        </div>
        <div className={classes.container}>
          <div className={[classes.row, classes.header].join(" ")}>
            <div className={classes.dos} style={{ "--bg": dos.bg }}>
              <div className={classes.icon}>{dos.icon}</div>
              <h2
                className={classes.title}
                style={{ "--color": dos.titleColor }}
              >
                {donts.title}
              </h2>
            </div>
            <div className={classes.donts} style={{ "--bg": donts.bg }}>
              <div className={classes.icon}>{donts.icon}</div>
              <h2
                className={classes.title}
                style={{ "--color": donts.titleColor }}
              >
                {donts.title}
              </h2>
            </div>
          </div>
          {dosDonts.map((el, i) => (
            <div className={classes.row} key={i}>
              <div
                className={classes.dos}
                style={{ "--bg": dos.bg, "--border": el.dos.border }}
              >
                <div className={classes.icon}>{el.dos.icon}</div>
                <p
                  className={classes.info}
                  style={{ "--color": el.dos.infoColor }}
                >
                  {el.dos.info}
                </p>
              </div>
              <div
                className={classes.connector}
                style={{
                  "--bg": el.connector.bg,
                  "--border": el.connector.border,
                }}
              >
                <div className={classes.icon}>{el.connector.icon}</div>
                <h3
                  className={classes.title}
                  style={{ "--color": el.connector.titleColor }}
                >
                  {el.connector.title}
                </h3>
              </div>

              <div
                className={classes.donts}
                style={{ "--bg": donts.bg, "--border": el.donts.border }}
              >
                <div className={classes.icon}>{el.donts.icon}</div>
                <p
                  className={classes.info}
                  style={{ "--color": el.donts.infoColor }}
                >
                  {el.donts.info}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
