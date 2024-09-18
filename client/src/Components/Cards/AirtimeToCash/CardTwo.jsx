import { useEffect } from "react";

function CardTwo({ formData, setFormData, setActiveCard }) {
  useEffect(() => {
    setFormData({ ...formData, proceed: false });
}, []);
  return (
    <div className="card3">
        CardTwo
    </div>
  )
}

export default CardTwo