import BannerIcons from "./BannerIcons.jsx"

export default function Banner({ status, children }) {
  return (
    <section className={status}>
      <span>
        <BannerIcons type={status} />
      </span>

      <div>
        {children}
      </div>
    </section>
  )
}
