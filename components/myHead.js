import Head from "next/head";

export default ({ pageTitle }) => (
  <Head>
    <title>{`${pageTitle} - Project Reboot`}</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta
      name="description"
      content="Project Reboot volunteers recycle computers for the poor and disabled"
    />
    <meta
      name="keywords"
      content="Project Reboot, recycle computers, charity, Montgomery County, CPCUG, Capital PC User Group"
    />
    <link rel="icon" href="/favicon.ico" />
  </Head>
);
