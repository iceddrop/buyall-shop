const Skeleton = () => {
    return (
        <div className="w-full p-8">
            <div className="w-40 bg-gray-400 h-4  mb-4"></div>
            <div className="w-full flex justify-between">
                <div className="bg-gray-400 lg-h-60  h-32 w-1/3 mr-2 rounded-md"></div>
                <div className="bg-gray-400 lg-h-60  h-32 w-1/3 mr-4 rounded-md"></div>
                <div className="bg-gray-400 lg-h-60  h-32 w-1/3  rounded-md"></div>
            </div>
        </div>
    )
}

export default Skeleton;