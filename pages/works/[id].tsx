import { useRouter } from 'next/router';

const Work = () => {
  const router = useRouter();
  const { id } = router.query;

  return <p>Post: {id}</p>;
};

export default Work;