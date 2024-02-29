import { useState } from "react";

import MainComponent from "./components/MainComponent/MainComponent";
import Yes from "./images/Yes";
import No from "./images/No";
import DoIcon from "./images/DoIcon";
import DontIcon from "./images/DontIcon";
import Icon1 from "./images/Icon1";
import Icon2 from "./images/Icon2";
import Icon3 from "./images/Icon3";

function App() {
  const [allData, setAllData] = useState({
    fontFamily: "'Inter', sans-serif",
    mainBg: "#fff",
    header: {
      subHeading: "FINANCIAL LIFE PRO TIP",
      subHeadingColor: "#98A2B3",
      heading: "Maximizing Credit Card Rewards",
      headingColor: "#000",
    },
    dos: {
      icon: <DoIcon color="#1570EF" />,
      title: "Do’s",
      titleColor: "#1570EF",
      bg: "#EFF4FF",
    },
    donts: {
      icon: <DontIcon color="#D92D20" />,
      title: "Dont’s",
      titleColor: "#D92D20",
      bg: "#FEF3F2",
    },
    dosDonts: [
      {
        dos: {
          icon: <Yes bg="#1570EF" color="#fff" />,
          info: "Lorem ipsum dolor sit amet sadipscing elitr, sed diam nonumy magna aliquyam ",
          infoColor: "#000",
          border: "1px solid #B2DDFF",
        },
        connector: {
          icon: <Icon1 color="#000" />,
          title: "Lorem ipsum",
          titleColor: "#000",
          border: "1px solid #D0D5DD",
          bg: "#fff",
        },
        donts: {
          icon: <No bg="#D92D20" color="#fff" />,
          info: "Lorem ipsum dolor sit amet sadipscing elitr, sed diam nonumy magna aliquyam",
          infoColor: "#000",
          border: "1px solid #FECDCA",
        },
      },
      {
        dos: {
          icon: <Yes bg="#1570EF" color="#fff" />,
          info: "Lorem ipsum dolor sit amet sadipscing elitr, sed diam nonumy magna aliquyam",
          infoColor: "#000",
          border: "1px solid #B2DDFF",
        },
        connector: {
          icon: <Icon2 color="#000" />,
          title: "Lorem ipsum",
          titleColor: "#000",
          border: "1px solid #D0D5DD",
          bg: "#fff",
        },
        donts: {
          icon: <No bg="#D92D20" color="#fff" />,
          info: "Lorem ipsum dolor sit amet sadipscing elitr, sed diam nonumy magna aliquyam",
          infoColor: "#000",
          border: "1px solid #FECDCA",
        },
      },
      {
        dos: {
          icon: <Yes bg="#1570EF" color="#fff" />,
          info: "Lorem ipsum dolor sit amet sadipscing elitr, sed diam nonumy magna aliquyam",
          infoColor: "#000",
          border: "1px solid #B2DDFF",
        },
        connector: {
          icon: <Icon3 color="#000" />,
          title: "Lorem ipsum",
          titleColor: "#000",
          border: "1px solid #D0D5DD",
          bg: "#fff",
        },
        donts: {
          icon: <No bg="#D92D20" color="#fff" />,
          info: "Lorem ipsum dolor sit amet sadipscing elitr, sed diam nonumy magna aliquyam",
          infoColor: "#000",
          border: "1px solid #FECDCA",
        },
      },
    ],
  });

  return (
    <>
      <div
        style={{
          "--mainBg": allData.mainBg,

          fontFamily: allData.fontFamily,
        }}
      >
        <MainComponent {...allData} />
      </div>
    </>
  );
}

export default App;
