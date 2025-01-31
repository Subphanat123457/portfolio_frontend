import { useState, useEffect } from "react";
import { ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { userProfile } from "@/services/api";

const Home = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await userProfile();
        setUser(response[0]); // เข้าถึงข้อมูลสมาชิกแรกของอาร์เรย์
      } catch (err) {
        setError('Failed to load user profile');
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="min-h-screen flex items-center justify-center pt-16">
      <div className="container px-4 animate-fade-in">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-36 h-36 mx-auto mb-8 rounded-full overflow-hidden">
            <img
              src={`data:image/jpeg;base64,${user.image}`} // เพิ่ม data:image/jpeg;base64, ก่อนค่า Base64
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-primary">{user.first_name} {user.last_name}</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Software Developer
          </p>

          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            {user.bio}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              View My Work
              <ArrowRight size={20} />
            </Link>

            <Button
              variant="outline"
              onClick={() => console.log("Downloading resume...")}
              className="inline-flex items-center gap-2"
            >
              Download Resume
              <Download size={20} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
