import { HiBriefcase, HiLocationMarker, HiCurrencyDollar } from "react-icons/hi";
import RoleBadge from "../ui/RoleBadge";


interface JobCardProps {
    title: string
    company: string
    location: string
    salary: string
    type: string
    isAdmin: boolean
    onEdit: () => void
    onDelete: () => void
}

export default function JobCard({
    title,
    company,
    location,
    salary,
    type,
    isAdmin,
    onEdit,
    onDelete
} :JobCardProps) {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
            <div className="p-6">
                <div className="flex justify-between">
                    <h3 className="text-xl font-bold text-gray-900">{title}</h3>
                    <RoleBadge role = {type} />
                </div>
                <p className="mt-2 text-gray-600" >{company}</p>

                <div className="mt-4 space-y-2">

                    <div className="flex items-center text-gray-500">
                        <HiCurrencyDollar className="mr-2" />
                        <span>{salary}</span>
                    </div>

                </div>
                    {
                        isAdmin && (
                            <div className="mt-6 flex space-x-3">
                                <button
                                    onClick={onEdit}
                                    className="px-4 py-2 text-sm font-medium text-blue-600 hover:to-blue-800">
                                    Edit
                                </button>

                                <button 
                                    onClick={onDelete} className="px-4 py-2 text-sm font-medium text-red-600 hover:text-red-800">
                                    Delete
                                </button>
                            </div>
                        )
                    }
            </div>
        </div>
    )
}