import Image from "next/image";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Button from "@/components/Button";
import { Card } from "@/components/Card";

import Logo from "../../assets/images/teste.png";
import Base from "../Base";
import * as S from "./styles";

export default function Products() {
  return (
    <Base>
      <S.Wrapper>
        <Carousel
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
