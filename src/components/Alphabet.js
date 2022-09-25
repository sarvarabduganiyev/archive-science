import "../style/Alphabet.css";
import AlphabetLetter from "./AlphabetLetter";

const allAlphabet = [
  "А",
  "Б",
  "В",
  "Г",
  "Д",
  "Е",
  "Ë",
  "Ж",
  "З",
  "И",
  "Й",
  "К",
  "Л",
  "М",
  "Н",
  "О",
  "П",
  "Р",
  "С",
  "Т",
  "У",
  "Ф",
  "Х",
  "Ц",
  "Ч",
  "Ш",
  "Щ",
  "Э",
  "Ю",
  "Я",
];
function Alphabet() {
  return (
    <section>
      <div className="alphabet">
        <div className="alphabet-box">
          {allAlphabet.map((item) => (
            <AlphabetLetter key={item} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Alphabet;
