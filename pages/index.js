import Link from "next/link";
import { Button, Container, Icon } from "semantic-ui-react";
import Header from "../components/Header.js";
import SocialLinks from "../components/SocialLinks.js";

export default function IndexPage() {
  return (
    <div>
      <Header title="Free Personality Test" />
      <main>
        <div id="splash">
          <div id="splash-container">
            <Container fluid textAlign="center" id="splash-content">
              <div id="splash-description">
                <img id="logo-spinner" src="/logovector.svg" height={144} width={144}></img>
                <div className="title" style={{ fontSize: "5em" }}>
                  Humanality
                </div>
                <div
                  className="title"
                  style={{ fontSize: "1.60em", fontWeight: "normal", maxWidth: "800px", marginTop: "25px" }}
                >
                  Learn more about yourself through our
                  <div style={{ fontWeight: "bold", fontSize: "1.2em", lineHeight: "125%" }}>
                    5 factor personality test
                  </div>
                  and get a glimpse into what makes you unique.
                </div>
              </div>

              <Link href="/test">
                <Button
                  animated
                  circular
                  style={{
                    margin: "20px",
                    color: "inherit",
                    fontSize: "1.2em",
                    height: "40px",
                    width: "140px",
                    backgroundImage: "linear-gradient(to top right, dodgerblue, deepskyblue)",
                  }}
                >
                  <Button.Content visible>Start Now</Button.Content>
                  <Button.Content hidden>
                    <Icon name="arrow right"></Icon>
                  </Button.Content>
                </Button>
              </Link>
              <h4 style={{ margin: "auto" }}>Share</h4>
              <SocialLinks />
            </Container>
          </div>
        </div>
      </main>
      <footer></footer>

      {/* FIXME GROUP TEST? */}

      <style jsx>{`
        #splash {
          background-image: linear-gradient(to top right, deepskyblue, blue);
          min-height: 500px;
          height: 100vh;
          max-height: 100vh;
          position: relative;
        }
        #splash-container {
          position: absolute;
          top: 50%;
          left: 50%;
          color: ghostwhite;
          transform: translate(-50%, -50%);
        }
        #splash-content {
          text-align: center;
        }

        #logo-spinner {
          animation: spin 20s linear infinite;
        }
        @keyframes spin {
          0% {
            transform: rotateZ(0);
          }
          100% {
            transform: rotateZ(360deg);
          }
        }
        @media (max-width: 768px) {
          #splash-description {
            font-size: 12px;
          }
        }

        .title {
          line-height: 100%;
          font-weight: bold;
          // text-shadow: 3px 3px 0 #ff635c, -2px -2px 0 #5b8afd;
        }

        .triangle {
          clip-path: polygon(0% 87%, 50% 0%, 50% 0%, 100% 87%);
          background-image: linear-gradient(to top right, dodgerblue, blue);
          height: 50px;
          width: 50px;
          transform: translate(-50%, -50%) rotate(180deg);
          position: absolute;
          left: 50%;
          top: 100%;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans,
            Droid Sans, Helvetica Neue, sans-serif;
          font-size: 15px;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
