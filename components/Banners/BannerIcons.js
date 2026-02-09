import { GoCheckCircle } from "react-icons/go"
import { BiSolidError } from "react-icons/bi"
import { FaTimesCircle } from "react-icons/fa"
import { FaCircleExclamation } from "react-icons/fa6"

export default function BannerIcons({ type }) {
  if (type === "success") {
    return <GoCheckCircle />
  }

  if (type === "warning") {
    return <FaCircleExclamation />
  }

  if (type === "update") {
    return <FaTimesCircle />
  }

  if (type === "error"){
    return <BiSolidError />
  }else {
    return null
  }
}
