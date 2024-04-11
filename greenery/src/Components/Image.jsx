export default function Image(className, photo) {
    return(
        <img
          className={`${className}`}
          src={`${photo}`}
          alt="Post Img"
        />
    )
}