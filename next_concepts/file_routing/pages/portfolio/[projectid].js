import { useRouter } from 'next/router';

function portfolioProjectPage() {
    const router = useRouter();

    console.log(router.pathname);
    console.log(router.query.projectid);

    return(
        <div>
          <h1>The Portfolio Project Page</h1>
        </div>
    )
}

export default portfolioProjectPage;