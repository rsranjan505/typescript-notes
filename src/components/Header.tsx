import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


type Props = {}

export default function Header({}: Props) {
  return (
    <Navbar fixed='top' bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand href="#home">Welcome to React Typescript</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Practice
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}