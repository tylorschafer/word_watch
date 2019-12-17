const fetch = require('node-fetch')

class WordWatch {
  async getTopWord () {
    const topWord = await fetch('https://wordwatch-api.herokuapp.com/api/v1/top_word')
      .then(result => result)
      .catch(error => error)
    return topWord
  }
}

module.exports = WordWatch
