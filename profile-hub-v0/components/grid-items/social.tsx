import Link from "next/link";
import Button from "../button";
import Image from "next/image";
import Icon from "../icon";
import { GridItemInterface } from "./../../config/site-config";

const Social = ({ item }: { item: GridItemInterface }) => {
  return (
    <Link href={item.buttonLink ?? ""} rel="noopener noreferrer" target="_blank">
      {item.image && (<><div className="absolute inset-0 z-10 bg-gradient-to-b from-white/50 via-white/70 to-white/90 hover:from-white/40 hover:via-white/60 hover:to-white/80 dark:from-neutral-950/50 dark:via-neutral-950/70 dark:to-neutral-950/90 hover:dark:from-neutral-950/40 hover:dark:via-neutral-950/60 hover:dark:to-neutral-950/70" />
      <Image
        className="z-0 object-cover object-center w-full h-full hover:scale-150"
        src={item.image ?? ""}
        alt="img"
        fill /></>)}
      {/* Header */}
      <div className="flex items-center justify-between">
        {/* {item.icon && <Icon type={item.icon} color={item.color ?? "#fff"} />} */}
        {/* {item.layout === "2x2" && (
          <Button
            text={item.buttonTitle ?? ""}
            secondaryText={item.buttonSecondaryText}
            color={item.color}
          />
        )} */}
      </div>
      {/* Content */}
      <div className="mt-1 relative z-20">
        <div className="@lg:text-lg text-xl font-semibold line-clamp-1 ">
          {item.title}
        </div>
        <div className="text-xl text-textlight/75 dark:text-textdark/75">{item.username}</div>
        {item.description && (
          <div className="text-sm text-textlight/50 dark:text-textdark/50 line-clamp-2">
            {item.description}
          </div>
        )}

        {item.layout === "2x1" && (
          <div className="mt-2">
            {/* <Button
              text={item.buttonTitle ?? ""}
              secondaryText={item.buttonSecondaryText}
              color={item.color}
            /> */}
          </div>
        )}
      </div>
    </Link>
  );
};

export default Social;
