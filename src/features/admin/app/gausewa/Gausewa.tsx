import AddBanner from "./components/AddBanner"
import GausewaList from "./components/GausewaList"
import GausewaTable from "./gausewa_table/GausewaTable"

const Gausewa = () => {
    return (
        <div className="h-full overflow-auto px-4 flex flex-col  gap-4">
            <AddBanner />
            <GausewaList/>
            <GausewaTable/>
        </div>
    )
}

export default Gausewa
