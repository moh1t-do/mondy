import { TiDelete } from "react-icons/ti";
import { MdEdit } from "react-icons/md";
function WishListCard(props: any): React.ReactNode {
  return (
    <div className="flex max-w-xs items-center border-l-8 border-emerald-500 bg-emerald-50 p-4 text-emerald-900 shadow-lg sm:max-w-sm md:max-w-md">
      <div className="flex w-[70vw] sm:w-96 justify-between gap-2">
        <h2 className="overflow-hidden text-ellipsis whitespace-nowrap">
          {props.title}
        </h2>
        <div className="flex gap-4">
          <button>
            <TiDelete size={25} />
          </button>
          <button>
            <MdEdit size={25} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default WishListCard;
