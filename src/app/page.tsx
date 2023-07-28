import ClinetOnly from "./components/ClientOnly";
import Container from "./components/Container";
import PositionCard from "./components/PostionCard";

export default function Home() {
  // console.log(PositionCard);
  return (
    <ClinetOnly>
      <Container>
        <PositionCard />
      </Container>
    </ClinetOnly>
  );
}
