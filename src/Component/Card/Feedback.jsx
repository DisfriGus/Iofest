const Feedback = () => {
    return(
        <div className="flex flex-col flex-none w-[400px]">
            <p className="subtitle1 mb-4">“I recently used the virtual tour product for culture seekers and I have to say, it was an incredible experience. I was able to explore historical landmarks from all over the world without leaving my house.”</p>
            <div className="flex items-center">
                <img src="https://images.unsplash.com/photo-1682270251135-b917816669e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60" className="w-10 h-10 mr-2 rounded-full" />
                <div className="flex flex-col">
                    <h5 className="subtitle1">Sarah Azhar</h5>
                    <span className="subtitle2">Travelers Enthusiast</span>
                </div>
            </div>
        </div>
    )
}

export default Feedback;