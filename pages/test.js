import Header from "../components/Header";
import big5 from "../tests/big5";
import { Container, Segment, ButtonGroup, Button, Form, Radio } from "semantic-ui-react";

// FIXME subset of these questions

export function scoringCallback(category, results) {
  return (score) => {
    results[category] += score;
  };
}

export function Question({ question, onAnswer }) {
  const [state, setState] = React.useState(0);
  const questionSelection = {
    height: "40px",
    minWidth: "40px",
    width: "16vw",
    maxWidth: "100px",
    backgroundColor: "#dadadc",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const first = {
    borderTopLeftRadius: "10px",
    borderBottomLeftRadius: "10px",
  };
  const last = {
    borderTopRightRadius: "10px",
    borderBottomRightRadius: "10px",
  };
  return (
    <div className="question" onClick={onAnswer}>
      <div>{big5.personalize(question.question)}</div>
      <div>
        <Form style={{ display: "flex", justifyContent: "center" }}>
          <Form.Field>
            <div style={{ ...questionSelection, ...first }}>
              <Radio onChange={() => setState(-2)} checked={-2 === state} />
            </div>
          </Form.Field>
          {[-1, 0, 1].map((x, i) => (
            <Form.Field>
              <div style={{ ...questionSelection }} key={i}>
                <Radio onChange={() => setState(x)} checked={x === state} />
              </div>
            </Form.Field>
          ))}
          <Form.Field>
            <div style={{ ...questionSelection, ...last }}>
              <Radio onChange={() => setState(2)} checked={2 === state} />
            </div>
          </Form.Field>
        </Form>
      </div>
      <style jsx scoped>{`
        .question {
          text-align: center;
          font-size: 22px;
          color: #1a1a1c;
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
          <Segment>
            {big5.questions.map((x, i) => (
              <Question key={i} question={x} onAnswer={scoringCallback(x.category, results)} />
            ))}
          </Segment>
          <ButtonGroup>
            <Button>Results</Button>
            <Button.Or />
            <Button>Home</Button>
          </ButtonGroup>
        </Container>
      </main>
      <style jsx>{``}</style>
    </div>
  );
}

export default Test;
