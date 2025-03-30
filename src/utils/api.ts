export const API_URL = "http://localhost:5000";

export const login = async (username: string, password: string) => {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
    credentials: "include", // Ensures cookies are sent with requests
  });

  if (!response.ok) throw new Error("Invalid credentials");
  return response.json();
};

export const logout = async () => {
  await fetch(`${API_URL}/auth/logout`, {
    method: "POST",
    credentials: "include",
  });
};

export const fetchUsers = async () => {
    try {
      console.log("fetchUsers");
  
      const response = await fetch(`${API_URL}/users`, {
        method: "GET",
        credentials: "include", // Ensures cookies (JWT token) are sent
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      console.log("resp -: ", response);
  
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
  
      const data = await response.json();
  
      // Normalize the data (DynamoDB wraps strings with { S: "value" })
      const users = data.map((user: any) => ({
        id: user.id?.S || user.id, // Extract string value if wrapped
        name: user.name?.S || user.name,
        email: user.email?.S || user.email,
      }));
  
      return users;
    } catch (error) {
      console.error("Error fetching users:", error);
      return [];
    }
  };
  