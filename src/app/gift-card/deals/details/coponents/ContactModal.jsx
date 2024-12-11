import { Button, Modal } from "antd";
import Image from "next/image";
import whatsapp from "@/app/assets/icons/whatsapp.svg";
import telegram from "@/app/assets/icons/telegram.svg";
import instagram from "@/app/assets/icons/instagram.svg";
import mail from "@/app/assets/icons/mail.svg";
import phone from "@/app/assets/icons/phone.svg";
import snapchat from "@/app/assets/icons/snapchat.svg";
import facebook from "@/app/assets/icons/facebook.svg";
import tiktok from "@/app/assets/icons/tiktok.svg";
import twitter from "@/app/assets/icons/twitter.svg";

const ContactModal = ({ open, setOPen }) => {
  const handleCancel = () => {
    setOPen(false);
  };
  return (
    <Modal
      title="Contact Tomiwa Paul"
      open={open}
      onCancel={handleCancel}
      footer={<></>}
    >
      <div className="flex items-center gap-2 lg:gap-3 flex-wrap">
        <Button size="large" className="gap-1.5 lg:gap-2">
          <Image src={whatsapp} alt="Whatsapp" width={24} /> Whatsapp
        </Button>
        <Button size="large" className="gap-1.5 lg:gap-2">
          <Image src={telegram} alt="Telegram" width={24} /> Telegram
        </Button>
        <Button size="large" className="gap-1.5 lg:gap-2">
          <Image src={instagram} alt="Instagram" width={24} /> Instagram
        </Button>
        <Button size="large" className="gap-1.5 lg:gap-2">
          <Image src={mail} alt="Mail" width={24} /> jobtis@dellejju.mc
        </Button>
        <Button size="large" className="gap-1.5 lg:gap-2">
          <Image src={phone} alt="Phone" width={24} /> (251) 983-5886
        </Button>
        <Button size="large" className="gap-1.5 lg:gap-2">
          <Image src={snapchat} alt="Snapchat" width={24} /> Snapchat
        </Button>
        <Button size="large" className="gap-1.5 lg:gap-2">
          <Image src={facebook} alt="Facebook" width={24} /> Facebook
        </Button>
        <Button size="large" className="gap-1.5 lg:gap-2">
          <Image src={tiktok} alt="Tiktok" width={24} /> Tiktok
        </Button>
        <Button size="large" className="gap-1.5 lg:gap-2">
          <Image src={twitter} alt="Twitter" width={24} /> Twitter
        </Button>
      </div>
    </Modal>
  );
};

export default ContactModal;
