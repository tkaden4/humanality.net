import { useRouter } from "next/router";
export function useScores() {
  const router = useRouter();
  const { o, c, e, a, n } = router.query;
  const scores = {
    o: +o,
    c: +c,
    e: +e,
    a: +a,
    n: +n,
  };
  return scores;
}

export function sampleScores() {
  return { o: 0, c: 100, e: 88, a: 22, n: 65 };
}

export function useTime() {
  const router = useRouter();
  return router.query.time;
}

export function sampleTime() {
  return new Date().toDateString();
}
