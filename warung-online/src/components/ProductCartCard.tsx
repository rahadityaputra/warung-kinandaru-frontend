import { CartItem } from "../types/CartItem";

type Props = {
  item: any;
};

const ProductCartCard = ({ item }: Props) => {
  console.log(item);

  return (
    <div className="bg-white rounded-xl shadow-md p-4 flex items-center gap-4 w-full">
      <img
        src={item.imageUrl}
        alt={item.name}
        width={80}
        height={80}
        className="rounded-md object-contain border border-gray-200"
      />

      <div className="flex-1">
        <h2 className="font-semibold text-base text-gray-800 mb-1">
          {item.name}
        </h2>
        <p className="text-red-600 font-bold text-sm mb-1">
          Rp {item.price}
        </p>
        <p className="text-gray-600 text-sm">Jumlah: {item.quantity}</p>
      </div>
    </div>
  );
};

export default ProductCartCard;
