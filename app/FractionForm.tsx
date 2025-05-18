const fractions = require("fractions");

function add() {
  const f1 = new fractions.Fraction(1, 2);
  const f2 = new fractions.Fraction(3, 2);
  console.log(f1);
  console.log(f2);
  console.log(f1.add(f2));
}

export default function FractionForm() {
  add();
  return <form action="get"></form>;
}
