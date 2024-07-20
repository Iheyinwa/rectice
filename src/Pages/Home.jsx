// import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import { useRef } from "react";

gsap.registerPlugin(TextPlugin, useGSAP);

const theme = createTheme({
  palette: {
    buttonGray: {
      main: "#312F49",
    },
  },
});

const Home = () => {
  const text = useRef();
  useGSAP(() => {
    gsap.to(".text", {
      duration: 1,
      text: {
        value: "Web ",
       
      },
    });
  })
  const text2 = useRef();
  useGSAP(() => {
    gsap.to(".text2", {
      duration: 1,
      text: {
        value: "Developer",
       
      },
      delay: 0.5,
    });
  })

  return (
    <ThemeProvider theme={theme}>
      <section className="flex lg:justify-center items-center h-screen">
        <div className="w-full flex flex-col justify-center items-center p-2">
          <p className="text-5xl lg:text-7xl font-thin">Hi, I&apos;m a </p>
          <h1
            ref={text}
            className="text text-center text-7xl lg:text-[9rem] font-extrabold tracking-wide"
          ></h1>
          <h1
            ref={text2}
            className="text2 text-center -mt-2 md:-mt-4 lg:-mt-8 text-7xl lg:text-[9rem] font-extrabold tracking-wide"
          ></h1>
          {/* <Button variant="contained" color="buttonGray" href="/portfolio">
            <p className="text-white text-xl">Portfolio</p>
          </Button> */}
          {/* <p className="text-xl font-thin text-center">
            I love to create beautiful designs from scratch and provide software services to aid people&apos;s lives using technology
          </p> */}
        </div>
      </section>
    </ThemeProvider>
  );
};

export default Home;
