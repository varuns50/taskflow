type profilePageProps = {
params:{id: string}
}

export default function profile({params}: profilePageProps){
    const uppercaseUserName = params.id?.toUpperCase();
    return (<div>
            <h2 className="text-3xl font-bold mb-4">Welcome, {uppercaseUserName} </h2>
    </div>);
}