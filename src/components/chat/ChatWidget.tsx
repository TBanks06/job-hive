import { useState } from "react"
import { HiChatAlt2, HiMinus } from "react-icons/hi";

const ChatWidget = () => {

    const [isMinimized, setIsMinimized] =useState(false);

    return (

        <div className="fixed bottom-6 right-6 z-50">
            {
                isMinimized ? (
                    <button onClick={() => setIsMinimized(false)} className="bg-blue-500 rounded-full p-4 shadow-lg"> 
                        <HiChatAlt2 className="text-white text-2xl" />
                    </button>
                ) : (
                    <div className="w-80 h-96 bg-white shadow-xl flex flex-col">
                        <div className="flex justify-between items-center p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-t-lg">
                            <h3>Support Chat</h3>
                            <button onClick={() => setIsMinimized(true)}>
                                <HiMinus className="text-xl" />
                            </button>
                        </div>
                        { /*    Chat Message                    */}
                    </div>
                )
            }
        </div>
    )
}