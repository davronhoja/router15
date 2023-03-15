function sectionNav(props) {
  return (
    <div className=" py-[10px] px-[15px] rounded-[20px] align-cen">
      <img src="/GlassIcons.png" />
      <div className=" block pb-[15px]">
        <p className=" text-myPurple text-[32px]">{props.name}</p>
        <p className="text-bluee text-[24px]">
          He is great programmer in USA and British. Tony is{" "}
          <b>{props.information}</b> in React.js React Navtive
        </p>
      </div>
    </div>
  );
}
export default sectionNav;
