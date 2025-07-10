

const GradientButton = ({ children }: { children:React.ReactNode}) => (

    <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
        
        {children}
    </button>
);