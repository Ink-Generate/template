import { Link } from 'react-router-dom'  
import { Button } from "@/components/ui/button"  
import { Home, Search } from "lucide-react"  

const Unknown = () => {  
  return (  
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-4">  
      <div className="text-center max-w-md">  
        <div className="mb-6">  
          <Search   
            className="mx-auto mb-4 text-primary"   
            size={64}   
            strokeWidth={1.5}   
          />  
          <h1 className="text-3xl font-bold mb-2">  
            Page Not Found  
          </h1>  
          <p className="text-muted-foreground mb-6">  
            Oops! The page you're looking for seems to have wandered off.   
            Let's get you back on track.  
          </p>  
        </div>  
        
        <div className="flex justify-center gap-4">  
          <Button asChild variant="outline">  
            <Link to="/" className="flex items-center">  
              <Home className="mr-2" size={16} />  
              Go Home  
            </Link>  
          </Button>  
          
          <Button asChild>  
            <Link to="/projects">  
              Explore Projects  
            </Link>  
          </Button>  
        </div>  
      </div>  
    </div>  
  )  
}  

export default Unknown