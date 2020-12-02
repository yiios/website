import React, { useEffect, useState } from "react";
import AlgorithmsList from "../../components/algorithmsList";
import search from "../../lib/search";
import Section from "../../components/section";
import Head from "next/head";
import { Button } from "@material-ui/core";
import { useRouter } from "next/router";

export default function Search() {
  const router = useRouter();
  const [limit, setLimit] = useState(27);

  const algorithms = search(router.query.q as string, limit);

  useEffect(() => {
    if (router.query.q) {
      setLimit(27);
    }
  }, [router.query]);

  return (
    <React.Fragment>
      <Head>
        <title>{router.query.q && `"${router.query.q}" - `}TheAlgorithms</title>
      </Head>
      <Section title={`Search${router.query.q && ` "${router.query.q}"`}`}>
        {router.query.q && <AlgorithmsList algorithms={algorithms} />}
        {algorithms.length === limit && (
          <Button onClick={() => setLimit(undefined)}>More</Button>
        )}
      </Section>
    </React.Fragment>
  );
}
