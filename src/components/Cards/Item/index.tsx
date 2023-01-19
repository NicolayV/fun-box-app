import React, { useState } from "react";
import cn from "classnames";
import { ICard } from "../types";
import styles from "./styles.module.scss";
import imgCat from "../../../assets/img/cat.png";

const CardItem = ({
  id,
  headerLabel,
  title,
  subTitle,
  amountServing,
  gifts,
  weight,
  footerLabel,
  amount,
}: ICard) => {
  const [isSelected, setIsSelected] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const isDisabled = amount;

  const handlerOnMouseEnter = () => {
    if (isSelected) {
      setIsHover(true);
    }
  };
  const handlerOnMouseLeave = () => {
    if (isSelected) {
      setIsHover(false);
    }
  };
  const handlerOnClick = () => {
    if (isDisabled) {
      setIsSelected((prev) => !prev);
      console.log(id);
    }
  };

  return (
    <div className={cn(styles.wrapper, [styles[`item${id}`]])}>
      <div
        className={cn(
          styles.card,
          { [styles.cardSelected]: isSelected },
          { [styles.cardDisabled]: !isDisabled }
        )}
        onClick={handlerOnClick}
        onMouseEnter={handlerOnMouseEnter}
        onMouseLeave={handlerOnMouseLeave}
      >
        <div
          className={cn(styles.cardPanel, {
            [styles.cardPanelDisabled]: !isDisabled,
          })}
        >
          <p className={styles.headerLabel}>
            {isSelected && isHover ? (
              <span>Котэ не одобряет?</span>
            ) : (
              headerLabel
            )}
          </p>

          <h3 className={styles.title}>{title}</h3>

          <h6 className={styles.subTitle}>{subTitle}</h6>

          <p className={styles.servings}>
            <span>{amountServing}</span> порций
          </p>
          <p className={styles.gifts}>
            <span>{gifts.amount}</span> <span>{gifts.type}</span>
          </p>
        </div>
        <img className={styles.img} src={imgCat} alt="" />
        <div
          className={cn(
            styles.weightPanel,
            {
              [styles.weightPanelSelected]: isSelected,
            },
            { [styles.weightPanelDisabled]: !isDisabled }
          )}
        >
          <span>{weight}</span>
          <span>кг</span>
        </div>
      </div>
      <div className={styles.footerLabel}>
        <p
          className={cn(styles.footerLabelEmpty, {
            [styles.displayNone]: isDisabled,
          })}
        >
          <span>Печалька,</span>
          <span>{subTitle}</span>
          <span>закончился.</span>
        </p>

        {isSelected ? (
          <p>{footerLabel}</p>
        ) : (
          <p className={cn({ [styles.displayNone]: !isDisabled })}>
            <span>Чего сидишь? Порадуй котэ,</span>
            <a href="##" onClick={() => console.log(id)}>
              купи.
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default CardItem;
