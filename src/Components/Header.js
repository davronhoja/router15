import RoundBtn from "./RoundBtn";

function Header() {
  return (
    <div className="flex items-center justify-between">
      <img src="/logo192.png" />
      <div className=" font-axiforma flex space-x-[44px]">
        <NavLink name="Courses" />
        <NavLink name="About Us" />
        <NavLink name="Teachers" />
        <NavLink name="Prising" />
        <NavLink name="Blogs" />
      </div>
      <RoundBtn isBgPurple={false} />
    </div>
  );
}

export default Header;

function NavLink(props) {
  return (
    <a className="text-[20px] font-light text-[myGrey] cursor-pointer">
      {props.name}
    </a>
  );
}
