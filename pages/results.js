import { useRouter } from "next/router";
import Header from "../components/Header";
import Nav from "../components/Nav";

export function Results() {
  const router = useRouter();
  const { o, c, e, a, n } = router.query;
  return (
    <div className="container">
      <Header title="Your Results" />
      <main>
        <Nav />
      </main>
    </div>
  );
}

export default Results;
