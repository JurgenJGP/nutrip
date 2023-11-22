
const CardMotiva = ({ img, title, text }) => {
    return (
        <div className="flex justify-center relative col-auto ">
            <img
                src={img} alt={title}
                className="rounded-[20px] max-w-[500px] w-full">
            </img>
            <div className="cards">
                <h3>
                    {title}
                </h3>
                <p className="text-center text-[16px] ">
                    {text}
                </p>
            </div>
        </div>
    )
}

export default CardMotiva
