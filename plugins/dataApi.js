export default function(context, inject) {
  const appId = "LSXY6IGTON";
  const apiKey = "bc8adc138516660e6f97e87c5a14383c";

  inject("dataApi", {
    getHome,
  });
  async function getHome(homeId) {
    const response = await fetch(
      `https://${appId}-dsn.algolia.net/1/indexes/homes/${homeId}`,
      {
        headers: {
          "X-Algolia-API-Key": apiKey,
          "X-Algolia-Application-Id": appId,
        },
      }
    );
    const json = await response.json();
    return json;
  }
}
