const URLModel = require('../models/url');
const Database = require('../database/conectDB');
const shortId = require('shortid');

class UrlService {
  async encurtarUrl(originUrl) {
    const db = new Database();
    db.init();
    try {
      let hash = shortId.generate().substring(0, 6);

      const shortURL = `localhost:3000/${hash}`;

      const newURL = await URLModel.create({
        url_curta: shortURL,
        url_original: originUrl,
        hash,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      return { newURL: shortURL };
    } catch (error) {
      throw new Error(error.message);
    } finally {
      db.close();
    }
  }

  async redirectUrl(shorten) {
    const db = new Database();
    db.init();
    try {
      const url = await URLModel.findOne({ hash: shorten });
      if (url) {
        return url;
      }
    } catch (error) {
      throw new Error(error.message);
    } finally {
      db.close();
    }
  }

  async findAllUrls() {
    const db = new Database();
    db.init();
    try {
      const url = await URLModel.findAll();
      if (url) {
        return url;
      }
    } catch (error) {
      throw new Error(error.message);
    } finally {
      db.close();
    }
  }

  async deletarUrls(hash) {
    const db = new Database();
    db.init();
    try {
      const url = await URLModel.destroy({
        where: {
          hash,
        },
      });
      if (url) {
        return {
          message: 'Url deletada com sucesso!',
        };
      }
    } catch (error) {
      throw new Error(error.message);
    } finally {
      db.close();
    }
  }
}

module.exports = UrlService;
