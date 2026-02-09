import CardTitle from "./CardTitle.jsx"
import CardBody from "./CardBody.jsx"
import clsx from 'clsx'
import { PiUploadThin } from "react-icons/pi";
export default function Card({ icon, color, children }) {
    const avatarColor = clsx(
        "card-icon",
        color === "blue" && "blue-c",
        color === "green" && "green-c",
        color === "red" && "red-c",
        color === "yellow" && "yellow-c",
        color === "purple" && "purple-c",
        color === "pink" && "pink-c",
        color === "gray" && "gray-c",
        color === "slate" && "slate-c",
        color === "orange" && "orange-c",
        color === "teal" && "teal-c"
    )
    return (
        <section className="whole-card">
            <span className={avatarColor}>
                {icon ?? <PiUploadThin />}
            </span>
            {children}
        </section>
    )
}