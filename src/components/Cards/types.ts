export interface ICard {
  id: number;
  headerLabel: string;
  title: string;
  subTitle: string;
  amountServing: number;
  gifts: { amount: number | null; type: string };
  weight: string;
  footerLabel: string;
  amount: number;
}
