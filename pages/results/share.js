import Header from "../../components/Header";
import { useScores } from "../../components/Score";
import Nav from "../../components/Nav";
import { useRouter } from "next/router";
import { Container } from "semantic-ui-react";
import ScoreChart from "../../components/ScoreChart";

export function Share() {
  const scores = useScores();
  const router = useRouter();
  const time = router.query.time;
  return (
    <div>
      <Header title="Shared Results" />
      <main>
        <Nav />
        <Container>
          <ScoreChart style={{ margin: "auto" }} scores={scores} time={time} />
        </Container>
      </main>
    </div>
  );
}

export default Share;
