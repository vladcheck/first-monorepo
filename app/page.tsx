import Image from "next/image";
import FractionForm from "./FractionForm";

export default function Page() {
  return (
    <>
      <h1>Hello, NextJS!</h1>
      <Image src="/image.jpeg" alt="Profile" width={100} height={100} />
      <FractionForm />
    </>
  );
}
