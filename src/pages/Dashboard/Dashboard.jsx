import  { useState, useEffect } from 'react';

const Dashboard = () => {
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Mock data - replace with actual API call
        const mockData = [
            { name: 'John Doe', loginAttempts: 15 },
            { name: 'Jane Smith', loginAttempts: 8 },
            { name: 'Bob Johnson', loginAttempts: 23 },
            { name: 'Alice Brown', loginAttempts: 5 },
            { name: 'Charlie Wilson', loginAttempts: 12 },
        ];
        
        setUserData(mockData);
        setLoading(false);
    }, []);

    if (loading) {
        return <div className="p-8">Loading...</div>;
    }

    return (
        <div className="p-8 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-xl font-semibold mb-6">User Login Attempts</h2>
                
               
            </div>
        </div>
    );
};

export default Dashboard;