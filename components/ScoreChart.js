import { Card, Progress } from "semantic-ui-react";

export default ScoreChart;

export function ScoreChart({ scores, time, ...props }) {
  return (
    <Card {...props}>
      <Card.Content>
        <Card.Header>
          <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", fontSize: "22px" }}>
            <img src="/logo32.png" height={32} width={32} />
            <div>Humanality</div>
          </div>
        </Card.Header>
        <Card.Meta textAlign="left">{time}</Card.Meta>
        <Card.Description>
          <Progress className="c" value={scores["Conscientiousness"]} progress="value" label="Conscientiousness" />
          <Progress className="n" value={scores["Emotional Stability"]} progress="value" label="Emotional Stability" />
          <Progress className="a" value={scores["Agreeableness"]} progress="value" label="Agreeableness" />
          <Progress className="e" value={scores["Extroversion"]} progress="value" label="Extroversion" />
          <Progress className="o" value={scores["Openness"]} progress="value" label="Openness" />
        </Card.Description>
      </Card.Content>
    </Card>
  );
}
