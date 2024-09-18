import { useEffect } from "react";

function CardThree({ formData, setFormData, setActiveCard }) {
  useEffect(() => {
    setFormData({ ...formData, proceed: false });
  }, []);

  return (
    <div className="card3">
        cardThree
    </div>
  )
}

export default CardThree