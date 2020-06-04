import Header from "../components/Header";
import big5 from "../tests/big5";
import { Container, Segment, ButtonGroup, Button, Divider } from "semantic-ui-react";

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
  const [state, setState] = React.useState(0);
  const colors = ["#0081cf", "#4e78cf", "#776cc9", "#975dbb", "#b14da7"];
  return (
    <div className="question" onClick={onAnswer}>
      <div className="question-text">{big5.personalize(question.question)}</div>
      <div className="questions">
        {[-2, -1, 0, 1, 2].map((score, i) => (
          <Selection
            key={i}
            selected={state === score}
            onSelected={() => setState(score)}
            color={colors[i]}
            hover={`${colors[i]}66`}
            size={`${(i - 2) * (i - 2) * 2.5 + 25}px`}
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
        <Container>
          {big5.questions.map((question, i) => (
            <React.Fragment key={i}>
              <Question question={question} onAnswer={scoringCallback(question.category, results)} />
              {i === big5.questions.length - 1 ? <React.Fragment /> : <Divider>{/* ⚬ */}</Divider>}
            </React.Fragment>
          ))}
          <ButtonGroup>
            <Button>Home</Button>
            <Button.Or />
            <Button>Results</Button>
          </ButtonGroup>
        </Container>
      </main>
    </div>
  );
}

export default Test;
