import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { useAxiosPrivate } from "../hooks/useAxiosPrivate";
import { useMutation } from "react-query";
import { useCookies } from "react-cookie";

const Greetings = () => {
  const [cookies, setCookie] = useCookies(["bitUser"]);
  const [greetings, setGreetings] = useState();
  const axiosInstance = useAxiosPrivate(
    "http://localhost:8080",
    "api/token/refresh"
  );
  const navigate = useNavigate();
  const location = useLocation();
  const [newGreetingText, setNewGreetingText] = useState("");

  const createGreeting = async (greetingData) => {
    try {
      const response = await axiosInstance.post("/greetings", greetingData, {
        headers: {
          "Content-Type": "application/ld+json",
        },
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const handleCreateGreeting = async () => {
    try {
      await createGreeting({ name: newGreetingText });
      setNewGreetingText("");
    } catch (error) {
      console.error("Error creating greeting: ", error);
    }
  };

  const deleteGreeting = async (id) => {
    try {
      const response = await axiosInstance.delete(`/greetings/${id}`, {
        headers: {
          "Content-Type": "application/ld+json",
        },
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      if (error.response.status === 500) {
        refetch();
        return;
      }
      console.error("Error deleting greeting:", error);
      throw error;
    }
  };

  const handleDeleteGreeting = async (id) => {
    deleteGreetingMutation.mutate(id);
  };

  const deleteGreetingMutation = useMutation(deleteGreeting, {});

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getGreetings = async () => {
      const token = cookies?.bitUser?.token || "";
      const userId = cookies?.bitUserData.user_id;
      try {
        const response = await axiosInstance.get(
          `api/users/${userId}/clients`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        isMounted && response && setGreetings(response.data["hydra:member"]);
      } catch (error) {
        console.error("error ", error);
        navigate("/login", { state: { from: location }, replace: true });
      }
    };

    getGreetings();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  return (
    <article>
      <h2>Greetings</h2>
      <div>
        <input
          type="text"
          value={newGreetingText}
          onChange={(e) => setNewGreetingText(e.target.value)}
          placeholder="Enter a new greeting"
        />
        <button onClick={handleCreateGreeting}>Create Greeting</button>
      </div>
      {greetings?.length ? (
        <ul>
          {greetings.map((greeting, i) => (
            <li key={i}>
              {greeting?.name}
              <button onClick={() => handleDeleteGreeting(greeting.id)}>
                Delete greeting
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </article>
  );
};

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Greetings />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default {
  title: "Greetings",
  component: Greetings,
};
