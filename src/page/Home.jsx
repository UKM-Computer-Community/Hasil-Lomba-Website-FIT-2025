import { Container, Navbar, Row, Col, Carousel } from "react-bootstrap";
import WebDede from "../../public/img/dede.png";
import WebTristan from "../../public/img/tristan.png";
import WebDimas from "../../public/img/dimas.png";
import { useState, useEffect } from "react";
import Logo from "../../public/img/Logo VIT S.png";
export default function Home() {
  const [changeColor, setChangeColor] = useState(false);
  const [logoSize, setLogoSize] = useState("logo-large");
  const changeBgColor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
      setLogoSize("logo-small");
    } else {
      setChangeColor(false);
      setLogoSize("logo-large");
    }
  };
  useEffect(() => {
    changeBgColor(); // Initial check
    window.addEventListener("scroll", changeBgColor);
    return () => {
      window.removeEventListener("scroll", changeBgColor);
    };
  }, []);
  return (
    <div>
      <Navbar expand="lg" className={changeColor ? "color-active" : ""}>
        <Container>
          <Navbar.Brand href="#home" className="fs-3 fw-bold">
            <img src={Logo} alt="fit" className={logoSize} /> Website FIT 2025
          </Navbar.Brand>
        </Container>
      </Navbar>
      <header className="Home bg-light w-100 d-flex align-items-center overflow-hidden">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold">
                Website Hasil Perlombaan FIT 2025
              </h1>
              <p className="text-center fw-light fs-5">
                FIT (Feastival Inovasi Teknologi) Merupakan festival perlombaan
                yang mengusung tema Perlombaan dan Workshop Teknologi
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <Carousel className="my-5 text-center">
                <Carousel.Item>
                  <h2 className="fw-bold">Juara 1</h2>
                  <h3>Dede Ruhiyanto</h3>
                  <a href="https://dede-delta.vercel.app/" target="_blank">
                    <img src={WebDede} alt="WebDede" />
                  </a>
                </Carousel.Item>
                <Carousel.Item>
                  <h2 className="fw-bold">Juara 2</h2>
                  <h3>Muhammad Tristan Egiarto</h3>
                  <a href="https://tristan-xi.vercel.app/" target="_blank">
                    <img src={WebTristan} alt="WebTristan" />
                  </a>
                </Carousel.Item>
                <Carousel.Item>
                  <h2 className="fw-bold">Juara 3</h2>
                  <h3>Dimas Dwi Setiayanto</h3>
                  <a href="https://dimas-drab.vercel.app/" target="_blank">
                    <img src={WebDimas} alt="WebDimas" />
                  </a>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}
