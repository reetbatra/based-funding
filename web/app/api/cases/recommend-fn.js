export const main = (request) => {
  const params = request.query;

  const balance = parseFloat(params.balance);
  var cases = [];

  for (const key in params) {
    if (key.startsWith('cases[')) {
      var match = key.match(/cases\[(\d+)\]\[([^\]]+)\]/);

      if (match) {
        const index = parseInt(match[1], 10);
        const property = match[2];

        if (!cases[index]) {
          cases[index] = {};
        }

        cases[index][property] = parseFloat(params[key]);
      }
    }
  }

  const results = cases.filter((caseItem) => {
    const remainingAmount = caseItem.goal - caseItem.total_funding;
    return remainingAmount <= balance;
  });

  return results;
};
