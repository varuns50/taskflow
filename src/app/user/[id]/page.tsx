type UserPageProps = {
    params: { id: string };
  };
  
  export default function UserPage({ params }: UserPageProps) {
    return (
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">User Profile</h2>
        <p className="text-lg text-gray-700">Welcome, User ID: {params.id}</p>
      </div>
    );
  }
  