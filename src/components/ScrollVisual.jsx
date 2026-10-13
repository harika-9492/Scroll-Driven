import heroImage from '../assets/image.png'

function ScrollVisual({ visualRef }) {
  return (
    <div className="visual-stage reveal-layer relative" aria-hidden="true">
      <div className="stage-grid" />
      <img
        className="scroll-visual"
        ref={visualRef}
        src={heroImage}
        alt="Itzfizz graphic mark"
      />
    </div>
  )
}

export default ScrollVisual
