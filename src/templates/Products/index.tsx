import Image from "next/image";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Carousel as CarouselResponsive } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Button from "@/components/Button";
import { Card } from "@/components/Card";

import Logo from "../../assets/images/teste.png";
import Base from "../Base";
import * as S from "./styles";

export default function Products() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Base>
      <S.Wrapper>
        <CarouselResponsive
          autoPlay
          infiniteLoop
          centerMode
          emulateTouch
          axis="vertical"
          interval={2000}
          centerSlidePercentage={30}
          transitionTime={1000}
          showStatus={false}
          showIndicators={false}
          showArrows={false}
          useKeyboardArrows
          selectedItem={0}
        >
          <S.CardProducts>
            <Card.Root color="primary">
              <Card.Header>
                <Link href="/" passHref>
                  <Image
                    src={Logo}
                    alt="logo-product"
                    width={150}
                    height={150}
                  />
                </Link>
              </Card.Header>
              <Card.Content>
                <Link href="/" passHref>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                  perferendis, recusandae ducimus, aspernatur, odit dolorem
                  dignissimos obcaecati eveniet rerum dicta placeat blanditiis
                  reiciendis ex provident aperiam explicabo quibusdam iusto in?
                </Link>
              </Card.Content>
              <Card.Actions>
                <Link href="/" passHref>
                  <Button
                    color="primary"
                    labelColor="white"
                    variant="contained"
                    fullWidth
                  >
                    Comprar
                  </Button>
                </Link>
              </Card.Actions>
            </Card.Root>
          </S.CardProducts>
          <S.CardProducts>
            <Card.Root color="primary">
              <Card.Header>
                <Link href="/" passHref>
                  <Image
                    src={Logo}
                    alt="logo-product"
                    width={150}
                    height={150}
                  />
                </Link>
              </Card.Header>
              <Card.Content>
                <Link href="/" passHref>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                  perferendis, recusandae ducimus, aspernatur, odit dolorem
                  dignissimos obcaecati eveniet rerum dicta placeat blanditiis
                  reiciendis ex provident aperiam explicabo quibusdam iusto in?
                </Link>
              </Card.Content>
              <Card.Actions>
                <Link href="/" passHref>
                  <Button
                    color="primary"
                    labelColor="white"
                    variant="contained"
                    fullWidth
                  >
                    Comprar
                  </Button>
                </Link>
              </Card.Actions>
            </Card.Root>
          </S.CardProducts>
        </CarouselResponsive>

        <Carousel responsive={responsive} infinite autoPlay>
          <S.CardProducts>
            <Card.Root color="primary">
              <Card.Header>
                <Link href="/" passHref>
                  <Image
                    src={Logo}
                    alt="logo-product"
                    width={150}
                    height={150}
                  />
                </Link>
              </Card.Header>
              <Card.Content>
                <Link href="/" passHref>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                  perferendis, recusandae ducimus, aspernatur, odit dolorem
                  dignissimos obcaecati eveniet rerum dicta placeat blanditiis
                  reiciendis ex provident aperiam explicabo quibusdam iusto in?
                </Link>
              </Card.Content>
              <Card.Actions>
                <Link href="/" passHref>
                  <Button
                    color="primary"
                    labelColor="white"
                    variant="contained"
                    fullWidth
                  >
                    Comprar
                  </Button>
                </Link>
              </Card.Actions>
            </Card.Root>
          </S.CardProducts>
          <S.CardProducts>
            <Card.Root color="primary">
              <Card.Header>
                <Link href="/" passHref>
                  <Image
                    src={Logo}
                    alt="logo-product"
                    width={150}
                    height={150}
                  />
                </Link>
              </Card.Header>
              <Card.Content>
                <Link href="/" passHref>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                  perferendis, recusandae ducimus, aspernatur, odit dolorem
                  dignissimos obcaecati eveniet rerum dicta placeat blanditiis
                  reiciendis ex provident aperiam explicabo quibusdam iusto in?
                </Link>
              </Card.Content>
              <Card.Actions>
                <Link href="/" passHref>
                  <Button
                    color="primary"
                    labelColor="white"
                    variant="contained"
                    fullWidth
                  >
                    Comprar
                  </Button>
                </Link>
              </Card.Actions>
            </Card.Root>
          </S.CardProducts>
          <S.CardProducts>
            <Card.Root color="primary">
              <Card.Header>
                <Link href="/" passHref>
                  <Image
                    src={Logo}
                    alt="logo-product"
                    width={150}
                    height={150}
                  />
                </Link>
              </Card.Header>
              <Card.Content>
                <Link href="/" passHref>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                  perferendis, recusandae ducimus, aspernatur, odit dolorem
                  dignissimos obcaecati eveniet rerum dicta placeat blanditiis
                  reiciendis ex provident aperiam explicabo quibusdam iusto in?
                </Link>
              </Card.Content>
              <Card.Actions>
                <Link href="/" passHref>
                  <Button
                    color="primary"
                    labelColor="white"
                    variant="contained"
                    fullWidth
                  >
                    Comprar
                  </Button>
                </Link>
              </Card.Actions>
            </Card.Root>
          </S.CardProducts>
          <S.CardProducts>
            <Card.Root color="primary">
              <Card.Header>
                <Link href="/" passHref>
                  <Image
                    src={Logo}
                    alt="logo-product"
                    width={150}
                    height={150}
                  />
                </Link>
              </Card.Header>
              <Card.Content>
                <Link href="/" passHref>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                  perferendis, recusandae ducimus, aspernatur, odit dolorem
                  dignissimos obcaecati eveniet rerum dicta placeat blanditiis
                  reiciendis ex provident aperiam explicabo quibusdam iusto in?
                </Link>
              </Card.Content>
              <Card.Actions>
                <Link href="/" passHref>
                  <Button
                    color="primary"
                    labelColor="white"
                    variant="contained"
                    fullWidth
                  >
                    Comprar
                  </Button>
                </Link>
              </Card.Actions>
            </Card.Root>
          </S.CardProducts>
          <S.CardProducts>
            <Card.Root color="primary">
              <Card.Header>
                <Link href="/" passHref>
                  <Image
                    src={Logo}
                    alt="logo-product"
                    width={150}
                    height={150}
                  />
                </Link>
              </Card.Header>
              <Card.Content>
                <Link href="/" passHref>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                  perferendis, recusandae ducimus, aspernatur, odit dolorem
                  dignissimos obcaecati eveniet rerum dicta placeat blanditiis
                  reiciendis ex provident aperiam explicabo quibusdam iusto in?
                </Link>
              </Card.Content>
              <Card.Actions>
                <Link href="/" passHref>
                  <Button
                    color="primary"
                    labelColor="white"
                    variant="contained"
                    fullWidth
                  >
                    Comprar
                  </Button>
                </Link>
              </Card.Actions>
            </Card.Root>
          </S.CardProducts>
          <S.CardProducts>
            <Card.Root color="primary">
              <Card.Header>
                <Link href="/" passHref>
                  <Image
                    src={Logo}
                    alt="logo-product"
                    width={150}
                    height={150}
                  />
                </Link>
              </Card.Header>
              <Card.Content>
                <Link href="/" passHref>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                  perferendis, recusandae ducimus, aspernatur, odit dolorem
                  dignissimos obcaecati eveniet rerum dicta placeat blanditiis
                  reiciendis ex provident aperiam explicabo quibusdam iusto in?
                </Link>
              </Card.Content>
              <Card.Actions>
                <Link href="/" passHref>
                  <Button
                    color="primary"
                    labelColor="white"
                    variant="contained"
                    fullWidth
                  >
                    Comprar
                  </Button>
                </Link>
              </Card.Actions>
            </Card.Root>
          </S.CardProducts>
          <S.CardProducts>
            <Card.Root color="primary">
              <Card.Header>
                <Link href="/" passHref>
                  <Image
                    src={Logo}
                    alt="logo-product"
                    width={150}
                    height={150}
                  />
                </Link>
              </Card.Header>
              <Card.Content>
                <Link href="/" passHref>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                  perferendis, recusandae ducimus, aspernatur, odit dolorem
                  dignissimos obcaecati eveniet rerum dicta placeat blanditiis
                  reiciendis ex provident aperiam explicabo quibusdam iusto in?
                </Link>
              </Card.Content>
              <Card.Actions>
                <Link href="/" passHref>
                  <Button
                    color="primary"
                    labelColor="white"
                    variant="contained"
                    fullWidth
                  >
                    Comprar
                  </Button>
                </Link>
              </Card.Actions>
            </Card.Root>
          </S.CardProducts>
          <S.CardProducts>
            <Card.Root color="primary">
              <Card.Header>
                <Link href="/" passHref>
                  <Image
                    src={Logo}
                    alt="logo-product"
                    width={150}
                    height={150}
                  />
                </Link>
              </Card.Header>
              <Card.Content>
                <Link href="/" passHref>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                  perferendis, recusandae ducimus, aspernatur, odit dolorem
                  dignissimos obcaecati eveniet rerum dicta placeat blanditiis
                  reiciendis ex provident aperiam explicabo quibusdam iusto in?
                </Link>
              </Card.Content>
              <Card.Actions>
                <Link href="/" passHref>
                  <Button
                    color="primary"
                    labelColor="white"
                    variant="contained"
                    fullWidth
                  >
                    Comprar
                  </Button>
                </Link>
              </Card.Actions>
            </Card.Root>
          </S.CardProducts>
        </Carousel>
      </S.Wrapper>
    </Base>
  );
}
