import TestimonialImage from "./TestimonialImage.jsx"

export default function Testimonial({ children, src, alt }) {
  return (
    <div className="card-testimo">
      {src && (
        <TestimonialImage src={src} alt={alt} />
      )}
      <section className={src ? "testimo" : "testimoAlt"}>
        {children}
      </section>
    </div>
  )
}

