const OWNER_PHONE_NUMBER = process.env.NEXT_PUBLIC_OWNER_PHONE_NUMBER
export const confirmOrderAndSendWhatsApp = (message: string) => {
  const whatsappMessage = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/${OWNER_PHONE_NUMBER}?text=${whatsappMessage}`;
  window.open(whatsappURL, '_blank');
};
