import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Card from "../components/Card";

export default function Contact() {
  return (
    <div className="mb-10">
    <div className="flex flex-col w-full justify-center items-center ">
      <div className="flex-col w-full flex justify-center items-center">
        <div className="bg-orange-0 md:h-[150px] w-full h-[200px] text-5xl font-bold flex justify-center items-center">
          <h1>Contato</h1>
        </div>
        <div className="px-5 md:px-0 md:mt-10">
          <button type="submit" className="text-white font-semibold mt-5 bg-orange-0 hover:bg-orange-400 focus:ring-4 focus:outline-none focus:bg-orange-400 rounded-lg text-2xl md:text-sm sm:w-[300px] md:px-20 w-full py-5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:bg-orange-600">Entrar em contato por Whatsapp</button>
        </div>
      </div>
      <div>
        <div className="flex-col md:flex-row flex gap-10 justify-center items-center p-2">
          <Card label="Whatsapp" description="41 98409-5429" icon={<FaWhatsapp />} />
          <div className="h-1 bg-gray-400"></div>
          <Card label="E-mail" description="cavilato@cavilato.com.br" icon={<IoMdMail  />} />
          <div className="h-1 bg-gray-400"></div>
          <Card label="Telefone" description="41 3642-3214" icon={<FaPhoneAlt />} />
        </div>
      </div>
    </div>
  </div>
  )
}