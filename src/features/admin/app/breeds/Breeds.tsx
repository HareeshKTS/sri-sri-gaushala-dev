import BreedsTable from "./breeds_table/BreedsTable"
import AddBanner from "./components/AddBanner"
import BreedAnalytics from "./components/BreedAnalytics"

const Breeds = () => {
    return (
        <div className="h-full overflow-auto px-4 flex flex-col  gap-4">
            <BreedAnalytics />
            <AddBanner />
            <BreedsTable />
        </div>
    )
}

export default Breeds
