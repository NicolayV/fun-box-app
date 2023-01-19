import React from "react";
import CardList from "./List";
import styles from "./styles.module.scss";
import { ICard } from "./types";

const Cards = () => {
  const cards: ICard[] = [
    {
      id: 0,
      headerLabel: "Сказочное заморское яство",
      title: "Нямушка",
      subTitle: "с фуа-гра",
      amountServing: 10,
      gifts: { amount: null, type: "мышь в подарок" },
      weight: "0,5",
      footerLabel: "Печень утки разварная с артишоками.",
      amount: 100,
    },
    {
      id: 1,
      headerLabel: "Сказочное заморское яство",
      title: "Нямушка",
      subTitle: "с рыбой",
      amountServing: 40,
      gifts: { amount: 2, type: "мыши в подарок" },
      weight: "2",
      footerLabel: "Головы щучьи с чесноком да свежайшая семгушка.",
      amount: 200,
    },
    {
      id: 2,
      headerLabel: "Сказочное заморское яство",
      title: "Нямушка",
      subTitle: "с курой",
      amountServing: 100,
      gifts: { amount: 5, type: "мышей в подарок" },
      weight: "5",
      footerLabel: "Филе из цыплят с трюфелями в беконе.",
      amount: 0,
    },
  ];

  return (
    <div className={styles.wrapper}>
      <h1>Ты сегодня покормил кота?</h1>
      <CardList cards={cards} />
    </div>
  );
};

export default Cards;
