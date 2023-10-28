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
          interval={1500}
          centerSlidePercentage={14}
          showStatus={false}
          showIndicators={false}
        >
          <S.CardProducts>
            <Card.Root>
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
            <Card.Root>
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
            <Card.Root>
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
            <Card.Root>
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
            <Card.Root>
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
            <Card.Root>
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
            <Card.Root>
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
            <Card.Root>
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
            <Card.Root>
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
            <Card.Root>
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
            <Card.Root>
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
            <Card.Root>
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
            <Card.Root>
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
            <Card.Root>
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
            <Card.Root>
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
            <Card.Root>
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
            <Card.Root>
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
            <Card.Root>
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
            <Card.Root>
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
            <Card.Root>
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
            <Card.Root>
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
            <Card.Root>
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
            <Card.Root>
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
