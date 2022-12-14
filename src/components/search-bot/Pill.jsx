import "./SearchBot.css";

export const Pill = ({ text, onClick }) => {
  return (
    <button type="button" className="btn btn-outline-info m-2 pill-transtition" onClick={onClick}>
      {text}
    </button>
  );
};
