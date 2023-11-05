import Link from "next/link";

import Button from "@/components/Button";
import { Card } from "@/components/Card";

import Base from "@/templates/Base";

import * as S from "./styles";

export default function DashboardMain() {
  return (
    <Base>
      <S.Wrapper>
        <Card.Root color="primary">
          <Card.Header>ASdnoaisdnaosidnoias</Card.Header>
          <Card.Content>asiudhbaiusduias</Card.Content>
          <Card.Actions>
            <Link href="#" passHref>
              <Button color="primary" labelColor="primary" variant="text">
                Teste
              </Button>
            </Link>
          </Card.Actions>
        </Card.Root>
      </S.Wrapper>
    </Base>
  );
}
