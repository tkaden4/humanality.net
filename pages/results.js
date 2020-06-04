import { useRouter } from "next/router";
import Header from "../components/Header";

export function Results() {
  const router = useRouter();
  const { o, c, e, a, n } = router.query;
  return (
    <div className="container">
      <Header title="Your Results" />
    </div>
  );
}

export default Results;
