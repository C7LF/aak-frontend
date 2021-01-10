const slugify = require('slugify');

const slugifyTitle = (data) => {
    if (data.title) {
        data.slug = slugify(data.title, {
            lower: true,
            remove: /[*+~.()'"!:@]/g
        });
    }
}

module.exports = slugifyTitle