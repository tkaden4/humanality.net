import Header from "../components/Header";
import big5 from "../tests/big5";
import { Container, ButtonGroup, Button, Divider, Card, Icon } from "semantic-ui-react";
import Nav from "../components/Nav";
import Link from "next/link";

// FIXME subset of these questions

export function scoringCallback(category, results) {
  return (score) => {
    results[category] += score;
  };
}

export function Selection({ onSelected, selected, color, hover, size }) {
  const selectedStyle = selected
    ? {
        backgroundColor: color,
      }
    : {};
  return (
    <div
      className="selection"
      style={{
        ...selectedStyle,
        borderRadius: "100%",
      }}
      onClick={() => onSelected()}
    >
      <style jsx scoped>{`
        .selection {
          height: ${size};
          width: ${size};
          background-color: transparent;
          border: 4px solid ${color};
          transition: background-color 0.1s linear;
        }
        .selection:hover {
          background-color: ${hover};
        }
      `}</style>
    </div>
  );
}

export function Question({ question, onAnswer }) {
  const [state, setState] = React.useState(undefined);
  const questionRef = React.createRef();
  const colors = ["#0081cf", "#1796c1", "#22a0ba", "#30adb2", "#41bda7"];
  return (
    <div
      className="question"
      onClick={() => {
        onAnswer();
      }}
      ref={questionRef}
    >
      <div className="question-text">{big5.personalize(question.question)}</div>
      <div className="questions">
        {[-2, -1, 0, 1, 2].map((score, i) => (
          <Selection
            key={i}
            selected={state !== undefined && state === score}
            onSelected={() => {
              questionRef.current.scrollIntoView({
                behavior: "smooth",
                block: "center",
              });
              setState(score);
            }}
            color={colors[i]}
            hover={`${colors[i]}88`}
            size={`${score ** 2 * 2.5 + 35}px`}
          />
        ))}
      </div>
      <style jsx scoped>{`
        .question {
          text-align: center;
          font-size: 22px;
          color: #1a1a1c;
          margin: 50px 0;
        }
        .question-text {
          margin: 25px 0;
        }
        .questions {
          display: flex;
          justify-content: space-around;
          align-items: center;
          max-width: 80vw;
          width: 500px;
          margin: auto;
        }
      `}</style>
    </div>
  );
}

export function Test() {
  const results = Object.fromEntries(big5.categories.map((x) => [x, 0]));
  return (
    <div>
      <Header title="Take the Test" />
      <main className="test-container">
        <Nav />
        <Container>
          {big5.questions.map((question, i) => (
            <React.Fragment key={i}>
              <Question question={question} onAnswer={scoringCallback(question.category, results)} />
              <Divider>{/* ⚬ */}</Divider>
            </React.Fragment>
          ))}
          <div style={{ display: "flex", justifyContent: "center", margin: "50px 0" }}>
            <Link href="/results">
              <Button
                animated
                circular
                style={{
                  color: "ghostwhite",
                  fontSize: "1.2em",
                  height: "40px",
                  width: "140px",
                  backgroundImage: "linear-gradient(to top right, #41bda7, #0081cf)",
                }}
              >
                <Button.Content visible>Results</Button.Content>
                <Button.Content hidden>
                  <Icon name="arrow right"></Icon>
                </Button.Content>
              </Button>
            </Link>
          </div>
        </Container>
      </main>
      <footer></footer>
      <style jsx>{``}</style>
    </div>
  );
}

export default Test;
