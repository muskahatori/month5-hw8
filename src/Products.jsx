const products = [
  { title: 'Эспрессо', subtitle: 'От 250 г', desc: 'Средняя обжарка с нотами шоколада и карамели. Классический вкус для эспрессо-машины.' },
  { title: 'Фильтр-кофе', subtitle: 'От 250 г', desc: 'Светлая обжарка. Раскрывает фруктовые и цветочные нотки при заваривании в воронке.' },
  { title: 'Дрип-пакеты', subtitle: 'От 10 шт.', desc: 'Свежая обжарка в индивидуальной упаковке. Удобно заваривать в дороге и офисе.' },
  { title: 'Аксессуары', subtitle: 'От 1 шт.', desc: 'Кофемолки, воронки, весы, чайники. Всё для приготовления кофе дома.' }
]

const Products = () => {
  return (
    <section className="products">
      {products.map((p, i) => (
        <div key={i} className="product-card">
          <img src={`https://picsum.photos/seed/aroma${i}/400/300`} alt={p.title} />
          <h3>{p.title}</h3>
          <div className="subtitle">{p.subtitle}</div>
          <p>{p.desc}</p>
          <a href="#">Подробнее →</a>
        </div>
      ))}
    </section>
  )
}

export default Products
