import IconComponent from "../icon/icon";

export default function Commitment() {
    return (
        <div className="w-full mt-10">
            <h1 className="text-custom-gray text-2xl font-extrabold mt-12 mb-12">Our <span className="text-custom-red">Commitment</span></h1>
            <div className="flex flex-col md:flex-row items-center">
                <IconComponent path="code.svg" />
                <div className="w-full md:w-2/3 md:pl-4 mt-4 md:mt-0">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget erat libero. Vivamus ligula dolor, lobortis id magna quis, lacinia sodales odio. Etiam quis lorem quam. Nulla urna mi, interdum sit amet aliquet et, commodo ac nisi. Vestibulum a tortor et leo luctus dictum ut ac diam. Duis sit amet arcu eu leo pulvinar consequat. Duis imperdiet pellentesque eros eget tempus. Proin eget ligula ut libero mollis pellentesque sed condimentum ligula.</p>
                </div>
            </div>
        </div>
    )
}
