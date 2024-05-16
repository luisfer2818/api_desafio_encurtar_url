const UrlService = require('../service/urlService');

class UrlController {
  async encurtarUrl(originUrl) {
    const urlService = new UrlService();

    const result = await urlService.encurtarUrl(originUrl);
    return result;
  }

  async redirectUrl(shorten) {
    const urlService = new UrlService();

    const result = await urlService.redirectUrl(shorten);
    return result;
  }

  async findAllUrls() {
    const urlService = new UrlService();

    const result = await urlService.findAllUrls();
    return result;
  }

  async deletarUrls(hash) {
    const urlService = new UrlService();

    const result = await urlService.deletarUrls(hash);
    return result;
  }
}
module.exports = UrlController;
