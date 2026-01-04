
export default function FiltersButton(){
    return(
        <div className="w-4xl">
            <select className="bg-gray-900 w-full p-3  rounded-2xl">
                <option value="all">All</option>
                <option value="pandin">Panding</option>
                <option value="complete">Complete</option>
            </select>
        </div>
    )
}