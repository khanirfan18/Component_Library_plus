import Testimonial from "./index"

export default function Testimonial({ children, src, alt }) {
  return (
    <div className="card-testimo">
      {src && (
        <Testimonial.Image src={src} alt={alt} />
      )}
      <section className={src?"testimo":"testimoAlt"}>
        {children}
      </section>
    </div>
  )
}

