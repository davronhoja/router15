import "./index.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import ValueSection from "./Components/ValueSection";
import CenterChildren from "./Components/CenterChildren";
import TeacherSection from "./Components/TeacherSection";

function App() {
  return (
    <CenterChildren>
      <div className="bg-[#f7e0da] pt-[40px] px-[68px] mt-[32px] rounded-[40px]">
        <Header />
        <Hero />
      </div>

      <ValueSection />
      <TeacherSection />
    </CenterChildren>
  );
}

export default App;
