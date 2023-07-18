import ClinetOnly from "./components/ClientOnly";
import Container from "./components/Container";
// import CardGroup from "./components/hackQuest/CardGroup";

export default function Home() {
  return (
    <ClinetOnly>
      <Container>
        {/* <CardGroup /> */}
        <div>123</div>
      </Container>
    </ClinetOnly>
  );
}
