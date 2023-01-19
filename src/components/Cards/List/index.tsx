import CardItem from "../Item";
import { ICard } from "../types";
import styles from "./styles.module.scss";

const CardList = ({ cards }: { cards: ICard[] }) => {
  return (
    <div className={styles.cardList}>
      {cards.map((card) => (
        <CardItem
          key={card.id}
          id={card.id}
          headerLabel={card.headerLabel}
          title={card.title}
          subTitle={card.subTitle}
          amountServing={card.amountServing}
          gifts={card.gifts}
          weight={card.weight}
          footerLabel={card.footerLabel}
          amount={card.amount}
        />
      ))}
    </div>
  );
};
export default CardList;
