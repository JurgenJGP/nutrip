
const CardTestimonio = ({img, text1, text2 }) => {
    return (
        <div className="cardtest ">
            <div className=" flex justify-center items-center">
                <img src={img} alt={text2} className="rounded-lg w-[160px]" />
            </div>
            <div>
                <p className="text-center">
                    {text1}
                </p>
                <p className="text-center mt-[8px] font-bold">
                    {text2}
                </p>
            </div>
        </div>
    )
    
}
export default CardTestimonio
