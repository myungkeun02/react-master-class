// import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchCoins } from "../api";
import { Helmet } from "react-helmet";
import { useSetRecoilState } from "recoil";
import { IsDarkAtom } from "../atoms";

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;
const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ConinsList = styled.ul``;
const Coin = styled.li`
  background-color: white;
  color: ${(props) => props.theme.textColor};
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 15px;
  a {
    transition: color 0.2s ease-in;
    display: flex;
    align-items: center;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.div`
  text-align: center;
`;

const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;

interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

function Coins() {
  const { isLoading, data } = useQuery<ICoin[]>("allCoins", fetchCoins);
  const setDarkAtom = useSetRecoilState(IsDarkAtom);
  const toggleDarkAtom = () => setDarkAtom((prev) => !prev);
  return (
    <Container>
      <Helmet>
        <title>Coin Master </title>
      </Helmet>
      <Header>
        <Title>Coin Master</Title>
        <button onClick={toggleDarkAtom}>Toggle Dark Mode</button>
      </Header>
      {isLoading === true ? (
        <Loader>Loading...</Loader>
      ) : (
        <ConinsList>
          {data?.slice(0, 100).map((coin) => (
            <Coin key={coin.id}>
              <Link
                to={{
                  pathname: `/${coin.id}`,
                  state: { name: coin.name },
                }}
              >
                <Img
                  src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png
                  `}
                ></Img>
                {coin.name} &rarr;
              </Link>
            </Coin>
          ))}
        </ConinsList>
      )}
    </Container>
  );
}

export default Coins;
