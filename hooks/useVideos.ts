import { useEffect, useState } from "react"
import Videos from "../components/Videos";
import { useWallet } from "./useWallet";
import { useConnection } from "@solana/wallet-adapter-react";

export const useVideos = () => {
  const [videos, setVideos] = useState<any[]>([])
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { publicKey } = useWallet();
  const { connection } = useConnection();

  useEffect(() => {
    const fetchVideos = async () => {
      setLoading(true);
      setError(false);

    };
   
    if (publicKey) {
      console.log("fetching Videos");
    }
  }, [connection, publicKey]);

  return { videos, loading, error };
}