import '@/app/styles/notfound.css'
 
export default async function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>We can’t find the page you’re looking for.</p>
      <span>Sorry for the inconvenience.</span>
    </div>
  )
}