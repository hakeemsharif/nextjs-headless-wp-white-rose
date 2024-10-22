
import './news-article.css'
import NotFound from './not-found';
import Image from 'next/image';
import moment from 'moment';

export async function generateStaticParams() {
  const res = await fetch(`${process.env.WP_URL}/posts?&_embed=true`);
  const data = await res.json()

  return data.map((data) => ({
    slug: data.slug
  }))
}

export default async function NewsArticle({params}) {

    const res = await fetch(`${process.env.WP_URL}/posts?slug=${params.slug}?&_embed=true`);
    //const data = await res.json();

    if (!res.ok) {
        return <p>Failed to Fetch Data</p>;
      }
    
    const data = await res.json();

    if (!data || data.length === 0) {
    return <NotFound />;
    }
    const article = data[0]

    var PublishDate = moment(article.date).format("Do MMMM YYYY");

  return (
    <section className='group-section'>

        <title>White Rose | News</title>

        <div className="section-header">
            <h1>News</h1>
            <span className="section-border"></span>
        </div>
        
        <div className="article-content-page">
            
            <div className="article-cover">
                <Image
                    src={article._embedded['wp:featuredmedia'][0].source_url}
                    width={5000}
                    height={600}
                    alt='Logo'
                    quality={100}
                    className="article-image"
                    priority
                />
              <Image
                  src={article._embedded['wp:featuredmedia'][0].source_url}
                  width={5000}
                  height={5000}
                  alt='Logo'
                  quality={100}
                  className="article-blur"
                  priority
              />
 
            </div>
            
            <div className="article-content">
                <div className="article-details">
                    <span>{article.acf.category_acf}</span>
                    <span>{PublishDate}</span>
                </div>
                <h1>{article.title.rendered}</h1>
                <span>By <b>{article._embedded.author[0].name}</b></span>
                <div 
                className="content"
                dangerouslySetInnerHTML={{ __html: `${article.content.rendered}` }} />
            </div>

        </div>
    </section>
  )
}
