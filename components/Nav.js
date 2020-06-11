import Link from "next/link";
import { Container } from "semantic-ui-react";

export function Nav() {
  return (
    <div className="nav">
      <Container text textAlign="center">
        <Link href="/">
          <img id="logo-spinner-nav" src="/logo64.png" height={40} />
        </Link>
      </Container>

      <style jsx>{`
        .nav {
          position: sticky;
          width: 100vw;
          top: 0;
          padding: 10px;
          background-color: transparent;
          background-image: linear-gradient(to top right, #0081cf, #41bda7);
        }
        #logo-spinner-nav {
          animation: spin 20s linear infinite;
          cursor: pointer;
        }
        @keyframes spin {
          0% {
            transform: rotateZ(0);
          }
          100% {
            transform: rotateZ(360deg);
          }
        }
      `}</style>
    </div>
  );
}

export default Nav;
