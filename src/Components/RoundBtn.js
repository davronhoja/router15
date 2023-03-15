function RoundBtn(props) {
  return (
    <button
      className={`${
        props.isBgPurple ? "bg-myPurple text-white" : "bg-white text-myPurple"
      } px-[32px] py-[12px] font-bold rounded-full`}
    >
      Get Started{" "}
    </button>
  );
}

export default RoundBtn;

//
// function RoundBtnold(props) {
//   let btnBacgroundColor;
//   let btnTextColor;
//   if (props.isBgPurple == true) {
//     btnBacgroundColor = "bg-myPurple";
//     btnTextColor = "text-white";
//   } else {
//     btnBacgroundColor = "bg-white";
//     btnTextColor = "text-myPurple";
//   }

//   return (
//     <button
//       className={`${btnTextColor} ${btnBacgroundColor} px-[32px] py-[12px] font-bold rounded-full`}
//     >
//       Get started
//     </button>
//   );
// }
