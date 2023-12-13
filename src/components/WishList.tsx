import { useEffect, useState } from "react";
import WishListCard from "./WishListCard";
import { wishItem } from "@/types/types";
import { useSelector, useDispatch } from 'react-redux'

function WishList(): React.ReactNode {
  const [wishes, setwishes] = useState<wishItem[] | null>(null);
  const wishData = useSelector((state: any) => state.wish.wishData)

  useEffect(() => {
    setwishes(wishData);

  }, [wishData])

  return (
    <div className="flex flex-col items-center gap-2">
      {wishes?.map((ele) => {
        return <WishListCard key={ele.id} id={ele.id} title={ele.title} theme={ele.theme} />
      })}
      {!wishes && <h1>List Empty</h1>}
    </div>
  );
}

export default WishList;
