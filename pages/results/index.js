import Header from "../../components/Header";
import Nav from "../../components/Nav";
import { useScores, sampleScores, sampleTime } from "../../components/Score";
import { Container, Divider, Segment, Card } from "semantic-ui-react";
import SocialLinks from "../../components/SocialLinks";
import ScoreChart from "../../components/ScoreChart";

export function ScorePage({ scores }) {
  const time = sampleTime();

  const [shareURL, setShareURL] = React.useState(undefined);
  React.useEffect(() => {
    setShareURL(window.location);
  }, []);

  return (
    <React.Fragment>
      <Nav />
      <Container textAlign="center">
        <Divider hidden />
        <ScoreChart scores={scores} time={time} style={{ margin: "auto" }} />
        <Divider hidden />
        <div style={{ textAlign: "center" }}>
          <h3>Share Results</h3>
          <SocialLinks url={shareURL} />
        </div>
        {/* <h2>Interpreting Your Results</h2>

        <Card fluid color="red">
          <Card.Content>
            <Card.Header>Conscientiousness</Card.Header>
          </Card.Content>
        </Card>
        <Card fluid color="green">
          <Card.Content>
            <Card.Header>Agreeableness</Card.Header>
          </Card.Content>
        </Card>
        <Card fluid color="blue">
          <Card.Content>
            <Card.Header>Extroversion</Card.Header>
          </Card.Content>
        </Card> */}
      </Container>
    </React.Fragment>
  );
}

export function Results() {
  return (
    <div className="container">
      <Header title="Your Results" />
      <main>
        <ScorePage scores={useScores()} />
      </main>
    </div>
  );
}

export default Results;
