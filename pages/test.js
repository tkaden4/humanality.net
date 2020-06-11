import _ from "lodash";
import Link from "next/link";
import { Button, Container, Divider, Icon } from "semantic-ui-react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import big5 from "../tests/big5";

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
      `}</style>
    </div>
  );
}

export function Question({ question, onAnswer }) {
  const [state, setState] = React.useState(undefined);
  const questionRef = React.createRef();
  const colors = ["#0081cf", "#1796c1", "#22a0ba", "#30adb2", "#41bda7"];
  return (
    <div className="question" ref={questionRef}>
      <div className="question-text">{big5.personalize(question.question)}</div>
      <div className="questions">
        {[1, 2, 3, 4, 5].map((score, i) => (
          <Selection
            key={i}
            selected={state !== undefined && state === score}
            onSelected={() => {
              questionRef.current.scrollIntoView({
                behavior: "smooth",
                block: "center",
              });
              setState(score);
              onAnswer(score);
            }}
            color={colors[i]}
            hover={`${colors[i]}88`}
            size={`${(score - 3) ** 2 * 2.5 + 35}px`}
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

export function resultsURL(answers) {
  const results = big5.score(answers);
  console.log(results);
  return `/results/?o=${results["Openness"]}&s=${results["Emotional Stability"]}&c=${results["Conscientiousness"]}&a=${results["Agreeableness"]}&e=${results["Extroversion"]}`;
}

export function Test() {
  const [results, setResults] = React.useState({});
  return (
    <div>
      <Header title="Take the Test" />
      <main className="test-container">
        <Nav />
        <Container>
          {big5.questions.map((question, i) => (
            <React.Fragment key={i}>
              <Question
                question={question}
                onAnswer={(score) => {
                  // score is 1 through 5
                  // -1 or 1
                  const direction = Number.parseInt(question.score);
                  // [1, 5]
                  const directedScore = direction === -1 ? 6 - score : score;
                  setResults({
                    ...results,
                    [question.question]: { category: question.category, score: directedScore },
                  });
                }}
              />
              <Divider />
            </React.Fragment>
          ))}
          <div style={{ display: "flex", justifyContent: "center", margin: "50px 0" }}>
            <Link href={resultsURL(_.values(results))}>
              <Button
                animated
                circular
                disabled={_.keys(results).length !== big5.questions.length}
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
