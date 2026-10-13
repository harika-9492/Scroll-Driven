function Metrics({ items }) {
  return (
    <div className="stats-grid flex" aria-label="Impact metrics">
      {items.map((item) => (
        <div className="stat-card flex flex-col" key={item.value}>
          <strong>{item.value}</strong>
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  )
}

export default Metrics
