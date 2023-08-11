import ClinetOnly from "@/components/ClientOnly";
import Container from "@/components/Container";
import KnowledgeCategories from "@/components/knowledge-category";

export default function Home() {
  return (
    <ClinetOnly>
      <Container>
        <KnowledgeCategories />
      </Container>
    </ClinetOnly>
  );
}
