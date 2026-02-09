export default function TestimonialFoot({name,job}) {
    return (
        <div className="footer">
            <p className="name">{name}</p>
            <span>/</span>
            <p>{job}</p>
        </div>
    )
}