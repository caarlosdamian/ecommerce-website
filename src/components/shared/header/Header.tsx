import { cart, hamburger, logo } from "../../../assets";

export const Header = () => {
  return (
    <header className="bg-customBlack h-[89px]">
      <section className="container mx-auto flex justify-between items-center h-full px-6">
        <div className="">
          <img src={hamburger} alt="hamburger" />
        </div>
        <div className="">
        <img src={logo} alt="logo" />
        </div>
        <div className="">
        <img src={cart} alt="cart" />
        </div>
      </section>
    </header>
  );
};
