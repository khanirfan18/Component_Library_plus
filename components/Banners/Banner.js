import BannerIcons from "./BannerIcons"

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
