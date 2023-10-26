//step 80 then go to trending

import { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosConfig";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const useFetch = (url, token) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axiosInstance.get(url, {
          headers: {
            Authorization: token ? `Bearer ${token}` : null,
          },
        });
        // console.log(data.data);
        setData(data.data);
      } catch (error) {
        // console.log(error);

        if (error.message === "Network Error") {
          setError("Server is down, please refresh");
        }

        if (error.response.status === 401) {
          toast.error("Login to view bookmarks", { id: "z" });
          navigate("/signin");
        }

        setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    };
    setTimeout(() => {
      getData();
    }, 2000);
  }, [url]);

  // step 129
  const toggleAddBookmark = (movieId, userId) => {
    const updatedData = data.map((movie) => {
      if (movie._id === movieId) {
        return { ...movie, bookmarkedBy: [userId] };
      } else {
        return movie;
      }
    });

    setData(updatedData);
    toast.success("Movie Bookmarked");
  };

  // step 130
  const toggleRemoveBookmark = (movieId) => {
    const updatedData = data.map((movie) => {
      if (movie._id === movieId) {
        return { ...movie, bookmarkedBy: [] };
      } else {
        return movie;
      }
    });

    setData(updatedData);
    toast.success("Movie Removed");
  };

  // step 126
  const handleAddBookmark = async (movieId, token, userId) => {
    if (!userId) {
      return toast.error("Login to Bookmark");
    }

    try {
      toggleAddBookmark(movieId, userId); // step 131
      const { data } = await axiosInstance.get(`/api/bookmark/add/${movieId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log(data);

      // const updatedData = data.map((movie) => {
      //   if (movie._id === movieId) {
      //     return { ...movie, bookmarkedBy: [userId] };
      //   } else {
      //     return movie;
      //   }
      // });

      // setData(updatedData); //step 127
    } catch (error) {
      // console.log(error);
      toast.error("Login to Bookmark");
    }
  };

  const handleRemoveBookmark = async (movieId, token) => {
    try {
      toggleRemoveBookmark(movieId); // step 132 then go to moviecarousel
      const { data } = await axiosInstance.get(
        `/api/bookmark/remove/${movieId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log(data);

      // const updatedData = data.map((movie) => {
      //   if (movie._id === movieId) {
      //     return { ...movie, bookmarkedBy: [] };
      //   } else {
      //     return movie;
      //   }
      // });

      // setData(updatedData); // step 128
    } catch (error) {
      // console.log(error);
    }
  };

  const updateUI = async (action, movieId, token, userId) => {
    // step 113 bookmark movie on Database and update the UI
    // console.log("Do logic for Bookmarking...");
    //step 118 fetching movie id & token
    if (action === "add") {
      handleAddBookmark(movieId, token, userId);
      // try {
      //   const { data } = await axiosInstance.get(
      //     `/api/bookmark/add/${movieId}`,
      //     {
      //       headers: {
      //         Authorization: `Bearer ${token}`,
      //       },
      //     }
      //   );
      //   console.log(data);
      // } catch (error) {
      //   console.log(error);
      // }
    } else {
      handleRemoveBookmark(movieId, token);
      // try {
      //   const { data } = await axiosInstance.get(
      //     `/api/bookmark/remove/${movieId}`,
      //     {
      //       headers: {
      //         Authorization: `Bearer ${token}`,
      //       },
      //     }
      //   );
      //   console.log(data);
      // } catch (error) {
      //   console.log(error);
      // }
    }
  };

  return { data, error, loading, updateUI };
};
