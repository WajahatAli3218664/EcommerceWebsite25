// src/app/success/page.tsx
const Success: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-md rounded-lg p-6 sm:p-8 max-w-lg w-full mx-4">
                <h2 className="font-bold text-3xl mb-4 text-emerald-800 text-center">Thank You for Your Order!</h2>
                <p className="text-lg text-gray-700 mb-4 text-center">Your order has been successfully placed.</p>
                <p className="text-lg text-gray-700 mb-6 text-center">We appreciate your business!</p>
                <p className="text-sm text-gray-500 text-center">A confirmation email has been sent to your registered email address.</p>
                <div className="mt-6 text-center">
                    <a 
                        href="/" // Link back to home or products page
                        className="bg-purple-900 text-white py-2 px-4 rounded hover:bg-opacity-90 transition duration-200 w-full sm:w-auto"
                    >
                        Return to Home
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Success;
