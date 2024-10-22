import Image from 'next/image'
import './latest.css'
import '@/app/styles/newscard.css'
import { Link } from 'next-view-transitions'

async function getLatestData() {

    const res = await fetch(`${process.env.WP_URL}/posts?&_embed=true`);
    
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    
    return res.json()
}

export default async function Latest() {
    
    const data = await getLatestData()

  return (
    <section>
        <div className="latest-section">

            <div className="section-header">
                <h1>Latest</h1>
                <span className="section-border"></span>
            </div>
           
            <div className="latest-card-list">
                {data.sort((a, b) => b.id - a.id).slice(0,4).map((news) => (
                    <Link href={`/news/${news.slug}`} key={news.id}>
                        <div className="news-card" >
                            
                            <div className="image-container">
                                <Image
                                    src={news._embedded['wp:featuredmedia'][0].source_url}
                                    alt={news.title.rendered}
                                    width={1000}
                                    height={400}
                                    quality={100}
                                    priority
                                />
                            </div>

                            <div className="news-content">
                                <span>{news.acf.category_acf}</span>
                                <h1>{news.title.rendered}</h1>
                            </div>

                        </div>
                    </Link>
                ))}        
            </div>
            
        </div>

    </section>
  )
}
