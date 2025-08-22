import Image from "next/image"

export default function ProductGallery() {
  const galleryItems = [
    { src: "/assets/c3.jpg", title: "Angle View", desc: "Detailed side perspective" },
    { src: "/assets/c2.jpg", title: "Construction Site", desc: "In-action demonstration" },
    { src: "/assets/c1.jpg", title: "Close-up Details", desc: "Precision engineering" },
  ]

  return (
    <section id="product" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Product Gallery</h2>
          <p className="text-muted-foreground text-lg">
            Explore our tower crane concrete buckets from different angles
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
              <Image
                src={item.src}
                alt={item.title}
                width={500}
                height={400}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
