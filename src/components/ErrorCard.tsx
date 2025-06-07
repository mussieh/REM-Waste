import errorImg from "../assets/images/error.jpg";

type ErrorCardProps = {
    error: string;
    onRetry: () => void;
};

const ErrorCard = ({ error, onRetry }: ErrorCardProps) => {
    return (
        <div className="bg-white max-w-96 w-full h-[18rem] flex flex-col justify-center items-center gap-8 mx-auto rounded-2xl mt-10">
            <img className="h-20 w-20" src={errorImg} alt="Error Icon" />
            <p className="text-red-500 text-center">{error}</p>
            <button
                onClick={onRetry}
                className="bg-red-500 hover:bg-red-700 text-white cursor-pointer p-4 max-w-40 rounded-lg w-full"
            >
                Retry
            </button>
        </div>
    );
};

export default ErrorCard;
