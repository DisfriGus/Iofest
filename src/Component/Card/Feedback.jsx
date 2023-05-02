const Feedback = ({name, src, status, message}) => {
    return(
        <div className="flex flex-col flex-none w-[400px] max-sm:w-[240px]">
            <p className="subtitle1 mb-4">“{message}”</p>
            <div className="flex items-center">
                <img src={src} className="w-10 h-10 mr-2 rounded-full" />
                <div className="flex flex-col">
                    <h5 className="subtitle1">{name}</h5>
                    <span className="subtitle2">{status}</span>
                </div>
            </div>
        </div>
    )
}

export default Feedback;