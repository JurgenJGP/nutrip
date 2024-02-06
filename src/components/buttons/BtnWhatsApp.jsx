import { FloatingWhatsApp } from "react-floating-whatsapp";

const data = {
  btnWsp: {
    message: "Hola, ¿en qué puedo ayudarte?", 
    placeholder: "Escribe tu mensaje aquí",
  },
};

export default function BtnWhatsApp() {
  return (
    <div className="fixed bottom-[10%] right-[4%] !z-30">
      <FloatingWhatsApp
        phoneNumber="+51933509472"
        accountName="Ciclos Studio"
        chatMessage={data.btnWsp.message}
        statusMessage=""
        avatar=""
        placeholder={data.btnWsp.placeholder}
      />
    </div>
  );
}
