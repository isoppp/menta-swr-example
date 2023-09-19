import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

// https://countapi.xyz/
export const Example = () => {
  const { data, error, isLoading } = useSWR(
    "https://api.adviceslip.com/advice",
    fetcher,
    {
      revalidateIfStale: false, // これでキャッシュがあればリクエストが飛ばなくなるが、一切飛ばなくなりそう、onFocus/Reconnectは別設定を尊重
      // refreshInterval: 3000, // revalidateIfStale=falseでもポーリングするようになる
    }
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  // データをレンダリングする
  return <div>{JSON.stringify(data, null, 2)}!</div>;
};
