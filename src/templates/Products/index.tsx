import Button from "@/components/Button";
import { Card } from "@/components/Card";
import Image from "next/image";
import Base from "../Base";

import Logo from "../../assets/images/teste.png";

import Link from "next/link";
import * as S from "./styles";

export default function Products() {
  return (
    <Base>
      <S.CardProducts>
        <Card.Root>
          <Card.Header>
            <Link href="/" passHref>
              <Image src={Logo} alt="logo-product" width={150} height={150} />
            </Link>
          </Card.Header>
          <Card.Content>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
            perferendis, recusandae ducimus, aspernatur, odit dolorem
            dignissimos obcaecati eveniet rerum dicta placeat blanditiis
            reiciendis ex provident aperiam explicabo quibusdam iusto in?
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
    </Base>
  );
}
