import { Container, Title } from 'components/Section/Section.styled';
export default function Section({ title, children }) {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  );
}
