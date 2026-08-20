const partners = ['Hario', 'Chemex', 'Kalita', 'Aeropress']

const Partners = () => {
  return (
    <section className="partners">
      {partners.map((name, i) => (
        <div key={i} className="partner">{name}</div>
      ))}
    </section>
  )
}

export default Partners
