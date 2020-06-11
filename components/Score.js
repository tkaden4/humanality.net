import { useRouter } from "next/router";
export function useScores() {
  const router = useRouter();
  const { o, c, e, a, s } = router.query;
  const scores = {
    Openness: +o,
    Conscientiousness: +c,
    Extroversion: +e,
    Agreeableness: +a,
    "Emotional Stability": +s,
  };
  return scores;
}

export function sampleScores() {
  return { o: 0, c: 100, e: 88, a: 22, s: 65 };
}

export function useTime() {
  const router = useRouter();
  return router.query.time;
}

export function sampleTime() {
  return new Date().toDateString();
}
