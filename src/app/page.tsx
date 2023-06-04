// "use client";
import Header from "@/components/home/header/Index";
import Stories from "@/components/home/stories/Index";

const fetchUser = async () => {
  const res = await fetch("https://dummyjson.com/users?limit=10", {
    // cache: "force-cache",
    next: { revalidate: 10 },
  });
  return res.json();
};

export default async function Home() {
  const data = await fetchUser();
  console.log(data);
  return (
    <>
      <Header />
      <Stories users={data.users} />
    </>
  );
}
