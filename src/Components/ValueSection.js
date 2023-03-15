import HTwo from "./HTwo";
import SectionNav from "./SectionNav";

function ValueSection() {
  return (
    <section className="bg-red ">
      <span className="text-red-500 align-center">MY CHOUSE US</span>
      <HTwo innerText={"Our Values"} />
      <div className=" grid grid-cols-3 align-center gap-[40px] mt-[50px]">
        <SectionNav name="Ali ibn Tolip" information="Senior Developer" />
        <SectionNav name="Abu Bakr" information="Middle Developer" />
        <SectionNav name="Umar ibm Hattop" information="Middle Developer" />
      </div>
    </section>
  );
}
export default ValueSection;
