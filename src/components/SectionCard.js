import "../style/SectionCard.css";
import SectionCardInner from "./SectionCardInner";
const sectionNames = [
  "Сиёсат",
  "Иқтисодиёт",
  "Ижтимоий хаёт",
  "Маданият",
  "Шахсий фондлар",
  "Ҳарбий соҳа",
  "Кўрсатгичлар",
  "Исмли кўрсатгичлар",
  "Жой номлари",
  "Мавзули кўрсатгичлар",
];
function SectionCard() {
  return (
    <section>
      <div className="sectionCard">
        {sectionNames.map((item) => (
          <SectionCardInner key={item} item={item}/>
        ))}
      </div>
    </section>
  );
}

export default SectionCard;
