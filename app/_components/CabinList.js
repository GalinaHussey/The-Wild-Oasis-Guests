import { unstable_noStore as noStore } from "next/cache";
import { getCabins } from "../_lib/data-service";
import CabinCard from "./CabinCard";

async function CabinList({ filter }) {
  noStore();

  const cabins = await getCabins();
  if (!cabins.length) return null;

  let filteredCabins;
  switch (filter) {
    case "all":
      filteredCabins = cabins;
      break;
    case "small":
      filteredCabins = cabins.filter((cabin) => cabin.maxCapacity <= 2);
      break;
    case "medium":
      filteredCabins = cabins.filter(
        (cabin) => cabin.maxCapacity >= 3 && cabin.maxCapacity <= 6
      );
      break;
    case "large":
      filteredCabins = cabins.filter((cabin) => cabin.maxCapacity >= 7);
      break;
    default:
      filteredCabins = cabins;
  }

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {filteredCabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}

export default CabinList;
